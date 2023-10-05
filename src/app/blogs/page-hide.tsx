import { allBlogs } from 'contentlayer/generated';

import CardBlog from '@/components/projects/CardBlog';
import HeaderPage from '@/components/projects/HeaderPage';

export const generateMetadata = () => {
  return { title: 'Blogs' };
};

export default function ProjectsPage() {
  return (
    <main className='container mt-10'>
      <HeaderPage
        title='Blogs'
        description='Web development thoughts and stories'
      />

      <ul className='mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] gap-4'>
        {allBlogs.map((i) => (
          <CardBlog key={i._id} data={i} />
        ))}
      </ul>
    </main>
  );
}
