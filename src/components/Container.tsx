import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const Container = ({
  className,
  children,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('relative mx-auto max-w-2xl px-6 md:px-0', className)}>
      {children}
    </div>
  );
};

export default Container;
