'use client';

import { useEffect, useState } from 'react';

import { HeadingScrollSpy } from '@/components/TableOfContent';

export const useToc = (slug: string) => {
  const [toc, setToc] = useState<HeadingScrollSpy>();

  useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id.replace('link-', '');
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [slug]);
  return toc;
};
