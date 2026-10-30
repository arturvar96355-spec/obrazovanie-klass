'use client';
import { useEffect, useRef } from 'react';

/** Кружок-курсор бордового цвета, растёт над ссылками. Только pointer: fine. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current!;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0, big = false;
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      el.style.opacity = '1';
      big = !!(e.target as HTMLElement | null)?.closest('a, button, label, input, textarea, [role="radio"]');
    };
    const loop = () => {
      cx += (x - cx) * 0.22; cy += (y - cy) * 0.22;
      el.style.transform = `translate(${cx - 8}px, ${cy - 8}px) scale(${big ? 2.6 : 1})`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-4 w-4 rounded-full bg-claret/80 opacity-0 mix-blend-multiply transition-[opacity] duration-300 [@media(pointer:fine)]:block"
    />
  );
}
