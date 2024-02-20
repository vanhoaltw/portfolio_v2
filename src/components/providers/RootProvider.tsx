'use client';

import { domAnimation, LazyMotion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { Fragment, ReactNode, useEffect } from 'react';

import GlobalImagePreview, {
  appPreviewImg,
} from '@/components/GlobalImagePreview';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

const repoPrompt = `
  Taking a peek huh? Check out the source code: https://github.com/vanhoaltw
`;

export default function RootProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info(`${repoPrompt}\n\n`);
  }, []);

  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <Header />
      <LazyMotion features={domAnimation}>
        <Fragment>
          <GlobalImagePreview ref={appPreviewImg} />
          <main className='min-h-screen'>{children}</main>
        </Fragment>
      </LazyMotion>
      <Footer />
    </ThemeProvider>
  );
}
