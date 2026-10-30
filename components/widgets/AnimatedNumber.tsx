'use client';
import { animate, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { formatRub } from '@/lib/typograph';

/** Плавный пересчёт числа за 400 мс. */
export function AnimatedNumber({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    if (reduce) { setV(value); prev.current = value; return; }
    const c = animate(prev.current, value, { duration: 0.4, ease: 'easeOut', onUpdate: setV });
    prev.current = value;
    return () => c.stop();
  }, [value, reduce]);
  return <>{formatRub(v)}</>;
}
