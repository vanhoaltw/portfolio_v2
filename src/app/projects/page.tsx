import { allProjects } from 'contentlayer/generated';

import CardProject from '@/components/projects/CardProject';
import HeaderPage from '@/components/projects/HeaderPage';

export const generateStaticParams = async () => {
  return allProjects.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = () => {
  return { title: 'Projects' };
};

export default function ProjectsPage() {
  return (
    <main className='container mt-10'>
      <HeaderPage
        title='Project'
        description='Showcase of my front-end related work'
      />

      <ul className='mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] gap-4'>
        {allProjects.map((project) => (
          <CardProject key={project._id} data={project} />
        ))}
      </ul>
    </main>
  );
}
