import Link from 'next/link';

import NextImage from '@/components/NextImage';

import { siteConfig } from '@/constant/config';

const Logo = ({ size = 25 }) => {
  return (
    <Link href='/' className='text-foreground z-50 flex items-center gap-2'>
      <NextImage
        src='/favicon/favicon.png'
        alt={siteConfig.title}
        height={size}
        width={size}
      />
      Hoa Nguyen
    </Link>
  );
};

export default Logo;
