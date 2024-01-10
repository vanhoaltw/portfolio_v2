'use client';

import { signOut } from 'next-auth/react';
import { useRef } from 'react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { createGuestbook } from '@/db/mutates';

const FormGuest = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSend = async (form: FormData) => {
    try {
      await createGuestbook(form);
      formRef.current?.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message as string, {
        id: error.message,
      });
    }
  };

  return (
    <div className='max-w-lg'>
      <form ref={formRef} action={handleSend} className='relative'>
        <Input name='text' placeholder='Message' className='bg-input pr-20' />
        <Button
          size='sm'
          variant='ghost'
          className='bg-background absolute right-2 top-1/2 h-7 -translate-y-1/2 px-2.5 dark:bg-neutral-500'
        >
          Send
        </Button>
      </form>
      <Button
        onClick={() => signOut()}
        variant='link'
        className='text-muted-foreground h-fit p-0 text-xs hover:text-red-500'
      >
        Sign out
      </Button>
    </div>
  );
};

export default FormGuest;
