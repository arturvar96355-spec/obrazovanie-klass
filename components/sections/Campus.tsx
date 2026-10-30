import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
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
    <section id="campus" aria-labelledby="campus-h" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHead n="III" id="campus-h" title="Сад и школа в одном здании" lead={campus.lead} />
      <div className="grid gap-6 md:grid-cols-2">
        {cols.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <Card className="flex h-full flex-col">
              <h3 className="text-2xl">{c.title}</h3>
              <p className="mt-1 text-sm text-gold-ink">{c.meta}</p>
              <p className="mt-4 flex-1 text-ink-soft"><T>{c.text}</T></p>
              <div className="mt-6"><Button href={c.href} variant="ghost">{c.cta}</Button></div>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6 flex items-center gap-4 text-bottle">
        <span aria-hidden className="h-px flex-1 bg-bottle/40" />
        <p className="font-serif italic"><T>{campus.bridge}</T></p>
        <span aria-hidden className="h-px flex-1 bg-bottle/40" />
      </Reveal>
    </section>
  );
}
