/* eslint-disable react-hooks/rules-of-hooks */
import { allProjects } from 'contentlayer/generated';
import { User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { BiTime } from 'react-icons/bi';
import { GrGithub } from 'react-icons/gr';
import { RiGlobalLine } from 'react-icons/ri';

import ClImage from '@/components/ClImage';
import UnderlineLink from '@/components/links/UnderlineLink';
import Mdx from '@/components/mdx';
import MoreProject from '@/components/projects/MoreProject';
import TableOfContent from '@/components/TableOfContent';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allProjects.map((post) => ({
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

const ProjectDetail = ({ params }: Props) => {
  const post = allProjects.find((p) =>
    p._raw.flattenedPath.includes(params.slug)
  );

  if (!post) return notFound();

  return (
    <div className='container mt-10'>
      <ClImage
        width={1440}
        height={600}
        publicId={post?.banner}
        className='mb-6 rounded-md hover:opacity-80'
      />

      <h1 className='mb-4 font-bold'>{post?.title}</h1>
      <p className='mb-4'>{post?.description}</p>

      {post?.category && (
        <p className='mb-6 flex items-center gap-1 text-sm'>
          <User size={15} /> {post.category}
        </p>
      )}
      <div className='mb-6 flex items-start  gap-4 text-sm'>
        <p className='flex items-center gap-1'>
          <BiTime /> {post?.readTime || 1} minutes to read
        </p>
        {post.github && (
          <UnderlineLink href={post.github} className='flex items-center gap-1'>
            <GrGithub /> Repository
          </UnderlineLink>
        )}

        {post?.link && (
          <UnderlineLink href={post.link} className='flex items-center gap-1'>
            <RiGlobalLine /> Live demo
          </UnderlineLink>
        )}
      </div>

      <hr className='my-10 border-slate-400/20' />

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

      <hr className='mb-8 mt-14' />

      <section>
        <h3 className='mb-4'>See more</h3>
        <MoreProject />
      </section>
    </div>
  );
};

export default ProjectDetail;
