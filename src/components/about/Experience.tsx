/* eslint-disable @next/next/no-img-element */

import { Link } from 'lucide-react';

import PrimaryLink from '@/components/links/PrimaryLink';
import { Button } from '@/components/ui/Button';

import { EXPERIENCES } from '@/constant/infomation';

const Experience = () => {
  return (
    <div>
      <ol className='relative ml-4 border-l border-gray-200 dark:border-gray-700'>
        {EXPERIENCES.map((i, idx) => (
          <li key={i.id} className='mb-10 ml-10'>
            <span className='absolute -left-4 flex items-center justify-center overflow-hidden rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900'>
              <img height={30} width={30} alt={i.title} src={i.logoUrl} />
            </span>
            <h3 className='mb-2 flex items-center text-lg font-bold'>
              {i.title}
              {idx === 0 && (
                <span className='ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
                  Latest
                </span>
              )}
            </h3>
            <time className='mb-3 block text-sm leading-none text-slate-400 dark:text-slate-500'>
              {i.date}
            </time>

            <div className='space-y-1 text-slate-500 dark:text-slate-400'>
              {i?.tasks.map((task) => (
                <div key={task} className='flex gap-3'>
                  <span className='mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-[3px] bg-slate-400 dark:bg-slate-300' />
                  <p>{task}</p>
                </div>
              ))}
            </div>

            {i.url && (
              <PrimaryLink href={i.url} className='mt-4'>
                <Button variant='outline'>
                  <Link size={14} /> See more
                </Button>
              </PrimaryLink>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
