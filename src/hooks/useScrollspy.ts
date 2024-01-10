import { useEffect, useState } from 'react';

export const useScrollspy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const onScroll = () => {
    const sections = document.getElementsByClassName('mdx-heading__anchor');
    let prevBBox = null;
    let currentSectionId = activeSection;

    for (let i = 0; i < sections.length; ++i) {
      const section = sections[i];

      if (!currentSectionId) {
        currentSectionId = section.getAttribute('href')?.split('#')[1] ?? null;
      }

      const bbox = section.getBoundingClientRect();
      const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0;
      const offset = Math.max(200, prevHeight / 4);

      // GetBoundingClientRect returns values relative to viewport
      if (bbox.top - offset < 0) {
        currentSectionId = section.getAttribute('href')?.split('#')[1] ?? null;

        prevBBox = bbox;
        continue;
      }

      // No need to continue loop, if last element has been detected
      break;
    }

    setActiveSection(currentSectionId);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeSection;
};
