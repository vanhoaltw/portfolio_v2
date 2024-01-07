import * as React from 'react';

export default function SplitImage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mt-6 grid grid-cols-2 items-start gap-4'>{children}</div>
  );
}

export function Split({ children }: { children: React.ReactNode }) {
  return <div className='mt-6 flex flex-col gap-4'>{children}</div>;
}
