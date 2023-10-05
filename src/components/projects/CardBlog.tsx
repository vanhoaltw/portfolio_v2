'use client';

import { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useBoundEffect } from '@/hooks/useBoundEffect';

import ClImage from '@/components/ClImage';
import UnstyledLink from '@/components/links/UnstyledLink';

interface Props {
  data: Blog;
}

const CardBlog = ({ data }: Props) => {
  const { ref, glowRef } = useBoundEffect();

  return (
    <UnstyledLink href={data.url} className='relative'>
      <div
        ref={ref}
        className={cn(
          'transform-gpu cursor-pointer select-none overflow-hidden rounded-xl border shadow-sm transition-transform hover:scale-105 active:scale-100'
        )}
      >
        <ClImage
          width={1440}
          height={700}
          publicId={data?.banner}
          preview={false}
          className='z-10 cursor-pointer select-none'
        />

        <div
          ref={glowRef}
          className='absolute left-0 top-0 z-0 h-full w-full rounded-lg'
        />

        <div className='p-4'>
          <dl className='space-y-3'>
            <dt className='h4'>{data.title}</dt>
            <dd className='flex items-center gap-3 font-medium'>
              <span className='inline-flex items-center gap-2 text-sm'>
                <Clock size={15} /> {data.readTime} minutes
              </span>

              <span className='inline-flex items-center gap-2 text-sm'>
                <Calendar size={15} />
                {format(new Date(data.publishedAt), 'dd/MM/yyyy')}
              </span>
            </dd>
            <dd className='line-clamp-2 min-w-0 break-words text-sm'>
              {data?.description}
            </dd>
          </dl>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default CardBlog;
