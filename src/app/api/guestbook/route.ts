import { NextResponse } from 'next/server';

import { getGuestbook } from '@/db/queries';

export const GET = async () => {
  const guestbook = await getGuestbook();
  return NextResponse.json({ data: guestbook });
};
