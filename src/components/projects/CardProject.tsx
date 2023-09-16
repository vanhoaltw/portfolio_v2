import { Project } from 'contentlayer/generated';
import Link from 'next/link';
import { BiSolidRightArrow } from 'react-icons/bi';

import TechStack from '@/components/mdx/TechStack';
import ClImage from '@/components/ui/ClImage';

interface Props {
  data: Project;
}

const CardProject = ({ data }: Props) => {
  return (
    <Link href={data.url}>
      <div className='transform-gpu cursor-pointer select-none overflow-hidden rounded-3xl border transition-all hover:scale-105 active:scale-100 dark:border-slate-800 dark:bg-slate-900'>
        <ClImage
          width={1440}
          height={700}
          publicId={data?.banner}
          className='z-0 cursor-pointer rounded-2xl rounded-b-none'
        />
        <div className='p-4 pt-2'>
          <div>
            <h4>{data.title}</h4>
            <p className='line-clamp-2 min-w-0 break-words text-sm'>
              {data?.description}
            </p>
          </div>
          <div className='mt-2 flex items-center justify-between gap-2 '>
            <TechStack
              data={data.techs?.split?.(',') || []}
              className='gap-1 text-2xl'
            />
            <span className='inline-flex items-center gap-1 text-xs font-bold text-sky-500'>
              See more <BiSolidRightArrow size={10} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
