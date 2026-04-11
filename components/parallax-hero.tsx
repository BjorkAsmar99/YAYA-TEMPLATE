'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function ParallaxHero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          yPercent: -12,
          xPercent: 8,
          scale: 1.08,
          duration: 6,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -4,
          scale: 1.05,
          duration: 10,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    });

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div ref={imageRef} className="absolute inset-0 scale-[1.02]">
        <Image
          src="/pasta-cosi-assets/gallery-bar.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.35),rgba(12,10,8,0.8)),radial-gradient(circle_at_top,rgba(196,132,71,0.25),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(245,231,200,0.1),transparent_22%)]" />
      <div
        ref={glowRef}
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,208,131,0.22),rgba(255,208,131,0.02)_65%,transparent_72%)] blur-2xl"
      />
    </div>
  );
}
