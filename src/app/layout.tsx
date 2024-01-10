import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import RootProvider from '@/components/providers/RootProvider';
import SkipNavigation from '@/components/SkipNavigation';

import { siteConfig } from '@/constant/config';

interface RootProps {
  children: React.ReactNode;
}

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const isDev = process.env.NODE_ENV === 'development';

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
            {!isDev && <Analytics />}
          </RootProvider>
        </main>
      </body>
    </html>
  );
}
