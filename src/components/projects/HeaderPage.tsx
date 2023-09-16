'use client';

import { m } from 'framer-motion';

import { animationFade } from '@/constant/animation';

const HeaderPage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <m.h1
        initial={animationFade.hide}
        animate={animationFade.show}
        className='mb-2'
      >
        {title}
      </m.h1>
      <m.p
        initial={animationFade.hide}
        animate={animationFade.show}
        transition={{ delay: 0.2 }}
      >
        {description}
      </m.p>
    </div>
  );
};

export default HeaderPage;
