import './globals.css';

import { Inter, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import AuthProvider from './auth/Provider';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const poppins = localFont({
  src: '../public/fonts/poppins-regular-webfont.woff2',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  openGraph: {
    title: '...',
    description: '...',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
