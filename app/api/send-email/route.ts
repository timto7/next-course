import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeTemplate from '@/emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const data = await resend.emails.send({
    from: 'email@domain.com',
    to: ['timmy.knight@gmail.com'],
    subject: 'Subject title',
    react: WelcomeTemplate({ name: 'Tim' }),
  });

  return NextResponse.json({});
}
