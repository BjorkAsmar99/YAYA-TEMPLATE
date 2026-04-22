'use client';

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
          GY
        </a>
        <nav className="py-nav" aria-label="Primary">
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="py-actions" aria-label="Utilities">
          <a href="#visit">Order</a>
          <a href="#menu">Cart</a>
        </div>
      </header>

      <section className="py-logo-band">
        <div className="py-logo-lockup">
          <span>GUMBO</span>
          <span>YAYA</span>
        </div>
      </section>

      <section className="py-hero" id="story">
        <div className="py-hero-image" role="img" aria-label="Warm Gumbo YAYA dining room" />
        <div className="py-hero-copy py-panel-lilac">
          <p className="py-kicker">Soul food, sharpened</p>
          <p className="py-intro">
            Gumbo YAYA channels the Potluck-style split screen, oversized type, and bold Korean-market color blocking, then swaps in fried chicken, waffles, dark roux gumbo, and a slower Southern room.
          </p>
          <a href="#menu" className="py-readmore">
            Read menu <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="py-grid-band" id="menu">
        <article className="py-grid-card py-card-cream py-copy-card">
          <p className="py-kicker">House line</p>
          <h2>Chicken, waffles, gumbo, pie, and a dining room built for lingering.</h2>
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

        <article className="py-grid-card py-card-red py-stat-card">
          <p className="py-kicker">Dining notes</p>
          <p>Buttermilk crunch, cane syrup gloss, jazz-night warmth, and a storefront rhythm that feels graphic instead of generic.</p>
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
          <h2>Big fields, thin rules, oversized sans, and hard-edged color changes.</h2>
        </div>
        <div className="py-split-stack">
          <div className="py-stack-card py-card-sand">
            <p>
              The layout now copies the reference more directly, with the giant logo band, poster-like split hero, and flat blocks carrying the hierarchy instead of decorative restaurant tropes.
            </p>
          </div>
          <div className="py-stack-card py-card-pink">
            <p>
              Typography is pushed into the same family of compressed-feeling, oversized sans display with tighter tracking and larger editorial paragraphs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-visit" id="visit">
        <div className="py-visit-copy py-card-cream">
          <p className="py-kicker">Visit Gumbo YAYA</p>
          <h2>Come for the crunch, stay for the soft light and deep brown gravy.</h2>
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
