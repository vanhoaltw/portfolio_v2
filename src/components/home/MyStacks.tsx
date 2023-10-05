'use client';

import { m } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

import Tooltip from '@/components/Tooltip';

import { animationFade } from '@/constant/animation';
import { technicals } from '@/constant/tech';

const stacks = [
  technicals.reactjs,
  technicals.vuejs,
  technicals.nextjs,
  technicals.tailwind,
  technicals.typescript,
  technicals.graphql,
  technicals.visualStudio,
  technicals.figma,
];

const MyStacks = () => {
  return (
    <div>
      <m.p
        initial={animationFade.hide}
        animate={animationFade.show}
        transition={{ delay: 0.6 }}
        className='h4'
      >
        Current Favorite Tech Stack/Tool
      </m.p>
      <m.ul
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
        className='mt-2 flex items-center gap-2 text-2xl sm:text-3xl'
      >
        {stacks.map((i) => (
          <m.li variants={animationFade} key={i.title} title={i.title}>
            <Tooltip tipChildren={<div>{i.title}</div>}>
              <div
                className={cn('transition-all hover:-translate-y-1', i.color)}
              >
                {i.icon}
              </div>
            </Tooltip>
          </m.li>
        ))}
      </m.ul>
    </div>
  );
};

export default MyStacks;
