import { cn } from '@/lib/utils';

import Tooltip from '@/components/Tooltip';

import { technicals } from '@/constant/tech';

const stacks = [
  technicals.reactjs,
  technicals.vuejs,
  technicals.nextjs,
  technicals.tailwind,
  technicals.typescript,
  technicals.graphql,
  technicals.visualStudio,
  technicals.figma,
];

const MyStacks = () => {
  return (
    <div>
      <p className='h4'>Current Favorite Tech Stack/Tool</p>
      <ul className='mt-2 flex items-center gap-2 text-2xl sm:text-3xl'>
        {stacks.map((i) => (
          <li key={i.title} title={i.title}>
            <Tooltip tipChildren={<div>{i.title}</div>}>
              <div
                className={cn('transition-all hover:-translate-y-1', i.color)}
              >
                {i.icon}
              </div>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyStacks;
