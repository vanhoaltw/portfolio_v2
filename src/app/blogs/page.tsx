import { allBlogs } from 'contentlayer/generated';

import Accent from '@/components/Accent';
import Container from '@/components/Container';
import CardBlog from '@/components/projects/CardBlog';

export const generateMetadata = () => {
  return { title: 'Blogs' };
};

export default function ProjectsPage() {
  return (
    <Container className='mt-10'>
      <div>
        <Accent>
          <h1 className='mb-1'>Blogs</h1>
        </Accent>

        <p>Web development thoughts and stories</p>
      </div>

      <ul className='mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] gap-4'>
        {allBlogs.map((i) => (
          <CardBlog key={i._id} data={i} />
        ))}
      </ul>
    </Container>
  );
}
