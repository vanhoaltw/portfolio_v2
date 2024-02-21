import { File } from 'lucide-react';

import TextAnimation from '@/components/animation/text-animation';
import AvatarBubble from '@/components/home/AvatarBubble';
import UnstyledLink from '@/components/links/UnstyledLink';
import Socials from '@/components/Socials';
import { Button } from '@/components/ui/Button';

const Intro = () => {
  return (
    <section className='flex flex-col justify-center'>
      <div className='relative mb-16'>
        <div className=' my-8 flex items-center gap-8'>
          <div className='bg-dot flex flex-col gap-2'>
            <TextAnimation className='text-foreground text-3xl font-bold md:text-5xl'>
              Nguyen Van Hoa
            </TextAnimation>
            <TextAnimation
              transition={{ delay: 0.2 }}
              className='text-muted-foreground'
            >
              Front-End / Fresher Back-End
            </TextAnimation>
            <TextAnimation
              transition={{ delay: 0.4 }}
              className='my-4 max-w-xl'
            >
              I'm Hoà, a developer based in Viet Nam 🇻🇳. I love crafting
              immersive web experiences, beautiful, intuitive and delightful to
              use.
            </TextAnimation>

            <Socials />

            <div className='mt-8 flex gap-4'>
              <TextAnimation transition={{ delay: 0.6 }}>
                <UnstyledLink href='/about'>
                  <Button>Get in touch</Button>
                </UnstyledLink>
              </TextAnimation>

              <TextAnimation transition={{ delay: 0.8 }}>
                <UnstyledLink href='https://vietcv.io/vanhoaltw'>
                  <Button variant='outline' className='gap-2 px-6'>
                    <File size={18} /> Resume
                  </Button>
                </UnstyledLink>
              </TextAnimation>
            </div>
          </div>

          <AvatarBubble />
        </div>
      </div>
    </section>
  );
};

export default Intro;
