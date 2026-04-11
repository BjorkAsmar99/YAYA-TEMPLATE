'use client'

import TexturedBackground from '../primitives/TexturedBackground'
import EtchedText from '../primitives/EtchedText'

export default function Hero() {
  return (
    <TexturedBackground 
      texture="marble" 
      intensity="heavy"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Parallax background accent */}
      <div 
        className="parallax-bg absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,120,0.1) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="hero-content container mx-auto px-6 text-center z-10">
        <EtchedText 
          as="h1" 
          depth="deep"
          className="text-7xl md:text-9xl mb-6 tracking-tight font-light"
        >
          Pasta Così
        </EtchedText>
        
        <div className="reveal-text">
          <p className="text-xl md:text-2xl text-secondary font-light tracking-wide max-w-2xl mx-auto opacity-70">
            Une exploration sensorielle où la pasta rencontre l'art, 
            la texture devient expérience, et chaque instant révèle une histoire
          </p>
        </div>

        {/* Subtle scroll indicator */}
        <div className="reveal-text mt-16">
          <div className="inline-flex flex-col items-center opacity-50 animate-bounce-subtle">
            <span className="text-sm uppercase tracking-widest mb-2 font-sans">Découvrir</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-bounce-subtle {
            animation: none;
          }
        }
      `}</style>
    </TexturedBackground>
  )
}
