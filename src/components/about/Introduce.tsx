'use client';

import { differenceInYears } from 'date-fns';
import { m } from 'framer-motion';
import Image from 'next/image';

import TextAnimation from '@/components/animation/text-animation';
import Spotlight from '@/components/Spotlight';

const getAge = () => differenceInYears(new Date(), new Date(2001, 6, 26));

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const avatarAnimation = {
  hide: { scale: 0, rotate: 0 },
  show: {
    scale: 1,
    rotate: 10,
  },
};

const Introduce = () => {
  return (
    <section className='relative'>
      <TextAnimation>
        <h1 className='mb-8'>About me</h1>
      </TextAnimation>
      <Spotlight className='-left-40 -top-20 scale-150' />
      <div className='bg-dot flex flex-col items-start gap-20 gap-y-4 py-4 md:flex-row'>
        <m.ul
          className='flex-1 space-y-6'
          initial='hide'
          animate='show'
          transition={{ delayChildren: 0.2, staggerChildren: 0.025 }}
        >
          <m.li variants={animation}>
            Hey there 👋🏻 I’m Hoa Nguyen, a {getAge()}-year-old who is passionate
            about crafting delightful experiences online.
          </m.li>
          <m.li variants={animation}>
            As a dedicated and passionate <strong>Front-End Developer</strong>,
            I bring a wealth of experience and expertise in creating
            captivating, user-focused web interfaces. I'm a lover of page design
            or other things and whenever I can I try to learn new technologies
            since I discovered programming at 20 years old.
          </m.li>
          <m.li variants={animation}>
            There are a lot of things and technologies to learn in frontend
            development and I am motivated to learn as much as possible. I enjoy
            learning something new and getting feedback to make myself better
            and improve.
          </m.li>
        </m.ul>

        <div className='sticky top-8 hidden shrink-0 md:block'>
          <m.div
            initial='hide'
            animate='show'
            variants={avatarAnimation}
            transition={{
              delay: 0.4,
              type: 'spring',
            }}
          >
            <Image
              priority
              src='/images/my-avatar.jpg'
              className='mx-auto aspect-square rotate-6 rounded-md object-cover shadow-lg'
              height={250}
              width={250}
              alt='Me'
            />
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
