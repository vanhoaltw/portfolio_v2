import { Hash } from 'lucide-react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function H2({ children, id: slug }: Props) {
  return (
    <h2
      id={`${slug}`}
      data-ss={slug}
      data-ss-mt={96}
      className={cn(
        'mdx-heading mdx-heading--h2 group flex items-center gap-2'
      )}
    >
      <span>{children}</span>
      <a
        href={`#${slug}`}
        className={cn(
          'mdx-heading__anchor text-sky-400 opacity-0 group-hover:opacity-100 dark:text-sky-300'
        )}
        aria-labelledby={slug}
        title={`Link to ${children}`}
      >
        <Hash />
      </a>
    </h2>
  );
}

export function H3({ children, id: slug }: Props) {
  return (
    <h3
      id={`${slug}`}
      data-ss={slug}
      data-ss-mt={96}
      className={cn(
        'mdx-heading mdx-heading--h3 group flex items-center gap-2'
      )}
    >
      <span>{children}</span>
      <a
        href={`#${slug}`}
        className={cn(
          'mdx-heading__anchor text-sky-300 opacity-0 group-hover:opacity-100'
        )}
        aria-labelledby={slug}
      >
        <Hash size={20} />
      </a>
    </h3>
  );
}
