import { format } from 'date-fns';

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
    <Container className='pt-10'>
      <h1 className='mb-4'>Sign my guestbook</h1>
      <p className='text-muted-foreground mb-8'>
        Write anything for the future visitors and me 🤝🏻. I'd appreciate a
        joke / quote.
      </p>

      {user ? <FormGuest /> : <SignInGithub />}

      <ul className='bg-dot mt-8 flex flex-col gap-6 py-4'>
        {guestbooks?.map?.((i) => (
          <li key={i.id}>
            <i>{i?.text}</i>
            <div className='text-muted-foreground mt-1.5 flex gap-2 text-sm'>
              <span>{i?.name}</span>/
              <span>{format(i.createAt, "dd LLL uu 'at' p")}</span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default GuestBook;
