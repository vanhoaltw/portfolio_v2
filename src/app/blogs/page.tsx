import { allBlogs } from 'contentlayer/generated';

import TextAnimation from '@/components/animation/text-animation';
import Container from '@/components/Container';
import CardBlog from '@/components/projects/CardBlog';

export const generateMetadata = () => {
  return { title: 'Blogs' };
};

export default function ProjectsPage() {
  return (
    <Container className='mt-10'>
      <TextAnimation>
        <h1 className='mb-2'>Blogs</h1>
      </TextAnimation>

      <TextAnimation
        className='text-muted-foreground'
        transition={{ delay: 0.4 }}
      >
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
