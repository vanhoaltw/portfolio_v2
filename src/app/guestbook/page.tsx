import { getCurrentUser } from '@/lib/session';

import Container from '@/components/Container';
import FormGuest from '@/components/guestbook/FormGuest';
import SignInGithub from '@/components/guestbook/SignInGithub';

import getGuestbook from '@/db/queries';

export const generateMetadata = () => {
  return { title: 'Guestbook' };
};

const GuestBook = async () => {
  const user = await getCurrentUser();
  const guestbooks = await getGuestbook();

  return (
    <Container className='space-y-6 pt-10'>
      <h3>Sign my guestbook</h3>
      {user ? <FormGuest /> : <SignInGithub />}

      <ul>
        {guestbooks?.map?.((i) => (
          <li key={i.id}>
            <span className='text-muted-foreground mr-1.5 inline-block text-sm'>
              {i?.name}:
            </span>
            {i?.text}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default GuestBook;
