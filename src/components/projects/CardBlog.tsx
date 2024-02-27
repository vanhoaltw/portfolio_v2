'use client';

import type { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';

interface Props {
  data: Blog;
}

const CardBlog = ({ data }: Props) => {
  return (
    <Link
      aria-label={data.title}
      href={data.url}
      className='bg-border/60 hover:bg-border rounded-xl p-4'
    >
      <dl>
        <dd className='text-muted-foreground flex items-center gap-1 text-sm'>
          <Calendar size={16} />
          {format(new Date(data.publishedAt), 'dd/MM/yyyy')}
          <span className='mx-1 inline-block'>-</span>
          <Clock size={16} /> {data.readTime} minutes
        </dd>
        <dt className='h3 mb-2 mt-1.5'>{data.title}</dt>
        <dd className='text-muted-foreground line-clamp-2 min-w-0 break-words text-sm'>
          {data?.description}
        </dd>

        <Button variant='link' className='mt-2 h-fit px-0 hover:no-underline'>
          Read article <ArrowRight size={16} />
        </Button>
      </dl>
    </Link>
  );
};

export default CardBlog;
