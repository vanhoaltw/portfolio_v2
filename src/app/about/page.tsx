'use client';

import { m } from 'framer-motion';

import Experience from '@/components/about/Experience';
import MyStacks from '@/components/home/MyStacks';
import ClImage from '@/components/ui/ClImage';

import { animationFade } from '@/constant/animation';
import { siteConfig } from '@/constant/config';

export default function AboutPage() {
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
        <div className='grid gap-12 md:grid-cols-2'>
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
              Hello! My name is{' '}
              <span className='text-sky-400'>{siteConfig.author}</span>. I'm a
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
            <div className='w-full max-w-[350px] shrink-0'>
              <ClImage
                publicId='v1694705834/z4307307354915_ecf9978fe47a8defeb7affcbbb4a5315_2_grxy5z.jpg'
                height={600}
                width={450}
                alt='Me'
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='h1 mb-4 font-mono'>Where i've worked</h2>
        <Experience />
      </section>

      <section className='mt-20'>
        <h2 className='h1 font-mono'>Contact</h2>
        <p className='mt-4 text-gray-400'>
          Do contact me if you need my opinion about web development, especially
          frontend works. I’ll be happy to help! (find my email in the footer)
        </p>
      </section>
    </main>
  );
}
