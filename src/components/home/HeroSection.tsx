'use client';

/* eslint-disable @next/next/no-img-element */
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { ImFilePdf } from 'react-icons/im';

import MyStacks from '@/components/home/MyStacks';
import { Button } from '@/components/ui/Button';

import { animationFade } from '@/constant/animation';

const HeroSection = () => {
  const controls = useAnimationControls();

  return (
    <section className='container flex flex-col justify-center py-32 pb-16'>
      <div className='relative mb-16 max-w-2xl'>
        <m.div
          initial={animationFade.hide}
          animate={animationFade.show}
          transition={{ delay: 0.1 }}
          className='mb-4 flex items-center gap-2 text-2xl'
        >
          Hi!{' '}
          <m.div
            initial={{
              opacity: 0,
              y: 16,
              rotate: 30,
              transformOrigin: 'right center',
            }}
            animate={controls}
            transition={{
              type: 'spring',
              delay: 0.35,
              bounce: 0.7,
              duration: 0.7,
            }}
          >
            <Image
              alt=''
              src='/images/hi.webp'
              width={30}
              height={30}
              onLoadingComplete={() => {
                controls.start({ opacity: 1, y: 0, rotate: 0 });
              }}
            />
          </m.div>
        </m.div>
        <m.div
          initial={animationFade.hide}
          animate={animationFade.show}
          transition={{ delay: 0.2 }}
          className='text-3xl font-bold dark:text-slate-300 md:text-7xl'
        >
          <span className='font-mono  text-sky-500 dark:text-sky-500'>I'm</span>{' '}
          Theodore,
        </m.div>
        <m.div
          initial={animationFade.hide}
          animate={animationFade.show}
          transition={{ delay: 0.3 }}
          className='mt-6 text-lg'
        >
          a{' '}
          <strong className='text-sky-700 dark:text-sky-400'>
            front-end developer
          </strong>{' '}
          who loves intuitive, <br /> clean and modern UI design.
        </m.div>

        <m.div
          initial={animationFade.hide}
          animate={animationFade.show}
          transition={{ delay: 0.4 }}
          className='mt-6 flex items-center gap-1 text-lg'
        >
          <AiFillStar className='text-yellow-300' /> My Vietnamese name is{' '}
          <strong className='dark:text-slate-200'>Hoà</strong>
        </m.div>

        <m.div
          initial={animationFade.hide}
          animate={animationFade.show}
          transition={{ delay: 0.5 }}
          className='mt-6 flex gap-2'
        >
          <Button size='lg'>Get in touch</Button>
          <Button size='lg' variant='outline'>
            <ImFilePdf size={20} /> Resume
          </Button>
        </m.div>
      </div>
      <MyStacks />
    </section>
  );
};

export default HeroSection;
