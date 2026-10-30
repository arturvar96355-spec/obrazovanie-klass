import { ArrowUpRight } from 'lucide-react';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { route } from '@/content/copy';
import { site } from '@/content/site';

export function Route({ n = 'X' }: { n?: string }) {
  return (
    <section id="route" aria-labelledby="route-h" className="border-t border-line bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead n={n} id="route-h" title={route.title} />
        <address className="grid gap-8 not-italic md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-ink-soft">Адрес</p>
            <p className="mt-1 text-lg"><T>{route.text}</T></p>
            <p className="mt-2 text-sm text-ink-soft"><T>{route.metro}</T></p>
            <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="link-u mt-3 inline-flex items-center gap-1 text-bottle">
              Яндекс Карты <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-ink-soft">Школа</p>
            <p className="mt-1"><a className="link-u text-lg text-bottle" href={`tel:${site.phones.school.tel}`}>{site.phones.school.display}</a></p>
            <p className="mt-2 text-sm text-ink-soft">Здание открыто {site.hours.building}, уроки {site.hours.lessons}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-ink-soft">Детский сад</p>
            {site.phones.garden.map((p) => <p key={p.tel} className="mt-1"><a className="link-u text-lg text-bottle" href={`tel:${p.tel}`}>{p.display}</a></p>)}
            <p className="mt-2 text-sm text-ink-soft">Администрация {site.hours.gardenAdmin}</p>
          </div>
        </address>
      </div>
    </section>
  );
}
