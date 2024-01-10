import buildUrl from 'cloudinary-build-url';
import { allBlogs } from 'contentlayer/generated';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';

import ButtonBack from '@/components/buttons/ButtonBack';
import ClImage from '@/components/ClImage';
import Container from '@/components/Container';
import Mdx from '@/components/mdx';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
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

const BlogDetail = ({ params }: Props) => {
  const post = allBlogs.find((p) => p._raw.flattenedPath.includes(params.slug));

  if (!post) return notFound();

  return (
    <Container className='mt-10'>
      <ButtonBack className='mb-4' />

      <h1 className='mb-2.5'>{post?.title}</h1>
      <div className='text-muted-foreground mb-8 flex items-center justify-between text-sm'>
        <p>{format(new Date(post?.publishedAt), 'PPP')}</p>
        <p>{post?.readTime || 1} min read</p>
      </div>

      <ClImage
        width={1440}
        height={600}
        preview={false}
        publicId={post?.banner}
        className='mb-8 rounded-md'
      />

      <section>
        <article className='mdx projects prose dark:prose-invert mx-auto w-full transition-colors'>
          <Mdx code={post?.body?.code} />
        </article>
      </section>
    </Container>
  );
};

export default BlogDetail;
