import { Heart } from 'lucide-react';
import React from 'react';

import Socials from '@/components/Socials';

const Footer = () => {
  return (
    <footer className='container mt-40 border-t py-4 text-center text-sm'>
      <p className='text-base'>Reach me out</p>
      <Socials className='mt-2 justify-center gap-3' />
      <div className='mt-6 flex items-center justify-center gap-2'>
        <p>© Hoà Nguyễn {new Date().getFullYear()}</p> •{' '}
        <p className='flex items-center gap-1'>
          Thank for watching{' '}
          <Heart className='inline-block text-red-400' size={16} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
