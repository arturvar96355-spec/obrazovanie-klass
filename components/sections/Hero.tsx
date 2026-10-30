import { Magnetic } from '@/components/motion/Magnetic';
import { CountUp } from '@/components/motion/CountUp';
import { SplitHeading } from '@/components/motion/SplitHeading';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { T } from '@/components/ui/T';
import { hero } from '@/content/copy';
import { site } from '@/content/site';
import { photoPlaceholder } from '@/content/credits';
import { HeroArt } from './HeroArt';

export function Hero() {
  return (
    <section aria-label="Главная" className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 md:grid-cols-12 md:gap-8 md:px-8 md:pb-24 md:pt-16">
      <div className="md:col-span-7 md:pt-6">
        <p className="roman mb-6 text-sm uppercase tracking-[0.3em]"><T>Школа и детский сад · с 2002 года</T></p>
        <SplitHeading text={hero.title} className="text-[3.1rem] leading-[1.02] sm:text-7xl lg:text-[5.6rem]" />
        <div aria-hidden className="mt-5 h-[3px] w-24 origin-left animate-[draw_.8s_1.2s_both_cubic-bezier(.22,1,.36,1)] bg-claret" />
        <Reveal delay={0.5}>
          <p className="mt-8 max-w-xl text-lg text-ink-soft"><T>{hero.subtitle}</T></p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic><Button href="#admission">{hero.cta}</Button></Magnetic>
            <a href={`tel:${site.phones.school.tel}`} className="link-u text-bottle">{site.phones.school.display}</a>
          </div>
        </Reveal>
        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
          <div><dt className="text-xs uppercase tracking-wider text-ink-soft">в классе</dt><dd className="font-serif text-3xl text-bottle">{site.stats.classSize}</dd></div>
          <div><dt className="text-xs uppercase tracking-wider text-ink-soft">режим</dt><dd className="font-serif text-3xl text-bottle">{site.hours.building}</dd></div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-soft">на Яндекс Картах</dt>
            <dd className="font-serif text-3xl text-bottle"><CountUp to={4.9} decimals={1} /></dd>
          </div>
        </dl>
      </div>
      <figure className="md:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden border border-line">
          <div className="ken-burns h-full w-full"><HeroArt /></div>
        </div>
        <figcaption className="mt-2 font-serif text-sm italic text-ink-soft"><T>{`Иллюстрация. ${photoPlaceholder}`}</T></figcaption>
      </figure>
    </section>
  );
}
