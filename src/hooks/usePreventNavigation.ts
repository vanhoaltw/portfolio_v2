import { useEffect, useRef } from 'react';

// Stop the history navigation gesture on touch devices
export const usePreventNavigation = () => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let refValue: null | HTMLDivElement = null;
    const preventNavigation = (event: TouchEvent) => {
      const touchXPosition = event.touches[0].pageX;
      const touchXRadius = event.touches[0].radiusX || 0;
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault();
    };
    if (sliderContainerRef.current) {
      refValue = sliderContainerRef.current;
      sliderContainerRef.current.addEventListener(
        'touchstart',
        preventNavigation,
        {
          passive: true,
        }
      );
    }

    return () => {
      if (refValue) {
        refValue.removeEventListener('touchstart', preventNavigation);
      }
    };
  }, []);

  return [sliderContainerRef];
};
