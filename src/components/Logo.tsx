import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';

import { siteConfig } from '@/constant/config';

const Logo = ({ size = 25 }) => {
  return (
    <PrimaryLink
      href='/'
      className='text-primary z-50 flex items-center gap-2 transition-opacity hover:opacity-60'
    >
      <NextImage
        src='/logo.png'
        alt={siteConfig.title}
        height={size}
        width={size}
      />
      Hoa Nguyen
    </PrimaryLink>
  );
};

export default Logo;
