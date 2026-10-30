import { CtaBand } from '@/components/sections/CtaBand';
import { PageHero } from '@/components/sections/PageHero';
import { Shell } from '@/components/sections/Shell';
import { Reveal } from '@/components/motion/Reveal';
import { Card } from '@/components/ui/Card';
import { T } from '@/components/ui/T';
import { Wrap } from '@/components/ui/Wrap';
import { garden } from '@/content/pages';

export const metadata = { title: 'Детский сад' };

export default function KindergartenPage() {
  return (
    <Shell>
      <PageHero title={garden.title} lead={garden.lead} />
      <Wrap>
        <p className="mb-8 text-ink-soft"><T>{`Возраст приёма: ${garden.age}`}</T></p>
        <div className="grid gap-6 md:grid-cols-2">
          {garden.formats.map((f) => (
            <Reveal key={f.title}><Card className="h-full">
              <h2 className="text-3xl">{f.title}</h2>
              <p className="mt-1 text-sm uppercase tracking-wider text-gold-ink"><T>{f.hours}</T></p>
              <p className="mt-4 font-serif text-4xl text-bottle"><T>{f.price}</T></p>
              <p className="mt-3 text-ink-soft"><T>{f.text}</T></p>
            </Card></Reveal>
          ))}
        </div>
      </Wrap>
      <Wrap className="!pt-0">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Занятия входят в стоимость</h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {garden.included.map((i) => <li key={i} className="py-3">{i}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">{garden.extras.title}</h2>
            <p className="mt-5 text-ink-soft"><T>{garden.extras.text}</T></p>
          </div>
        </div>
      </Wrap>
      <Wrap bg="bg-paper">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl">Что важно знать</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {garden.facts.map((f) => (
              <li key={f.title} className="border-t-2 border-bottle pt-4">
                <h3 className="font-serif text-xl">{f.title}</h3>
                <p className="mt-2 text-ink-soft"><T>{f.text}</T></p>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
      <CtaBand />
    </Shell>
  );
}
