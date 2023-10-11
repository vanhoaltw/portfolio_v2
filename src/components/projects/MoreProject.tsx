'use client';

import { allProjects } from 'contentlayer/generated';
import { useKeenSlider } from 'keen-slider/react';
import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import { usePreventNavigation } from '@/hooks/usePreventNavigation';

import CardProject from '@/components/projects/CardProject';

const MoreProject = () => {
  const { slug } = useParams();
  const [sliderContainerRef] = usePreventNavigation();

  const remainProjects = useMemo(
    () =>
      allProjects.filter((i) => i.url?.split?.('/')?.slice(-1)?.[0] !== slug),
    [slug]
  );

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: 'snap',
    slides: { perView: 'auto', spacing: 0 },
  });

  useEffect(() => {
    instanceRef?.current?.update?.();
  }, [instanceRef]);

  return (
    <div ref={sliderContainerRef}>
      <div ref={sliderRef} className='keen-slider w-full'>
        {remainProjects?.map((item) => (
          <div
            key={item.id}
            className='keen-slider__slide relative h-fit min-w-[300px] max-w-[300px] p-2 py-3'
          >
            <CardProject data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProject;
