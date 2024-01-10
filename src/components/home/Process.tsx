import { LucideRocket } from 'lucide-react';
import { BiDevices } from 'react-icons/bi';
import { RiSpeedLine } from 'react-icons/ri';

import { cn } from '@/lib/utils';

const process = [
  {
    name: 'Fast',
    color: 'bg-blue-900',
    icon: <RiSpeedLine size={20} />,
    description:
      'Fast load times and lag free interaction, my highest priority.',
  },
  {
    name: 'Responsive',
    color: 'bg-pink-900',
    icon: <BiDevices size={20} />,
    description: 'My layouts will work on any device, big or small.',
  },
  {
    name: 'Dynamic',
    color: 'bg-purple-900',
    icon: <LucideRocket size={20} />,
    description:
      "Websites don't have to be static, I love making pages come to life.",
  },
];

const Process = () => {
  return (
    <ul className='grid grid-cols-1 gap-6 gap-y-6 sm:grid-cols-3'>
      {process.map((i) => (
        <li key={i.name} className='relative rounded-2xl border  text-sm'>
          <div className='absolute left-9 top-0 h-full w-0 border-l' />
          <div className='absolute left-0 top-9 h-0 w-full border-t' />

          <div className='p-2 py-4'>
            <div className='bg-border relative flex h-9 items-center rounded-full pl-14 font-bold leading-6'>
              <div
                className={cn(
                  'absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white',
                  i.color
                )}
              >
                {i.icon}
              </div>
              {i.name}
            </div>
            <p className='pl-10 pt-3'>{i.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Process;
