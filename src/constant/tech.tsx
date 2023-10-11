import { FigmaIcon } from 'lucide-react';
import React from 'react';
import {
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio,
  BiLogoVuejs,
} from 'react-icons/bi';
import { GrGraphQl, GrReactjs } from 'react-icons/gr';
import { RiBearSmileFill } from 'react-icons/ri';
import {
  SiAgora,
  SiAntdesign,
  SiAxios,
  SiChartdotjs,
  SiFirebase,
  SiMaterialdesign,
  SiNuxtdotjs,
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

export const technicals: any = {
  reactjs: {
    icon: <GrReactjs />,
    title: 'Reactjs',
    color: 'hover:text-sky-400',
  },
  chartJs: {
    icon: <SiChartdotjs />,
    title: 'Chart.Js',
    color: 'hover:text-pink-400',
  },
  vuejs: {
    icon: <BiLogoVuejs />,
    title: 'Vuejs',
    color: 'hover:text-green-500',
  },
  nextjs: {
    icon: <TbBrandNextjs />,
    title: 'Next.js',
    color: 'hover:text-white',
  },
  tailwind: {
    icon: <BiLogoTailwindCss />,
    title: 'Tailwind',
    color: 'hover:text-sky-400',
  },
  typescript: {
    icon: <BiLogoTypescript />,
    title: 'Typescript',
    color: 'hover:text-sky-600',
  },
  nodejs: {
    icon: <BiLogoNodejs />,
    title: 'Nodejs',
    color: 'hover:text-green-500',
  },
  graphql: {
    icon: <GrGraphQl />,
    title: 'GraphQl',
    color: 'hover:text-pink-400',
  },
  visualStudio: {
    icon: <BiLogoVisualStudio />,
    title: 'Visual studio code',
    color: 'hover:text-sky-600',
  },
  figma: {
    icon: <FigmaIcon />,
    title: 'Figma',
    color: 'hover:text-orange-600',
  },
  firebase: {
    title: 'Firebase',
    icon: <SiFirebase />,
    color: 'hover:text-orange-500',
  },
  scss: { title: 'scss', icon: <SiSass />, color: 'hover:text-pink-400' },
  mantine: {
    title: 'Mantine',
    icon: <TbBrandMantine />,
    color: 'hover:text-sky-300',
  },
  materialui: {
    title: 'MaterialUI',
    icon: <SiMaterialdesign />,
    color: 'hover:text-sky-400',
  },
  antd: { title: 'Antd', icon: <SiAntdesign />, color: 'hover:text-blue-400' },
  radix: {
    title: 'Radix',
    icon: <TbBrandRadixUi />,
    color: 'hover:text-black dark:text-white',
  },
  agora: { title: 'Agora', icon: <SiAgora />, color: 'hover:text-sky-300' },
  vite: {
    title: 'Vite.js',
    icon: <TbBrandVite />,
    color: 'hover:text-purple-400',
  },
  zustant: {
    title: 'Zustant',
    icon: <RiBearSmileFill />,
    color: 'hover:text-gray-400',
  },
  reactQuery: {
    title: 'React Query',
    icon: <SiReactquery />,
    color: 'hover:text-pink-400',
  },
  redux: { title: 'Redux', icon: <SiRedux />, color: 'hover:text-purple-400' },
  nuxt: { title: 'Nuxt', icon: <SiNuxtdotjs />, color: 'hover:text-green-300' },
  axios: {
    title: 'Axios',
    icon: <SiAxios />,
    color: 'hover:text-black dark:hover:text-white',
  },
};
