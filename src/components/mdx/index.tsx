// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';

import { cn } from '@/lib/utils';

import ClImage from '@/components/ClImage';
import UnderlineLink from '@/components/links/UnderlineLink';
import Code from '@/components/mdx/Code';
import { Pre } from '@/components/mdx/Pre';
import heading from '@/components/mdx/Heading';
import SplitImage, { Split } from '@/components/mdx/SplitImage';
import TechStack from '@/components/mdx/TechStack';

const components = {
  a: ({ className, ...props }) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={cn('[&:not(:first-child)]:mt-4', className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        '[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic',
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
  pre: Pre,
  code: Code,
  img: ({ ...props }) => <img {...props} className='rounded-md' />,
  Image: Image,
  ClImage: ({ ...props }) => <ClImage {...props} mdx className='rounded-lg' />,
  TechStack: TechStack,
  SplitImage,
  Split,
  UnderlineLink: UnderlineLink,
  ...heading,
};

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default Mdx;
