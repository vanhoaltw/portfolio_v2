import { ChevronsDownIcon } from 'lucide-react';
import Link from 'next/link';

import { getFeaturedBlogs, getFeaturedProjects } from '@/lib/mdx';

import Container from '@/components/Container';
import Intro from '@/components/home/Intro';
import Wallaper from '@/components/home/Wallaper';
import CardBlog from '@/components/projects/CardBlog';
import CardProject from '@/components/projects/CardProject';
import Spotlight from '@/components/Spotlight';

const featuredProject = getFeaturedProjects().slice(0, 3);
const featuredBlogs = getFeaturedBlogs();

export default function HomePage() {
  return (
    <main className='relative space-y-32'>
      <Container className='relative pt-10'>
        <Spotlight className='-left-40 top-0' />
        <Intro />
      </Container>

      <Container>
        <Wallaper />
      </Container>

      <Container id='projects'>
        <h2 className='h1 mb-1'>Projects</h2>
        <p className='text-muted-foreground mb-6'>
          Showcase of my front-end related work
        </p>

        <div className='grid-cols-project grid gap-4'>
          {featuredProject.map((project) => (
            <CardProject data={project} key={project._id} />
          ))}
        </div>
        <div className='mt-8 flex justify-center'>
          <Link
            href='/projects'
            className='mx-auto flex flex-col items-center gap-1 text-sm'
          >
            See more <ChevronsDownIcon />
          </Link>
        </div>
      </Container>

      <Container id='blogs'>
        <h2 className='h1 mb-1'>Blogs</h2>
        <p className='text-muted-foreground mb-6'>
          Web development thoughts and stories Reach
        </p>

        <div className='flex flex-col gap-2'>
          {featuredBlogs.map((i) => (
            <CardBlog data={i} key={i._id} />
          ))}
        </div>
      </Container>
    </main>
  );
}
