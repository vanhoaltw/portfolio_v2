import { SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import { RxMoon } from 'react-icons/rx';

import IconButton from '@/components/buttons/IconButton';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark' || !theme;

  return (
    <IconButton
      variant='ghost'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
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
  );
};

export default ToggleTheme;
