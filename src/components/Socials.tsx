'use client';

import { m } from 'framer-motion';
import { SiGithub, SiGmail, SiLinkedin, SiX } from 'react-icons/si';

import { cn } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/constant/config';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Socials = ({ className }: { className?: string }) => {
  return (
    <m.ul
      className={cn('flex gap-4', className)}
      initial='hide'
      animate='show'
      transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
    >
      {stacks.map(({ name, icon: Icon, url }) => (
        <m.li key={name} variants={animation}>
          <UnstyledLink
            href={url}
            title={name}
            className='text-muted-foreground hover:text-foreground'
          >
            <Icon size='1.3rem' />
          </UnstyledLink>
        </m.li>
      ))}
    </m.ul>
  );
};

const stacks = [
  { name: 'Github', icon: SiGithub, url: siteConfig.githubUrl },
  { name: 'Linked in', icon: SiLinkedin, url: siteConfig.linkedUrl },
  { name: 'Instagram', icon: SiX, url: siteConfig.twitterUrl },
  { name: 'Mail', icon: SiGmail, url: 'mailto:vanhoaltw@gmail.com' },
];
export default Socials;
