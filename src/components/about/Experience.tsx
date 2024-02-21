/* eslint-disable @next/next/no-img-element */

import { Link } from 'lucide-react';

import PrimaryLink from '@/components/links/PrimaryLink';
import { Button } from '@/components/ui/Button';

import { EXPERIENCES } from '@/constant/infomation';

const Experience = () => {
  return (
    <div>
      <ol className='relative ml-4 border-l '>
        {EXPERIENCES.map((i) => (
          <li key={i.id} className='mb-10 ml-10'>
            <span className='ring-border/80 absolute -left-4 flex items-center justify-center overflow-hidden rounded-full ring-8'>
              <img height={30} width={30} alt={i.title} src={i.logoUrl} />
            </span>
            <h4 className='mb-1 flex items-center uppercase'>{i.title}</h4>
            <div className='mb-3 flex items-center gap-2 text-sm font-medium'>
              <i>{i?.role}</i> |
              <time className='text-muted-foreground block leading-none'>
                {i.date}
              </time>
            </div>

            <div className='space-y-1 '>
              {i?.tasks.map((task) => (
                <div key={task} className='flex gap-3'>
                  <span className='bg-foreground mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-[3px]' />
                  <p>{task}</p>
                </div>
              ))}
            </div>

            {i.url && (
              <PrimaryLink href={i.url} className='mt-4'>
                <Button variant='outline'>
                  <Link size={14} /> Live Website
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
