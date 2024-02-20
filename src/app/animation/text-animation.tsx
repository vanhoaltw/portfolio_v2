'use client';

import { HTMLMotionProps, m } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const TextAnimation = ({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) => {
  return (
    <m.div
      className={className}
      initial={animation.hide}
      animate={animation.show}
      {...props}
    >
      {children}
    </m.div>
  );
};

export default TextAnimation;
