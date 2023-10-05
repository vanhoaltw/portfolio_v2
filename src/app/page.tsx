/* eslint-disable @next/next/no-img-element */

import { getFeaturedProjects } from '@/lib/mdx';

import Analysis from '@/components/home/Analysis';
import HeroSection from '@/components/home/HeroSection';
import Quotes from '@/components/home/Quotes';
import CardProject from '@/components/projects/CardProject';

export default async function HomePage() {
  const featuredProject = getFeaturedProjects();

  return (
    <main className='relative'>
      <div className='space-y-12'>
        <div className='relative from-[#0c1222] via-[#0c122200] to-slate-900 dark:bg-gradient-to-b'>
          <div
            className='absolute inset-0 -top-16 -z-0 bg-slate-50 bg-bottom bg-no-repeat dark:bg-[#0B1120]'
            style={{
              backgroundSize: '86.125rem',
              zIndex: -1,
            }}
          >
            <div
              className='bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-[bottom_1px_center] dark:border-b dark:border-slate-100/5 dark:bg-bottom'
              style={{
                WebkitMaskImage: 'linear-gradient(transparent, black)',
                backgroundImage: 'url("/images/square-dark.svg")',
              }}
            />
          </div>

          <HeroSection />
        </div>

        <section className='container pb-16'>
          <Analysis />
        </section>

        <section className='flex justify-center pb-16'>
          <Quotes />
        </section>

        {/* <section className='container'>
          <div>
            <h2 className='mb-1'>Blog</h2>
            <p className='mb-6'>Web development thoughts and stories</p>
          </div>

          <div className='grid-cols-project grid gap-4'>
            {featuredBlogs.map((i) => (
              <CardBlog data={i} key={i._id} />
            ))}
          </div>
        </section> */}

        <section className='container'>
          <div>
            <h2 className='mb-1 mt-2'>Projects</h2>
            <p className='mb-6'>Showcase of my front-end related work</p>
          </div>
          <div className='grid-cols-project grid gap-4'>
            {featuredProject.map((project) => (
              <CardProject data={project} key={project._id} />
            ))}
          </div>

          {/* <Link href='/projects'>
            <Button
              variant='outline'
              className='mx-auto mt-4 gap-2 transition-all hover:scale-100 hover:gap-4 hover:bg-slate-900'
            >
              See more projects <ArrowRight size={16} />
            </Button>
          </Link> */}
        </section>

        {/* <section className='container'>
          <strong className='text-sky-500'>Writing</strong>
          <h2 className='mb-1 mt-2'>Featured Posts</h2>
          <p className='mb-6'>I write something about life & development</p>
          <div className='grid-cols-project grid gap-4'>
            {featuredProject.slice(0, 3).map((project) => (
              <CardProject data={project} key={project._id} />
            ))}
          </div>

          <Link href='/projects'>
            <Button
              variant='outline'
              className='mx-auto mt-4 gap-2 transition-all hover:scale-100 hover:gap-4 hover:bg-slate-900'
            >
              See more blogs <ArrowRight size={16} />
            </Button>
          </Link>
        </section> */}
      </div>
    </main>
  );
}
