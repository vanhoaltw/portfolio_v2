import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/constant/config';

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-4', className)}>
      {stacks.map(({ name, icon: Icon, url }) => (
        <UnstyledLink
          key={name}
          href={url}
          title={name}
          className='text-muted-foreground hover:text-foreground'
        >
          <Icon size='1.6rem' />
        </UnstyledLink>
      ))}
    </div>
  );
};

const stacks = [
  { name: 'Github', icon: GithubIcon, url: siteConfig.githubUrl },
  { name: 'Linked in', icon: LinkedinIcon, url: siteConfig.linkedUrl },
  { name: 'Instagram', icon: InstagramIcon, url: siteConfig.instagramUrl },
  { name: 'Mail', icon: MailIcon, url: 'mailto:vanhoaltw@gmail.com' },
];
export default Socials;
