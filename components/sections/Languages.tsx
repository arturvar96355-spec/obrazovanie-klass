import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { languages } from '@/content/copy';

export function Languages() {
  return (
    <section id="languages" aria-labelledby="lang-h" className="bg-bottle py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="[&_h2]:text-ivory [&_p]:text-ivory/80 [&_.roman]:text-gold [&_hr]:bg-gold/50">
          <SectionHead n="IV" id="lang-h" title="Языки" lead="Английский и китайский — языки, с которыми ребёнок выйдет в мир." />
        </div>
        <div className="grid gap-px bg-gold/30 md:grid-cols-2">
          {languages.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.15} className="bg-bottle p-8 md:p-12">
              <p aria-hidden className="font-serif text-[8rem] leading-none text-gold md:text-[11rem]">{l.glyph}</p>
              <h3 className="mt-2 text-3xl">{l.title}</h3>
              <p className="mt-3 text-ivory/80"><T>{l.text}</T></p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
