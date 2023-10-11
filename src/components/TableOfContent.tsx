'use client';

import React, { useRef } from 'react';

import { useScrollspy } from '@/hooks/useScrollspy';
import { useToc } from '@/hooks/useToc';

import TOCLink from '@/components/links/TOCLink';

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

const TableOfContent = () => {
  const toc = useToc('dd');
  const activeSection = useScrollspy();
  const lastPosition = React.useRef<number>(0);
  const tocParentRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const container = tocParentRef.current;
    if (!activeSection) return;
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isInView = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isInView) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  return (
    <div
      ref={tocParentRef}
      className='max-h-[70vh] overflow-auto rounded-xl border dark:border-slate-800 dark:bg-[#161e31]'
    >
      <p className='p-4 font-bold dark:text-white'>Table of contents</p>

      <hr className='dark:border-slate-800' />

      <div className='flex flex-col text-sm font-semibold'>
        {toc?.map?.((i) => (
          <TOCLink
            id={i.id}
            key={i.id}
            activeSection={activeSection}
            level={i.level}
            minLevel={2}
            text={i.text}
          />
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;
