import { Shell } from '@/components/sections/Shell';
import { T } from '@/components/ui/T';
import { svedenSections, svedenStub } from '@/content/sveden';

export const metadata = { title: 'Сведения об образовательной организации' };

export default function Sveden() {
  return (
    <Shell>
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <h1 className="text-4xl md:text-6xl">Сведения об образовательной организации</h1>
        <nav aria-label="Подразделы" className="mt-8 border-y border-line">
          <ol className="divide-y divide-line">
            {svedenSections.map((s, i) => (
              <li key={s.slug}><a href={`#${s.slug}`} className="link-u flex gap-4 py-3"><span className="roman w-8">{i + 1}</span>{s.title}</a></li>
            ))}
          </ol>
        </nav>
        {svedenSections.map((s) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-20 border-b border-line py-8">
            <h2 className="text-2xl">{s.title}</h2>
            <p className="mt-3"><T>{svedenStub}</T></p>
          </section>
        ))}
      </div>
    </Shell>
  );
}
