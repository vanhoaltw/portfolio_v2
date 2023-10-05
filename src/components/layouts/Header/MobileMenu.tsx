import { m } from 'framer-motion';

import { cn } from '@/lib/utils';

import PrimaryLink from '@/components/links/PrimaryLink';

import { animationFade } from '@/constant/animation';
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
        'fixed left-0 top-0 hidden h-screen w-full opacity-0 transition-opacity sm:hidden',
        opened && 'block opacity-100'
      )}
    >
      <div className='flex h-screen flex-col items-end bg-slate-900 p-4 px-8'>
        {opened && (
          <m.ul
            initial='hide'
            animate='show'
            transition={{ delayChildren: 0.1, staggerChildren: 0.025 }}
            className='flex w-full flex-1 flex-col items-center justify-center gap-12'
          >
            {NAVS_MAIN.map((nav, idx) => (
              <m.li key={`${nav.name}-${idx}`} variants={animationFade}>
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
              </m.li>
            ))}
          </m.ul>
        )}
        {/* <nav className='flex w-full flex-1 flex-col items-center justify-center gap-12'>
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
        </nav> */}
      </div>
    </div>
  );
}
