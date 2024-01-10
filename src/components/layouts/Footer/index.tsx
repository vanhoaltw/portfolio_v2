import Container from '@/components/Container';
import Socials from '@/components/Socials';

const Footer = () => {
  return (
    <footer className='mt-40 border-t py-4 text-center text-sm'>
      <Container>
        <p>Reach me out</p>
        <Socials className='mt-2 justify-center gap-3' />
        <div className='mt-6 flex items-center justify-center gap-2'>
          <p>© Hoà Nguyễn. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
