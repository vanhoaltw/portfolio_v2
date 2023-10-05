import { RefObject, useEffect, useRef } from 'react';

function useBoundEffect(use3d?: boolean): {
  ref: RefObject<HTMLDivElement>;
  glowRef: RefObject<HTMLDivElement>;
} {
  let bounds;
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || !glowRef.current) return;
    bounds = ref.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };

    if (use3d) {
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      ref.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
    }

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        rgba(255, 255, 255, 0.1), 
        rgba(255, 255, 255, 0)
      )
    `;
  };

  const removeListener = () => {
    if (!ref.current || !glowRef.current) return;
    glowRef.current.style.backgroundImage = '';
    ref.current.style.transform = '';
    ref.current.style.background = '';
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.onmousemove = handleMouseMove;
      ref.current.onmouseleave = removeListener;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, glowRef };
}

export { useBoundEffect };
