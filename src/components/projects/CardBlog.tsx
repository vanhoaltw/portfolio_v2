'use client';

import type { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

import ClImage from '@/components/ClImage';
import UnstyledLink from '@/components/links/UnstyledLink';
import MovingBorder from '@/components/MovingBorder';

interface Props {
  data: Blog;
}

const CardBlog = ({ data }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <UnstyledLink
      href={data.url}
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
          publicId={data?.banner}
          preview={false}
          className='mb-4 cursor-pointer rounded-md'
        />

        <dl className='space-y-3'>
          <dt className='h4'>{data.title}</dt>
          <dd className='flex items-center gap-3 text-sm font-medium'>
            <span className='text-primary inline-flex items-center gap-2 '>
              <Clock size={15} /> {data.readTime} minutes
            </span>

            <span className='inline-flex items-center gap-2'>
              <Calendar size={15} />
              {format(new Date(data.publishedAt), 'dd/MM/yyyy')}
            </span>
          </dd>
          <dd className='line-clamp-2 min-w-0 break-words text-sm'>
            {data?.description}
          </dd>
        </dl>
      </div>
    </UnstyledLink>
  );
};

export default CardBlog;
