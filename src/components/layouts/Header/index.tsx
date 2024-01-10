import Container from '@/components/Container';
import DesktopMenu from '@/components/layouts/Header/DesktopMenu';
import MobileMenu from '@/components/layouts/Header/MobileMenu';

export default function Header() {
  return (
    <header className='bg-background/80 fixed top-0 z-40 w-full flex-none backdrop-blur-xl duration-500 lg:z-50'>
      <Container className='flex items-center justify-between gap-8 py-4'>
        <DesktopMenu />
        <MobileMenu />
      </Container>
    </header>
  );
}
