import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import Container from '@/components/Container';
import DesktopMenu from '@/components/layouts/Header/DesktopMenu';
import MobileMenu from '@/components/layouts/Header/MobileMenu';

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [reachTop, setReachTop] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      setReachTop(current < 0.05);
    }
  });

  return (
    <header
      className={cn(
        'fixed top-0 z-[99999] w-full flex-none border-b transition-all lg:z-50',
        reachTop
          ? 'border-transparent'
          : 'bg-background/80 border-b backdrop-blur-xl duration-500'
      )}
    >
      <Container className='flex items-center justify-between gap-8 py-4'>
        <DesktopMenu />
        <MobileMenu />
      </Container>
    </header>
  );
}
