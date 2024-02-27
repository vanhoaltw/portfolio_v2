'use client';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { cache, useEffect, useState } from 'react';
import { GrFlows } from 'react-icons/gr';
import { LuBookMarked } from 'react-icons/lu';

import { cn } from '@/lib/utils';

const colorByStack: any = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-500',
};

const fetchRepo = cache(async () => {
  const r = await fetch(`https://api.github.com/users/vanhoaltw/repos`, {
    headers: {
      'User-Agent': 'request',
    },
  });
  return await r.json();
});

const GithubRepositories = () => {
  const [data, setData] = useState<any[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRepo()
      .then((r) => {
        if (r?.length) {
          setData(
            r
              .filter((repo: any) => !repo.fork && repo.name !== 'vanhoaltw')
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          );
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className='grid gap-4 sm:grid-cols-2'>
      {loading
        ? 'Loading...'
        : data.map((i: any) => (
            <Link
              href={i.html_url}
              target='_blank'
              className='hover:bg-border flex flex-col justify-between gap-y-2.5 rounded-lg border p-4 text-sm'
              key={i.id}
            >
              <div className='flex items-center gap-2'>
                <LuBookMarked size={16} className='text-muted-foreground' />
                <p className='text-base font-bold'>{i.name}</p>
              </div>
              <p className='text-muted-foreground line-clamp-2 min-w-0 break-words text-sm'>
                {i.description}
              </p>

              {!!i?.topics && (
                <div className='flex flex-wrap gap-x-2 gap-y-1'>
                  {i.topics.map((t: string) => (
                    <div
                      key={t}
                      className='bg-foreground/10 flex h-7 items-center rounded-full px-4 font-medium'
                    >
                      {t}
                    </div>
                  ))}
                </div>
              )}
              <div className='text-muted-foreground flex items-center gap-1 text-sm'>
                <div
                  className={cn(
                    'h-2.5 w-2.5 rounded-full',
                    colorByStack?.[i?.language] || 'bg-gray-400'
                  )}
                />
                <span className='text-sm'>{i.language}</span>
                <Star size={16} className='ml-3' />
                {i.stargazers_count}
                {!!i.forks_count && (
                  <>
                    <GrFlows /> {i.forks_count}
                  </>
                )}
              </div>
            </Link>
          ))}
    </div>
  );
};

export default GithubRepositories;
