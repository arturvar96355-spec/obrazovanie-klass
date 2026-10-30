import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { director } from '@/content/copy';
import { site } from '@/content/site';

export function Director() {
  return (
    <section id="director" aria-labelledby="dir-h" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHead n="V" id="dir-h" title="Директор" />
      <div className="grid gap-10 md:grid-cols-[1fr_16rem] md:gap-16">
        <Reveal>
          <blockquote className="border-l-2 border-claret pl-6 md:pl-8">
            <p className="font-serif text-3xl italic leading-snug text-bottle md:text-5xl"><T>{`«${director.quote}»`}</T></p>
            <footer className="mt-4 text-sm text-ink-soft"><T>{director.quoteSource}</T></footer>
          </blockquote>
          <p className="mt-8 font-serif text-xl">{site.director.short}, директор</p>
          <p className="mt-2 max-w-xl text-ink-soft"><T>{director.intro}</T></p>
          <p className="mt-2"><T>{director.word}</T></p>
        </Reveal>
        <Reveal delay={0.1}>
          <div aria-hidden className="flex aspect-[4/5] items-center justify-center border border-line bg-paper font-serif text-5xl font-bold text-bottle/60">ВА</div>
          <p className="mt-2 text-xs text-ink-soft"><T>{director.photo}</T></p>
        </Reveal>
      </div>
    </section>
  );
}
