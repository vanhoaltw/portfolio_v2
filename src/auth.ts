import { getServerSession, NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { env } from '@/env.mjs';

const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
};

const getNextAuthServerSession = () => getServerSession(authOptions);

export { authOptions, getNextAuthServerSession };
