import Image from 'next/image';

import MovingBorder from '@/components/MovingBorder';

const Quotes = () => {
  return (
    <div className='bg-border relative overflow-hidden rounded-xl p-[1px]'>
      <div className='absolute inset-0 z-0 overflow-hidden rounded-xl'>
        <MovingBorder rx='30%' ry='30%' duration={6000}>
          <div className='h-28 w-28 bg-[radial-gradient(hsl(var(--primary)),transparent_60%)] opacity-80' />
        </MovingBorder>
      </div>
      <div className='bg-background relative flex flex-col items-center gap-4 rounded-xl p-8 text-center'>
        <Image
          priority
          className='outline-border shrink-0 rounded-full outline outline-4'
          src='/images/me-square.jpg'
          height={80}
          width={80}
          alt='Me'
        />

        <p>
          "Crafting products is where my heart sings, the fusion of creativity
          and skill transforming concepts into living, breathing realities.
          Every project is a playground, a canvas for weaving imaginative ideas
          into vibrant, impactful experiences."
        </p>
      </div>
    </div>
  );
};

export default Quotes;
