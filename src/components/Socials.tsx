import { m } from 'framer-motion';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';

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
            <Icon size='1.6rem' />
          </UnstyledLink>
        </m.li>
      ))}
    </m.ul>
  );
};

const stacks = [
  { name: 'Github', icon: GithubIcon, url: siteConfig.githubUrl },
  { name: 'Linked in', icon: LinkedinIcon, url: siteConfig.linkedUrl },
  { name: 'Instagram', icon: InstagramIcon, url: siteConfig.instagramUrl },
  { name: 'Mail', icon: MailIcon, url: 'mailto:vanhoaltw@gmail.com' },
];
export default Socials;
