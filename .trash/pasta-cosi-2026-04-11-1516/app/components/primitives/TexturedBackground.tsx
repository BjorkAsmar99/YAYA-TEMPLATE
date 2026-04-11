'use client'

import { ReactNode } from 'react'

interface TexturedBackgroundProps {
  texture: 'marble' | 'concrete' | 'brass'
  children: ReactNode
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
}

export default function TexturedBackground({ 
  texture, 
  children, 
  className = '',
  intensity = 'medium'
}: TexturedBackgroundProps) {
  const textureClasses = {
    marble: 'marble-texture',
    concrete: 'concrete-texture',
    brass: 'brass-shimmer',
  }

  const intensityStyles = {
    light: { opacity: 0.4 },
    medium: { opacity: 0.7 },
    heavy: { opacity: 1 },
  }

  return (
    <div className={`relative ${className}`}>
      {/* Base texture layer */}
      <div 
        className={`absolute inset-0 ${textureClasses[texture]}`}
        style={intensityStyles[intensity]}
        aria-hidden="true"
      />
      
      {/* Noise overlay for added realism */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      
      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
