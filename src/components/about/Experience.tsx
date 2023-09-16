/* eslint-disable @next/next/no-img-element */
'use client';

import { Dot } from 'lucide-react';
import React, { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

import UnderlineLink from '@/components/links/UnderlineLink';

import { EXPERIENCES } from '@/constant/infomation';

const Experience = () => {
  const [current, setCurrent] = useState(0);

  const currentData = useMemo(() => EXPERIENCES[current], [current]);

  return (
    <div className='grid gap-4 md:grid-cols-[150px,_1fr]'>
      <ul className='flex md:block'>
        {EXPERIENCES.map((i, idx) => (
          <li
            key={i.id}
            onClick={() => setCurrent(idx)}
            className={cn(
              'block h-10 cursor-pointer border-t px-4 font-semibold capitalize leading-10 transition-colors md:border-l-2 md:border-t-0',
              idx === current && 'border-current bg-sky-400/10 text-sky-400'
            )}
          >
            {i.id}
          </li>
        ))}
      </ul>
      <div>
        <img
          src={currentData?.logoUrl}
          height={50}
          width={50}
          className='mb-2'
          alt={`${currentData?.title}`}
        />

        <h4>{currentData.title}</h4>
        <p className='text-sm text-gray-400'>{currentData.date}</p>
        <UnderlineLink
          href={`${currentData.url}`}
          className='font-mono text-sm text-sky-400'
        >
          {currentData.url}
        </UnderlineLink>
        <ul className='my-4'>
          {currentData.tasks.map((task) => (
            <li key={task} className='flex gap-1.5'>
              <Dot className='mt-1 text-sky-400' size={16} />
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
