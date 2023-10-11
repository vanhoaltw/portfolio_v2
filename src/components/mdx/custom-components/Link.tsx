import { ExternalLink, MailIcon } from 'lucide-react';
import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { urlType } from '@/lib/mdx';
import { cn } from '@/lib/utils';

import UnderlineLink from '@/components/links/UnderlineLink';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({ children, href }: Props) {
  if (!href) return children;

  const type = urlType(href);

  switch (type) {
    case 'external':
      return (
        <UnderlineLink href={href} className={cn('link')}>
          {children}
          <ExternalLink size={14} className='inline-block' />
        </UnderlineLink>
      );
    case 'mail':
      return (
        <UnderlineLink href={href} className={cn('link')}>
          <MailIcon />
          {children}
        </UnderlineLink>
      );
    case 'hash':
      return (
        <UnderlineLink href={href} className={cn('link')}>
          {children}
        </UnderlineLink>
      );
    default:
      return (
        <UnderlineLink href={href} className={cn('link')}>
          {children}
        </UnderlineLink>
      );
  }
}
