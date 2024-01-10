import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { DB_URI } from '@/constant/env';

const client = postgres(DB_URI);
export const db = drizzle(client);
