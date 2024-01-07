import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export default function TOCLink({
  id,
  level,
  text,
  activeSection,
}: TOCLinkProps) {
  const isActive = activeSection === id;
  return (
    <UnstyledLink
      href={isActive ? '' : `#${id}`}
      nextLinkProps={{ shallow: true }}
      id={`link-${id}`}
    >
      <div
        style={{ paddingLeft: (level - 2) * 16 }}
        className={
          isActive
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }
      >
        {text}
      </div>
    </UnstyledLink>
  );
}
