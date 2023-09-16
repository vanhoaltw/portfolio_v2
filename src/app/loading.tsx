import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function Loading() {
  return (
    <main>
      <section>Loading....</section>
    </main>
  );
}
