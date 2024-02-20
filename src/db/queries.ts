import { sql } from 'drizzle-orm';
import { cache } from 'react';

import { db } from '@/db';
import { guestbook } from '@/db/schema';

export const getGuestbook = cache(async () => {
  try {
    return db
      .select()
      .from(guestbook)
      .orderBy(sql`${guestbook.id} desc nulls first`);
  } catch (error) {
    return [];
  }
});
