import * as React from 'react';

import { cn } from '@/lib/utils';

const TextButtonVariant = ['primary', 'basic'] as const;

type TextButtonProps = {
  variant?: (typeof TextButtonVariant)[number];
} & React.ComponentPropsWithRef<'button'>;

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      disabled: buttonDisabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={cn(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-sky-500',
          'transition duration-100',
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-sky-500 hover:text-sky-600 active:text-sky-700',
            'disabled:text-sky-200',
          ],
          variant === 'basic' && [
            'text-black hover:text-gray-600 active:text-gray-800',
            'disabled:text-gray-300',
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed disabled:brightness-105 disabled:hover:underline',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default TextButton;
