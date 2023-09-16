'use client';

import { m } from 'framer-motion';
import { FigmaIcon } from 'lucide-react';
import React from 'react';
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from 'react-icons/bi';
import { GrGraphQl, GrReactjs } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';

import { cn } from '@/lib/utils';

import { animationFade } from '@/constant/animation';

const stacks = [
  { icon: <GrReactjs />, title: 'Reactjs', color: 'hover:text-sky-400' },
  { icon: <TbBrandNextjs />, title: 'Next.js', color: 'hover:text-white' },
  {
    icon: <BiLogoTailwindCss />,
    title: 'Tailwind',
    color: 'hover:text-sky-400',
  },
  {
    icon: <BiLogoTypescript />,
    title: 'Typescript',
    color: 'hover:text-sky-600',
  },
  { icon: <GrGraphQl />, title: 'GraphQl', color: 'hover:text-pink-400' },
  {
    icon: <BiLogoVisualStudio />,
    title: 'Visual studio code',
    color: 'hover:text-sky-600',
  },
  { icon: <FigmaIcon />, title: 'Figma', color: 'hover:text-orange-600' },
];

const MyStacks = () => {
  return (
    <div>
      <m.p
        initial={animationFade.hide}
        animate={animationFade.show}
        transition={{ delay: 0.6 }}
        className='text-lg'
      >
        Current Favorite Tech Stack/Tool
      </m.p>
      <m.ul
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        className='mt-2 flex items-center gap-2 text-3xl'
      >
        {stacks.map((i) => (
          <m.li
            variants={animationFade}
            key={i.title}
            title={i.title}
            className={cn(i.color)}
          >
            {i.icon}
          </m.li>
        ))}
      </m.ul>
    </div>
  );
};

export default MyStacks;
