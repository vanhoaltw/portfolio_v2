'use client';

import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const ListGuestBook = () => {
  const [data, setData] = useState<{ data?: any[] }>({ data: [] });
  const { data: listItems } = data || [];

  useEffect(() => {
    const fetchData = async () => {
      const guestbooks = await fetch('/api/guestbook', {
        method: 'GET',
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));

      setData(guestbooks);
    };
    fetchData();
  }, []);

  return (
    <ul className='bg-dot mt-8 flex min-h-72 flex-col gap-6 py-4'>
      {listItems?.length
        ? listItems?.map?.((i) => (
            <li key={i.id}>
              <i>{i?.text}</i>
              <div className='text-muted-foreground mt-1.5 flex gap-2 text-sm'>
                <span>{i?.name}</span>/
                <span>{format(new Date(i.createAt), "dd LLL uu 'at' p")}</span>
              </div>
            </li>
          ))
        : 'Loading...'}
    </ul>
  );
};

export default ListGuestBook;
