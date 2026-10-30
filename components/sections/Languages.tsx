import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { languages } from '@/content/copy';

export function Languages({ n = 'IV' }: { n?: string }) {
  return (
    <section id="languages" aria-labelledby="lang-h" className="border-y border-line bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead n={n} id="lang-h" title="Языки" lead="Английский и китайский — языки, с которыми ребёнок выйдет в мир." />
        <div className="grid gap-6 md:grid-cols-2">
          {languages.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.1}>
              <div className="flex items-center gap-6 border border-line bg-white/60 p-6 md:p-8">
                <p aria-hidden className="w-24 shrink-0 text-center font-serif text-7xl font-bold leading-none text-bottle">{l.glyph}</p>
                <div>
                  <h3 className="text-2xl">{l.title}</h3>
                  <p className="mt-2 text-ink-soft"><T>{l.text}</T></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
