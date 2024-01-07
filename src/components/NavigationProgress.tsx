import NextTopLoader from 'nextjs-toploader';

const NavigationProgress = () => {
  return (
    <NextTopLoader
      color='hsl(var(--primary))'
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      easing='ease'
      speed={200}
    />
  );
};

export default NavigationProgress;
