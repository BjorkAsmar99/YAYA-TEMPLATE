'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Clock3, MapPin, Phone, Wine, Menu as MenuIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScroll } from '@/components/smooth-scroll';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Vision', href: '#vision' },
  { label: 'Cuisine', href: '#cuisine' },
  { label: 'Cave', href: '#cave' },
  { label: 'Réserver', href: '#reservation' },
] as const;

const manifesto = [
  'Cuisine de braise, jus profonds et clarté graphique.',
  'Service calme, précis, presque architectural.',
  'Cave de caractère, pensée pour les longues soirées.',
] as const;

const scenes = [
  {
    index: '01',
    title: 'Le seuil s’ouvre comme une matière.',
    text: 'Le noir bordeaux, le laiton et la lumière vanille créent un accueil presque cinématographique, discret et immédiatement statutaire.',
  },
  {
    index: '02',
    title: 'Le repas avance par masses et respirations.',
    text: 'Plats dressés avec tension, rythme du service ralenti, plans larges et détails rapprochés pour laisser vivre chaque séquence.',
  },
  {
    index: '03',
    title: 'La fin reste chaude, longue, mémorable.',
    text: 'Desserts infusés, dernières bouteilles, conversation assourdie. Le lieu garde une trace, pas seulement une image.',
  },
] as const;

const menuMoments = [
  {
    label: 'Entrée',
    title: 'Crudo de sériole, agrumes fumés, huile de piment doux',
    note: 'Tension iodée, éclat froid, démarrage net.',
  },
  {
    label: 'Plat signature',
    title: 'Pastrami de veau rosé, betterave laquée, jus cacao',
    note: 'Dense, brillant, construit pour les rouges profonds.',
  },
  {
    label: 'Final',
    title: 'Poire confite, safran, tuile chaude au miel',
    note: 'Fin veloutée, précise, presque silencieuse.',
  },
] as const;

const cellar = [
  {
    house: 'Jérôme Prévost',
    bottle: 'La Closerie Extra Brut',
    pairing: 'Accueil, cru, premier feu',
    price: '180€',
  },
  {
    house: 'Domaine Roulot',
    bottle: 'Meursault 2021',
    pairing: 'Poissons nacrés, sauces courtes',
    price: '260€',
  },
  {
    house: 'Château Musar',
    bottle: 'Rouge 2017',
    pairing: 'Viandes fumées, fin de table',
    price: '210€',
  },
] as const;

const gallery = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
] as const;

function IntroLoader() {
  const [done, setDone] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      const timer = window.setTimeout(() => setDone(true), 150);
      return () => window.clearTimeout(timer);
    }

    document.body.classList.add('is-loading');
    const timer = window.setTimeout(() => {
      setDone(true);
      document.body.classList.remove('is-loading');
    }, 2600);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove('is-loading');
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-shell"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.7, 0, 0.3, 1] } }}
        >
          <motion.div className="loader-panel loader-panel-left" initial={{ x: 0 }} exit={{ x: '-102%', transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }} />
          <motion.div className="loader-panel loader-panel-right" initial={{ x: 0 }} exit={{ x: '102%', transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }} />
          <div className="loader-content">
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow">
              Pastrani Vino, Paris VIII
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '-0.06em' }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Pastrani Vino
            </motion.h1>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }} className="loader-line" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 0.8, delay: 0.8 }} className="loader-note">
              Dining in warm shadow, bronze light and slow fire.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FloatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="floating-nav">
      <a href="#top" className="brand-lockup">
        <span>Pastrani</span>
        <span>Vino</span>
      </a>
      <nav className="nav-desktop">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <a href="#reservation" className="nav-cta">Réserver</a>
      <button type="button" aria-label="Ouvrir le menu" className="nav-burger" onClick={() => setOpen((v) => !v)}>
        <MenuIcon size={18} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav className="nav-mobile" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);

  return (
    <section id="top" ref={ref} className="hero-section">
      <div className="hero-grid">
        <motion.div className="hero-copy" style={{ y: copyY }}>
          <p className="eyebrow">Restaurant éditorial, cave d’auteur, service du soir</p>
          <h1>Une table pensée comme un lieu d’architecture intérieure.</h1>
          <p className="hero-text">
            Pastrani Vino compose une expérience premium entre feu doux, vins sculptés et lumière bordeaux. Plus calme qu’un flagship, plus marquant qu’un restaurant classique.
          </p>
          <div className="hero-actions">
            <a href="#reservation" className="button-primary">Réserver une soirée</a>
            <a href="#vision" className="button-secondary">Explorer la maison</a>
          </div>
          <div className="manifesto-grid">
            {manifesto.map((item) => (
              <div key={item} className="manifesto-card">{item}</div>
            ))}
          </div>
        </motion.div>

        <motion.div className="hero-media" style={{ y: mediaY }}>
          <div className="hero-image-wrap">
            <Image src={gallery[0]} alt="Salle premium de restaurant" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="hero-image" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-aside top">
            <span>Signature</span>
            <strong>Pastrami de veau, jus brun, betterave braisée</strong>
          </div>
          <div className="hero-aside bottom">
            <span>Atmosphère</span>
            <strong>Calme, précis, feutré, légèrement dramatique</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VisionSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((card) => {
        gsap.fromTo(card, { y: 90, opacity: 0.2 }, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 86%', end: 'top 40%', scrub: 1 },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" ref={ref} className="vision-section">
      <div className="section-heading split">
        <div>
          <p className="eyebrow">Vision</p>
          <h2>Un storytelling lent, construit en séquences plutôt qu’en blocs.</h2>
        </div>
        <p>
          La composition s’inspire du calme radical de Mersi, puis injecte l’énergie premium et plus frontale d’un restaurant de destination. L’idée n’est pas d’être décoratif, mais désirable.
        </p>
      </div>

      <div className="vision-stack">
        {scenes.map((scene) => (
          <article key={scene.index} className="reveal-card scene-card">
            <span>{scene.index}</span>
            <div>
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CuisineSection() {
  return (
    <section id="cuisine" className="cuisine-section">
      <div className="sticky-frame">
        <div className="section-heading">
          <p className="eyebrow">Cuisine</p>
          <h2>Des plats dressés avec de la tenue, pas avec du bruit.</h2>
        </div>
        <div className="menu-grid">
          {menuMoments.map((item, index) => (
            <article key={item.title} className="menu-card">
              <span>0{index + 1}</span>
              <p className="menu-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </article>
          ))}
          <div className="menu-photo">
            <Image src={gallery[1]} alt="Dressage gastronomique" fill sizes="(max-width: 1024px) 100vw, 48vw" className="cover-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CellarSection() {
  const [active, setActive] = useState(0);
  const current = cellar[active];
  const tones = useMemo(() => ['tone-one', 'tone-two', 'tone-three'], []);

  return (
    <section id="cave" className="cellar-section">
      <div className="section-heading split">
        <div>
          <p className="eyebrow">Cave</p>
          <h2>Une carte courte, statutaire, pensée comme un objet précieux.</h2>
        </div>
        <div className="pill-row">
          {cellar.map((item, index) => (
            <button key={item.bottle} type="button" onMouseEnter={() => setActive(index)} onClick={() => setActive(index)} className={active === index ? 'is-active' : ''}>
              {item.house}
            </button>
          ))}
        </div>
      </div>
      <div className={`cellar-card ${tones[active]}`}>
        <div>
          <p className="eyebrow">{current.house}</p>
          <h3>{current.bottle}</h3>
          <p>{current.pairing}</p>
        </div>
        <div className="cellar-meta">
          <div><Wine size={18} /><span>Grand caractère</span></div>
          <strong>{current.price}</strong>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="gallery-layout">
        <article className="gallery-large">
          <Image src={gallery[2]} alt="Champagne servi" fill sizes="(max-width: 1024px) 100vw, 60vw" className="cover-image" />
          <div className="gallery-overlay" />
          <div className="gallery-copy">
            <p className="eyebrow">Matière et lumière</p>
            <h2>Le projet joue les surfaces, le grain et les contrastes sans perdre la lisibilité commerciale.</h2>
          </div>
        </article>
        <article className="gallery-text">
          <p>
            Les teintes imposées sont utilisées en profondeur, jamais en aplats naïfs. Le vert ardoise calme, la vanille allège, le bronze réchauffe, le rouge brun structure, le bordeaux signe.
          </p>
          <a href="#reservation">Réserver maintenant <ArrowUpRight size={16} /></a>
        </article>
      </div>
    </section>
  );
}

function ReservationSection() {
  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-shell">
        <div>
          <p className="eyebrow">Réservation</p>
          <h2>Privatisations, tables signatures, arrivées tardives au champagne.</h2>
          <p>
            Nous ouvrons la réservation pour le dîner, les anniversaires haut de gamme et les demandes plus confidentielles. Réponse rapide, ton sobre, expérience maîtrisée.
          </p>
        </div>
        <div className="reservation-grid">
          <a href="tel:+33183910027" className="info-card"><Phone size={18} /> <div><span>Téléphone</span><strong>+33 1 83 91 00 27</strong></div></a>
          <div className="info-card"><MapPin size={18} /> <div><span>Adresse</span><strong>7 passage des Lumières, Paris VIII</strong></div></div>
          <div className="info-card"><Clock3 size={18} /> <div><span>Horaires</span><strong>Mar. au sam. · 19h à 23h30</strong></div></div>
          <a href="mailto:reservation@pastranivino.fr" className="button-primary wide">Écrire au concierge <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="page-shell">
      <SmoothScroll />
      <IntroLoader />
      <FloatingNav />
      <HeroSection />
      <VisionSection />
      <CuisineSection />
      <CellarSection />
      <GallerySection />
      <ReservationSection />
    </main>
  );
}
