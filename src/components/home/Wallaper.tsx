'use client';
import { m } from 'framer-motion';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const items = [
  {
    name: 'Workout',
    url: 'https://res.cloudinary.com/hoanguyen/image/upload/v1709028232/vanhoaltw/z5197705677740_323c8866aa928ae340f3fdd5ff087236_dbzysi.jpg',
    className: 'rotate-[8deg]',
  },
  {
    name: 'Family',
    url: 'https://res.cloudinary.com/hoanguyen/image/upload/v1709028224/vanhoaltw/z5197717195538_41bd37e3f944047a6d8a46ad3188623f_h8ckuj.jpg',
    className: '-rotate-12 z-[1]',
  },
  {
    name: 'Travel',
    url: 'https://res.cloudinary.com/hoanguyen/image/upload/v1709028225/vanhoaltw/z5197742627807_22ec0dc1c36d0299a81808882d6f2dbe_ezo4xs.jpg',
    className: 'rotate-[-2deg]',
  },
  {
    name: 'Hobby',
    url: 'https://res.cloudinary.com/hoanguyen/image/upload/v1709028224/vanhoaltw/z5197732701205_e24242a1bd33a6df219ba2f68012bc9f_h00y1m.jpg',
    className: 'rotate-12',
  },
];

const animation = {
  hide: { y: -26, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const Wallaper = () => {
  return (
    <m.ul
      initial='hide'
      animate='show'
      transition={{ delayChildren: 1, staggerChildren: 0.08, type: 'spring' }}
      className='relative mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4'
    >
      {items.map((i) => (
        <m.li key={i.name} variants={animation}>
          <div
            className={cn(
              i?.className,
              'outline-foreground/20 group relative w-full overflow-hidden rounded-xl shadow-sm outline outline-4 backdrop-blur-sm'
            )}
          >
            <Image
              src={i.url}
              alt={i.name}
              height={320}
              width={180}
              priority
              className='w-full object-cover object-center'
            />
            <div className='bg-background/30 group-hover:h2 absolute left-0 top-0 flex h-full w-full items-center justify-center text-xs font-bold opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100'>
              {i.name}
            </div>
          </div>
        </m.li>
      ))}
    </m.ul>
  );
};

export default Wallaper;
