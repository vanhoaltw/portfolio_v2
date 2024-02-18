import { cn } from '@/lib/utils';

interface Props {
  data: string[];
  className?: string;
}
const TechStack = ({ data, className }: Props) => {
  return (
    <div className={cn('flex flex-wrap items-center gap-1', className)}>
      {data.map((i) => {
        return (
          <i
            key={i}
            className='border-foreground/20 rounded-sm border px-1.5 py-0.5 text-xs capitalize'
          >
            {i}
          </i>
        );
      })}
    </div>
  );
};

export default TechStack;
