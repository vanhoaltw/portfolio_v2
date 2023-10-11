/* eslint-disable @next/next/no-img-element */

import { ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

import { getFeaturedProjects } from '@/lib/mdx';

import HeroSection from '@/components/home/HeroSection';
import Process from '@/components/home/Process';
import Quotes from '@/components/home/Quotes';
import CardProject from '@/components/projects/CardProject';
import { Button } from '@/components/ui/Button';

export default async function HomePage() {
  const featuredProject = getFeaturedProjects().slice(0, 3);

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

          <div className='container mx-auto space-y-8 py-10 sm:space-y-16 sm:py-32'>
            <HeroSection />
            <Process />
          </div>
        </div>

        <section className='container flex justify-center pb-16 sm:pb-32'>
          <div className='flex gap-4 text-xl text-slate-500 sm:text-2xl md:text-4xl'>
            <Quote className='hidden text-2xl text-slate-700/80 sm:inline-block' />
            <div className='space-y-2.5'>
              <i>Living</i>
              <div className='flex items-center gap-2'>
                <span className='inline-block h-0.5 w-6 rounded-xl bg-current' />
                <strong className='dark:text-slate-300'>learning</strong> &{' '}
                <strong className='dark:text-slate-300'>leveling up</strong>
                <span className='inline-block h-0.5 w-6 rounded-xl bg-current' />
              </div>
              <div>
                one day{' '}
                <strong className='inline-block rounded-md bg-slate-200 p-2 py-0.5 leading-none dark:bg-slate-800 dark:text-slate-300'>
                  at a time
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className='container pb-32'>
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

          <Link href='/projects'>
            <Button variant='outline' className='mt-4'>
              See more projects <ArrowRight size={16} />
            </Button>
          </Link>
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
