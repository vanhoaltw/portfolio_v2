import React from 'react';

import Socials from '@/components/Socials';

const Footer = () => {
  return (
    <footer className='container mt-12 flex items-center justify-between space-y-2 border-t border-slate-800 py-4 text-center text-sm'>
      <p>© Hoà Nguyễn {new Date().getFullYear()}</p>
      <Socials />
    </footer>
  );
};

export default Footer;
