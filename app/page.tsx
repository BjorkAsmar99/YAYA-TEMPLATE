'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight, Clock3, MapPin, ShoppingBag } from 'lucide-react';
import { SmoothScroll } from '@/components/smooth-scroll';

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Journal', href: '#journal' },
  { label: 'Visit', href: '#visit' },
] as const;

const storyCards = [
  {
    eyebrow: 'Small Batch',
    title: 'Every plate starts with a house-made rhythm.',
    text: 'Crispy chicken, buttermilk batter, slow-built gravies, and waffles that land with a soft center and caramelized edge.',
  },
  {
    eyebrow: 'Patchwork Design',
    title: 'Editorial structure, translated into Southern hospitality.',
    text: 'We borrowed the reference site’s confident modules, oversized headings, and product-story cadence, then reworked them into a warmer Gumbo YAYA system.',
  },
  {
    eyebrow: 'Room Mood',
    title: 'Stone, timber, brass glow, and deep teal softness.',
    text: 'The room still drives the palette, turning cream, clay, sage, mustard, and ember red into a premium handmade restaurant feel.',
  },
] as const;

const featuredItems = [
  {
    name: 'YAYA Chicken & Waffle',
    description: 'Smoked maple butter, cayenne crunch, and a golden waffle with whipped cane butter.',
    badge: 'Signature drop',
    price: '$18',
  },
  {
    name: 'Midnight Gumbo Bowl',
    description: 'Dark roux, slow spice, rice, herbs, and a glossy spoonful of comfort.',
    badge: 'Authentic batch',
    price: '$16',
  },
  {
    name: 'Honey Heat Tenders',
    description: 'Thin crackle crust, fermented pepper heat, and a mustard honey finish.',
    badge: 'Small batch',
    price: '$15',
  },
] as const;

const marketRows = [
  ['Fried chicken', 'Waffles', 'Gumbo', 'Cornbread butter'],
  ['Cane syrup', 'Hot honey', 'Brown gravy', 'Pickled peppers'],
] as const;

const pressItems = ['Bon Appétit', 'Eater', 'Food52', 'The Infatuation'] as const;

function Intro() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add('intro-lock');
    const timer = window.setTimeout(() => {
      setHidden(true);
      document.body.classList.remove('intro-lock');
    }, 1400);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove('intro-lock');
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel intro-panel-left" />
      <div className="intro-panel intro-panel-right" />
      <div className="intro-core">
        <p>Gumbo YAYA</p>
        <div className="intro-mark">
          <span />
          <span />
        </div>
        <small>fried chicken, waffles, soul food</small>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="gy-home" id="top">
      <SmoothScroll />
      <Intro />

      <header className="gy-header">
        <div className="gy-marquee">Small batch comfort, shipped from the soul.</div>
        <div className="gy-header-bar">
          <a href="#top" className="gy-brand" aria-label="Gumbo YAYA home">
            Gumbo YAYA
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="gy-header-cta" href="#menu">
            Order now
          </a>
        </div>
      </header>

      <section className="gy-hero-grid">
        <article className="gy-panel gy-panel-copy gy-panel-lime">
          <p className="gy-kicker">Soul food pantry meets dining room glow</p>
          <h1>Fried chicken and waffles with a sharper point of view.</h1>
          <p className="gy-lead">
            A Potluck-inspired editorial layout, recast for Gumbo YAYA with warmer color, softer craft, and a handmade premium rhythm built around fried chicken, waffles, and soulful comfort.
          </p>
          <div className="gy-inline-note">
            <span>Built with modular rhythm</span>
            <p>Large headline blocks, product storytelling, compact utility details, and tactile hover states make the site feel closer to the source while staying fully YAYA.</p>
          </div>
        </article>

        <article className="gy-panel gy-panel-photo gy-panel-tall gy-reveal-card">
          <div className="gy-photo-wrap">
            <Image
              src="/gumbo-yaya-assets/room.jpg"
              alt="Gumbo YAYA dining room interior"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="gy-cover"
            />
          </div>
          <div className="gy-photo-caption">
            <span>Interior palette</span>
            <p>Cream stone, walnut timber, brass warmth, teal velvet, charcoal framing.</p>
          </div>
        </article>

        <article className="gy-panel gy-panel-product gy-reveal-card">
          <div className="gy-product-topline">
            <p className="gy-kicker">Hero product</p>
            <span className="gy-roundel">Best seller</span>
          </div>
          <div className="gy-plated-art" aria-hidden="true">
            <div className="gy-plated-waffle" />
            <div className="gy-plated-chicken gy-piece-one" />
            <div className="gy-plated-chicken gy-piece-two" />
            <div className="gy-plated-sauce" />
          </div>
          <div className="gy-product-copy">
            <h2>YAYA Chicken & Waffle</h2>
            <p>Bold product framing with smoked maple glaze, cane butter, and deep pepper crunch.</p>
          </div>
          <button type="button" className="gy-button gy-button-primary">
            Add to cart <ShoppingBag size={16} />
          </button>
        </article>

        <article className="gy-panel gy-panel-story">
          <p className="gy-kicker">House codes</p>
          <h2>Artisanal minimalism with a handmade pulse.</h2>
          <ul className="gy-bullet-list">
            <li>Small batch cooking</li>
            <li>Editorial product blocks</li>
            <li>Patchwork borders and hover lift</li>
          </ul>
        </article>
      </section>

      <section className="gy-market-grid" aria-label="Signature pantry and plate items">
        <article className="gy-panel gy-market-intro">
          <p className="gy-kicker">Market board</p>
          <h2>Clean categories, high appetite, quiet confidence.</h2>
        </article>
        {marketRows.map((row, rowIndex) => (
          <article className="gy-panel gy-market-row" key={rowIndex}>
            {row.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
        ))}
      </section>

      <section className="gy-story-grid" id="story">
        {storyCards.map((card) => (
          <article className="gy-panel gy-story-card gy-reveal-card" key={card.title}>
            <p className="gy-kicker">{card.eyebrow}</p>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="gy-menu-grid" id="menu">
        <article className="gy-panel gy-menu-intro">
          <p className="gy-kicker">Featured products</p>
          <h2>More like a curated market drop than a generic menu.</h2>
          <p>
            Inspired by the reference storefront structure, each item gets a tighter product module, stronger hierarchy, and a premium call-to-action without losing Gumbo YAYA warmth.
          </p>
        </article>
        {featuredItems.map((item, index) => (
          <article className="gy-panel gy-menu-card gy-reveal-card" key={item.name}>
            <div className="gy-menu-meta">
              <span className="gy-chip">{item.badge}</span>
              <span className="gy-menu-index">0{index + 1}</span>
            </div>
            <div className={`gy-menu-art gy-menu-art-${index + 1}`} aria-hidden="true" />
            <div className="gy-menu-copy">
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <strong>{item.price}</strong>
            </div>
            <button type="button" className="gy-button gy-button-primary">
              Add to cart <ShoppingBag size={16} />
            </button>
          </article>
        ))}
      </section>

      <section className="gy-press-grid" id="journal">
        <article className="gy-panel gy-press-copy">
          <p className="gy-kicker">Journal</p>
          <h2>Editorial signals tucked neatly into the patchwork.</h2>
          <p>Confidence without clutter. Logos and notes behave like proof points, not noise.</p>
        </article>
        <article className="gy-panel gy-press-logos">
          {pressItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </article>
      </section>

      <section className="gy-about-grid">
        <article className="gy-panel gy-about-copy">
          <p className="gy-kicker">About Gumbo YAYA</p>
          <h2>A little handwritten, a little polished, deeply personal.</h2>
          <p>
            Gumbo YAYA should feel like a neighborhood favorite in its best clothes. The new structure leans closer to the source with stronger modularity, oversized type, and cleaner product framing, while the content stays rooted in soulful Southern comfort.
          </p>
          <a href="#visit" className="gy-inline-link">
            Plan your visit <ArrowRight size={16} />
          </a>
        </article>
        <article className="gy-panel gy-about-note gy-reveal-card">
          <p>“Built from real room texture, crisp borders, and comfort food honesty. Elevated, but never precious.”</p>
        </article>
      </section>

      <section className="gy-visit-grid" id="visit">
        <article className="gy-panel gy-visit-main">
          <p className="gy-kicker">Visit</p>
          <h2>Come for the crunch, stay for the candlelight warmth.</h2>
        </article>
        <article className="gy-panel gy-visit-detail">
          <p>
            <MapPin size={16} /> Built around the dining room mood, material palette, and handmade brand texture.
          </p>
          <p>
            <Clock3 size={16} /> Responsive modular grid, stronger section rhythm, and refined hover-to-reveal behavior.
          </p>
        </article>
      </section>
    </main>
  );
}
