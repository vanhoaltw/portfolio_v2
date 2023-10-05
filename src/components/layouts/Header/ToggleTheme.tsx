import { SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import { RxMoon } from 'react-icons/rx';

import IconButton from '@/components/buttons/IconButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const ToggleTheme = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton variant='ghost'>
          <SunIcon
            className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            size={18}
          />
          <RxMoon
            className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            size={18}
          />

          <span className='sr-only'>Toggle theme</span>
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleTheme;
