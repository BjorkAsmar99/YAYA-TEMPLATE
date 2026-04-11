'use client'

import TexturedBackground from '../primitives/TexturedBackground'

export default function Contact() {
  return (
    <TexturedBackground 
      texture="marble" 
      intensity="light"
      className="scroll-section min-h-screen flex items-center py-32"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <div className="reveal-text mb-16">
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              Nous Trouver
            </h2>
          </div>

          {/* Contact details */}
          <div className="reveal-text space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-3 text-brass-deep font-sans">
                Adresse
              </h3>
              <p className="text-2xl font-light text-secondary">
                12 Rue de la Texture<br />
                75003 Paris
              </p>
            </div>

            <div className="w-24 h-px bg-brass-deep opacity-30 mx-auto" aria-hidden="true" />

            <div>
              <h3 className="text-sm uppercase tracking-widest mb-3 text-brass-deep font-sans">
                Réservation
              </h3>
              <p className="text-2xl font-light text-secondary">
                <a 
                  href="tel:+33142000000" 
                  className="hover:text-brass-deep transition-colors duration-300"
                  aria-label="Téléphoner au restaurant"
                >
                  +33 1 42 00 00 00
                </a>
              </p>
              <p className="text-lg font-light text-secondary mt-2 opacity-70">
                <a 
                  href="mailto:contact@pastacosi.fr"
                  className="hover:text-brass-deep transition-colors duration-300"
                  aria-label="Envoyer un email au restaurant"
                >
                  contact@pastacosi.fr
                </a>
              </p>
            </div>

            <div className="w-24 h-px bg-brass-deep opacity-30 mx-auto" aria-hidden="true" />

            <div>
              <h3 className="text-sm uppercase tracking-widest mb-3 text-brass-deep font-sans">
                Horaires
              </h3>
              <p className="text-lg font-light text-secondary leading-relaxed">
                Mardi – Samedi<br />
                12h00 – 14h30 · 19h00 – 22h30
              </p>
              <p className="text-sm font-light text-secondary mt-4 opacity-60">
                Fermé dimanche et lundi
              </p>
            </div>
          </div>

          {/* Footer note */}
          <div className="reveal-text mt-20">
            <p className="text-sm font-light text-secondary opacity-50 tracking-wide">
              Réservation recommandée · Places limitées
            </p>
          </div>
        </div>
      </div>

      {/* Minimal footer */}
      <div className="absolute bottom-8 left-0 right-0">
        <p className="text-center text-xs text-secondary opacity-30 font-sans tracking-widest">
          © 2026 PASTA COSÌ
        </p>
      </div>
    </TexturedBackground>
  )
}
