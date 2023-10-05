import { ExternalLink, MailIcon } from 'lucide-react';
import NextLink from 'next/link';
import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { urlType } from '@/lib/mdx';
import { cn } from '@/lib/utils';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({ children, href }: Props) {
  if (!href) {
    return <span>{children}</span>;
  }

  const type = urlType(href);

  switch (type) {
    case 'external':
      return (
        <a
          href={href}
          target='_blank'
          rel='noreferrer nofollow'
          className={cn('link')}
        >
          {children}
          <ExternalLink />
        </a>
      );
    case 'mail':
      return (
        <a href={href} className={cn('link')}>
          <MailIcon />
          {children}
        </a>
      );
    case 'hash':
      return (
        <a href={href} className={cn('link')}>
          {children}
        </a>
      );
    default:
      return (
        <NextLink href={href} className={cn('link')}>
          {children}
        </NextLink>
      );
  }
}
