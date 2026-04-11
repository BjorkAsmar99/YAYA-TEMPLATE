'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const manifesto = [
  'La lumière avant le bruit.',
  'La pâte avant le discours.',
  'Le service avant le spectacle.',
] as const;

const rooms = [
  {
    id: 'salle',
    label: '01 · Le seuil',
    title: 'On vient d’abord pour la présence du lieu.',
    text:
      'Velours brun, lueur ambrée, profondeur calme. Pasta Cosi n’est pas présenté comme une fiche restaurant mais comme une entrée en matière, presque un plan-séquence.',
    image: '/pasta-cosi-assets/hero-dining-room.jpg',
    alt: 'La salle de Pasta Cosi baignée d’une lumière chaude',
    align: 'top',
  },
  {
    id: 'geste',
    label: '02 · Le geste',
    title: 'La pasta devient un objet de désir, pas une vignette de menu.',
    text:
      'Le plat signature prend l’espace, sans grille e-commerce, sans sur-promesse. On cadre la matière, la crème, la densité, le silence autour.',
    image: '/pasta-cosi-assets/gallery-pasta-truffle.jpg',
    alt: 'Une assiette de pâtes à la truffe servie comme un portrait',
    align: 'center',
  },
  {
    id: 'rythme',
    label: '03 · Le tempo',
    title: 'Le restaurant se raconte par son rythme intérieur.',
    text:
      'Le bar, les tables, les regards, le temps qui ralentit. L’expérience cherche la tension juste entre chaleur italienne et retenue presque cinématographique.',
    image: '/pasta-cosi-assets/gallery-bar.jpg',
    alt: 'Le bar de Pasta Cosi, doré et feutré',
    align: 'center',
  },
  {
    id: 'memoire',
    label: '04 · La trace',
    title: 'On doit quitter le site avec la sensation d’avoir déjà passé la porte.',
    text:
      'Dessert, dernière lumière, envie de réserver. La fin ne cherche pas l’effet. Elle laisse une empreinte simple, nette, durable.',
    image: '/pasta-cosi-assets/gallery-dessert.jpg',
    alt: 'Dessert de Pasta Cosi dans une ambiance de fin de soirée',
    align: 'center',
  },
] as const;

const menuNotes = [
  ['Rigatoni à la truffe', 'ample, crémeux, nocturne'],
  ['Linguine crevettes', 'vif, salin, lumineux'],
  ['Tiramisu minute', 'léger, poudré, final'],
] as const;

function IntroPortal() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      const timeout = window.setTimeout(() => setVisible(false), 120);
      return () => window.clearTimeout(timeout);
    }

    document.body.classList.add('pc-lock');
    const timeout = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove('pc-lock');
    }, 4300);

    return () => {
      window.clearTimeout(timeout);
      document.body.classList.remove('pc-lock');
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="pc-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } }}
        >
          <div className="pc-intro__grain" />
          <motion.div
            className="pc-intro__copy"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: [0, 1, 1, 0], y: [20, 0, 0, -16] }}
            transition={reduceMotion ? { duration: 0.2 } : { duration: 2.1, times: [0, 0.18, 0.76, 1], ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="pc-intro__line"
              initial={reduceMotion ? false : { rotateX: -92, opacity: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { rotateX: [-92, 0, 0, 84], opacity: [0, 1, 1, 0] }}
              transition={reduceMotion ? { duration: 0.2 } : { duration: 2.4, times: [0, 0.28, 0.7, 1], ease: [0.2, 0.9, 0.2, 1] }}
            >
              Pasta Cosi
            </motion.p>
            <span>Entrer pour dîner</span>
          </motion.div>

          <motion.div
            className="pc-door"
            initial={reduceMotion ? false : { scale: 0.9, opacity: 0 }}
            animate={reduceMotion ? { opacity: 0 } : { scale: [0.9, 1, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 0.8, delay: 1.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="pc-door__frame"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? { opacity: 0 } : { opacity: [0, 1, 1] }}
              transition={{ duration: 0.5, delay: 1.75 }}
            >
              <motion.div
                className="pc-door__panel pc-door__panel--left"
                initial={reduceMotion ? false : { rotateY: 0 }}
                animate={reduceMotion ? { rotateY: -92 } : { rotateY: [0, 0, -92] }}
                transition={{ duration: 1.45, times: [0, 0.18, 1], delay: 2.15, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="pc-door__panel pc-door__panel--right"
                initial={reduceMotion ? false : { rotateY: 0 }}
                animate={reduceMotion ? { rotateY: 92 } : { rotateY: [0, 0, 92] }}
                transition={{ duration: 1.45, times: [0, 0.18, 1], delay: 2.15, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="pc-door__light"
                initial={reduceMotion ? false : { opacity: 0.15, scaleX: 0.16 }}
                animate={reduceMotion ? { opacity: 0 } : { opacity: [0.15, 0.9, 0], scaleX: [0.16, 1.1, 1.2] }}
                transition={{ duration: 1.25, delay: 2.35, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <main className="pc-site">
      <IntroPortal />

      <section className="pc-hero" id="top">
        <div className="pc-nav">
          <a href="#top" className="pc-nav__brand">
            Pasta Cosi
          </a>
          <div className="pc-nav__links">
            <a href="#manifesto">Manifeste</a>
            <a href="#carte">Carte</a>
            <a href="#reservation">Réserver</a>
          </div>
        </div>

        <div className="pc-hero__grid">
          <div className="pc-hero__lead">
            <p className="pc-kicker">Paris 5 · restaurant italien</p>
            <h1>Une porte, une lueur, une table que l’on désire avant même d’avoir faim.</h1>
            <p className="pc-hero__text">
              Le site devient un seuil. Pas une landing page premium de plus, mais une traversée lente,
              habitée, où les vraies images portent le récit et où chaque bloc prépare le geste final,
              réserver pour ce soir.
            </p>
          </div>

          <div className="pc-hero__visual">
            <div className="pc-hero__image pc-hero__image--main">
              <Image
                src="/pasta-cosi-assets/hero-dining-room.jpg"
                alt="Salle élégante de Pasta Cosi"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                className="object-cover object-center"
              />
            </div>
            <div className="pc-hero__card">
              <span>Ce que montre le site</span>
              <strong>Pas un menu. Une envie d’entrer.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-manifesto" id="manifesto">
        <div className="pc-manifesto__intro">
          <p className="pc-kicker">Manifeste</p>
          <h2>Un restaurant raconté comme une présence intérieure.</h2>
        </div>
        <div className="pc-manifesto__lines">
          {manifesto.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="pc-sequence" aria-label="Séquence narrative">
        {rooms.map((room, index) => (
          <article key={room.id} id={room.id} className={`pc-room ${index % 2 === 1 ? 'is-reverse' : ''}`}>
            <div className="pc-room__copy">
              <p className="pc-kicker">{room.label}</p>
              <h3>{room.title}</h3>
              <p>{room.text}</p>
            </div>
            <div className="pc-room__media">
              <Image
                src={room.image}
                alt={room.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={`object-cover ${room.align === 'top' ? 'object-[center_38%]' : 'object-center'}`}
              />
            </div>
          </article>
        ))}
      </section>

      <section className="pc-diptych">
        <div className="pc-diptych__image">
          <Image
            src="/pasta-cosi-assets/gallery-ambience.jpg"
            alt="Ambiance de salle chez Pasta Cosi"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="object-cover object-center"
          />
        </div>
        <div className="pc-diptych__copy">
          <p className="pc-kicker">Le calme juste</p>
          <h2>Le luxe ici n’est pas bruyant. Il tient dans la chaleur, dans l’ombre, dans l’attention portée au bon moment.</h2>
          <p>
            La composition casse volontairement les structures attendues des sites de restauration. Plus de
            respiration, moins de modules, une vraie cadence entre masse visuelle et texte court.
          </p>
        </div>
      </section>

      <section className="pc-menu" id="carte">
        <div className="pc-menu__header">
          <p className="pc-kicker">Carte en clair-obscur</p>
          <h2>Trois gestes mis en avant. Le reste peut vivre plus tard dans une vraie carte dédiée.</h2>
        </div>
        <div className="pc-menu__list">
          {menuNotes.map(([name, note]) => (
            <article key={name} className="pc-menu__item">
              <div>
                <h3>{name}</h3>
                <p>{note}</p>
              </div>
              <ArrowUpRight size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="pc-booking" id="reservation">
        <div className="pc-booking__panel">
          <p className="pc-kicker">Réserver</p>
          <h2>La visite doit finir exactement ici, sans casser l’atmosphère.</h2>
          <div className="pc-booking__meta">
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
          <div className="pc-booking__actions">
            <a href={`tel:${siteData.phone.replace(/\s+/g, '')}`} className="pc-button pc-button--solid">
              Appeler
            </a>
            <a href={`mailto:${siteData.email}`} className="pc-button pc-button--ghost">
              Écrire
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
