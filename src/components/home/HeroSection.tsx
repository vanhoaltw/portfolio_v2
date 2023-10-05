'use client';

/* eslint-disable @next/next/no-img-element */
import { m, useAnimationControls } from 'framer-motion';
import { File } from 'lucide-react';
import Image from 'next/image';

import ClImage from '@/components/ClImage';
import MyStacks from '@/components/home/MyStacks';
import ButtonLink from '@/components/links/ButtonLink';

import { animationFade } from '@/constant/animation';

const HeroSection = () => {
  const controls = useAnimationControls();

  return (
    <section className='container flex flex-col justify-center py-10 pb-16 sm:py-32'>
      <div className='flex flex-col-reverse flex-wrap items-center justify-between gap-6 md:flex-row md:flex-nowrap'>
        <div>
          <div className='relative mb-16 max-w-2xl'>
            <m.div
              initial={animationFade.hide}
              animate={animationFade.show}
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
              <span>I'm</span>{' '}
              <span className='text-sky-500 dark:text-sky-500'>Hoà</span>,
            </m.div>
            <m.div
              initial={animationFade.hide}
              animate={animationFade.show}
              transition={{ delay: 0.3 }}
              className='mt-6 text-lg'
            >
              a <strong className='text-primary'>front-end developer</strong>{' '}
              who loves intuitive, <br /> clean and modern UI design.
            </m.div>

            <m.div
              initial={animationFade.hide}
              animate={animationFade.show}
              transition={{ delay: 0.5 }}
              className='mt-6 flex gap-2'
            >
              <ButtonLink href='/about'>Get in touch</ButtonLink>
              <ButtonLink
                variant='outline'
                className='px-6'
                leftIcon={File}
                href='https://vietcv.io/vanhoaltw'
              >
                Resume
              </ButtonLink>
            </m.div>
          </div>
          <MyStacks />
        </div>

        <div className='flex flex-1 shrink-0 justify-center'>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='relative aspect-square w-60 max-w-[350px] overflow-hidden rounded-full bg-slate-50 shadow-sm sm:w-full'
          >
            <ClImage
              publicId='v1694705834/z4307307354915_ecf9978fe47a8defeb7affcbbb4a5315_2_grxy5z.jpg'
              height={800}
              width={400}
              alt='Me'
            />
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
