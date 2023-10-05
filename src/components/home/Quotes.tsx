import { Quote } from 'lucide-react';
import React from 'react';

const Quotes = () => {
  return (
    <div className='flex gap-4 text-xl text-slate-500 sm:text-2xl md:text-4xl'>
      <Quote className='hidden text-2xl text-slate-700/80 sm:inline-block' />
      <div className='space-y-2.5'>
        <i>Living</i>
        <div className='flex items-center gap-2'>
          <span className='inline-block h-0.5 w-6 rounded-xl bg-current' />
          <strong className='dark:text-slate-300'>learning</strong> &{' '}
          <strong className='dark:text-slate-300'>leveling up</strong>
          <span className='inline-block h-0.5 w-6 rounded-xl bg-current' />
        </div>
        <div>
          one day{' '}
          <strong className='inline-block rounded-md bg-slate-800 p-2 py-0.5 leading-none dark:text-slate-300'>
            at a time
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
