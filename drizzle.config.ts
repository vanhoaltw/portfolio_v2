import type { Config } from 'drizzle-kit';

const dbUrl = '';

export default {
  schema: './src/db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: dbUrl,
  },
} satisfies Config;
