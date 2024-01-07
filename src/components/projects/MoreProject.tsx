'use client';

import { allProjects } from 'contentlayer/generated';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import CardProject from '@/components/projects/CardProject';

const MoreProject = () => {
  const { slug } = useParams();

  const remainProjects = useMemo(
    () =>
      allProjects.filter((i) => i.url?.split?.('/')?.slice(-1)?.[0] !== slug),
    [slug]
  );

  return (
    <div className='flex gap-4 overflow-x-auto'>
      {remainProjects?.map((item) => (
        <CardProject data={item} key={item.id} />
      ))}
    </div>
  );
};

export default MoreProject;
