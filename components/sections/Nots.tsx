'use client';
import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { nots } from '@/content/copy';

export function Nots() {
  const reduce = useReducedMotion();
  return (
    <section id="nots" aria-labelledby="nots-h" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHead n="I" id="nots-h" title="Чего у нас нет" lead="Всё лишнее мы убрали. Остались учителя, классы и время." />
        <ul className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {nots.map((n, i) => (
            <li key={n.word}>
              <p className="font-serif text-3xl text-ink md:text-4xl lg:text-5xl">
                <span className="text-ink-soft">нет </span>
                <span className="relative inline-block">
                  {n.word}
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-[56%] block h-[3px] w-full origin-left bg-claret"
                    initial={{ scaleX: reduce ? 1 : 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </p>
              <Reveal delay={0.1 + i * 0.15}><p className="mt-3 max-w-md text-ink-soft"><T>{n.text}</T></p></Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
