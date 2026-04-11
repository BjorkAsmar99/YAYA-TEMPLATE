'use client'

import TexturedBackground from '../primitives/TexturedBackground'

export default function Philosophy() {
  return (
    <TexturedBackground 
      texture="concrete" 
      intensity="medium"
      className="scroll-section min-h-screen flex items-center py-32"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="reveal-text mb-16">
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              La Philosophie
            </h2>
            <div className="w-24 h-px bg-brass-deep opacity-50" aria-hidden="true" />
          </div>

          {/* Philosophy content - 3-column grid on desktop */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="reveal-text">
              <h3 className="text-2xl font-light mb-4 text-brass-deep">La Matière</h3>
              <p className="text-secondary leading-relaxed font-light">
                Nous travaillons avec des ingrédients qui racontent une histoire. 
                Chaque grain de semoule, chaque feuille d'herbe aromatique porte 
                en elle la mémoire d'un lieu, d'une saison, d'un geste.
              </p>
            </div>

            <div className="reveal-text">
              <h3 className="text-2xl font-light mb-4 text-brass-deep">Le Temps</h3>
              <p className="text-secondary leading-relaxed font-light">
                La pasta n'est pas pressée. Elle mûrit, se transforme, 
                révèle ses arômes dans un dialogue patient entre la main 
                et la matière. Chaque minute compte, chaque seconde a son importance.
              </p>
            </div>

            <div className="reveal-text">
              <h3 className="text-2xl font-light mb-4 text-brass-deep">L'Espace</h3>
              <p className="text-secondary leading-relaxed font-light">
                L'architecture de nos plats reflète celle de notre lieu. 
                Texture contre texture, lumière contre ombre, 
                chaleur contre fraîcheur. Un équilibre en mouvement perpétuel.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="reveal-text mt-20">
            <blockquote className="text-3xl md:text-4xl font-light italic text-center text-secondary opacity-70 leading-relaxed">
              « La vraie cuisine commence là où finit la recette »
            </blockquote>
          </div>
        </div>
      </div>
    </TexturedBackground>
  )
}
