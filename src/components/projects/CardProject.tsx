'use client';

import { Project } from 'contentlayer/generated';
import { format } from 'date-fns';
import { RiGlobalLine } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';

import { cn } from '@/lib/utils';
import { useBoundEffect } from '@/hooks/useBoundEffect';

import ClImage from '@/components/ClImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import TechStack from '@/components/mdx/TechStack';

interface Props {
  data: Project;
}

const CardProject = ({ data }: Props) => {
  const { ref, glowRef } = useBoundEffect();
  return (
    <UnstyledLink href={data.url} className='relative'>
      <div
        ref={ref}
        className={cn(
          'group transform-gpu select-none overflow-hidden rounded-xl border shadow-sm transition-all hover:scale-105 active:scale-100'
        )}
      >
        <div className='relative'>
          <ClImage
            width={1440}
            height={700}
            publicId={data?.banner}
            preview={false}
            className='z-10 cursor-pointer select-none'
          />

          <div className='absolute left-2 top-2 z-20 rounded-md bg-black/60 p-1 px-2 text-xs text-white'>
            {format(new Date(data.publishedAt), 'dd/MM/yyyy')}
          </div>
        </div>

        <div
          ref={glowRef}
          className='absolute left-0 top-0 z-0 h-full w-full rounded-lg'
        />

        <div className='p-4'>
          <div>
            <p className='h4 mb-2'>{data.title}</p>
            <p className='line-clamp-2 h-[45px] min-w-0 break-words text-sm'>
              {data?.description}
            </p>
          </div>
          <div className='mt-3 flex items-end justify-between gap-2 text-2xl'>
            <TechStack
              data={data.techs?.split?.(',') || []}
              className='gap-1'
            />

            <div className='flex items-center gap-2'>
              {data?.github && <SiGithub />}
              {data?.link && <RiGlobalLine />}
            </div>
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default CardProject;
