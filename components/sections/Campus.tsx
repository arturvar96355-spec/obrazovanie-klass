import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { campus } from '@/content/copy';
import { site } from '@/content/site';

export function Campus() {
  const cols = [
    { ...campus.garden, meta: `Группы по ${site.stats.gardenGroup} детей`, cta: 'О детском саде' },
    { ...campus.school, meta: `Классы по ${site.stats.classSize} человек`, cta: 'О школе' },
  ];
  return (
    <section id="campus" aria-labelledby="campus-h" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHead n="III" id="campus-h" title="Сад и школа в одном здании" lead={campus.lead} />
      <div className="relative grid gap-10 md:grid-cols-2 md:gap-24">
        {cols.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.15}>
            <article className="border-t-2 border-bottle pt-6">
              <h3 className="text-3xl"><T>{c.title}</T></h3>
              <p className="mt-1 text-sm uppercase tracking-wider text-gold-ink">{c.meta}</p>
              <p className="dropcap mt-5 text-ink-soft"><T>{c.text}</T></p>
              <div className="mt-6"><Button href={c.href} variant="ghost">{c.cta}</Button></div>
            </article>
          </Reveal>
        ))}
        <div aria-hidden className="absolute left-1/2 top-[40%] hidden w-44 -translate-x-1/2 text-center md:block">
          <svg viewBox="0 0 120 20" className="w-full text-claret"><path d="M2 10 H112 M104 4 L114 10 L104 16" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          <p className="mt-2 font-serif text-sm italic text-claret"><T>{campus.bridge}</T></p>
        </div>
        <p className="font-serif text-lg italic text-claret md:hidden"><T>{`→ ${campus.bridge}`}</T></p>
      </div>
    </section>
  );
}
