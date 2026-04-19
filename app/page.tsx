'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { SmoothScroll } from '@/components/smooth-scroll';

const navItems = [
  { label: 'Accueil', href: '#top' },
  { label: 'Cuisine', href: '#sequence' },
  { label: 'Réserver', href: '#reservation' },
] as const;

const indexItems = [
  {
    code: 'I',
    title: 'Cuisine',
    text: 'Braise douce, sauces courtes, gestes nets.',
  },
  {
    code: 'II',
    title: 'Salle',
    text: 'Lumière basse, densité tenue, rythme calme.',
  },
  {
    code: 'III',
    title: 'Cave',
    text: 'Sélection courte, profonde, pour le soir.',
  },
] as const;

const notes = [
  ['Service', 'Mardi, samedi · 19:00, 23:30'],
  ['Adresse', '7 passage des Lumières, Paris VIII'],
  ['Contact', '+33 1 83 91 00 27'],
] as const;

function Intro() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add('intro-lock');
    const timer = window.setTimeout(() => {
      setHidden(true);
      document.body.classList.remove('intro-lock');
    }, 1850);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove('intro-lock');
    };
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-plane intro-plane-left" />
      <div className="intro-plane intro-plane-right" />
      <div className="intro-core">
        <p>Pastrani Vino</p>
        <div className="intro-mark">
          <span />
          <span />
        </div>
        <small>Paris VIII</small>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="home" id="top">
      <SmoothScroll />
      <Intro />

      <header className="site-header">
        <a href="#top" className="brand">Pastrani Vino</a>
        <nav aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Restaurant · cave · Paris VIII</p>
          <div className="hero-copy-block">
            <h1>Pastrani Vino</h1>
            <p>
              Table du soir. Cuisine précise, cave courte, salle tenue.
            </p>
          </div>
          <dl className="hero-notes">
            {notes.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-media">
          <div className="hero-frame">
            <Image
              src="/pasta-cosi-assets/hero-dining-room.jpg"
              alt="Salle de restaurant sombre et structurée"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
              className="cover"
            />
          </div>
          <div className="hero-caption">
            <span>01</span>
            <p>Lumière chaude retenue, profondeur bordeaux, contrepoint minéral.</p>
          </div>
        </div>
      </section>

      <section className="sequence" id="sequence">
        <div className="sequence-image">
          <Image
            src="/pasta-cosi-assets/gallery-bar.jpg"
            alt="Bar et matière intérieure"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            className="cover"
          />
        </div>

        <div className="sequence-index">
          <p className="kicker">Index</p>
          <div className="index-list">
            {indexItems.map((item) => (
              <article key={item.code}>
                <span>{item.code}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="transition-block">
        <p>
          Le lieu avance par plans, non par effets. Une matière sombre, quelques accents chauds,
          un service sans emphase.
        </p>
      </section>

      <section className="reservation" id="reservation">
        <div className="reservation-image">
          <Image
            src="/pasta-cosi-assets/gallery-ambience.jpg"
            alt="Ambiance de salle en soirée"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="cover"
          />
        </div>

        <div className="reservation-copy">
          <p className="kicker">Réservation</p>
          <div className="reservation-lines">
            <a href="tel:+33183910027"><Phone size={16} /><span>+33 1 83 91 00 27</span></a>
            <a href="mailto:reservation@pastranivino.fr"><ArrowUpRight size={16} /><span>reservation@pastranivino.fr</span></a>
            <p><MapPin size={16} /><span>7 passage des Lumières, Paris VIII</span></p>
            <p><Clock3 size={16} /><span>Mardi au samedi, 19:00 à 23:30</span></p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>Pastrani Vino</span>
        <span>Paris VIII</span>
      </footer>
    </main>
  );
}
