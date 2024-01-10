import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const heading = {
  h1: ({ className, ...props }: Props) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: Props) => (
    <h2
      className={cn('mt-10 scroll-m-20 pb-1 first:mt-0', className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: Props) => (
    <h3
      className={cn('mt-8 scroll-m-20 tracking-tight', className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: Props) => (
    <h4
      className={cn('mt-8 scroll-m-20 tracking-tight', className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }: Props) => (
    <h5
      className={cn('mt-8 scroll-m-20 tracking-tight', className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: Props) => (
    <h6
      className={cn('mt-8 scroll-m-20 tracking-tight', className)}
      {...props}
    />
  ),
};

export default heading;
