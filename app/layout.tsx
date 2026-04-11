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
  title: 'Pasta Cosi | Entrer pour dîner',
  description:
    'Expérience éditoriale et cinématique pour Pasta Cosi, restaurant italien à Paris, pensée comme un seuil, une lumière et une envie de réserver.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
