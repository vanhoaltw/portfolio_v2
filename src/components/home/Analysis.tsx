import { Coffee } from 'lucide-react';
import { useCallback } from 'react';
import { SiGithub } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

import { cn } from '@/lib/utils';

const data = [
  {
    label: 'Year Of Experience',
    color: 'text-sky-500 dark:text-primary',
    value: '1+',
    icon: TbBrandVscode,
  },
  {
    label: 'Completed Projects',
    color: 'text-black dark:text-white',
    value: '4+',
    icon: SiGithub,
  },
  {
    label: 'Cup Of Coffee',
    color: 'text-red-500 dark:text-red-400',
    value: '100+',
    icon: Coffee,
  },
] as const;
const Analysis = () => {
  const renderCard = useCallback(
    (props: { label: string; value: string; color: string; icon: any }) => {
      const Icon = props.icon;
      return (
        <div className='rounded-2xl border p-4 px-6 transition-transform hover:-translate-y-2 hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700'>
          <p
            className={cn(
              'text-primary mb-6 flex items-center gap-2 text-4xl font-bold',
              props.color
            )}
          >
            <Icon size={30} />
            {props.value}
          </p>
          {props.label}
        </div>
      );
    },
    []
  );

  return (
    <ul className='grid grid-cols-1 items-center justify-between gap-6 sm:grid-cols-3'>
      {data.map((i) => (
        <li key={i.label}>{renderCard(i)}</li>
      ))}
    </ul>
  );
};

export default Analysis;
