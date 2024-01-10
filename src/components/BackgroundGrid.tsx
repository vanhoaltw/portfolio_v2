import { cn } from '@/lib/utils';

const boxs = new Array(1000).fill(1);

const BackgroundGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'absolute inset-y-0 h-[20rem] w-full overflow-hidden opacity-50',
        className
      )}
    >
      <div className='bg-background pointer-events-none absolute top-16 z-40 h-20 w-full [mask-image:linear-gradient(to_bottom,black,transparent)]' />
      <div className='bg-background pointer-events-none absolute -bottom-2 z-40 h-full w-full [mask-image:linear-gradient(to_bottom,transparent,black)]' />

      <div className='absolute inset-0 z-20 bg-transparent'>
        <div className='z-30 grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] '>
          {boxs.map((i, idx) => (
            <div
              key={`box-${idx}`}
              className='z-20 aspect-square border-l border-t border-neutral-200  transition-opacity  hover:bg-[rgba(14,165,233,.4)] hover:opacity-50 dark:border-neutral-700'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundGrid;
