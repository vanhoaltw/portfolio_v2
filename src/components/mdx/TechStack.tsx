import { cn } from '@/lib/utils';

import Tooltip from '@/components/Tooltip';

import { technicals } from '@/constant/tech';

const TechStack = ({
  data,
  className,
}: {
  data: string[];
  className?: string;
}) => {
  if (!data?.length) return null;
  return (
    <div className={cn('mt-3 flex items-center gap-3 text-2xl', className)}>
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
