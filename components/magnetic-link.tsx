'use client';

import { useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { MouseEvent, ReactNode, useRef } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticLink({ href, children, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </Link>
  );
}
