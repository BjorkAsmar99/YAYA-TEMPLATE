import { siteData } from '@/lib/site-data';
import { MagneticLink } from './magnetic-link';

const links = [
  ['Menu', '#menu'],
  ['Our Story', '#story'],
  ['Experience', '#experience'],
  ['Reservations', '#reservations'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(12,10,8,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="text-sm uppercase tracking-[0.35em] text-stone-100">
          {siteData.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <MagneticLink
              key={href}
              href={href}
              className="text-sm text-stone-300 transition hover:text-stone-50"
            >
              {label}
            </MagneticLink>
          ))}
        </nav>
        <MagneticLink
          href="#reservations"
          className="rounded-full border border-amber-300/40 bg-amber-100/10 px-4 py-2 text-sm text-amber-50 transition hover:bg-amber-100/20"
        >
          Book a table
        </MagneticLink>
      </div>
    </header>
  );
}
