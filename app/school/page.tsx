import { CtaBand } from '@/components/sections/CtaBand';
import { Languages } from '@/components/sections/Languages';
import { PageHero } from '@/components/sections/PageHero';
import { Shell } from '@/components/sections/Shell';
import { Reveal } from '@/components/motion/Reveal';
import { Card } from '@/components/ui/Card';
import { T } from '@/components/ui/T';
import { Wrap } from '@/components/ui/Wrap';
import { school } from '@/content/pages';

export const metadata = { title: 'Школа' };

export default function SchoolPage() {
  return (
    <Shell>
      <PageHero title={school.title} lead={school.lead} />
      <Wrap>
        <ul className="grid gap-6 md:grid-cols-3">
          {school.stages.map((s) => (
            <li key={s.range}>
              <Reveal><Card className="h-full">
                <p className="font-serif text-5xl text-claret">{s.range}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-gold-ink">классы</p>
                <h2 className="mt-4 text-2xl">{s.name}</h2>
                <p className="mt-2 text-ink-soft"><T>{s.text}</T></p>
              </Card></Reveal>
            </li>
          ))}
        </ul>
      </Wrap>
      <Wrap className="!pt-0">
        <h2 className="text-3xl md:text-4xl">Как устроена школа</h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {school.features.map((f) => (
            <li key={f.title} className="grid gap-1 py-5 md:grid-cols-[18rem_1fr]">
              <h3 className="font-serif text-xl text-bottle">{f.title}</h3>
              <p className="text-ink-soft"><T>{f.text}</T></p>
            </li>
          ))}
        </ul>
      </Wrap>
      <Wrap id="schedule" bg="bg-paper">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl">{school.daily.title}</h2>
          <p className="mt-3 max-w-2xl text-ink-soft"><T>{school.daily.text}</T></p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <caption className="sr-only">Распорядок дня: начальная и основная школа</caption>
              <thead><tr className="border-b-2 border-bottle text-sm uppercase tracking-wider text-ink-soft">
                <th scope="col" className="py-3 pr-4">Время</th><th scope="col" className="py-3 pr-4">Начальная школа</th><th scope="col" className="py-3">Основная школа</th>
              </tr></thead>
              <tbody>
                {school.daily.rows.map(([t, a, b]) => (
                  <tr key={t} className="border-b border-line">
                    <th scope="row" className="whitespace-nowrap py-3 pr-4 font-serif font-normal text-claret">{t}</th>
                    <td className="py-3 pr-4">{a}</td><td className="py-3">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm"><T>{school.daily.note}</T></p>
        </div>
      </Wrap>
      <Wrap>
        <h2 className="text-3xl md:text-4xl">{school.clubs.title}</h2>
        <p className="mt-3 max-w-2xl text-ink-soft"><T>{school.clubs.lead}</T></p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {school.clubs.list.map((c) => <li key={c} className="border border-line px-4 py-2">{c}</li>)}
        </ul>
        <p className="mt-4 text-sm"><T>{school.clubs.note}</T></p>
        <p className="mt-10 max-w-2xl text-ink-soft"><T>{school.programs}</T></p>
      </Wrap>
      <Languages n="" />
      <CtaBand />
    </Shell>
  );
}
