import { Quote } from 'lucide-react';
import React from 'react';

const Quotes = () => {
  return (
    <div className='flex gap-4 text-xl text-slate-500 md:text-4xl'>
      <Quote className='h-8 text-slate-700/80' />
      <div className='space-y-2'>
        <span>Living</span>
        <div className='flex items-center gap-2'>
          <span className='inline-block h-0.5 w-6 rounded-xl bg-current' />
          <strong className='dark:text-slate-300'>learning</strong> &{' '}
          <strong className='dark:text-slate-300'>leveling up</strong>
          <span className='inline-block h-0.5 w-6 rounded-xl bg-current' />
        </div>
        <span>
          one day <strong className='dark:text-slate-300'>at a time</strong>
        </span>
      </div>
    </div>
  );
};

export default Quotes;
