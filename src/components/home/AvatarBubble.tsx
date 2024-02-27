'use client';

import { m } from 'framer-motion';
import Image from 'next/image';

const AvatarBubble = () => {
  return (
    <m.div
      className='relative flex-1'
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
    >
      <div className='group relative mx-auto h-fit w-fit p-0.5'>
        <Image
          src='/images/my-avatar.jpg'
          height={280}
          width={280}
          alt='Me'
          className='aspect-square rounded-full object-cover'
        />
      </div>
    </m.div>
  );
};

export default AvatarBubble;
