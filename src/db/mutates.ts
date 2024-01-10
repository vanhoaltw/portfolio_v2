'use server';
import { revalidatePath } from 'next/cache';

import { getCurrentUser } from '@/lib/session';

import { db } from '@/db';
import { guestbook } from '@/db/schema';

export const createGuestbook = async (form: FormData) => {
  const user = await getCurrentUser();
  const { email, name } = user || {};
  const text = form.get('text')?.toString()?.trim();

  if (!text) {
    throw new Error('Text is empty');
  }

  if (!user) {
    throw new Error('Unauthorized');
  }

  const body = {
    email,
    name,
    text,
  } as any;

  await db.insert(guestbook).values(body);

  revalidatePath('/guestbook');
};
