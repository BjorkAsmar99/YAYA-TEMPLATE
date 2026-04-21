'use client';

import { ArrowRight, Clock3, MapPin } from 'lucide-react';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Visit', href: '#visit' },
] as const;

const menuItems = [
  {
    name: 'YAYA Chicken & Waffle',
    description: 'Crisp fried chicken, deep maple butter, and a warm golden waffle.',
    price: '$18',
  },
  {
    name: 'Dark Roux Gumbo',
    description: 'Slow-built stock, rice, herbs, and a peppery finish.',
    price: '$16',
  },
  {
    name: 'Hot Honey Tenders',
    description: 'Thin crackle crust, cane sweetness, and pickled heat.',
    price: '$15',
  },
] as const;

const notes = [
  'Small-batch soul food',
  'Fried chicken, waffles, gumbo',
  'Editorial storefront rhythm',
  'Thin borders, quiet pacing',
] as const;

export default function Page() {
  return (
    <main className="gy-home" id="top">
      <header className="gy-header">
        <div className="gy-announcement">Gumbo YAYA, fried chicken, waffles, and soul food with a cleaner storefront point of view.</div>
        <div className="gy-nav-row">
          <a href="#top" className="gy-brand" aria-label="Gumbo YAYA home">
            Gumbo YAYA
          </a>
          <nav aria-label="Primary navigation" className="gy-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#visit" className="gy-nav-cta">
            Order / Visit
          </a>
        </div>
      </header>

      <section className="gy-band gy-hero" id="overview">
        <div className="gy-hero-copy">
          <p className="gy-eyebrow">Soul food restaurant</p>
          <h1>Fried chicken and waffles, stripped back into a calmer, sharper storefront.</h1>
        </div>
        <div className="gy-hero-side">
          <p>
            Gumbo YAYA now leans into broad horizontal sections, restrained merchandising, and a flatter editorial rhythm that feels much closer to Potluck while staying rooted in Southern comfort.
          </p>
          <a href="#menu" className="gy-inline-link">
            See the menu <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="gy-band gy-notes-band" aria-label="Key details">
        {notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </section>

      <section className="gy-band gy-feature-band" id="menu">
        <div className="gy-feature-intro">
          <p className="gy-eyebrow">House menu</p>
          <h2>Fewer modules, more room to breathe.</h2>
        </div>
        <div className="gy-feature-list" role="list" aria-label="Featured menu items">
          {menuItems.map((item, index) => (
            <article className="gy-feature-row" key={item.name} role="listitem">
              <span className="gy-item-index">0{index + 1}</span>
              <div className="gy-feature-copy">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="gy-band gy-story-band" id="story">
        <div>
          <p className="gy-eyebrow">Why it feels different</p>
          <h2>More horizontal, more refined, less busy.</h2>
        </div>
        <div className="gy-story-copy">
          <p>
            The layout drops the stack of promo cards in favor of long storefront bands, simple separators, and larger type-led sections.
          </p>
          <p>
            The palette stays intact, but the composition is quieter, flatter, and more premium, with thin 1px rules doing most of the work.
          </p>
        </div>
      </section>

      <section className="gy-band gy-visit-band" id="visit">
        <div className="gy-visit-heading">
          <p className="gy-eyebrow">Visit Gumbo YAYA</p>
          <h2>Come for the crunch, stay for the warm room and slow Sunday pace.</h2>
        </div>
        <div className="gy-visit-details">
          <p>
            <MapPin size={16} /> Designed for a modern soul food restaurant, not a generic cafe template.
          </p>
          <p>
            <Clock3 size={16} /> Responsive, direct, and free of loading sequences or smooth-scroll behavior.
          </p>
        </div>
      </section>
    </main>
  );
}
