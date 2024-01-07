import { cn } from '@/lib/utils';

const IconMenu = ({
  active,
  onClick,
  className,
}: {
  active: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative z-50 flex h-5 w-5 cursor-pointer flex-col items-end justify-between',
        className
      )}
    >
      <div
        className={cn(
          'absolute right-0 h-0.5 w-7 rotate-0 bg-current transition-all delay-200',
          active && 'w-6 translate-y-2.5 rotate-45'
        )}
      />
      <div
        className={cn(
          'absolute right-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current opacity-100 transition-all',
          active && 'right-5 opacity-0'
        )}
      />
      <div
        className={cn(
          'absolute bottom-0 right-0 h-0.5 w-3 rotate-0 bg-current transition-all delay-200',
          active && 'w-6 -translate-y-2 -rotate-45'
        )}
      />
    </div>
  );
};

export default IconMenu;
