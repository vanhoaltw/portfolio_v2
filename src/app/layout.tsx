import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import * as React from 'react';

import '@/styles/globals.css';
import 'keen-slider/keen-slider.min.css';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import SkipNavigation from '@/components/SkipNavigation';

import RootProvider from '@/app/provider';
import { siteConfig } from '@/constant/config';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.png`],
  },
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.authorUrl,
    },
  ],
};

interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fontSans.className}>
        <main className={`${fontSans.variable}`}>
          <RootProvider>
            <SkipNavigation />
            <NextTopLoader
              color='#2299DD'
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
            />
            <Header />
            <div style={{ minHeight: 'calc(100vh - 370px)' }}>{children}</div>
            <Footer />
            <Analytics />
          </RootProvider>
        </main>
      </body>
    </html>
  );
}
