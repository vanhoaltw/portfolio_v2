import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';

import SplitImage, { Split } from '@/components/mdx/SplitImage';
import TechStack from '@/components/mdx/TechStack';
import ClImage from '@/components/ui/ClImage';

const components = {
  a: Link,
  Image: Image,
  ClImage: ClImage,
  TechStack: TechStack,
  // pre: Pre,
  // // code: CustomCode,
  // CloudinaryImg,
  // LiteYouTubeEmbed,
  SplitImage,
  Split,
  // TechIcons,
  // TweetCard,
  // GithubCard,
  // Quiz,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default Mdx;
