import Image from 'next/image';

const Quotes = () => {
  return (
    <div className='relative flex flex-col items-center gap-4 rounded-xl border p-8 text-center'>
      <div className='via-primary absolute inset-x-0 -top-px mx-auto h-px w-1/2  bg-gradient-to-r from-transparent to-transparent shadow-2xl' />
      <Image
        priority
        className='outline-border shrink-0 rounded-full outline outline-4'
        src='/images/me-square.jpg'
        height={80}
        width={80}
        alt='Me'
      />

      <p>
        "Crafting products is where my heart sings, the fusion of creativity and
        skill transforming concepts into living, breathing realities. Every
        project is a playground, a canvas for weaving imaginative ideas into
        vibrant, impactful experiences."
      </p>
    </div>
  );
};

export default Quotes;
