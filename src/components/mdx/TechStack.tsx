// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from 'react';

import { cn } from '@/lib/utils';

import Tooltip from '@/components/Tooltip';

import { technicals } from '@/constant/tech';

// const stack: any = {
//   nextjs: { name: 'Next.js', icon: <TbBrandNextjs />, color: 'text-slate-300' },
//   reactjs: { name: 'React.js', icon: <GrReactjs />, color: 'text-sky-300' },
//   tailwind: {
//     name: 'Tailwind.js',
//     icon: <BiLogoTailwindCss />,
//     color: 'text-sky-300',
//   },
//   typescript: {
//     name: 'Typescript',
//     icon: <BiLogoTypescript />,
//     color: 'text-sky-400',
//   },
//   graphql: { name: 'GraphQL', icon: <BiLogoGraphql />, color: 'text-pink-500' },
//   apollo: {
//     name: 'Apollo',
//     icon: <SiApollographql />,
//     color: 'text-slate-600',
//   },
//   firebase: {
//     name: 'Firebase',
//     icon: <SiFirebase />,
//     color: 'text-orange-500',
//   },
//   scss: { name: 'scss', icon: <SiSass />, color: 'text-pink-400' },
//   mantine: { name: 'Mantine', icon: <TbBrandMantine />, color: 'text-sky-300' },
//   materialui: { name: 'MaterialUI', icon: <SiMaterialdesign /> },
//   antd: { name: 'Antd', icon: <SiAntdesign /> },
//   radix: { name: 'Radix', icon: <TbBrandRadixUi /> },
//   agora: { name: 'Agora', icon: <SiAgora /> },
//   vite: { name: 'Vite.js', icon: <TbBrandVite /> },
//   zustant: { name: 'Zustant', icon: <RiBearSmileFill /> },
//   reactQuery: { name: 'React Query', icon: <SiReactquery /> },
//   redux: { name: 'Redux', icon: <SiRedux /> },
//   nuxt: { name: 'Nuxt', icon: <SiNuxtdotjs /> },
//   vuejs: { name: 'Vuejs', icon: <RiVuejsLine /> },
//   axios: { name: 'Axios', icon: <SiAxios /> },
// };

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
      {data.map((i, idx) => {
        const { title, icon, color } = technicals?.[i] || {};
        return (
          <Tooltip tipChildren={title} key={`${title}-${idx}`}>
            <div
              className={cn(
                'capitialize transition-all hover:-translate-y-1 ',
                color
              )}
            >
              {icon}
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default TechStack;
