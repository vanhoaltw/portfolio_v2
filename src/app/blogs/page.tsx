import { allBlogs } from 'contentlayer/generated';

import Container from '@/components/Container';
import CardBlog from '@/components/projects/CardBlog';

import TextAnimation from '@/app/animation/text-animation';

export const generateMetadata = () => {
  return { title: 'Blogs' };
};

export default function ProjectsPage() {
  return (
    <Container className='mt-10'>
      <TextAnimation>
        <h1 className='mb-1'>Blogs</h1>
      </TextAnimation>

      <TextAnimation transition={{ delay: 0.2 }}>
        Web development thoughts and stories
      </TextAnimation>

      <ul className='mt-6 flex flex-col gap-2'>
        {allBlogs.map((i) => (
          <CardBlog key={i._id} data={i} />
        ))}
      </ul>
    </Container>
  );
}
