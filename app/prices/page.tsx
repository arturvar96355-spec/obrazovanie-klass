import { Admission } from '@/components/sections/Admission';
import { PageHero } from '@/components/sections/PageHero';
import { Shell } from '@/components/sections/Shell';
import { T } from '@/components/ui/T';
import { Wrap } from '@/components/ui/Wrap';
import { Calculator } from '@/components/widgets/Calculator';
import { gardenPartDay, included, programs, refundNote } from '@/content/prices';
import { pricesPage } from '@/content/pages';
import { formatRub } from '@/lib/typograph';

export const metadata = { title: 'Стоимость' };

export default function PricesPage() {
  return (
    <Shell>
      <PageHero title={pricesPage.title} lead={pricesPage.lead} />
      <Wrap><Calculator /></Wrap>
      <Wrap className="!pt-0">
        <h2 className="text-3xl md:text-4xl">Цены в год</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[30rem] border-collapse text-left">
            <caption className="sr-only">Стоимость в год по программам</caption>
            <thead><tr className="border-b-2 border-bottle text-sm uppercase tracking-wider text-ink-soft">
              {pricesPage.tableHead.map((h, i) => <th key={i} scope="col" className="py-3 pr-4">{h}</th>)}
            </tr></thead>
            <tbody>
              {programs.map((p) => (
                <tr key={p.id} className="border-b border-line">
                  <th scope="row" className="py-4 pr-4 font-serif text-lg font-normal">{p.label}</th>
                  <td className="py-4 pr-4">{formatRub(p.withReg)}</td>
                  <td className="py-4">{formatRub(p.withoutReg)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft"><T>{pricesPage.note}</T></p>
        <p className="mt-2 text-sm"><T>{`Сад, неполный день: ${formatRub(gardenPartDay.perMonth)} в месяц. ${gardenPartDay.note}`}</T></p>
      </Wrap>
      <Wrap bg="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Скидки</h2>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {pricesPage.discounts.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-3 sm:grid-cols-2"><dt className="font-serif text-lg">{k}</dt><dd className="text-ink-soft"><T>{v}</T></dd></div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-3xl">Что входит</h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {included.map((x) => <li key={x.title} className="py-3"><span className="font-serif text-lg text-bottle">{x.title}.</span> <span className="text-ink-soft"><T>{x.text}</T></span></li>)}
            </ul>
            <p className="mt-5 border border-gold p-4 text-sm"><T>{`Возвращаем деньги за неиспользованное время. ${refundNote}`}</T></p>
          </div>
        </div>
      </Wrap>
      <Admission n="" title="Обсудить на экскурсии" lead="Запишитесь на экскурсию — расскажем про договор и точную сумму." />
    </Shell>
  );
}
