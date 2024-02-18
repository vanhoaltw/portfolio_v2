'use client';

import type { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';
import { useMotionValue } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

import ClImage from '@/components/ClImage';
import HoverPattern from '@/components/effects/HoverPattern';

interface Props {
  data: Blog;
}

const CardBlog = ({ data }: Props) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <Link
      aria-label={data.title}
      href={data.url}
      className='group relative flex flex-col gap-4 overflow-hidden rounded-lg border p-4 transition-transform active:scale-95 sm:flex-row'
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />
      <ClImage
        width={1440}
        height={700}
        publicId={data?.banner}
        preview={false}
        className='w-full shrink-0 cursor-pointer rounded-lg sm:w-52'
      />

      <dl>
        <dd className='text-muted-foreground flex gap-2 text-xs'>
          <span className='inline-flex items-center gap-1.5'>
            <Calendar size={12} />
            {format(new Date(data.publishedAt), 'dd/MM/yyyy')}
          </span>
          -
          <span className='inline-flex items-center gap-1.5'>
            <Clock size={12} /> {data.readTime} minutes
          </span>
        </dd>
        <dt className='h4 mb-2 mt-1.5'>{data.title}</dt>
        <dd className='flex items-center gap-3 text-sm font-medium'></dd>
        <dd className='line-clamp-2 min-w-0 break-words text-sm'>
          {data?.description}
        </dd>
      </dl>
    </Link>
  );
};

export default CardBlog;
