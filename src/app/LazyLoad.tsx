'use client';

import { useInView, UseInViewOptions } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

const LazyLoad = ({
  children,
  ...options
}: PropsWithChildren & UseInViewOptions) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, options);

  return (
    <div ref={ref} className={isInView ? 'opacity-100' : 'opacity-100'}>
      {children}
    </div>
  );
};

export default LazyLoad;
