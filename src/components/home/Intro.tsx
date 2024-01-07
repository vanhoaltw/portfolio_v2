import { File } from 'lucide-react';
import Image from 'next/image';

import Accent from '@/components/Accent';
import MyStacks from '@/components/home/MyStacks';
import UnstyledLink from '@/components/links/UnstyledLink';
import { Button } from '@/components/ui/Button';

const Intro = () => {
  return (
    <section className='flex flex-col justify-center'>
      <div className='relative mb-16 space-y-4 md:space-y-8'>
        <div className='h4 flex items-center gap-1 font-normal'>
          Hi!
          <Image alt='Hi' src='/images/hi.webp' width={27} height={27} />
        </div>
        <div className='text-foreground text-3xl font-bold md:text-7xl'>
          <span>I'm</span> <Accent className='font-bold'>Hoà</Accent>,
        </div>
        <div>
          a <strong>front-end developer</strong> crafting immersive web
          experiences. <br />
          Explore my projects and let's innovate together!
        </div>

        <div className='flex gap-4 pt-3'>
          <UnstyledLink href='/about'>
            <Button>Get in touch</Button>
          </UnstyledLink>

          <UnstyledLink href='https://vietcv.io/vanhoaltw'>
            <Button variant='outline' className='gap-2 px-6'>
              <File size={18} /> Resume
            </Button>
          </UnstyledLink>
        </div>

        <div></div>
      </div>
      <MyStacks />
    </section>
  );
};

export default Intro;
