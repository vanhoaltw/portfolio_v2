import { GithubIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

import ToggleTheme from '@/components/layouts/Header/ToggleTheme';
import PrimaryLink from '@/components/links/PrimaryLink';

import { siteConfig } from '@/constant/config';
import { NAVS_MAIN } from '@/constant/navs';

export default function DesktopMenu() {
  const pathname = usePathname();
  return (
    <nav className='hidden w-full flex-1 items-center gap-6 text-sm md:flex'>
      {NAVS_MAIN.map((nav, idx) => {
        const isActive = pathname?.substring(1) === nav.url?.substring(1);
        return (
          <div key={`${nav.name}-${idx}`}>
            <PrimaryLink
              href={nav.url}
              className='group relative mt-1 h-5 w-12  overflow-hidden font-semibold dark:text-slate-300'
            >
              <div>
                <div className={isActive ? 'text-sky-400' : 'hover:opacity-60'}>
                  {nav.name}
                </div>
              </div>
            </PrimaryLink>
          </div>
        );
      })}

      <div className='flex grow items-center justify-end gap-4'>
        <PrimaryLink
          href={siteConfig.authorUrl}
          className='text-sm hover:text-sky-400'
        >
          <GithubIcon size={22} />
        </PrimaryLink>

        <span className='text-slate-500'>|</span>

        <ToggleTheme />
      </div>
    </nav>
  );
}
