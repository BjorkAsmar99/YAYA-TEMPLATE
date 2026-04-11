'use client'

import { ReactNode } from 'react'

interface EtchedTextProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
  depth?: 'shallow' | 'medium' | 'deep'
}

export default function EtchedText({ 
  children, 
  as: Component = 'h1',
  className = '',
  depth = 'medium'
}: EtchedTextProps) {
  const depthStyles = {
    shallow: {
      textShadow: '0 1px 0 rgba(255,255,255,0.1), 0 -1px 0 rgba(0,0,0,0.05)',
      filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.05))',
    },
    medium: {
      textShadow: '0 2px 0 rgba(255,255,255,0.2), 0 -1px 0 rgba(0,0,0,0.1)',
      filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.08))',
    },
    deep: {
      textShadow: '0 3px 0 rgba(255,255,255,0.3), 0 -2px 0 rgba(0,0,0,0.15)',
      filter: 'drop-shadow(0 3px 4px rgba(0,0,0,0.12))',
    },
  }

  return (
    <Component 
      className={`etched-text ${className}`}
      style={depthStyles[depth]}
    >
      {children}
    </Component>
  )
}
