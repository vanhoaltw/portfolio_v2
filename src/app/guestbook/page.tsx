import { getCurrentUser } from '@/lib/session';

import Container from '@/components/Container';
import FormGuest from '@/components/guestbook/FormGuest';
import SignInGithub from '@/components/guestbook/SignInGithub';

import ListGuestBook from '@/app/guestbook/ListGuestBook';

export const generateMetadata = () => {
  return { title: 'Guestbook' };
};

const GuestBook = async () => {
  const user = await getCurrentUser();

  return (
    <Container className='pt-10'>
      <h1 className='mb-4'>Sign my guestbook</h1>
      <p className='text-muted-foreground mb-8'>
        Write anything for the future visitors and me 🤝🏻. I'd appreciate a
        joke / quote.
      </p>

      {user ? <FormGuest /> : <SignInGithub />}

      <ListGuestBook />
    </Container>
  );
};

export default GuestBook;
