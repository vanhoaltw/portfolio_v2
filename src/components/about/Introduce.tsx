import Image from 'next/image';

import Accent from '@/components/Accent';

const Introduce = () => {
  return (
    <section>
      <h1 className='h2'>About me</h1>
      <Accent className='h1 mb-6 mt-2'>Nguyễn Vạn Hoà</Accent>

      <div className='items-start gap-6 sm:flex'>
        <ul className='space-y-4'>
          <li>
            As a dedicated and passionate <strong>Front-End Developer</strong>,
            I bring a wealth of experience and expertise in creating
            captivating, user-focused web interfaces. I'm a lover of page design
            or other things and whenever I can I try to learn new technologies
            since I discovered programming at 20 years old.
          </li>

          <li>
            There are a lot of things and technologies to learn in frontend
            development and I am motivated to learn as much as possible. I enjoy
            learning something new and getting feedback to make myself better
            and improve.
          </li>
        </ul>

        <div className='shrink-0'>
          <Image
            priority
            src='/images/my-avatar.jpg'
            className='mx-auto rounded-md object-cover'
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
