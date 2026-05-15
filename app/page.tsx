'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Globe2, Layers3, Orbit, Sparkles } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
] as const;

const services = [
  {
    number: '01',
    title: 'Agency websites with presence',
    text: 'Cinematic landing pages and premium multi-section sites built to feel expensive before a single word is read.',
  },
  {
    number: '02',
    title: 'Conversion-first experience design',
    text: 'Narrative structure, hierarchy, motion, and proof arranged to turn attention into trust and trust into action.',
  },
  {
    number: '03',
    title: 'Modern frontend execution',
    text: 'Fast, responsive, maintainable builds with refined transitions, precise spacing, and no cheap template energy.',
  },
] as const;

const process = [
  'Strategy and offer framing',
  'Visual direction and interaction system',
  'Build, refine, and performance polish',
  'Launch support and future iterations',
] as const;

export default function Page() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const sectionsEls = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    );

    revealTargets.forEach((element) => revealObserver.observe(element));

    const updateScrollState = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const nextProgress = total > 0 ? window.scrollY / total : 0;
      setScrollProgress(nextProgress);

      const viewportMiddle = window.innerHeight * 0.45;
      let bestId = 'hero';
      let bestDistance = Number.POSITIVE_INFINITY;

      sectionsEls.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportMiddle);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = section.id;
        }
      });

      setActiveSection(bestId);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  return (
    <main className="go-site" id="top">
      <div className="go-noise" aria-hidden="true" />
      <div className="go-aurora go-aurora-one" aria-hidden="true" />
      <div className="go-aurora go-aurora-two" aria-hidden="true" />

      <header className="go-header">
        <a href="#top" className="go-brand" aria-label="GetONLINE home">
          <span className="go-brand-word">GetONLINE</span>
          <span className="go-brand-dot" />
        </a>

        <nav className="go-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="go-header-cta">
          Start a project
        </a>
      </header>

      <aside className="go-rail" aria-label="Section progress">
        <div className="go-rail-line">
          <span style={{ transform: `scaleY(${Math.max(0.04, scrollProgress)})` }} />
        </div>
        <div className="go-rail-labels">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? 'is-active' : ''}
            >
              {section.label}
            </a>
          ))}
        </div>
      </aside>

      <section className="go-hero" id="hero" data-section>
        <div className="go-hero-copy">
          <p className="go-eyebrow" data-reveal>
            Digital presence, sharpened for now
          </p>

          <h1 className="go-title">
            <span data-reveal style={{ transitionDelay: '0ms' }}>
              We build
            </span>
            <span data-reveal style={{ transitionDelay: '100ms' }}>
              magnetic
            </span>
            <span data-reveal style={{ transitionDelay: '200ms' }}>
              websites for
            </span>
            <span data-reveal style={{ transitionDelay: '300ms' }}>
              modern brands.
            </span>
          </h1>

          <p className="go-hero-text" data-reveal style={{ transitionDelay: '420ms' }}>
            GetONLINE creates high-end digital agency websites with cinematic scrolling, disciplined motion, and a premium visual rhythm that makes the brand feel established from the first second.
          </p>

          <div className="go-hero-actions" data-reveal style={{ transitionDelay: '520ms' }}>
            <a href="#contact" className="go-button go-button-primary">
              Build my landing page <ArrowRight size={18} />
            </a>
            <a href="#services" className="go-button go-button-ghost">
              Explore the system
            </a>
          </div>
        </div>

        <div className="go-hero-stage" aria-hidden="true">
          <div className="go-stage-card go-stage-card-main" data-reveal>
            <span>Strategy</span>
            <span>Motion</span>
            <span>Presence</span>
          </div>
          <div className="go-stage-card go-stage-card-floating" data-reveal style={{ transitionDelay: '200ms' }}>
            <Sparkles size={18} />
            <p>Scroll-led storytelling with blur, pace, contrast, and controlled reveals.</p>
          </div>
        </div>
      </section>

      <section className="go-panel go-panel-sticky" id="positioning" data-section>
        <div className="go-panel-index" data-reveal>
          01
        </div>
        <div className="go-panel-content">
          <p className="go-section-kicker" data-reveal>
            Positioning
          </p>
          <h2 className="go-section-title" data-reveal>
            Not another template. A digital front door with gravity.
          </h2>
          <p className="go-section-text" data-reveal>
            The reference site works because it controls pace, contrast, and attention. GetONLINE takes that same principle and adapts it for a web agency: strong type, layered background atmosphere, sticky moments, and text that resolves from blur into clarity as the offer becomes more specific.
          </p>
        </div>
      </section>

      <section className="go-services" id="services" data-section>
        <div className="go-services-sticky">
          <div className="go-services-heading">
            <p className="go-section-kicker" data-reveal>
              Services
            </p>
            <h2 className="go-section-title" data-reveal>
              Built to look premium. Engineered to sell.
            </h2>
          </div>

          <div className="go-services-list">
            {services.map((service, index) => (
              <article
                className="go-service-card"
                key={service.title}
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="go-service-number">{service.number}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="go-showcase-band" data-section>
        <div className="go-showcase-copy">
          <p className="go-section-kicker" data-reveal>
            Visual language
          </p>
          <h2 className="go-section-title" data-reveal>
            Blur. Reveal. Hold. Move. Repeat with intent.
          </h2>
          <p className="go-section-text" data-reveal>
            The landing page is structured like a controlled narrative. Big still moments. Sharp transitions. Elegant tension between restraint and spectacle. When you send the 21st.dev elements, I’ll integrate them into the atmospheric layers, textures, and section backgrounds.
          </p>
        </div>

        <div className="go-showcase-grid" aria-hidden="true">
          <div className="go-showcase-block go-showcase-block-large" data-reveal>
            <span>SCROLL</span>
          </div>
          <div className="go-showcase-block" data-reveal style={{ transitionDelay: '120ms' }}>
            <Globe2 size={22} />
            <p>Global-first positioning</p>
          </div>
          <div className="go-showcase-block" data-reveal style={{ transitionDelay: '220ms' }}>
            <Layers3 size={22} />
            <p>Layered layouts and depth</p>
          </div>
          <div className="go-showcase-block" data-reveal style={{ transitionDelay: '320ms' }}>
            <Orbit size={22} />
            <p>Motion with control</p>
          </div>
        </div>
      </section>

      <section className="go-process" id="process" data-section>
        <div className="go-process-copy">
          <p className="go-section-kicker" data-reveal>
            Process
          </p>
          <h2 className="go-section-title" data-reveal>
            A clear build path, without generic output.
          </h2>
        </div>
        <div className="go-process-list">
          {process.map((item, index) => (
            <div className="go-process-item" key={item} data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="go-contact" id="contact" data-section>
        <div className="go-contact-panel" data-reveal>
          <p className="go-section-kicker">GetONLINE</p>
          <h2>Ready to turn your agency into something people remember?</h2>
          <p>
            We can now keep pushing this direction: stronger sections, richer media, and custom visual texture once you send the 21st.dev references.
          </p>
          <a href="mailto:hello@getonline.studio" className="go-button go-button-primary">
            hello@getonline.studio <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
