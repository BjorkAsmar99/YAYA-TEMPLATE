import Image from 'next/image';
import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { siteData } from '@/lib/site-data';

const acts = [
  {
    id: 'acte-i',
    kicker: 'Acte I · L’entrée en scène',
    title: 'On entre d’abord pour la lumière.',
    text:
      'La salle raconte tout avant le premier mot. Banquettes chaudes, or patiné, conversations basses, gestes précis. Pasta Cosi doit vendre une envie de soirée avant de vendre un plat.',
    image: '/pasta-cosi-assets/hero-dining-room.jpg',
    note: 'Une vraie destination de dîner, pas une simple adresse.',
  },
  {
    id: 'acte-ii',
    kicker: 'Acte II · Le plat signature',
    title: 'Puis arrive la pasta, riche, nette, désirée.',
    text:
      'Le produit n’est pas présenté comme une vignette de menu. Il prend la scène. Texture, crème, truffe, vapeur mentale. Ici, la gourmandise est cadrée comme un objet de luxe vivant.',
    image: '/pasta-cosi-assets/gallery-pasta-truffle.jpg',
    note: 'L’icône maison doit être traitée comme un portrait.',
  },
  {
    id: 'acte-iii',
    kicker: 'Acte III · Le rythme de table',
    title: 'Le service donne le tempo.',
    text:
      'Un bon restaurant premium ne montre pas seulement ce que l’on mange. Il montre comment on est reçu, servi, regardé, retenu un peu plus longtemps que prévu.',
    image: '/pasta-cosi-assets/gallery-ambience.jpg',
    note: 'La photo devient une preuve d’hospitalité, pas juste de déco.',
  },
  {
    id: 'acte-iv',
    kicker: 'Acte IV · La douceur finale',
    title: 'On finit avec quelque chose de lent et de beau.',
    text:
      'Le dessert et le cocktail prolongent la mémoire du lieu. Pas de section gadget, pas de galerie Pinterest. Une dernière image qui fait rester, puis réserver.',
    image: '/pasta-cosi-assets/gallery-dessert.jpg',
    note: 'Clore la visite comme on clôt une soirée réussie.',
  },
] as const;

const menuMoments = [
  ['Rigatoni à la truffe', 'crémeux, ample, assumé'],
  ['Linguine crevettes', 'iodé, vif, lumineux'],
  ['Tiramisu minute', 'léger, cacao, finale douce'],
] as const;

export default function Home() {
  return (
    <main className="pc-page">
      <header className="pc-topbar">
        <a href="#maison" className="pc-brand">
          Pasta Cosi
        </a>
        <nav className="pc-topnav" aria-label="Navigation principale">
          {acts.map((act, index) => (
            <a key={act.id} href={`#${act.id}`}>
              {String(index + 1).padStart(2, '0')}. {act.kicker.replace(/Acte [IVX]+ · /, '')}
            </a>
          ))}
        </nav>
        <a href="#reservation" className="pc-book-link">
          Réserver
        </a>
      </header>

      <section id="maison" className="pc-hero">
        <div className="pc-hero-copy">
          <p className="pc-eyebrow">Restaurant italien · Paris 5</p>
          <h1>Une soirée italienne mise en scène comme un grand dîner.</h1>
          <p className="pc-hero-text">
            La refonte part d’une idée simple, forte, mémorable, visiter le site comme on traverse un service.
            Quatre actes. Quatre sensations. Une montée en désir très nette, depuis la lumière de la salle
            jusqu’au dernier dessert.
          </p>
          <div className="pc-hero-actions">
            <a href="#acte-i" className="pc-button pc-button-primary">
              Commencer la soirée
            </a>
            <a href="#reservation" className="pc-button pc-button-secondary">
              Demander une table
            </a>
          </div>
        </div>

        <div className="pc-hero-stage">
          <div className="pc-hero-card pc-hero-card-main">
            <Image
              src="/pasta-cosi-assets/hero-dining-room.jpg"
              alt="Salle chaude et raffinée de Pasta Cosi"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
          </div>
          <div className="pc-hero-card pc-hero-card-side">
            <Image
              src="/pasta-cosi-assets/gallery-bar.jpg"
              alt="Bar et ambiance feutrée de Pasta Cosi"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 22vw"
              className="object-cover"
            />
          </div>
          <div className="pc-hero-plaque">
            <span>Ce que vend le site</span>
            <strong>Le sentiment d’avoir déjà envie d’y être ce soir.</strong>
          </div>
        </div>
      </section>

      <section className="pc-intro-band" aria-label="Résumé d’expérience">
        <p>Chaleur italienne</p>
        <p>Pâtes signatures</p>
        <p>Hospitalité de maison</p>
        <p>Fin de soirée désirable</p>
      </section>

      <div className="pc-story-layout">
        <aside className="pc-rail" aria-label="Progression de la soirée">
          <span className="pc-rail-label">La soirée</span>
          {acts.map((act, index) => (
            <a key={act.id} href={`#${act.id}`} className="pc-rail-link">
              <em>{String(index + 1).padStart(2, '0')}</em>
              <span>{act.kicker.replace(/Acte [IVX]+ · /, '')}</span>
            </a>
          ))}
        </aside>

        <div className="pc-acts">
          {acts.map((act, index) => (
            <section key={act.id} id={act.id} className="pc-act">
              <div className="pc-act-copy">
                <p className="pc-act-kicker">{act.kicker}</p>
                <h2>{act.title}</h2>
                <p>{act.text}</p>
                <div className="pc-act-note">{act.note}</div>
              </div>
              <div className={`pc-act-media ${index % 2 === 1 ? 'is-shifted' : ''}`}>
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className={`object-cover ${act.id === 'acte-ii' || act.id === 'acte-iv' ? 'object-center' : 'object-[center_55%]'}`}
                />
              </div>
            </section>
          ))}
        </div>
      </div>

      <section id="menu" className="pc-menu-block">
        <div>
          <p className="pc-eyebrow">La carte, côté sensation</p>
          <h2>Peu d’items mis en avant, mais chacun avec une vraie présence.</h2>
        </div>
        <div className="pc-menu-list">
          {menuMoments.map(([name, mood]) => (
            <article key={name} className="pc-menu-item">
              <div>
                <h3>{name}</h3>
                <p>{mood}</p>
              </div>
              <ArrowUpRight size={18} />
            </article>
          ))}
        </div>
      </section>

      <section id="reservation" className="pc-reservation">
        <div className="pc-reservation-copy">
          <p className="pc-eyebrow">Réservation</p>
          <h2>Le site se termine là où il doit convertir, sans casser la magie.</h2>
          <p>
            Pas de formulaire impersonnel noyé au milieu d’une landing page. Un dernier bloc calme, précis,
            crédible, qui donne les informations essentielles et garde la tonalité du lieu.
          </p>
        </div>
        <div className="pc-reservation-panel">
          <div className="pc-contact-grid">
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
          <div className="pc-reservation-actions">
            <a href={`tel:${siteData.phone.replace(/\s+/g, '')}`} className="pc-button pc-button-primary">
              Appeler maintenant
            </a>
            <a href={`mailto:${siteData.email}`} className="pc-button pc-button-secondary">
              Écrire au restaurant
            </a>
          </div>
        </div>
      </section>

      <footer className="pc-footer">
        <p>{siteData.name} · Paris 5</p>
        <p>{siteData.tagline}</p>
      </footer>
    </main>
  );
}
