import { allProjects } from 'contentlayer/generated';

import TextAnimation from '@/components/animation/text-animation';
import Container from '@/components/Container';
import GithubRepositories from '@/components/GithubRepositories';
import CardProject from '@/components/projects/CardProject';

export const generateMetadata = () => {
  return { title: 'Projects' };
};

export default function ProjectsPage() {
  return (
    <Container className='mt-10'>
      <TextAnimation>
        <h1 className='mb-2'>Projects</h1>
      </TextAnimation>
      <TextAnimation
        className='text-muted-foreground'
        transition={{ delay: 0.4 }}
      >
        Showcase of my front-end related work
      </TextAnimation>

      <ul className='grid-cols-project mt-6 grid gap-4'>
        {allProjects.map((project) => (
          <CardProject key={project._id} data={project} />
        ))}
      </ul>

      <h2 className='mb-1 mt-12'>Side Projects</h2>
      <p className='text-muted-foreground mb-4'>My github repositories</p>
      <GithubRepositories />
    </Container>
  );
}
