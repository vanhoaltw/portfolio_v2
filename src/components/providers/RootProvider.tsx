'use client';

import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

const repoPrompt = `
  Taking a peek huh? Check out the source code: https://github.com/vanhoaltw
`;

const motionConfig = {
  type: 'spring',
  mass: 5,
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001,
};

export default function RootProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info(`${repoPrompt}\n\n`);
  }, []);

  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <LazyMotion features={domAnimation}>
        <MotionConfig transition={motionConfig}>
          <Header />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
