import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';

const sans = Instrument_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GetONLINE | Premium Web Agency Landing Pages',
  description:
    'GetONLINE creates premium digital agency websites with cinematic scrolling, strong positioning, and polished modern frontend execution.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
