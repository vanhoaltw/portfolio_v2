import { BiLogoPostgresql, BiServer } from 'react-icons/bi';
import { LuWorkflow } from 'react-icons/lu';
import { PiDatabaseBold, PiDevicesBold } from 'react-icons/pi';
import { SiRedis } from 'react-icons/si';
import {
  TbBrandAws,
  TbBrandGit,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVite,
  TbBrandVue,
} from 'react-icons/tb';

import { cn } from '@/lib/utils';

const stacks = [
  {
    title: 'Frontend',
    icon: <PiDevicesBold />,
    techs: [
      { name: 'React', icon: <TbBrandReact />, color: 'hover:text-cyan-400' },
      {
        name: 'Nextjs',
        icon: <TbBrandNextjs />,
        color: 'hover:text-foreground',
      },
      {
        name: 'Tailwindcss',
        icon: <TbBrandTailwind />,
        color: 'hover:text-blue-600',
      },
      {
        name: 'Vite',
        icon: <TbBrandVite />,
        color: 'hover:text-purple-400',
      },
      {
        name: 'Vuejs',
        icon: <TbBrandVue />,
        color: 'hover:text-green-400',
      },
      {
        name: 'PHP',
        icon: <TbBrandPhp />,
        color: 'hover:text-blue-500',
      },
      {
        name: 'Typescript',
        icon: <TbBrandTypescript />,
        color: 'hover:text-blue-500',
      },
    ],
  },
  {
    title: 'Backend',
    icon: <BiServer />,
    techs: [
      {
        name: 'Nodejs',
        icon: <TbBrandNodejs />,
        color: 'hover:text-green-400',
      },
      {
        name: 'GraphQL',
        icon: <TbBrandGraphql />,
        color: 'hover:text-pink-400',
      },
      {
        name: 'Redis',
        icon: <SiRedis />,
        color: 'hover:text-red-500',
      },
    ],
  },
  {
    title: 'Database',
    icon: <PiDatabaseBold />,
    techs: [
      {
        name: 'PostgreSQL',
        icon: <BiLogoPostgresql />,
        color: 'hover:text-blue-500',
      },
      {
        name: 'MySQL',
        icon: <TbBrandMysql />,
        color: 'hover:text-blue-500',
      },
      {
        name: 'MongoDB',
        icon: <TbBrandMongodb />,
        color: 'hover:text-green-400',
      },
    ],
  },
  {
    title: 'DevOps',
    icon: <LuWorkflow />,
    techs: [
      {
        name: 'Git',
        icon: <TbBrandGit />,
        color: 'hover:text-orange-400',
      },
      {
        name: 'AWS',
        icon: <TbBrandAws />,
        color: 'hover:text-foreground',
      },
    ],
  },
];

const MyStacks = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
      {stacks.map((i) => (
        <div
          key={i.title}
          className='bg-dot group relative flex flex-col gap-3 overflow-hidden rounded-xl border p-5'
        >
          <div className='flex items-center gap-3 font-bold'>
            <span className='text-2xl'>{i.icon}</span>
            {i.title}
          </div>
          <hr className='border-dashed' />
          {i.techs.map((tech) => (
            <div
              key={tech.name}
              className={cn(
                'text-muted-foreground group/item flex items-center gap-3',
                tech.color
              )}
            >
              <span className='text-2xl transition-transform group-hover/item:scale-125'>
                {tech.icon}
              </span>
              <span>{tech.name}</span>
            </div>
          ))}

          <div className='text-muted-foreground absolute -bottom-5 -right-5 z-0 rotate-45 opacity-10 transition-transform group-hover:rotate-12'>
            <span className='text-[110px]'>{i.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyStacks;
