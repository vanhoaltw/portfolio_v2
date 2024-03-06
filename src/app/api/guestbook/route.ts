import { NextResponse } from 'next/server';

import { getGuestbook } from '@/db/queries';

export const GET = async () => {
  try {
    const guestbook = await getGuestbook();
    return NextResponse.json({ data: guestbook });
  } catch (error) {
    return NextResponse.json({ data: [] });
  }
};
