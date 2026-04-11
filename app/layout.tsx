import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const display = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
});

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pasta Cosi | Soirée italienne à Paris',
  description:
    'Site éditorial premium pour Pasta Cosi, restaurant italien à Paris pensé comme une soirée en quatre actes.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
