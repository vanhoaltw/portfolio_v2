/* eslint-disable @next/next/no-img-element */
import React from 'react';

import ClImage from '@/components/ClImage';
import NextImage from '@/components/NextImage';
import Tooltip from '@/components/Tooltip';

const Quotes = () => {
  return (
    <div className='relative flex flex-col items-center justify-center gap-12 md:flex-row'>
      <NextImage
        className='shrink-0 overflow-hidden rounded-md border bg-slate-800'
        src='/images/me-square.jpg'
        height={350}
        width={350}
        alt='Me'
      />

      <div className='flex-1'>
        <p className='h3 mb-6 font-bold'>Who i am?</p>
        <p className='mb-4'>
          I'm a Front-End Developer in Viet Nam. I'm steadily studying with the
          goal of becoming a full-stack developer or tech leader.
        </p>
        <p className='mb-4'>
          I have come to many conclusions and gained a lot of knowledge for
          myself in thinking and coding after about two years of struggle from
          product to outsourcing.
        </p>

        <p className='mb-10'>
          Additionally, I am practicing{' '}
          <Tooltip
            tipChildren={
              <div className='w-60 space-y-2 p-2 text-center'>
                <ClImage
                  publicId='/v1696933563/z4771043194130_c90ecf80ff79e38c5298ac492b438381_qil3wz.jpg'
                  height={600}
                  className='rounded-md'
                  width={600}
                  alt='Stradle Planche'
                />
                <figcaption>Stradle Planche</figcaption>
              </div>
            }
          >
            <strong className='text-primary border-b border-dotted leading-3'>
              streetworkout
            </strong>
          </Tooltip>
          ; if you'd like to join us to practice to kill time:))
        </p>

        {/* <Analysis /> */}
      </div>
    </div>
  );
};

export default Quotes;
