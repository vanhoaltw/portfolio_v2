import { cn } from '@/lib/utils';

import IconMenu from '@/components/buttons/IconMenu';
import PrimaryLink from '@/components/links/PrimaryLink';

import { NAVS_MAIN } from '@/constant/navs';

export default function MobileMenu({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        'fixed right-0 top-0 z-50 block h-screen w-full translate-x-full transition-transform delay-500 duration-500 md:hidden',
        opened && 'translate-x-0'
      )}
    >
      <div className='flex h-full flex-col items-end bg-slate-900 p-4 px-8'>
        <IconMenu active={opened} onClick={onClose} />
        <nav className='flex w-full flex-1 flex-col items-center justify-center gap-12'>
          {NAVS_MAIN.map((nav, idx) => (
            <div key={`${nav.name}-${idx}`}>
              <PrimaryLink
                href={nav.url}
                className='flex flex-col gap-1.5'
                onClick={onClose}
              >
                <p>{idx < 10 ? `0${idx + 1}` : idx}.</p>

                <p className='hover:text-primary text-base text-white duration-300 hover:cursor-pointer'>
                  {nav.name}
                </p>
              </PrimaryLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
