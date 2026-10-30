import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { included, refundNote } from '@/content/prices';
import { Calculator } from '@/components/widgets/Calculator';

export function Pricing() {
  return (
    <section id="prices" aria-labelledby="p-h" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHead n="VII" id="p-h" title="Стоимость" lead="Без вступительных взносов. Посчитайте, сколько это стоит именно для Вашей семьи." />
      <Reveal><Calculator /></Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="text-2xl">Что входит</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {included.map((x) => (
              <li key={x.title} className="grid gap-1 py-4 md:grid-cols-[12rem_1fr]">
                <span className="font-serif text-lg text-bottle">{x.title}</span>
                <span className="text-ink-soft"><T>{x.text}</T></span>
              </li>
            ))}
          </ul>
        </div>
        <Reveal className="self-start border border-gold p-6">
          <h3 className="text-2xl">Возвращаем деньги за неиспользованное время</h3>
          <p className="mt-3 text-ink-soft"><T>{refundNote}</T></p>
        </Reveal>
      </div>
    </section>
  );
}
