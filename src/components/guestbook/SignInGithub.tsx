'use client';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/Button';

const SignInGithub = () => {
  return (
    <Button variant='outline' onClick={() => signIn('github')}>
      <Github size={18} />
      Sign in with GitHub
    </Button>
  );
};

export default SignInGithub;
