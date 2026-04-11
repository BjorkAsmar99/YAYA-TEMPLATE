'use client'

import TexturedBackground from '../primitives/TexturedBackground'
import LazyImage from '../primitives/LazyImage'

export default function Experience() {
  // Placeholder image references (21 total as specified)
  // In production, these would reference the actual images from /public/images/
  const imageGallery = [
    { id: 1, alt: 'Pâtes fraîches artisanales suspendues', width: 800, height: 1000 },
    { id: 2, alt: 'Intérieur minimaliste en béton texturé', width: 1200, height: 800 },
    { id: 3, alt: 'Détail macro de texture de pasta', width: 800, height: 800 },
    { id: 4, alt: 'Plat signature avec herbes fraîches', width: 1000, height: 1200 },
    { id: 5, alt: 'Luminaire en laiton brossé suspendu', width: 800, height: 1000 },
    { id: 6, alt: 'Table en marbre de Carrare veiné', width: 1200, height: 800 },
    { id: 7, alt: 'Mains pétrissant la pâte fraîche', width: 800, height: 1000 },
    { id: 8, alt: 'Détail architectural minimaliste', width: 1000, height: 800 },
    { id: 9, alt: 'Assiette avec sauce tomate maison', width: 800, height: 800 },
    { id: 10, alt: 'Ravioli aux herbes sur plat en céramique', width: 1000, height: 1200 },
    { id: 11, alt: 'Fenêtre avec lumière naturelle filtrée', width: 800, height: 1000 },
    { id: 12, alt: 'Bouteille d\'huile d\'olive artisanale', width: 800, height: 800 },
    { id: 13, alt: 'Détail de la texture du mur en béton', width: 1200, height: 800 },
    { id: 14, alt: 'Pappardelle fraîches au nid', width: 800, height: 1000 },
    { id: 15, alt: 'Chaise design minimaliste', width: 800, height: 1000 },
    { id: 16, alt: 'Parmesan râpé finement', width: 1000, height: 800 },
    { id: 17, alt: 'Couverts en laiton mat sur lin', width: 800, height: 800 },
    { id: 18, alt: 'Basilic frais dans vase en verre', width: 800, height: 1000 },
    { id: 19, alt: 'Plat de tagliatelle al limone', width: 1200, height: 800 },
    { id: 20, alt: 'Détail de la machine à pâtes vintage', width: 1000, height: 1200 },
    { id: 21, alt: 'Vue d\'ensemble de la salle à manger', width: 1200, height: 800 },
  ]

  return (
    <TexturedBackground 
      texture="brass" 
      intensity="light"
      className="scroll-section min-h-screen py-32"
    >
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="reveal-text mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            L'Expérience
          </h2>
          <p className="text-xl text-secondary font-light max-w-2xl mx-auto">
            Un voyage visuel à travers la matière, la lumière, et les sens
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {imageGallery.map((image, index) => (
            <div 
              key={image.id}
              className={`reveal-text ${
                index % 3 === 1 ? 'md:mt-12' : ''
              } ${
                index % 3 === 2 ? 'md:mt-24' : ''
              }`}
            >
              <div className="overflow-hidden rounded-sm scale-image">
                <LazyImage
                  src={`/images/placeholder-${image.id}.svg`}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto hover:scale-105 transition-transform duration-700 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sensory descriptions */}
        <div className="reveal-text max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 text-brass-deep font-sans">Textures</h3>
              <p className="text-secondary leading-relaxed font-light">
                Le velouté de la burrata qui rencontre le craquant du pain grillé. 
                La soie des pâtes fraîches glissant contre le palais. 
                Les grains de parmesan qui fondent lentement sur la langue.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 text-brass-deep font-sans">Arômes</h3>
              <p className="text-secondary leading-relaxed font-light">
                Le basilic frais écrasé libère ses notes vertes et poivrées. 
                L'ail confit diffuse sa douceur caramélisée. 
                Le citron zeste l'air d'une fraîcheur inattendue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TexturedBackground>
  )
}
