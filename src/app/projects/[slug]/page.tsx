/* eslint-disable react-hooks/rules-of-hooks */
import { allProjects } from 'contentlayer/generated';
import { User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BiTime } from 'react-icons/bi';
import { GrGithub } from 'react-icons/gr';
import { HiLink } from 'react-icons/hi';

import Mdx from '@/components/mdx';
import TableOfContent from '@/components/TableOfContent';
import ClImage from '@/components/ui/ClImage';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allProjects.map((post) => ({ slug: post._raw.flattenedPath }));
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

const ProjectDetail = ({ params }: Props) => {
  const post = allProjects.find((p) =>
    p._raw.flattenedPath.includes(params.slug)
  );

  if (!post) return notFound();

  return (
    <div className='container mt-10 space-y-4'>
      <ClImage
        width={1440}
        height={600}
        publicId={post?.banner}
        className='z-0 cursor-pointer rounded-2xl'
      />

      <h1 className='text-4xl font-bold'>{post?.title}</h1>
      <p>{post?.description}</p>

      {post?.category && (
        <p className='flex items-center gap-1 text-sm'>
          <User size={15} /> {post.category}
        </p>
      )}
      <div className='flex items-center gap-4  text-sm'>
        <p className='flex items-center gap-1'>
          <BiTime /> {post?.readTime || 1} minutes to read
        </p>
        {post.github && (
          <Link
            href={post.github}
            target='_blank'
            className='flex items-center gap-1 text-white hover:underline'
          >
            <GrGithub /> Repository
          </Link>
        )}

        {post?.link && (
          <Link
            href={post.link}
            target='_blank'
            className='flex items-center gap-1 text-white hover:underline'
          >
            <HiLink /> Live demo
          </Link>
        )}
      </div>

      <hr className='border-slate-400/20' />

      <section className='lg:grid lg:grid-cols-[auto,250px] lg:gap-8'>
        <article className='mdx projects prose dark:prose-invert mx-auto w-full transition-colors'>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Mdx code={post?.body?.code} />
        </article>

        <aside className='py-4'>
          <div className='sticky top-36'>
            <TableOfContent />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ProjectDetail;
