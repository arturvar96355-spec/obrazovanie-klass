'use client';
import { Minus, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { T } from '@/components/ui/T';
import { discounts, priceDisclaimer, programs, type ProgramId } from '@/content/prices';
import { calculate, type ChildInput } from '@/lib/pricing';
import { formatRub } from '@/lib/typograph';
import { AnimatedNumber } from './AnimatedNumber';

const seg = 'min-h-11 flex-1 border border-bottle px-4 py-2 text-sm transition-colors has-[:checked]:bg-bottle has-[:checked]:text-ivory has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-claret cursor-pointer text-center';

export function Calculator() {
  const [hasReg, setHasReg] = useState(true);
  const [children, setChildren] = useState<ChildInput[]>([{ program: 'school14', honors: false }]);
  const quote = useMemo(() => calculate(children, hasReg), [children, hasReg]);

  const setCount = (n: number) =>
    setChildren((c) => (n > c.length ? [...c, ...Array.from({ length: n - c.length }, () => ({ program: 'school14' as ProgramId, honors: false }))] : c.slice(0, n)));
  const patch = (i: number, p: Partial<ChildInput>) => setChildren((c) => c.map((x, j) => (j === i ? { ...x, ...p } : x)));

  const summary = () =>
    `Расчёт стоимости: ${hasReg ? 'с' : 'без'} московской регистрации; ` +
    quote.children.map((c, i) => `${i + 1}) ${c.program.label}${c.discountLabel ? ` (${c.discountLabel})` : ''}`).join('; ') +
    `. Итого ${formatRub(quote.yearly)} в год.`;

  const discuss = () => window.dispatchEvent(new CustomEvent('booking:prefill', { detail: summary() }));

  return (
    <div className="grid gap-8 border border-line bg-paper p-5 md:grid-cols-[1.2fr_1fr] md:p-10">
      <div className="space-y-8">
        <fieldset>
          <legend className="mb-2 text-sm uppercase tracking-wider text-ink-soft">Московская регистрация</legend>
          <div className="flex">
            {[[true, 'Есть'], [false, 'Нет']].map(([v, l]) => (
              <label key={String(v)} className={seg}>
                <input type="radio" name="reg" className="sr-only" checked={hasReg === v} onChange={() => setHasReg(v as boolean)} />
                {l as string}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-sm uppercase tracking-wider text-ink-soft">Сколько детей будет учиться</legend>
          <div className="flex gap-2">
            <button type="button" aria-label="Меньше детей" disabled={children.length === 1} onClick={() => setCount(children.length - 1)} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bottle disabled:opacity-30"><Minus size={16} /></button>
            <output aria-live="polite" className="inline-flex min-h-11 min-w-14 items-center justify-center font-serif text-2xl">{children.length}</output>
            <button type="button" aria-label="Больше детей" disabled={children.length === 3} onClick={() => setCount(children.length + 1)} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bottle disabled:opacity-30"><Plus size={16} /></button>
          </div>
        </fieldset>

        {children.map((c, i) => {
          const prog = programs.find((p) => p.id === c.program)!;
          return (
            <fieldset key={i} className="border-t border-line pt-5">
              <legend className="mb-2 font-serif text-lg">Ребёнок {i + 1}</legend>
              <div className="flex flex-col sm:flex-row">
                {programs.map((p) => (
                  <label key={p.id} className={seg}>
                    <input type="radio" name={`prog-${i}`} className="sr-only" checked={c.program === p.id} onChange={() => patch(i, { program: p.id, honors: p.honors ? c.honors : false })} />
                    {p.label}
                  </label>
                ))}
              </div>
              {prog.honors && (
                <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-3 text-sm">
                  <input type="checkbox" className="h-5 w-5 accent-[#1E3B2F]" checked={c.honors} onChange={(e) => patch(i, { honors: e.target.checked })} />
                  Отличник (скидка 10%)
                </label>
              )}
            </fieldset>
          );
        })}
      </div>

      <div className="flex flex-col justify-between border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        <div>
          <p className="text-sm uppercase tracking-wider text-ink-soft">Итого в год</p>
          <p className="mt-1 font-serif text-5xl text-bottle md:text-6xl" aria-live="polite"><AnimatedNumber value={quote.yearly} /></p>
          <p className="mt-2 text-lg">≈ <span className="font-serif text-2xl"><AnimatedNumber value={quote.monthly} /></span> в месяц</p>
          <ul className="mt-6 space-y-2 border-t border-line pt-4 text-sm">
            {quote.children.map((c, i) => (
              <li key={i} className="flex justify-between gap-4">
                <span>{i + 1}. {c.program.label}{c.discountLabel && <em className="not-italic text-claret"> · {c.discountLabel}</em>}</span>
                <span className="whitespace-nowrap">{formatRub(c.yearly)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-soft">
            Школа — 9 месяцев (сентябрь–май), сад — 12. Скидки не суммируются, применяется наибольшая. Скидка на второго ребёнка {discounts.second * 100}%, на третьего — {discounts.third * 100}%.
          </p>
          <p className="mt-2 text-xs text-ink-soft"><T>{discounts.rule}</T></p>
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm text-ink-soft">{priceDisclaimer}</p>
          <Button href="#admission" onClick={discuss}>Обсудить на экскурсии</Button>
        </div>
      </div>
    </div>
  );
}
