import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import PrimaryLink from '@/components/links/PrimaryLink';

import { siteConfig } from '@/constant/config';

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-2', className)}>
      {stacks.map(({ name, icon, url }) => (
        <PrimaryLink
          key={name}
          href={url}
          title={name}
          className='hover:text-sky-400'
        >
          {icon}
        </PrimaryLink>
      ))}
    </div>
  );
};

const stacks = [
  { name: 'Github', icon: <GithubIcon />, url: siteConfig.githubUrl },
  { name: 'Linked in', icon: <LinkedinIcon />, url: siteConfig.linkedUrl },
  { name: 'Instagram', icon: <InstagramIcon />, url: siteConfig.instagramUrl },
  { name: 'Mail', icon: <MailIcon />, url: 'mailto:vanhoaltw@gmail.com' },
];
export default Socials;
