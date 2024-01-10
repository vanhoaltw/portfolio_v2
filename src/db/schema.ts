import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const guestbook = pgTable('guestbook', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 500 }),
  email: varchar('email', { length: 64 }),
  name: text('name').notNull(),
  createAt: timestamp('createAt').defaultNow().notNull(),
});
