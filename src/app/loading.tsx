import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function Loading() {
  return (
    <main>
      <div className='fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/loading.gif' height={150} width={150} alt='loading' />
      </div>
    </main>
  );
}
