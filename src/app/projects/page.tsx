import { allProjects } from 'contentlayer/generated';

import Container from '@/components/Container';
import CardProject from '@/components/projects/CardProject';

import TextAnimation from '@/app/animation/text-animation';

export const generateMetadata = () => {
  return { title: 'Projects' };
};

export default function ProjectsPage() {
  return (
    <Container className='mt-10'>
      <TextAnimation>
        <h1 className='mb-1'>Projects</h1>
      </TextAnimation>
      <TextAnimation transition={{ delay: 0.2 }}>
        Showcase of my front-end related work
      </TextAnimation>

      <ul className='grid-cols-project mt-6 grid gap-4'>
        {allProjects.map((project) => (
          <CardProject key={project._id} data={project} />
        ))}
      </ul>
    </Container>
  );
}
