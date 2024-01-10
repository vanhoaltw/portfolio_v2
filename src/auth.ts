import { getServerSession, NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const secret = process.env.NEXT_PUBLIC_SECRET;

const authOptions: NextAuthOptions = {
  secret,
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
  ],
  debug: true,
};

const getNextAuthServerSession = () => getServerSession(authOptions);

export { authOptions, getNextAuthServerSession };
