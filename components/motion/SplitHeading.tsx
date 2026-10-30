'use client';
import { motion, useReducedMotion } from 'motion/react';

/** Заголовок появляется по буквам с маской снизу вверх (stagger 25 мс). */
export function SplitHeading({ text, className = '' }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <h1 className={className}>{text}</h1>;
  let i = 0;
  return (
    <h1 className={className} aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {[...word].map((ch) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + 0.025 * i++, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
          {' '}
        </span>
      ))}
    </h1>
  );
}
