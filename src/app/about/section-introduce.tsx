'use client';

import { m } from 'framer-motion';

import { useBoundEffect } from '@/hooks/useBoundEffect';

import ClImage from '@/components/ClImage';
import MyStacks from '@/components/home/MyStacks';

import { animationFade } from '@/constant/animation';

const SectionIntroduce = () => {
  const { ref, glowRef } = useBoundEffect(true);

  return (
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
          className='my-4 space-y-4'
          transition={{
            delayChildren: 0,
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
            development and I am motivated to learn as much as possible. I enjoy
            learning something new and getting feedback to make myself better
            and improve.
          </m.li>

          <m.li variants={animationFade} className='pt-8'>
            <MyStacks />
          </m.li>
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
                preview={false}
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
  );
};

export default SectionIntroduce;
