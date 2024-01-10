import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const Accent = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'from-primary inline-block bg-gradient-to-b to-purple-500 bg-clip-text text-transparent dark:to-blue-500',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Accent;
