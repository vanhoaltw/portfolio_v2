import { ChevronDown } from 'lucide-react';

import { getFeaturedBlogs, getFeaturedProjects } from '@/lib/mdx';

import Accent from '@/components/Accent';
import BackgroundGrid from '@/components/BackgroundGrid';
import Container from '@/components/Container';
import Intro from '@/components/home/Intro';
import Quotes from '@/components/home/Quotes';
import UnstyledLink from '@/components/links/UnstyledLink';
import CardBlog from '@/components/projects/CardBlog';
import CardProject from '@/components/projects/CardProject';

export default async function HomePage() {
  const featuredProject = getFeaturedProjects().slice(0, 3);
  const featuredBlogs = getFeaturedBlogs().slice(0, 3);

  return (
    <main className='relative'>
      <BackgroundGrid className='-top-20 z-0 h-[500px]' />

      <div className='space-y-20'>
        <Container className='pt-10'>
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

          <div className='grid-cols-project grid gap-4'>
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
      </div>
    </main>
  );
}
