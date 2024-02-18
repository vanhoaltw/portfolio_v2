'use client';

import { Project } from 'contentlayer/generated';
import { useMotionValue } from 'framer-motion';

import ClImage from '@/components/ClImage';
import HoverPattern from '@/components/effects/HoverPattern';
import TechStack from '@/components/mdx/TechStack';

interface Props {
  data: Project;
}

const CardProject = ({ data }: Props) => {
  const { title, description, banner, github, link } = data || {};
  const techs = data?.techs?.split?.(',') || [];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <a
      aria-label={title}
      href={github || link}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative flex flex-col overflow-hidden rounded-lg border p-4 shadow-sm'
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />
      <ClImage
        width={1440}
        height={700}
        className='mb-4 cursor-pointer rounded-md'
        publicId={banner}
        preview={false}
      />
      <p className='h4 z-50 mb-2'>{title}</p>
      <p className='text-foreground/80 mb-4 text-sm'>{description}</p>

      <TechStack data={techs} className='mt-auto' />
    </a>
  );
};

export default CardProject;
