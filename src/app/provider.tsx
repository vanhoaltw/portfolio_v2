'use client';

import { domAnimation, LazyMotion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function RootProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        {children}
      </ThemeProvider>
    </LazyMotion>
  );
}
