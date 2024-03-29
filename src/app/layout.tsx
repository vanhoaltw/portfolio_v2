import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import RootProvider from '@/components/providers/RootProvider';
import SkipNavigation from '@/components/SkipNavigation';

import { siteConfig } from '@/constant/config';

interface RootProps {
  children: React.ReactNode;
}

const fontSans = Inter({
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
    icon: '/images/my-avatar.jpg',
    shortcut: '/images/my-avatar.jpg',
    apple: '/images/my-avatar.jpg',
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/og`],
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

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fontSans.className}>
        <main className={`${fontSans.variable}`}>
          <RootProvider>
            <SkipNavigation />
            <Toaster />
            <div
              style={{ minHeight: 'calc(100vh - 300px)' }}
              className='pt-10 md:pt-20'
            >
              {children}
            </div>
            <SpeedInsights />
            <Analytics />
          </RootProvider>
        </main>
      </body>
    </html>
  );
}
