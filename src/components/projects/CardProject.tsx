'use client';

import { Project } from 'contentlayer/generated';
import { useState } from 'react';

import ClImage from '@/components/ClImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import TechStack from '@/components/mdx/TechStack';
import MovingBorder from '@/components/MovingBorder';

interface Props {
  data: Project;
}

const CardProject = ({ data }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <UnstyledLink
      href={data.link as string}
      className='relative overflow-hidden p-[1px]'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && (
        <div className='absolute inset-0 z-0 overflow-hidden rounded-lg'>
          <MovingBorder rx='30%' ry='30%' duration={6000}>
            <div className='h-28 w-28 bg-[radial-gradient(hsl(var(--primary)),transparent_60%)] opacity-80' />
          </MovingBorder>
        </div>
      )}

      <div className='bg-background/90 relative h-full w-full rounded-lg border p-4 antialiased backdrop-blur-xl'>
        <ClImage
          width={1440}
          height={700}
          className='mb-4 cursor-pointer rounded-md'
          publicId={data?.banner}
          preview={false}
        />

        <p className='h4'>{data.title}</p>
        <p className='text-sm'>{data?.description}</p>
        <div className='flex items-end justify-between gap-2'>
          <TechStack
            data={data.techs?.split?.(',') || []}
            className='z-20 gap-1 text-2xl'
          />
        </div>
      </div>
    </UnstyledLink>
  );
};

export default CardProject;
