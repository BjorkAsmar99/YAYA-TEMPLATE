'use client';

import Image from 'next/image';
import { ArrowRight, Clock3, MapPin } from 'lucide-react';

const menuItems = [
  {
    title: 'Chicken & Waffle Stack',
    blurb: 'Shatter-crisp thighs, cayenne cane syrup, salted butter waffle.',
    price: '$18',
    tone: 'gold',
  },
  {
    title: 'Dark Roux Gumbo',
    blurb: 'Long-cooked stock, smoked sausage, rice, scallion, pepper heat.',
    price: '$16',
    tone: 'rose',
  },
  {
    title: 'Hot Honey Tenders',
    blurb: 'Thin crackle crust, pickle snap, glossy sweet heat.',
    price: '$15',
    tone: 'mint',
  },
] as const;

const storyNotes = [
  'Potluck-tight proportions, but retuned for syrup gloss, roux depth, and storefront warmth.',
  'A few horizontal editorial bands now cut across the page so the composition feels more like a poster system than a restaurant template.',
] as const;

export default function Page() {
  return (
    <main className="potluck-yaya" id="top">
      <section className="py-strip py-strip-pink" aria-label="Announcement">
        <div className="py-marquee">
          <span>Gumbo YAYA soul food storefront, fried chicken, waffles, gumbo, all day comfort.</span>
        </div>
      </section>

      <header className="py-header">
        <a href="#top" className="py-brand-mark" aria-label="Gumbo YAYA home">
          <Image
            src="/gumbo-yaya-assets/Gumbo-Yaya-Logo-Vertical.png"
            alt="Gumbo YAYA logo"
            width={74}
            height={74}
            className="py-brand-logo"
            priority
          />
        </a>
        <nav className="py-nav" aria-label="Primary">
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="py-actions" aria-label="Utilities">
          <a href="#visit">Order</a>
        </div>
      </header>

      <section className="py-logo-band">
        <div className="py-logo-band-copy">
          <p className="py-kicker">New Orleans comfort, framed like a poster</p>
          <div className="py-logo-lockup" aria-hidden="true">
            <span>GUMBO</span>
            <span>YAYA</span>
          </div>
        </div>
        <div className="py-logo-hero-card py-card-yellow">
          <Image
            src="/gumbo-yaya-assets/Gumbo-Yaya-Logo-Vertical.png"
            alt="Illustrated Gumbo YAYA logo"
            width={560}
            height={720}
            className="py-logo-hero-image"
          />
        </div>
      </section>

      <section className="py-hero" id="story">
        <div className="py-hero-copy py-panel-lilac">
          <p className="py-kicker">Soul food, sharpened</p>
          <p className="py-intro">
            Gumbo YAYA channels the Potluck split screen more exactly now, with bolder proportion, cleaner type rhythm, and richer food photography replacing the old room-led mood.
          </p>
          <a href="#menu" className="py-readmore">
            Read menu <ArrowRight size={17} />
          </a>
        </div>
        <div className="py-hero-media">
          <div className="py-photo-frame py-photo-tall">
            <Image
              src="/gumbo-yaya-assets/food.webp"
              alt="Chicken and waffles with syrup"
              fill
              className="py-photo"
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="py-hero-caption py-card-cream">
            <p className="py-kicker">Featured plate</p>
            <p>Golden crust, buttered waffle, cane syrup sheen, and no generic restaurant filler anywhere in the frame.</p>
          </div>
        </div>
      </section>

      <section className="py-horizontal-band py-card-black" aria-label="Design notes">
        <div>
          <p className="py-kicker">Graphic direction</p>
          <h2>Hard color fields, centered navigation, and a more exact Potluck-market silhouette.</h2>
        </div>
        <div className="py-horizontal-copy">
          {storyNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>

      <section className="py-grid-band" id="menu">
        <article className="py-grid-card py-card-cream py-copy-card">
          <p className="py-kicker">House line</p>
          <h2>Chicken, waffles, gumbo, pie, and a tighter storefront composition built for lingering.</h2>
        </article>

        <article className="py-grid-card py-card-green py-list-card">
          <p className="py-kicker">Featured plates</p>
          <div className="py-menu-list" role="list">
            {menuItems.map((item, index) => (
              <div className={`py-menu-item py-tone-${item.tone}`} key={item.title} role="listitem">
                <span className="py-menu-index">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="py-grid-card py-card-red py-photo-card">
          <div className="py-photo-frame py-photo-square">
            <Image
              src="/gumbo-yaya-assets/food 2.webp"
              alt="Fried chicken and waffles with sides across the table"
              fill
              className="py-photo"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </article>

        <article className="py-grid-card py-card-black py-cta-card">
          <p className="py-kicker">Now serving</p>
          <h3>Weekend waffle brunch and late fried chicken plates.</h3>
          <a href="#visit">Plan your visit</a>
        </article>
      </section>

      <section className="py-split-band">
        <div className="py-split-copy py-panel-yellow">
          <p className="py-kicker">Composition first</p>
          <h2>Big fields, thin rules, oversized sans, and horizontal breaks that loosen the grid.</h2>
        </div>
        <div className="py-split-stack">
          <div className="py-stack-card py-card-sand py-photo-panel">
            <div className="py-photo-frame py-photo-wide">
              <Image
                src="/gumbo-yaya-assets/Kitchen.jpg"
                alt="Gumbo YAYA interior counter and kitchen"
                fill
                className="py-photo"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="py-stack-card py-card-pink">
            <p>
              The counter scene brings in real service energy, while the surrounding flat blocks keep the page in graphic-design territory instead of drifting into a standard food site.
            </p>
          </div>
        </div>
      </section>

      <section className="py-horizontal-band py-card-cream">
        <div>
          <p className="py-kicker">Storefront read</p>
          <h2>Use the real signage, then frame it with strict spacing and confident copy.</h2>
        </div>
        <div className="py-band-image-wrap">
          <div className="py-photo-frame py-photo-banner">
            <Image
              src="/gumbo-yaya-assets/Lovan_GumboYaya-3.webp"
              alt="Gumbo YAYA storefront exterior"
              fill
              className="py-photo"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-visit" id="visit">
        <div className="py-visit-copy py-card-cream">
          <p className="py-kicker">Visit Gumbo YAYA</p>
          <h2>Come for the crunch, stay for the storefront glow and deep brown gravy.</h2>
        </div>
        <div className="py-visit-meta py-card-green">
          <p>
            <MapPin size={16} /> A more faithful Potluck-style visual system, retuned for soul food and fried chicken.
          </p>
          <p>
            <Clock3 size={16} /> No smooth scroll, no intro animation, no loading sequence.
          </p>
        </div>
      </section>
    </main>
  );
}
