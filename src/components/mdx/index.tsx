import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';

import ClImage from '@/components/ClImage';
import UnderlineLink from '@/components/links/UnderlineLink';
import Code from '@/components/mdx/Code';
import { H2, H3 } from '@/components/mdx/custom-components/Heading';
import { Hr } from '@/components/mdx/custom-components/Hr';
import { Link } from '@/components/mdx/custom-components/Link';
import { Pre } from '@/components/mdx/custom-components/Pre';
import SplitImage, { Split } from '@/components/mdx/SplitImage';
import TechStack from '@/components/mdx/TechStack';

const components = {
  a: Link,
  Image: Image,
  ClImage: ClImage,
  TechStack: TechStack,
  pre: Pre,
  code: Code,
  // CloudinaryImg,
  // LiteYouTubeEmbed,
  SplitImage,
  Split,
  h2: H2,
  h3: H3,
  hr: Hr,
  UnderlineLink: UnderlineLink,
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
