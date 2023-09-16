'use client';

import { useCallback, useState } from 'react';

import IconMenu from '@/components/buttons/IconMenu';
import DesktopMenu from '@/components/layouts/Header/DesktopMenu';
import MobileMenu from '@/components/layouts/Header/MobileMenu';
import Logo from '@/components/Logo';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const doToggleMenu = useCallback(() => {
    setOpenMenu((pre) => !pre);
  }, []);

  return (
    <header className='supports-backdrop-blur:bg-white/95 sticky top-0 z-40 w-full flex-none bg-white/50 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:z-50 lg:border-b lg:border-slate-900/10 '>
      <div className='container flex items-center justify-between gap-8 py-4'>
        <Logo />

        <IconMenu
          active={openMenu}
          onClick={doToggleMenu}
          className='flex md:hidden'
        />
        <DesktopMenu />
        <MobileMenu opened={openMenu} onClose={doToggleMenu} />
      </div>
    </header>
  );
}
