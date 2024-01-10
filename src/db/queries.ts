import { sql } from 'drizzle-orm';

import { db } from '@/db';
import { guestbook } from '@/db/schema';

export default async function getGuestbook() {
  return db
    .select()
    .from(guestbook)
    .orderBy(sql`${guestbook.id} desc nulls first`);
}
