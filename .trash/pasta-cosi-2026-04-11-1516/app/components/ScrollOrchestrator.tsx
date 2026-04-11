'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollOrchestratorProps {
  children: React.ReactNode
}

export default function ScrollOrchestrator({ children }: ScrollOrchestratorProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Smooth scroll config
    const ctx = gsap.context(() => {
      // Hero fade-in on load
      gsap.from('.hero-content', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
      })

      // Section reveal animations
      gsap.utils.toArray<HTMLElement>('.scroll-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 80,
          duration: 1,
          ease: 'power2.out',
        })
      })

      // Parallax effect for background elements
      gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -100,
          ease: 'none',
        })
      })

      // Text reveal on scroll
      gsap.utils.toArray<HTMLElement>('.reveal-text').forEach((text) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
        })
      })

      // Image scale on scroll
      gsap.utils.toArray<HTMLElement>('.scale-image').forEach((img) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
          scale: 1.2,
          ease: 'power1.out',
        })
      })
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="scroll-orchestrator">
      {children}
    </div>
  )
}
