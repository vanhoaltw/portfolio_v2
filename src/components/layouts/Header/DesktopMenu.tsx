import { usePathname } from 'next/navigation';
import { RiGithubFill } from 'react-icons/ri';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';
import ToggleTheme from '@/components/layouts/Header/ToggleTheme';
import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/constant/config';
import { NAVS_MAIN } from '@/constant/navs';
import { Github } from 'lucide-react';

export default function DesktopMenu() {
  const pathname = usePathname();
  return (
    <nav className='flex w-full flex-1 items-center gap-4 text-sm'>
      {NAVS_MAIN.map((nav, idx) => {
        const isActive = pathname?.substring(1) === nav.url?.substring(1);
        return (
          <div key={`${nav.name}-${idx}`}>
            <UnstyledLink href={isActive ? '' : nav.url}>
              <span
                className={cn(
                  'inline-block rounded-md py-1.5 font-semibold transition-colors',
                  isActive ? 'cursor-default ' : 'text-muted-foreground'
                )}
              >
                {nav.name}
              </span>
            </UnstyledLink>
          </div>
        );
      })}

      <div className='flex grow items-center justify-end'>
        <UnstyledLink className='hidden sm:block' href={siteConfig.githubUrl}>
          <IconButton variant='ghost'>
            <Github size={22} />
          </IconButton>
        </UnstyledLink>
        <ToggleTheme />
      </div>
    </nav>
  );
}
