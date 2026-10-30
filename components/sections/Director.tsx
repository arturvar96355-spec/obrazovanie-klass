import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { director } from '@/content/copy';
import { site } from '@/content/site';

export function Director() {
  return (
    <section id="director" aria-labelledby="dir-h" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHead n="V" id="dir-h" title="Директор" />
      <Reveal>
        <blockquote className="relative">
          <span aria-hidden className="absolute -left-2 -top-10 font-serif text-[9rem] leading-none text-gold/50 md:-left-8 md:-top-16 md:text-[16rem]">«</span>
          <p className="relative font-serif text-4xl italic leading-tight text-bottle sm:text-5xl md:text-7xl"><T>{director.quote}</T></p>
          <footer className="mt-4 text-sm text-ink-soft"><T>{director.quoteSource}</T></footer>
        </blockquote>
      </Reveal>
      <Reveal delay={0.1} className="mt-12 grid items-center gap-8 border-t border-line pt-10 md:grid-cols-[14rem_1fr]">
        <div>
          <div aria-hidden className="flex aspect-[4/5] w-44 items-center justify-center border border-gold bg-paper font-serif text-6xl text-bottle md:w-full">ВА</div>
          <p className="mt-2 font-serif text-sm italic text-ink-soft"><T>{director.photo}</T></p>
        </div>
        <div>
          <p className="font-serif text-2xl">{site.director.short}, {site.director.role.toLowerCase()}</p>
          <p className="mt-3 max-w-xl text-ink-soft"><T>{director.intro}</T></p>
          <p className="mt-3"><T>{director.word}</T></p>
        </div>
      </Reveal>
    </section>
  );
}
