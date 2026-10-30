import { CountUp } from '@/components/motion/CountUp';
import { SplitHeading } from '@/components/motion/SplitHeading';
import { Button } from '@/components/ui/Button';
import { T } from '@/components/ui/T';
import { hero } from '@/content/copy';
import { photoPlaceholder } from '@/content/credits';
import { site } from '@/content/site';

/** Баннер по образцу текущего сайта: тёмный фон под фото, белый заголовок, кнопка заявки. Фото школы — от клиента. */
export function Hero() {
  return (
    <section aria-label="Главная" className="on-dark relative overflow-hidden bg-bottle text-ivory">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 96px), repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 96px)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 md:px-8 md:pb-14 md:pt-28">
        <p className="fade-up text-sm uppercase tracking-[0.2em] text-gold-soft">Частная школа и детский сад · Очаково-Матвеевское</p>
        <SplitHeading text={hero.title} className="mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-[5.25rem]" />
        <div aria-hidden className="draw mt-6 h-[2px] w-20 bg-gold-soft" style={{ ['--d' as string]: '0.9s' }} />
        <p className="fade-up mt-6 max-w-2xl text-lg text-ivory/85" style={{ ['--d' as string]: '0.4s' }}><T>{hero.subtitle}</T></p>
        <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ ['--d' as string]: '0.55s' }}>
          <Button href="#admission" variant="light">{hero.cta}</Button>
          <Button href={`tel:${site.phones.school.tel}`} variant="ghost" className="!border-ivory !text-ivory hover:!bg-ivory hover:!text-bottle">{site.phones.school.display}</Button>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-px border border-white/20 bg-white/20 md:grid-cols-4">
          {[
            [<span key="a">{site.stats.classSize}</span>, 'человек в классе'],
            [<span key="b">{site.hours.building}</span>, 'школа открыта'],
            [<span key="c"><CountUp to={4.9} decimals={1} /></span>, `на Яндекс Картах · ${site.rating.school.count} оценки`],
            [<span key="d">{site.founded}</span>, 'год основания'],
          ].map(([v, l], i) => (
            <div key={i} className="bg-bottle px-5 py-4">
              <dd className="font-serif text-3xl font-bold">{v}</dd>
              <dt className="mt-1 text-xs text-ivory/70">{l}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-right text-xs text-ivory/60"><T>{photoPlaceholder}</T></p>
      </div>
    </section>
  );
}
