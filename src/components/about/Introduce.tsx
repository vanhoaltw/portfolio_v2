import { differenceInYears } from 'date-fns';
import Image from 'next/image';

import Spotlight from '@/components/Spotlight';

const getAge = () => differenceInYears(new Date(), new Date(2001, 6, 26));

const Introduce = () => {
  return (
    <section className='relative'>
      <h1 className='mb-8'>About me</h1>
      <Spotlight className='-left-40 -top-20 scale-150' />
      <div className='bg-dot items-start gap-6 py-4 sm:flex'>
        <div className='space-y-6'>
          <p>
            Hey there 👋🏻 I’m Hoa Nguyen, a {getAge()}-year-old who is passionate
            about crafting delightful experiences online.
          </p>
          <p>
            As a dedicated and passionate <strong>Front-End Developer</strong>,
            I bring a wealth of experience and expertise in creating
            captivating, user-focused web interfaces. I'm a lover of page design
            or other things and whenever I can I try to learn new technologies
            since I discovered programming at 20 years old.
          </p>

          <p>
            There are a lot of things and technologies to learn in frontend
            development and I am motivated to learn as much as possible. I enjoy
            learning something new and getting feedback to make myself better
            and improve.
          </p>
        </div>

        <div className='relative shrink-0'>
          <div className='bg-primary/20 absolute aspect-square h-full rounded-md' />
          <Image
            priority
            src='/images/my-avatar.jpg'
            className='mx-auto aspect-square rotate-6 rounded-md object-cover shadow-lg'
            height={150}
            width={200}
            alt='Me'
          />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
