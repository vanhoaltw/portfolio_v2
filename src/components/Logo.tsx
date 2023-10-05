import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';

import { siteConfig } from '@/constant/config';

const Logo = ({ size = 30 }) => {
  return (
    <PrimaryLink
      href='/'
      className='flex items-center text-xl text-sky-400 transition-opacity hover:opacity-60'
    >
      <NextImage
        src='/logo.png'
        alt={siteConfig.title}
        height={size}
        width={size}
      />
    </PrimaryLink>
  );
};

export default Logo;
