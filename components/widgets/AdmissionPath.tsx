'use client';
import { motion, useMotionValueEvent, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { useRef, useState } from 'react';
import { T } from '@/components/ui/T';
import { admission } from '@/content/copy';

/** Линия пути прорисовывается при скролле, активный шаг подсвечивается. */
export function AdmissionPath() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const [active, setActive] = useState(reduce ? admission.length - 1 : 0);
  useMotionValueEvent(p, 'change', (v) => setActive(Math.min(admission.length - 1, Math.floor(v * admission.length + 0.15))));

  return (
    <ol ref={ref} className="relative grid gap-8 md:grid-cols-5 md:gap-4">
      <span aria-hidden className="absolute bottom-3 left-[0.95rem] top-3 w-px bg-line md:bottom-auto md:left-0 md:right-0 md:top-[0.95rem] md:h-px md:w-auto" />
      <motion.span
        aria-hidden
        style={reduce ? undefined : { scaleY: p, scaleX: 1 }}
        className="absolute bottom-3 left-[0.95rem] top-3 w-px origin-top bg-claret md:hidden"
      />
      <motion.span
        aria-hidden
        style={reduce ? undefined : { scaleX: p }}
        className="absolute left-0 right-0 top-[0.95rem] hidden h-px origin-left bg-claret md:block"
      />
      {admission.map((s, i) => (
        <li key={s.title} className="relative pl-12 md:pl-0 md:pt-12" aria-current={i === active ? 'step' : undefined}>
          <span
            className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border font-serif text-sm transition-colors duration-500 ${i <= active ? 'border-claret bg-claret text-ivory' : 'border-line bg-ivory text-ink-soft'}`}
          >
            {i + 1}
          </span>
          <h3 className={`font-serif text-xl transition-colors duration-500 ${i === active ? 'text-claret' : ''}`}><T>{s.title}</T></h3>
          <p className="mt-1 text-sm text-ink-soft"><T>{s.text}</T></p>
        </li>
      ))}
    </ol>
  );
}
