import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';
import React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

import { siteConfig } from '@/constant/config';

const Socials = () => {
  return (
    <div className='flex justify-center gap-2'>
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
  { name: 'Github', icon: <GithubIcon />, url: siteConfig.authorUrl },
  { name: 'Linked in', icon: <LinkedinIcon />, url: siteConfig.linkedUrl },
  { name: 'Instagram', icon: <InstagramIcon />, url: siteConfig.instagramUrl },
  { name: 'Mail', icon: <MailIcon />, url: '' },
];
export default Socials;
