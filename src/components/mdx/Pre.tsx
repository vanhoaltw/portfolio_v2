import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { formatLang } from '@/lib/mdx';

import Code from '@/components/mdx/Code';
import { cn } from '@/lib/utils';

const parseBoolean = (value: string): boolean => {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return true;
};

export type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  'data-title'?: string;
  'data-lines'?: string;
  'data-selected'?: string;
  'data-language'?: string;
  'data-copy'?: string;
  'data-footer'?: string;
};

export function Pre({
  // 'data-title': dataTitle = '',
  // 'data-lines': dataLines = '',
  // 'data-selected': dataSelected = '',
  // 'data-language': dataLanguage = '',
  // 'data-copy': dataCopy = 'true',
  // 'data-footer': dataFooter = undefined,
  className,
  ...rest
}: PreProps) {
  // const lines = Number(dataLines);
  // let withFooter = lines > 1;

  // if (typeof dataFooter !== 'undefined') {
  //   withFooter = parseBoolean(dataFooter);
  // }

  return (
    <pre
      {...rest}
      className={cn('relative mt-4 overflow-hidden rounded-md', className)}
    />
  );
}
