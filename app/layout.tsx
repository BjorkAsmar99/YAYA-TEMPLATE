import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Gumbo YAYA | Soul Food, Fried Chicken & Waffles',
  description: 'Gumbo YAYA is a soulful fried chicken and waffle restaurant with a warm, modern, small-batch identity.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
