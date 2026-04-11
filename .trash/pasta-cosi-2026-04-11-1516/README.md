# Pasta Così — Site Web

Une expérience sensorielle italienne d'avant-garde.

## 🎯 Vue d'ensemble

Site vitrine minimaliste pour un restaurant italien haut de gamme, construit avec Next.js 15, React 19, TypeScript, et Tailwind CSS. L'architecture repose sur des animations scroll GSAP sophistiquées et des textures CSS subtiles (marbre, béton, laiton).

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Serveur de développement (avec Turbopack)
npm run dev

# Build de production
npm run build

# Serveur de production
npm run start

# Linter
npm run lint
```

Le serveur de développement démarre sur [http://localhost:3000](http://localhost:3000).

## 📁 Structure du projet

```
pasta-cosi/
├── app/
│   ├── components/
│   │   ├── primitives/
│   │   │   ├── EtchedText.tsx         # Effet de texte gravé
│   │   │   ├── LazyImage.tsx          # Images avec lazy loading
│   │   │   └── TexturedBackground.tsx # Textures CSS (marbre/béton/laiton)
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Section d'accueil
│   │   │   ├── Philosophy.tsx         # Philosophie du restaurant
│   │   │   ├── Experience.tsx         # Galerie d'images (21 items)
│   │   │   └── Contact.tsx            # Coordonnées et horaires
│   │   └── ScrollOrchestrator.tsx     # Orchestration GSAP des animations
│   ├── layout.tsx                      # Layout racine avec fonts
│   ├── page.tsx                        # Page d'accueil
│   └── globals.css                     # Styles globaux et textures
├── public/
│   └── images/                         # 21 placeholders SVG
├── tailwind.config.ts                  # Configuration Tailwind
├── next.config.ts                      # Configuration Next.js
└── package.json
```

## 🎨 Design System

### Palette de couleurs

```css
--marble-cream: #F5F3EE    /* Fond principal */
--marble-vein: #D4CFC4     /* Accents marbre */
--concrete-warm: #E8E4DD   /* Béton chaud */
--concrete-dark: #A39E93   /* Béton foncé */
--brass-light: #D4AF78     /* Laiton clair */
--brass-deep: #B8935E      /* Laiton profond */
--text-primary: #2A2621    /* Texte principal */
--text-secondary: #5C5751  /* Texte secondaire */
```

### Typographie

- **Titres (h1-h6)** : Cormorant Garamond (300, 400, 500, 600)
- **Corps de texte** : Inter (300, 400, 500)

### Textures

1. **Marble** : Gradient radial subtil avec veines organiques
2. **Concrete** : Grille fine avec micro-texture
3. **Brass** : Gradient linéaire animé avec effet shimmer

## ⚡ Performances

- **Lazy loading** : Images chargées à la demande avec effet de fondu
- **Code splitting** : Composants automatiquement divisés par Next.js
- **Font optimization** : Fonts Google chargées avec `next/font`
- **Image optimization** : Next.js Image avec formats AVIF/WebP
- **GPU acceleration** : `will-change` sur éléments animés
- **Accessibility** : `prefers-reduced-motion` respecté

## 🎬 Animations GSAP

Le `ScrollOrchestrator` gère :

- **Hero fade-in** : Apparition du titre au chargement (1.2s, ease power3.out)
- **Section reveals** : Sections qui apparaissent au scroll (opacity + translateY)
- **Parallax backgrounds** : Fond qui se déplace à vitesse différente
- **Text reveals** : Textes qui apparaissent progressivement
- **Image scale** : Images qui zooment légèrement au scroll

Toutes les animations utilisent `ScrollTrigger` avec `toggleActions` pour reverser automatiquement.

## 📝 Contenu français

Tout le contenu est en français authentique :

- Titres et slogans poétiques
- Descriptions sensorielles (textures, arômes)
- Coordonnées fictives (adresse parisienne)
- Horaires et mentions légales

## 🖼️ Images

21 placeholders SVG générés (`placeholder-1.svg` à `placeholder-21.svg`) avec gradient marbre/béton. À remplacer par photos réelles :

1-9 : Pâtes, intérieurs, plats
10-21 : Détails architecturaux, ingrédients, ambiance

Formats recommandés : JPEG/WebP, 800-1200px de large, optimisés pour le web.

## 🔧 Technologies

- **Next.js 15.5** — Framework React avec SSG
- **React 19** — Library UI
- **TypeScript 5.6** — Type safety
- **Tailwind CSS 3.4** — Utility-first CSS
- **GSAP 3.12** + ScrollTrigger — Animations scroll
- **Framer Motion 11.15** — (prêt pour animations futures)
- **ESLint 9** — Linting

## 📱 Responsive

- Mobile-first design
- Breakpoints : `md:` (768px+), `lg:` (1024px+)
- Grid adaptatif : 1 colonne mobile → 3 colonnes desktop
- Images optimisées pour différentes tailles d'écran

## ♿ Accessibilité

- HTML sémantique (`<main>`, `<section>`, `<h1>-<h3>`)
- Labels ARIA sur éléments interactifs
- Focus visible pour navigation clavier
- Support `prefers-reduced-motion`
- Contraste de couleurs WCAG AA

## 🚧 Prochaines étapes

1. **Contenu réel** : Remplacer placeholders par vraies photos
2. **Formulaire de contact** : Ajouter validation + envoi email
3. **Menu** : Section avec plats et prix
4. **Carte interactive** : Google Maps embed
5. **SEO** : Optimisation meta tags + sitemap
6. **Analytics** : Intégrer Google Analytics ou Plausible
7. **Performance** : Audit Lighthouse + optimisations

## 📄 License

Projet privé — Tous droits réservés © 2026 Pasta Così

---

**Construit avec ❤️ par WebDevX**
