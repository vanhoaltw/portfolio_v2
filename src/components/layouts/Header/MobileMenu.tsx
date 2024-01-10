'use client';

import { Github, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';
import ToggleTheme from '@/components/layouts/Header/ToggleTheme';
import UnstyledLink from '@/components/links/UnstyledLink';
import Logo from '@/components/Logo';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import { siteConfig } from '@/constant/config';
import { NAVS_MAIN } from '@/constant/navs';

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-1 justify-between sm:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <IconButton variant='ghost'>
            <Menu />
          </IconButton>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <Logo />
          </SheetHeader>

          <nav className='mt-6'>
            {NAVS_MAIN.map((nav, idx) => {
              const isActive = pathname?.substring(1) === nav.url?.substring(1);
              return (
                <div key={`${nav.name}-${idx}`}>
                  <UnstyledLink
                    href={isActive ? '' : nav.url}
                    onClick={() => setIsOpen(false)}
                  >
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
          </nav>
        </SheetContent>
      </Sheet>

      <div className='flex grow items-center justify-end'>
        <UnstyledLink href={siteConfig.githubUrl}>
          <IconButton variant='ghost'>
            <Github size={22} />
          </IconButton>
        </UnstyledLink>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default MobileMenu;
