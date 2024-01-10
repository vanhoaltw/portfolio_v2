import { allProjects } from 'contentlayer/generated';

import Accent from '@/components/Accent';
import Container from '@/components/Container';
import CardProject from '@/components/projects/CardProject';

export const generateMetadata = () => {
  return { title: 'Projects' };
};

export default function ProjectsPage() {
  return (
    <Container>
      <div>
        <Accent>
          <h1 className='mb-1'>Projects</h1>
        </Accent>

        <p>Showcase of my front-end related work</p>
      </div>

      <ul className='grid-cols-project mt-6 grid gap-4'>
        {allProjects.map((project) => (
          <CardProject key={project._id} data={project} />
        ))}
      </ul>
    </Container>
  );
}
