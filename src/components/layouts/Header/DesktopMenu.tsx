import { usePathname } from 'next/navigation';
import { RiGithubFill } from 'react-icons/ri';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';
import ToggleTheme from '@/components/layouts/Header/ToggleTheme';
import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/constant/config';
import { NAVS_MAIN } from '@/constant/navs';

export default function DesktopMenu() {
  const pathname = usePathname();
  return (
    <nav className='hidden w-full flex-1 items-center text-sm md:flex'>
      {NAVS_MAIN.map((nav, idx) => {
        const isActive = pathname?.substring(1) === nav.url?.substring(1);
        return (
          <div key={`${nav.name}-${idx}`}>
            <UnstyledLink href={isActive ? '' : nav.url}>
              <span
                className={cn(
                  'inline-block rounded-md p-1.5 px-3 font-semibold transition-colors',
                  isActive
                    ? 'cursor-default text-sky-500 dark:text-blue-400'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                )}
              >
                {nav.name}
              </span>
            </UnstyledLink>
          </div>
        );
      })}

      <div className='flex grow items-center justify-end gap-2'>
        <UnstyledLink href={siteConfig.githubUrl}>
          <IconButton variant='ghost'>
            <RiGithubFill size={22} />
          </IconButton>
        </UnstyledLink>
        <ToggleTheme />
      </div>
    </nav>
  );
}
