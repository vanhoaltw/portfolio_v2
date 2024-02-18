'use client';

import { type MouseEvent, PropsWithChildren, useRef } from 'react';

const Card3D = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const onMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className='transition-transform'
      style={{ perspective: 1400 }}
    >
      {children}
    </div>
  );
};

export default Card3D;
