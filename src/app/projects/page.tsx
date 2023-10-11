import { allProjects } from 'contentlayer/generated';

import CardProject from '@/components/projects/CardProject';
import HeaderPage from '@/components/projects/HeaderPage';

export const generateMetadata = () => {
  return { title: 'Projects' };
};

export default function ProjectsPage() {
  return (
    <main className='container pt-10'>
      <HeaderPage
        title='Project'
        description='Showcase of my front-end related work'
      />

      <ul className='grid-cols-project mt-6 grid gap-4'>
        {allProjects.map((project) => (
          <CardProject key={project._id} data={project} />
        ))}
      </ul>
    </main>
  );
}
