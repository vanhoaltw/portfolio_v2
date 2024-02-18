import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    CLOUDINARY_CLOUD_NAME: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXT_PUBLIC_GITHUB_ID: z.string().optional(),
    NEXT_PUBLIC_GITHUB_SECRET: z.string().optional(),
    POSTGRES_URL: z.string().min(1),
  },
  runtimeEnv: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    POSTGRES_URL: process.env.POSTGRES_URL,

    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // Github
    NEXT_PUBLIC_GITHUB_ID: process.env.NEXT_PUBLIC_GITHUB_ID,
    NEXT_PUBLIC_GITHUB_SECRET: process.env.NEXT_PUBLIC_GITHUB_SECRET,
  },
});
