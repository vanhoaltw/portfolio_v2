'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/Button';

const ButtonBack = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <Button
      variant='link'
      onClick={router.back}
      className={cn('text-foreground p-0', className)}
      size='sm'
    >
      {children || (
        <>
          <ChevronLeft size={16} /> Back
        </>
      )}
    </Button>
  );
};

export default ButtonBack;
