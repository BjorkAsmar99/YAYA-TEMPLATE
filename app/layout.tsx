import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pastrani Vino | Paris VIII',
  description: 'Pastrani Vino, restaurant du soir à Paris VIII. Cuisine précise, cave courte, salle tenue.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
