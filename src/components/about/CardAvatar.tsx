'use client';

import NextImage from '@/components/NextImage';

const CardAvatar = () => {
  return (
    <div className='group relative h-fit w-fit'>
      <div className='z-10 overflow-hidden rounded-2xl'>
        <NextImage
          src='/images/my-avatar.jpg'
          height={450}
          className='z-10 grayscale transition-all group-hover:grayscale-0'
          width={350}
          alt='Me'
        />
      </div>
    </div>
  );
};

export default CardAvatar;
