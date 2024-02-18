import { type MotionValue, m, useMotionTemplate } from 'framer-motion';

interface Props {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const HoverPattern = ({ mouseX, mouseY }: Props) => {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <>
      <m.div
        style={style}
        className='absolute inset-0 -z-10 bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]'
      />
      <m.div
        style={style}
        className='absolute inset-0 -z-10 opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100'
      />
    </>
  );
};

export default HoverPattern;
