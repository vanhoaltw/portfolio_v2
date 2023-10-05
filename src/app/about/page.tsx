'use client';

import { m } from 'framer-motion';
import { Mail } from 'lucide-react';

import { useBoundEffect } from '@/hooks/useBoundEffect';

import Experience from '@/components/about/Experience';
import ClImage from '@/components/ClImage';
import MyStacks from '@/components/home/MyStacks';
import PrimaryLink from '@/components/links/PrimaryLink';

import { animationFade } from '@/constant/animation';

export default function AboutPage() {
  const { ref, glowRef } = useBoundEffect(true);
  return (
    <main className='container mt-10 space-y-20'>
      <section>
        <m.h1
          initial={animationFade.hide}
          animate={animationFade.show}
          className='mb-4'
        >
          About me
        </m.h1>
        <div className='gap-12 space-y-4 sm:flex'>
          <m.ul
            initial='hide'
            animate='show'
            className='space-y-4'
            transition={{
              delayChildren: 0.2,
              staggerChildren: 0.025,
            }}
          >
            <m.li variants={animationFade}>
              Hello! My name is <span className='text-sky-400'>Hoà</span>. I'm a
              passionate dev with +1 year of work experience in
              JavaScript/TypeScript, I'm a lover of page design or other things
              and whenever I can I try to learn new technologies since I
              discovered programming at 20 years old.
            </m.li>

            <m.li variants={animationFade}>
              There are a lot of things and technologies to learn in frontend
              development and I am motivated to learn as much as possible. I
              enjoy learning something new and getting feedback to make myself
              better and improve.
            </m.li>

            <MyStacks />
          </m.ul>
          <div className='flex w-full justify-center'>
            <div
              className='relative h-fit w-full shrink-0 rounded-md'
              style={{ perspective: 700 }}
            >
              <div
                ref={ref}
                style={{ transform: 'rotate3d(0)' }}
                className='hover:shadow-[0 5px 20px 5px #00000044] mx-auto max-w-[200px] transform-gpu overflow-hidden rounded-md transition-all duration-75 sm:max-w-[280px]'
              >
                <ClImage
                  publicId='v1694705834/z4307307354915_ecf9978fe47a8defeb7affcbbb4a5315_2_grxy5z.jpg'
                  height={600}
                  width={450}
                  alt='Me'
                />
                <div
                  ref={glowRef}
                  className='absolute left-0 top-0 z-0 h-full w-full rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[450px]'>
        <h2 className='h1 mb-4'>Where i've worked</h2>
        <Experience />
      </section>

      <section className='mt-20'>
        <h2 className='h1'>Contact</h2>
        <div className='mt-4 overflow-hidden rounded-md border'>
          <table className='w-full text-left text-sm text-slate-500 dark:text-slate-400'>
            <thead>
              <tr className='border-b dark:text-white'>
                <th scope='col' className='px-6 py-3'>
                  Contact
                </th>
                <th scope='col' className='px-6 py-3'>
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <th scope='row' className='px-6 py-3'>
                  Address
                </th>
                <th scope='row' className='px-6 py-4'>
                  District 9, Thu Duc city
                </th>
              </tr>
              <tr className='border-b'>
                <th scope='row' className='px-6 py-3'>
                  Email
                </th>
                <th scope='row' className='px-6 py-3 font-medium'>
                  <PrimaryLink
                    className='inline-flex items-center gap-1 font-semibold text-sky-400'
                    href='mailto:vanhoaltw@gmail.com'
                  >
                    <Mail size={15} />
                    vanhoaltw@gmail.com
                  </PrimaryLink>
                </th>
              </tr>
              <tr>
                <th scope='row' className='px-6 py-3'>
                  Phone
                </th>
                <th scope='row' className='px-6 py-4'>
                  <p>+84 778699653</p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='mt-2'>
          If you need any further information, please do not hesitate to send me
          an email first.
        </p>
      </section>
    </main>
  );
}
