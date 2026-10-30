'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { day } from '@/content/schedule';

const START = 8;
const END = 19;

function Clock({ handsRef }: { handsRef: React.RefObject<{ h: SVGGElement | null; m: SVGGElement | null }> }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Циферблат: день ученика с 8:00 до 19:00" className="h-full w-full">
      <circle cx="200" cy="200" r="188" fill="#fff" stroke="#1E3B2F" strokeWidth="2" />
      {Array.from({ length: 60 }, (_, i) => {
        const major = i % 5 === 0;
        return <line key={i} x1="200" y1={major ? 28 : 34} x2="200" y2="42" stroke={major ? '#1E3B2F' : '#b9b09a'} strokeWidth={major ? 3 : 1} transform={`rotate(${i * 6} 200 200)`} />;
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const n = i === 0 ? 12 : i;
        const a = (i * 30 - 90) * (Math.PI / 180);
        return <text key={i} x={200 + 140 * Math.cos(a)} y={200 + 140 * Math.sin(a) + 10} textAnchor="middle" fontFamily="var(--font-serif-face), serif" fontSize="26" fill="#1A1A17">{n}</text>;
      })}
      <g ref={(el) => { handsRef.current!.h = el; }}>
        <rect x="195" y="105" width="10" height="100" fill="#1E3B2F" rx="2" />
      </g>
      <g ref={(el) => { handsRef.current!.m = el; }}>
        <rect x="197.5" y="62" width="5" height="143" fill="#7A2633" rx="2" />
      </g>
      <circle cx="200" cy="200" r="8" fill="#1E3B2F" />
    </svg>
  );
}

function Card({ i }: { i: number }) {
  const s = day[i];
  return (
    <>
      <p className="font-serif text-5xl font-bold text-claret md:text-6xl">{s.time}</p>
      <h3 className="mt-3 text-2xl md:text-3xl"><T>{s.title}</T></h3>
      <p className="mt-4 max-w-md text-lg text-ink-soft"><T>{s.text}</T></p>
    </>
  );
}

export function DayScene() {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const hands = useRef<{ h: SVGGElement | null; m: SVGGElement | null }>({ h: null, m: null });
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [clock, setClock] = useState('8:00');

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const sync = () => setPinned(mq.matches && !document.documentElement.classList.contains('a11y-still'));
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!pinned || !root.current) return;
    let last = -1;
    let kill = () => {};
    let cancelled = false;
    (async () => {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    if (cancelled || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: 'top top+=52',
      end: '+=400%',
      pin: true,
      scrub: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress;
        const h = START + p * (END - START);
        gsap.set(hands.current.h, { rotation: (h % 12) * 30, svgOrigin: '200 200' });
        gsap.set(hands.current.m, { rotation: (h % 1) * 360, svgOrigin: '200 200' });
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
        let idx = 0;
        day.forEach((s, i) => { if (s.hour <= h + 0.001) idx = i; });
        if (idx !== last) { last = idx; setActive(idx); }
        const hh = Math.floor(h), mm = Math.floor((h % 1) * 60 / 5) * 5;
        setClock(`${hh}:${String(mm).padStart(2, '0')}`);
      },
    });
    gsap.set(hands.current.h, { rotation: (START % 12) * 30, svgOrigin: '200 200' });
    gsap.set(hands.current.m, { rotation: 0, svgOrigin: '200 200' });
    kill = () => st.kill();
    })();
    return () => { cancelled = true; kill(); };
  }, [pinned]);

  const header = (
    <div className="mx-auto w-full max-w-6xl px-4 pt-20 md:px-8 md:pt-10">
      <SectionHead n="II" id="day-h" title="День ученика" lead="С 8:00 до 19:00 всё происходит в школе. К вечеру ребёнок готов к завтрашнему дню." />
    </div>
  );

  if (!pinned) {
    return (
      <section id="day" aria-labelledby="day-h" className="pb-20">
        {header}
        <ol className="relative mx-auto max-w-3xl px-4 md:px-8">
          <span aria-hidden className="absolute bottom-0 left-[1.65rem] top-0 w-px bg-line md:left-[2.4rem]" />
          {day.map((s) => (
            <Reveal key={s.time} className="relative mb-10 pl-12">
              <span aria-hidden className="absolute left-[-0.1rem] top-2 h-3 w-3 rounded-full border-2 border-bottle bg-ivory" />
              <p className="font-serif text-3xl font-bold text-claret">{s.time}</p>
              <h3 className="mt-1 text-2xl"><T>{s.title}</T></h3>
              <p className="mt-2 text-ink-soft"><T>{s.text}</T></p>
            </Reveal>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section id="day" aria-labelledby="day-h" ref={root} className="relative h-[calc(100vh-52px)] overflow-hidden bg-ivory">
      <div className="flex h-full flex-col">
        {header}
        <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-2 items-center gap-12 px-8">
          <div className="mx-auto aspect-square w-full max-w-[22rem] lg:max-w-[26rem]">
            <Clock handsRef={hands} />
            <p className="mt-2 text-center font-serif text-2xl text-bottle" aria-live="off">{clock}</p>
          </div>
          <div className="min-h-[18rem]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                <Card i={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mx-auto mb-10 w-full max-w-6xl px-8">
          <div className="relative h-px bg-line">
            <div ref={bar} className="absolute -inset-y-px inset-x-0 origin-left bg-claret" style={{ transform: 'scaleX(0)' }} />
            {day.map((s) => (
              <span key={s.time} aria-hidden className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bottle" style={{ left: `${((s.hour - START) / (END - START)) * 100}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-ink-soft"><span>8:00</span><span>19:00</span></div>
        </div>
      </div>
    </section>
  );
}
