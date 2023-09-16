// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from 'react';
import {
  BiLogoGraphql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { GrReactjs } from 'react-icons/gr';
import { RiBearSmileFill } from 'react-icons/ri';
import {
  SiAgora,
  SiAntdesign,
  SiApollographql,
  SiFirebase,
  SiMaterialdesign,
  SiReactquery,
  SiRedux,
  SiSass,
} from 'react-icons/si';
import {
  TbBrandMantine,
  TbBrandNextjs,
  TbBrandRadixUi,
  TbBrandVite,
} from 'react-icons/tb';

import { cn } from '@/lib/utils';

const stack: any = {
  nextjs: { name: 'Next.js', icon: <TbBrandNextjs /> },
  reactjs: { name: 'React.js', icon: <GrReactjs /> },
  tailwind: { name: 'Tailwind.js', icon: <BiLogoTailwindCss /> },
  typescript: { name: 'Typescript', icon: <BiLogoTypescript /> },
  graphql: { name: 'GraphQL', icon: <BiLogoGraphql /> },
  apollo: { name: 'Apollo', icon: <SiApollographql /> },
  firebase: { name: 'Firebase', icon: <SiFirebase /> },
  scss: { name: 'scss', icon: <SiSass /> },
  mantine: { name: 'Mantine', icon: <TbBrandMantine /> },
  materialui: { name: 'MaterialUI', icon: <SiMaterialdesign /> },
  antd: { name: 'Antd', icon: <SiAntdesign /> },
  radix: { name: 'Radix', icon: <TbBrandRadixUi /> },
  agora: { name: 'Agora', icon: <SiAgora /> },
  vite: { name: 'Vite.js', icon: <TbBrandVite /> },
  zustant: { name: 'Zustant', icon: <RiBearSmileFill /> },
  reactQuery: { name: 'React Query', icon: <SiReactquery /> },
  redux: { name: 'Redux', icon: <SiRedux /> },
};

const TechStack = ({
  data,
  className,
}: {
  data: string[];
  className?: string;
}) => {
  if (!data?.length) return null;
  return (
    <div className={cn('mt-2 flex items-center gap-3 text-2xl', className)}>
      {data.map((i) => {
        const { name, icon } = stack?.[i] || {};
        return (
          <div className='capitialize' key={name}>
            {icon}
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
