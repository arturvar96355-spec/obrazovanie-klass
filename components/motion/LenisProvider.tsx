'use client';
import { useEffect, type ReactNode } from 'react';

/** Lenis + ScrollTrigger подгружаются после загрузки страницы, чтобы не тормозить первую отрисовку. */
export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || document.documentElement.classList.contains('a11y-still')) return;

    let cleanup = () => {};
    let cancelled = false;
    const start = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'), import('gsap'), import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      const tick = (t: number) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      cleanup = () => { gsap.ticker.remove(tick); lenis.destroy(); };
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(start, { timeout: 2000 });
    else setTimeout(start, 600);
    return () => { cancelled = true; cleanup(); };
  }, []);
  return <>{children}</>;
}
