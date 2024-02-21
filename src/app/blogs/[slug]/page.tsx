/* eslint-disable @next/next/no-img-element */
import buildUrl from 'cloudinary-build-url';
import { allBlogs } from 'contentlayer/generated';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';

import { getCurrentUser } from '@/lib/session';

import TextAnimation from '@/components/animation/text-animation';
import ButtonBack from '@/components/buttons/ButtonBack';
import ClImage from '@/components/ClImage';
import Container from '@/components/Container';
import Mdx from '@/components/mdx';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-dynamic';

export const generateStaticParams = () => {
  return allBlogs.map((post) => ({
    slug: post._raw.flattenedPath.split('/')[2],
  }));
};

export const generateMetadata = ({ params }: Props) => {
  const post = allBlogs.find((p) => p._raw.flattenedPath.includes(params.slug));

  const bannerUrl = post?.banner
    ? buildUrl(post?.banner, {
        cloud: { cloudName: process.env.CLOUDINARY_CLOUD_NAME },
      })
    : '';

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      siteName: post?.title,
      images: [bannerUrl],
    },
  };
};

const BlogDetail = async ({ params }: Props) => {
  try {
    const post = allBlogs.find((p) =>
      p._raw.flattenedPath.includes(params.slug)
    );
    const user = await getCurrentUser();
    if (!post) return notFound();

    return (
      <Container className='mt-10'>
        <ButtonBack className='mb-2' />

        <ClImage
          width={1440}
          height={600}
          preview={false}
          publicId={post?.banner}
          className='mb-8 rounded-lg'
        />

        <TextAnimation>
          <h1 className='mb-2.5'>{post?.title}</h1>
        </TextAnimation>
        <TextAnimation
          transition={{ delay: 0.4 }}
          className='text-muted-foreground italic'
        >
          {post.description}
        </TextAnimation>
        <div className='my-8 flex items-center gap-2'>
          <img
            height={45}
            width={45}
            src='/images/my-avatar.jpg'
            alt={user?.email as string}
            className='aspect-square rounded-full object-cover'
          />
          <dl>
            <dt className='text-base font-bold'>Nguyen Van Hoa</dt>
            <dd className='text-muted-foreground mt-1 flex items-center gap-2 text-sm'>
              <span>{format(new Date(post?.publishedAt), 'PPP')}</span> -
              <span>{post?.readTime || 1} min read</span>
            </dd>
          </dl>
        </div>

        <hr className='mb-6' />

        <section>
          <article className='mdx projects prose dark:prose-invert mx-auto w-full transition-colors'>
            <Mdx code={post?.body?.code} />
          </article>
        </section>
      </Container>
    );
  } catch (error) {
    console.log({ error });

    return <div>Error</div>;
  }
};

export default BlogDetail;
