'use client';

import { Coffee } from 'lucide-react';
import CountUp from 'react-countup';
import { SiGithub } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

import { cn } from '@/lib/utils';

const data = [
  {
    label: 'Year Of Experience',
    color: 'text-sky-500 dark:text-primary',
    value: 1,
    icon: TbBrandVscode,
  },
  {
    label: 'Completed Projects',
    color: 'text-black dark:text-white',
    value: 5,
    icon: SiGithub,
  },
  {
    label: 'Cup Of Coffee',
    color: 'text-red-500 dark:text-red-400',
    value: 100,
    icon: Coffee,
  },
] as const;

const CountItem = ({
  icon: Icon,
  color,
  label,
  value,
}: {
  icon: any;
  color?: string;
  label: string;
  value: number;
}) => (
  <CountUp start={0} end={value} delay={0}>
    {({ countUpRef }) => (
      <div>
        <div className='flex flex-col items-center gap-4 rounded-md p-4 px-6 transition-transform hover:bg-slate-100 dark:bg-slate-900/20 dark:text-white dark:hover:bg-slate-800'>
          <div
            className={cn(
              'text-primary flex items-center gap-2 text-4xl font-bold',
              color
            )}
          >
            <Icon size={30} />
            <span ref={countUpRef}>0</span> +
          </div>
          <p>{label}</p>
        </div>
      </div>
    )}
  </CountUp>
);

const Analysis = () => {
  return (
    <ul className='grid grid-cols-1 items-center justify-between sm:grid-cols-3'>
      {data.map((i) => (
        <li key={i.label}>
          <CountItem
            icon={i.icon}
            label={i.label}
            value={i.value}
            color={i.color}
          />
        </li>
      ))}
    </ul>
  );
};

export default Analysis;
