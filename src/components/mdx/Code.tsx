'use client';

import { cn } from '@/lib/utils';
import { ReactNode, SVGProps, useRef, useState } from 'react';

interface Props {
  className?: string;
  lines?: number;
  language?: string;
  selected?: string;
  children?: ReactNode;
  withFooter?: boolean;
  withCopyButton?: boolean;
}

const Code = ({ children, ...rest }: Props) => {
  const [copied, setCopied] = useState(false);
  const elementRef = useRef<any>();
  const copyTimeout = useRef<any>();
  console.log({ rest });
  const handleCopy = () => {
    clearTimeout(copyTimeout.current);
    navigator.clipboard.writeText(elementRef.current.textContent);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='overflow-auto p-6'>
      <code ref={elementRef} {...rest}>
        {children}
      </code>
      <div className='absolute right-3 top-3'>
        <button
          type='button'
          className='bg-card relative flex h-6 w-6 items-center justify-center rounded-md'
          onClick={handleCopy}
          title='Copy to Clipboard'
          aria-label='Copy to Clipboard'
        >
          <ClipboardIcon
            strokeDasharray={50}
            strokeDashoffset={copied ? -50 : 0}
            className='transition-all'
          />
          <CheckIcon
            strokeDasharray={50}
            strokeDashoffset={copied ? 0 : -50}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 transition-all'
          />
        </button>
      </div>
    </div>
  );
};

const ClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M5.75 4.75H10.25V1.75H5.75V4.75Z' />
    <path d='M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379' />
  </svg>
);

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 16 16'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M13.25 4.75L6 12L2.75 8.75' />
  </svg>
);

export default Code;
