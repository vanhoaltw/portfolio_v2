import { allBlogs, allProjects } from 'contentlayer/generated';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { BiTime } from 'react-icons/bi';

import ButtonBack from '@/components/buttons/ButtonBack';
import ClImage from '@/components/ClImage';
import Mdx from '@/components/mdx';
import TableOfContent from '@/components/TableOfContent';
import Container from '@/components/Container';

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
  const post = allProjects.find((p) =>
    p._raw.flattenedPath.includes(params.slug)
  );
  return {
    title: post?.title,
    description: post?.description,
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
