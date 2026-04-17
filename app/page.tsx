'use client';

import Image from 'next/image';
import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const signatureDishes = [
  {
    name: 'Tagliolini al tartufo',
    note: 'Crème légère, profondeur boisée, finale longue.',
  },
  {
    name: 'Paccheri alla vodka',
    note: 'Tomate dense, soie épicée, chaleur maîtrisée.',
  },
  {
    name: 'Tiramisu maison',
    note: 'Nuage poudré, café net, douceur retenue.',
  },
] as const;

const narrativeBlocks = [
  {
    eyebrow: 'Pasta Cosi · trattoria contemporaine',
    title: 'Un lieu italien pensé comme une présence, pas comme un catalogue.',
    text:
      'La première version du site pose le ton. Fond minéral, rythme éditorial, images larges, texte rare. On ne remplit pas l’écran, on construit un désir calme et immédiat.',
    image: '/pasta-cosi-assets/hero-dining-room.jpg',
    alt: 'Grande table dressée dans la salle de Pasta Cosi',
  },
  {
    eyebrow: 'Matière · geste · chaleur',
    title: 'La pasta devient le centre visuel, comme une scène captée au bon moment.',
    text:
      'La référence Blend Bend fonctionne par retenue. Ici, on reprend cette discipline, puis on la traduit pour un restaurant parisien: plus sensuel, plus habité, plus organique.',
    image: '/pasta-cosi-assets/gallery-pasta-truffle.jpg',
    alt: 'Assiette de pâtes travaillée en gros plan',
  },
] as const;

const details = [
  'Cuisine italienne contemporaine',
  'Paris 5e, adresse confidentielle',
  'Réservations dîner et déjeuner',
] as const;

const introRows = 14;
const centerIndex = Math.floor(introRows / 2);
const introSnapEase: [number, number, number, number] = [0.22, 0.84, 0.3, 1];
const introDigitalEase: [number, number, number, number] = [0.76, 0, 0.24, 1];
const introLiquidEase: [number, number, number, number] = [0.19, 0.82, 0.22, 1];

function IntroCascade({
  onDone,
  targetRef,
}: {
  onDone: () => void;
  targetRef: RefObject<HTMLElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<'spread' | 'contract' | 'collapse' | 'reveal'>('spread');
  const [viewportHeight, setViewportHeight] = useState(1080);
  const [heroSnapshot, setHeroSnapshot] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      onDone();
      return;
    }

    const updateMetrics = () => {
      setViewportHeight(window.innerHeight || 1080);
      const target = targetRef.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        setHeroSnapshot({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      }
    };
    updateMetrics();
    window.addEventListener('resize', updateMetrics);

    const html = document.documentElement;
    const body = document.body;
    html.classList.add('pc-intro-lock');
    body.classList.add('pc-intro-lock');

    const timers = [
      window.setTimeout(() => setPhase('contract'), 120),
      window.setTimeout(() => setPhase('collapse'), 520),
      window.setTimeout(() => setPhase('reveal'), 920),
      window.setTimeout(() => {
        if (finishedRef.current) return;
        finishedRef.current = true;
        html.classList.remove('pc-intro-lock');
        body.classList.remove('pc-intro-lock');
        onDone();
      }, 1960),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('resize', updateMetrics);
      html.classList.remove('pc-intro-lock');
      body.classList.remove('pc-intro-lock');
    };
  }, [onDone, reduceMotion, targetRef]);

  if (reduceMotion) return null;

  return (
    <div className={`pc-intro-cascade pc-intro-cascade--${phase}`} aria-hidden="true">
      <div className="pc-intro-cascade__stack">
        {Array.from({ length: introRows }).map((_, index) => {
          const offset = index - centerIndex;
          const distance = Math.abs(offset);
          const isCenter = index === centerIndex;
          const spreadY = Math.round(offset * 74);
          const contractY = Math.round(offset * 18);
          const collapseY = 0;
          const revealY = Math.round(viewportHeight * (offset < 0 ? -0.78 : 0.78));

          let animate;
          let transition;
          if (phase === 'contract') {
            animate = {
              y: contractY,
              opacity: isCenter ? 1 : Math.max(0.5, 0.88 - distance * 0.06),
              scale: isCenter ? 1 : 0.986 - distance * 0.005,
              filter: 'blur(0px)',
            };
            transition = {
              duration: 0.3,
              delay: distance * 0.008,
              ease: introSnapEase,
            };
          } else if (phase === 'collapse') {
            animate = {
              y: collapseY,
              opacity: isCenter ? 1 : Math.max(0.14, 0.22 - distance * 0.008),
              scale: 1,
              filter: 'blur(0px)',
            };
            transition = {
              duration: 0.32,
              delay: distance * 0.006,
              ease: introSnapEase,
            };
          } else if (phase === 'reveal') {
            animate = {
              y: isCenter ? [0, 4, 0] : [collapseY, collapseY * 0.45, revealY],
              opacity: isCenter ? [1, 0.6, 0] : [Math.max(0.12, 0.22 - distance * 0.008), 0.16, 0],
              scale: isCenter ? [1, 1.02, 0.94] : [1, 1.015, 0.96],
              filter: isCenter ? ['blur(0px)', 'blur(10px)', 'blur(22px)'] : ['blur(0px)', 'blur(6px)', 'blur(18px)'],
            };
            transition = {
              duration: 0.76,
              times: [0, 0.34, 1],
              delay: distance * 0.016,
              ease: introDigitalEase,
            };
          } else {
            animate = {
              y: spreadY,
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            };
            transition = { duration: 0 };
          }

          return (
            <motion.div
              key={index}
              className={`pc-intro-cascade__row ${isCenter ? 'is-center' : ''}`}
              initial={{ y: spreadY, opacity: 1, scale: 1, filter: 'blur(0px)' }}
              animate={animate}
              transition={transition}
            >
              <span>Pasta Cosi</span>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        className="pc-intro-cascade__psyche"
        initial={{ opacity: 0, scale: 0.92, rotate: -8, filter: 'blur(36px)' }}
        animate={
          phase === 'reveal'
            ? {
                opacity: [0, 0.88, 0.68, 0.18, 0],
                scale: [0.92, 1.02, 1.12, 1.18, 1.24],
                rotate: [-8, -3, 4, 7, 10],
                filter: ['blur(36px)', 'blur(18px)', 'blur(26px)', 'blur(34px)', 'blur(44px)'],
              }
            : { opacity: 0, scale: 0.92, rotate: -8, filter: 'blur(36px)' }
        }
        transition={{ duration: 1.14, times: [0, 0.18, 0.48, 0.76, 1], ease: introLiquidEase }}
      />
      <motion.div
        className="pc-intro-cascade__morph"
        initial={heroSnapshot ? { opacity: 0, top: '50%', left: '50%', width: '24vw', height: '18vh', x: '-50%', y: '-50%', scale: 0.68, rotate: -10, filter: 'blur(30px)' } : false}
        animate={
          phase === 'reveal' && heroSnapshot
            ? {
                opacity: [0, 0.72, 0.96, 0.48, 0],
                top: [`50%`, `${heroSnapshot.top + heroSnapshot.height * 0.52}px`, `${heroSnapshot.top + heroSnapshot.height * 0.5}px`, `${heroSnapshot.top + heroSnapshot.height * 0.5}px`, `${heroSnapshot.top + heroSnapshot.height * 0.5}px`],
                left: [`50%`, `${heroSnapshot.left + heroSnapshot.width * 0.48}px`, `${heroSnapshot.left + heroSnapshot.width * 0.5}px`, `${heroSnapshot.left + heroSnapshot.width * 0.5}px`, `${heroSnapshot.left + heroSnapshot.width * 0.5}px`],
                width: ['24vw', `${Math.max(heroSnapshot.width * 0.5, 260)}px`, `${heroSnapshot.width * 0.9}px`, `${heroSnapshot.width * 1.04}px`, `${heroSnapshot.width * 1.1}px`],
                height: ['18vh', `${Math.max(heroSnapshot.height * 0.34, 160)}px`, `${heroSnapshot.height * 0.84}px`, `${heroSnapshot.height * 0.98}px`, `${heroSnapshot.height * 1.06}px`],
                x: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                y: ['-50%', '-50%', '-50%', '-50%', '-50%'],
                scale: [0.68, 0.84, 0.96, 1.02, 1.06],
                rotate: [-10, -4, 3, 6, 8],
                filter: ['blur(30px)', 'blur(18px)', 'blur(20px)', 'blur(30px)', 'blur(40px)'],
              }
            : { opacity: 0, scale: 0.68, rotate: -10, filter: 'blur(30px)' }
        }
        transition={{ duration: 1.18, times: [0, 0.2, 0.52, 0.8, 1], ease: introLiquidEase }}
      />
      <motion.div
        className="pc-intro-cascade__grain"
        initial={{ opacity: 0 }}
        animate={phase === 'reveal' ? { opacity: [0, 0.18, 0.12, 0] } : { opacity: 0 }}
        transition={{ duration: 1.02, times: [0, 0.24, 0.72, 1], ease: introLiquidEase }}
      />
      <motion.div
        className="pc-intro-cascade__veil"
        initial={{ opacity: 0 }}
        animate={phase === 'reveal' ? { opacity: [0, 0.28, 0.76, 1] } : { opacity: 0 }}
        transition={{ duration: 0.82, times: [0, 0.24, 0.68, 1], ease: introLiquidEase }}
      />
      <motion.div
        className="pc-intro-cascade__fade"
        initial={{ opacity: 1 }}
        animate={phase === 'reveal' ? { opacity: [1, 0.86, 0.38, 0] } : { opacity: 1 }}
        transition={{ duration: 0.84, times: [0, 0.28, 0.72, 1], ease: introLiquidEase }}
      />
    </div>
  );
}

function Wordmark() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const next = Math.min(window.scrollY / max, 1);
      setProgress(next);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [reduceMotion]);

  const scale = 1 - progress * 0.08;
  const translateY = progress * -22;
  const letterSpacing = -0.055 - progress * 0.01;

  return (
    <div className="pc-wordmark-wrap" aria-label="Pasta Cosi">
      <div
        className="pc-wordmark"
        style={{
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
          letterSpacing: `${letterSpacing}em`,
        }}
      >
        <span>Pasta</span>
        <span>Cosi</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <main className="pc-page">
      {!introDone && <IntroCascade onDone={() => setIntroDone(true)} targetRef={heroRef} />}

      <header className="pc-header">
        <nav className="pc-nav" aria-label="Navigation principale">
          <a href="#hero" className="pc-nav__meta">
            Pasta Cosi
          </a>
          <div className="pc-nav__links">
            <a href="#story">Histoire</a>
            <a href="#carte">Carte</a>
            <a href="#reservation">Réserver</a>
          </div>
        </nav>

        <section className="pc-hero" id="hero" ref={heroRef}>
          <Wordmark />

          <div className="pc-hero__media">
            <Image
              src="/pasta-cosi-assets/hero-dining-room.jpg"
              alt="Vue de la salle principale de Pasta Cosi"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 86vw"
              className="object-cover"
            />

            <div className="pc-hero__badge">
              <div className="pc-hero__badge-mark" aria-hidden="true">
                <span />
                <span />
              </div>
              <p>Trattoria italienne contemporaine</p>
            </div>

            <div className="pc-hero__caption">Pasta Cosi, Paris</div>
          </div>
        </section>
      </header>

      <section className="pc-intro" id="story">
        <div className="pc-intro__left">
          <p className="pc-eyebrow">Première impression</p>
          <h1>Une landing page qui installe immédiatement le lieu, sans effet cheap, sans blocs génériques.</h1>
        </div>

        <div className="pc-intro__right">
          <p>
            L’arrivée devient maintenant une vraie mise en scène. Le nom se répète, se resserre, puis la dernière ligne vient se fondre dans le wordmark de la hero pour créer une entrée plus cinématographique et plus nette.
          </p>

          <ul className="pc-detail-list">
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pc-story-grid" aria-label="Narration visuelle">
        {narrativeBlocks.map((block, index) => (
          <article key={block.title} className={`pc-story-card ${index === 1 ? 'is-shifted' : ''}`}>
            <div className="pc-story-card__copy">
              <p className="pc-eyebrow">{block.eyebrow}</p>
              <h2>{block.title}</h2>
              <p>{block.text}</p>
            </div>
            <div className="pc-story-card__media">
              <Image
                src={block.image}
                alt={block.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </section>

      <section className="pc-quote-band">
        <p>
          “Le bon luxe pour ce site, c’est la maîtrise. Une belle image, une belle phrase, puis le silence.”
        </p>
      </section>

      <section className="pc-menu-section" id="carte">
        <div className="pc-menu-section__intro">
          <p className="pc-eyebrow">Sélection mise en avant</p>
          <h2>On montre peu, mais bien. Trois plats suffisent à faire monter l’envie.</h2>
        </div>

        <div className="pc-menu-list">
          {signatureDishes.map((dish) => (
            <article key={dish.name} className="pc-menu-item">
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.note}</p>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="pc-bottom-grid">
        <div className="pc-bottom-grid__image">
          <Image
            src="/pasta-cosi-assets/gallery-ambience.jpg"
            alt="Ambiance élégante et tamisée du restaurant Pasta Cosi"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            className="object-cover"
          />
        </div>

        <div className="pc-reservation" id="reservation">
          <p className="pc-eyebrow">Réservation</p>
          <h2>La page se termine exactement là où elle doit convertir.</h2>

          <div className="pc-reservation__meta">
            <p>
              <Phone size={16} /> {siteData.phone}
            </p>
            <p>
              <MapPin size={16} /> {siteData.address}
            </p>
            <p>
              <Clock3 size={16} /> {siteData.hours[0]}
            </p>
            <p>
              <Clock3 size={16} /> {siteData.hours[1]}
            </p>
          </div>

          <div className="pc-reservation__actions">
            <a className="pc-button pc-button--solid" href={`tel:${siteData.phone.replace(/\s+/g, '')}`}>
              Appeler
            </a>
            <a className="pc-button pc-button--ghost" href={`mailto:${siteData.email}`}>
              Réserver par email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
