import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const Container = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('relative mx-auto max-w-5xl px-6 md:px-0', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
