'use client';

import { m, useAnimationControls } from 'framer-motion';
import { File } from 'lucide-react';
import Image from 'next/image';

import UnstyledLink from '@/components/links/UnstyledLink';
import Socials from '@/components/Socials';
import { Button } from '@/components/ui/Button';

import TextAnimation from '@/app/animation/text-animation';

const Intro = () => {
  const controls = useAnimationControls();

  return (
    <section className='flex flex-col justify-center'>
      <div className='relative mb-16 flex flex-col gap-3'>
        <m.div
          initial={{
            opacity: 0,
            x: -24,
          }}
          animate={controls}
        >
          <Image
            src='/images/my-avatar.jpg'
            height={70}
            width={70}
            alt='Me'
            className='aspect-square rounded-full object-cover'
            onLoadingComplete={() => {
              controls.start({
                x: 0,
                opacity: 1,
              });
            }}
          />
        </m.div>
        <div className='bg-dot my-8 mt-4 space-y-6 pb-8 pt-4'>
          <TextAnimation className='text-foreground text-3xl font-bold md:text-5xl'>
            Front End Engineer, Fresher Back End Developer
          </TextAnimation>
          <TextAnimation transition={{ delay: 0.05 }}>
            I'm Hoà, a developer based in Viet Nam 🇻🇳. I love crafting immersive
            web experiences, beautiful, intuitive and delightful to use.
          </TextAnimation>

          <Socials />
        </div>

        <div className='flex gap-4'>
          <UnstyledLink href='/about'>
            <Button>Get in touch</Button>
          </UnstyledLink>

          <UnstyledLink href='https://vietcv.io/vanhoaltw'>
            <Button variant='outline' className='gap-2 px-6'>
              <File size={18} /> Resume
            </Button>
          </UnstyledLink>
        </div>
      </div>
    </section>
  );
};

export default Intro;
