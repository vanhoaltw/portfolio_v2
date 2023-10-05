'use client';

import * as React from 'react';

import {
  Tooltip as UiTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type TooltipTextProps = {
  tipChildren?: React.ReactNode;
  children: React.ReactElement;
  className?: string;
  contentClassName?: string;
};

export default function Tooltip({
  tipChildren,
  children,
  contentClassName,
}: TooltipTextProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <UiTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className={contentClassName}>
          {tipChildren}
        </TooltipContent>
      </UiTooltip>
    </TooltipProvider>
  );
}
