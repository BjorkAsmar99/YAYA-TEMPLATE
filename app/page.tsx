import Image from 'next/image';
import { ArrowRight, Clock3, MapPin, Phone, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { ParallaxHero } from '@/components/parallax-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { experiences, galleryPlaceholders, menuHighlights, moments, realAssetSuggestions, siteData } from '@/lib/site-data';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[var(--color-ink)] text-stone-100">
      <SiteHeader />
      <div className="relative overflow-hidden">
        <ParallaxHero />
        <section className="mx-auto grid min-h-[92svh] max-w-7xl items-end gap-10 px-6 pb-16 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-24">
          <div className="relative z-10 space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Official restaurant experience
            </span>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-200/80">Roman theater, Paris pulse</p>
              <h1 className="max-w-4xl text-6xl leading-none font-semibold tracking-tight text-stone-50 md:text-8xl">
                Pasta that feels like a scene you never want to leave.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-stone-300">
              A cinematic destination for handmade pasta, candlelit dinners, and chef-led hospitality.
              Designed to turn a reservation into a memory.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#reservations" className="btn-primary">Reserve your table</a>
              <a href="#menu" className="btn-secondary">Explore the menu</a>
            </div>
          </div>
          <div className="relative z-10 grid gap-4 lg:justify-self-end">
            <div className="glass-panel max-w-md p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-900">
                <Image
                  src={realAssetSuggestions.hero}
                  alt="Pasta Cosi dining room ambiance"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-sm text-stone-200">
Hero photo ready to be swapped with the final selected dining room image from the provided Pasta Cosi shoot.
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {siteData.hours.map((slot) => (
                <div key={slot} className="glass-panel p-4 text-sm text-stone-300">
                  <Clock3 className="mb-3 h-4 w-4 text-amber-300" />
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AnimatedSection className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-3 lg:px-10" delay={0.05}>
        {moments.slice(0, 3).map((moment) => (
          <div key={moment} className="glass-panel p-6 text-stone-300">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Moment</p>
            <p className="mt-3 text-lg text-stone-100">{moment}</p>
          </div>
        ))}
      </AnimatedSection>

      <AnimatedSection id="menu" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="section-head">
          <p>Menu</p>
          <h2>Signature plates, composed like a final act.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {menuHighlights.map((item, index) => (
            <article key={item.title} className="menu-card" style={{ animationDelay: `${index * 120}ms` }}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span>€{item.price}</span>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="story" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10" delay={0.1}>
        <div className="section-head">
          <p>Our Story</p>
          <h2>Chef Billy turns classic Italian craft into intimate drama.</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-stone-300">
          <p>
            The creative direction positions Chef Billy as both craftsman and host, building a restaurant
            identity around handmade precision, emotional warmth, and a sense of occasion.
          </p>
          <p>
            Every touchpoint, from the warm lacquer palette to the movement language, is designed to feel
            premium without becoming cold. It is a house of pasta, yes, but also a house of atmosphere.
          </p>
          <div className="glass-panel p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Creative direction</p>
            <p className="mt-3 text-stone-100">
              Cinematic trattoria. Amber glow, dark marble, editorial typography, tactile surfaces, slow-motion reveals.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-10" delay={0.1}>
        <div className="section-head">
          <p>Experience</p>
          <h2>The restaurant is choreographed like an evening performance.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {experiences.map((item) => (
            <div key={item.title} className="glass-panel p-7">
              <h3 className="text-2xl text-stone-50">{item.title}</h3>
              <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="reservations" className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:px-10" delay={0.12}>
        <div className="section-head">
          <p>Reservations</p>
          <h2>For date nights, celebrations, and long dinners that deserve their own soundtrack.</h2>
        </div>
        <div className="glass-panel p-8">
          <div className="grid gap-5 text-stone-300 sm:grid-cols-2">
            <div>
              <p className="label">Phone</p>
              <p className="info-line"><Phone className="icon" /> {siteData.phone}</p>
            </div>
            <div>
              <p className="label">Address</p>
              <p className="info-line"><MapPin className="icon" /> {siteData.address}</p>
            </div>
          </div>
          <form className="mt-8 grid gap-4" aria-label="Reservation request form">
            <input className="input" type="text" placeholder="Your name" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="tel" placeholder="Phone" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <input className="input" type="date" />
              <input className="input" type="time" />
              <input className="input" type="number" min="1" max="12" placeholder="Guests" />
            </div>
            <textarea className="input min-h-32" placeholder="Occasion, allergies, terrace request..." />
            <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2">
              Request reservation <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </AnimatedSection>

      <AnimatedSection id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-10" delay={0.08}>
        <div className="section-head">
          <p>Gallery / Moments</p>
          <h2>Real restaurant photography, staged as a cinematic sequence.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryPlaceholders.map((asset, index) => (
            <div key={asset.title} className="glass-panel overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden border-b border-white/10 bg-stone-900">
                <Image
                  src={realAssetSuggestions.gallery[index]}
                  alt={asset.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs tracking-[0.3em] text-stone-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl text-stone-100">{asset.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">{asset.note}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:px-10" delay={0.1}>
        <div className="section-head">
          <p>Delivery / Pantry</p>
          <h2>A tasteful extension, from signature sauces to curated take-home rituals.</h2>
        </div>
        <div className="glass-panel p-8 text-stone-300">
          <p>
            Optional commerce layer ready: small-batch sauces, fresh pasta kits, candlelight dinner boxes.
            Designed as a future growth path without disturbing the main restaurant story.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10" delay={0.1}>
        <div className="glass-panel grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label">Location & Contact</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-stone-50">Find Pasta Cosi</h2>
            <p className="mt-4 max-w-md text-stone-300">{siteData.description}</p>
            <div className="mt-6 space-y-3 text-stone-300">
              <p className="info-line"><MapPin className="icon" /> {siteData.address}</p>
              <p className="info-line"><Phone className="icon" /> {siteData.phone}</p>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,#16110d,#2b2118)] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,196,120,0.18),transparent_26%),linear-gradient(transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%)] bg-[length:auto,100%_40px] opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Map placeholder</p>
              <p className="max-w-sm text-stone-300">
                Swap this panel with an embedded map or a custom illustrated neighborhood map once final location assets are approved.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <SiteFooter />
    </main>
  );
}
