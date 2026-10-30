import { ArrowUpRight } from 'lucide-react';
import { CountUp } from '@/components/motion/CountUp';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { reviews, reviewsSource } from '@/content/reviews';
import { site } from '@/content/site';

export function Reviews() {
  const [lead, ...rest] = reviews.slice(1);
  return (
    <section id="reviews" aria-labelledby="r-h" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHead n="VIII" id="r-h" title="Отзывы родителей" />
        <div className="grid gap-10 md:grid-cols-[16rem_1fr]">
          <div>
            <p className="font-serif text-7xl text-bottle"><CountUp to={4.9} decimals={1} /></p>
            <p className="mt-2 text-ink-soft"><T>{`${site.rating.school.count} оценки на Яндекс Картах (на ${site.rating.asOf})`}</T></p>
            <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="link-u mt-4 inline-flex items-center gap-1 text-bottle">
              Все отзывы на Картах <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
          <div>
            <Reveal>
              <figure className="border-l-2 border-claret pl-6">
                <blockquote className="font-serif text-2xl italic leading-snug md:text-3xl"><T>{`«${lead.text}»`}</T></blockquote>
                <figcaption className="mt-3 text-sm text-ink-soft">{lead.author} · {reviewsSource}</figcaption>
              </figure>
            </Reveal>
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {rest.map((r, i) => (
                <li key={r.author}>
                  <Reveal delay={(i % 2) * 0.1}>
                    <figure className="h-full border-t border-line pt-4">
                      <blockquote className="text-ink"><T>{`«${r.text}»`}</T></blockquote>
                      <figcaption className="mt-2 text-sm text-ink-soft">{r.author} · {reviewsSource}</figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
