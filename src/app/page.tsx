import { ChevronDown } from 'lucide-react';

import { getFeaturedBlogs, getFeaturedProjects } from '@/lib/mdx';

import Accent from '@/components/Accent';
import Container from '@/components/Container';
import Intro from '@/components/home/Intro';
import Quotes from '@/components/home/Quotes';
import UnstyledLink from '@/components/links/UnstyledLink';
import CardBlog from '@/components/projects/CardBlog';
import CardProject from '@/components/projects/CardProject';
import Spotlight from '@/components/Spotlight';

const featuredProject = getFeaturedProjects().slice(0, 4);
const featuredBlogs = getFeaturedBlogs().slice(0, 3);

export default function HomePage() {
  return (
    <main className='relative space-y-20'>
      <Container className='relative pt-10'>
        <Spotlight className='-left-40 top-0' />
        <Intro />
      </Container>

      <Container>
        <Quotes />
      </Container>

      <Container>
        <Accent className='h1 mb-1'>Projects</Accent>
        <p className='mb-6'>Showcase of my front-end related work</p>

        <div className='grid-cols-project grid gap-4'>
          {featuredProject.map((project) => (
            <CardProject data={project} key={project._id} />
          ))}
        </div>
        <div className='mt-8 flex justify-center'>
          <UnstyledLink
            href='/projects'
            className='flex items-center gap-1.5 text-sm'
          >
            See more <ChevronDown size={20} />
          </UnstyledLink>
        </div>
      </Container>

      <Container>
        <Accent className='h1 mb-1'>Blogs</Accent>
        <p className='mb-6'>Web development thoughts and stories Reach</p>

        <div className='flex flex-col gap-2'>
          {featuredBlogs.map((i) => (
            <CardBlog data={i} key={i._id} />
          ))}
        </div>

        <div className='mt-8 flex justify-center'>
          <UnstyledLink
            href='/blogs'
            className='flex items-center gap-1.5 text-sm'
          >
            See more <ChevronDown size={20} />
          </UnstyledLink>
        </div>
      </Container>
    </main>
  );
}
