import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { route } from '@/content/copy';
import { site } from '@/content/site';

export function Route({ n = 'X' }: { n?: string }) {
  return (
    <section id="route" aria-labelledby="route-h" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div>
          <SectionHead n={n} id="route-h" title={route.title} />
          <address className="space-y-3 not-italic">
            <p className="font-serif text-2xl"><T>{route.text}</T></p>
            <p className="text-ink-soft"><T>{route.metro}</T></p>
            <p>Здание открыто {site.hours.building}, уроки {site.hours.lessons}.</p>
            <p>
              Школа: <a className="link-u text-bottle" href={`tel:${site.phones.school.tel}`}>{site.phones.school.display}</a><br />
              Детский сад: {site.phones.garden.map((p, i) => (<span key={p.tel}>{i > 0 && ', '}<a className="link-u text-bottle" href={`tel:${p.tel}`}>{p.display}</a></span>))}
            </p>
            <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="link-u inline-flex items-center gap-1 text-bottle">
              Открыть на Яндекс Картах <ArrowUpRight size={16} aria-hidden />
            </a>
          </address>
        </div>
        <Reveal>
          <svg viewBox="0 0 480 360" role="img" aria-label="Схема: школа на Староволынской улице" className="w-full border border-line bg-ivory">
            <g stroke="#d9cfb8" strokeWidth="14" fill="none" strokeLinecap="round">
              <path d="M-10 250 H490" /><path d="M120 -10 V370" /><path d="M340 -10 V370" /><path d="M-10 90 C140 90 240 140 490 120" />
            </g>
            <g fill="#EFE8D8"><rect x="150" y="30" width="170" height="40" /><rect x="360" y="170" width="100" height="60" /><rect x="20" y="130" width="80" height="90" /><rect x="150" y="280" width="170" height="60" /></g>
            <rect x="170" y="150" width="140" height="80" fill="#1E3B2F" />
            <text x="240" y="196" textAnchor="middle" fontFamily="var(--font-playfair), serif" fontSize="18" fill="#F7F3EA">Школа</text>
            <circle cx="240" cy="150" r="7" fill="#7A2633" />
            <text x="130" y="244" fontSize="12" fill="#4a4a42" fontFamily="var(--font-golos), sans-serif">ул. Староволынская</text>
          </svg>
          <p className="mt-2 font-serif text-sm italic text-ink-soft">Схема условная</p>
        </Reveal>
      </div>
    </section>
  );
}
