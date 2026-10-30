'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Field } from '@/components/ui/Field';
import { T } from '@/components/ui/T';
import { consent, slots, slotsNote } from '@/content/copy';
import { site } from '@/content/site';
import { buildBookingText, channelName, channelNeedsCopy, channelUrl, nextWorkdays } from '@/lib/booking';

const schema = z.object({
  day: z.string().min(1, 'Выберите день'),
  time: z.string().min(1, 'Выберите время'),
  name: z.string().trim().min(2, 'Введите имя'),
  phone: z.string().refine((v) => v.replace(/\D/g, '').length === 11, 'Введите номер полностью'),
  age: z.string().trim().min(1, 'Укажите возраст ребёнка').max(20),
  comment: z.string().max(500).optional(),
});
type Values = z.infer<typeof schema>;

function maskPhone(raw: string): string {
  let d = raw.replace(/\D/g, '');
  if (d.startsWith('8')) d = '7' + d.slice(1);
  if (!d.startsWith('7')) d = '7' + d;
  d = d.slice(0, 11);
  const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)];
  return `+7${p[0] ? ` (${p[0]}` : ''}${p[0]?.length === 3 ? ')' : ''}${p[1] ? ` ${p[1]}` : ''}${p[2] ? `-${p[2]}` : ''}${p[3] ? `-${p[3]}` : ''}`;
}

const chip = 'min-h-11 cursor-pointer border border-bottle px-3 py-2 text-sm transition-colors has-[:checked]:bg-bottle has-[:checked]:text-ivory has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-claret';

export function BookingForm() {
  const [days, setDays] = useState<ReturnType<typeof nextWorkdays>>([]);
  const [sent, setSent] = useState<{ text: string; url: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { day: '', time: '', name: '', phone: '', age: '', comment: '' },
  });

  useEffect(() => { setDays(nextWorkdays(10)); }, []);
  useEffect(() => {
    const h = (e: Event) => setValue('comment', (e as CustomEvent<string>).detail);
    window.addEventListener('booking:prefill', h);
    return () => window.removeEventListener('booking:prefill', h);
  }, [setValue]);

  const onSubmit = async (v: Values) => {
    const dayLabel = days.find((d) => d.value === v.day)?.label ?? v.day;
    const text = buildBookingText({ ...v, day: dayLabel });
    const url = channelUrl(text);
    if (channelNeedsCopy()) {
      try { await navigator.clipboard.writeText(text); setCopied(true); } catch { setCopied(false); }
    }
    setSent({ text, url });
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className="border border-line bg-paper p-5 md:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} role="status" className="space-y-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-bottle text-ivory"><Check aria-hidden /></span>
            <h3 className="text-3xl">Заявка готова</h3>
            <p className="text-ink-soft">
              {channelNeedsCopy()
                ? `Мы открыли ${channelName()}. ${copied ? 'Текст заявки уже скопирован — вставьте его в чат и отправьте.' : 'Скопируйте текст ниже и отправьте его в чат.'}`
                : `Мы открыли ${channelName()} с готовым текстом — осталось нажать «Отправить».`}
            </p>
            <pre className="whitespace-pre-wrap border border-line bg-ivory p-4 text-sm">{sent.text}</pre>
            <div className="flex flex-wrap gap-3">
              <Button href={sent.url} target="_blank" rel="noopener noreferrer">Открыть {channelName()}</Button>
              <Button href={`tel:${site.phones.school.tel}`} variant="ghost"><Phone size={16} aria-hidden /> Позвонить</Button>
              <button type="button" onClick={() => { navigator.clipboard?.writeText(sent.text); setCopied(true); }} className="inline-flex min-h-11 items-center gap-2 px-3 text-sm text-bottle"><Copy size={16} aria-hidden /> Скопировать текст</button>
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" exit={{ opacity: 0 }}>
            <fieldset>
              <legend className="mb-2 text-sm uppercase tracking-wider text-ink-soft">День экскурсии</legend>
              <div className="flex flex-wrap gap-2">
                {days.length === 0 && <span className="text-sm text-ink-soft">Загружаем даты…</span>}
                {days.map((d) => (
                  <label key={d.value} className={chip}>
                    <input type="radio" value={d.value} className="sr-only" {...register('day')} />
                    {d.short}
                  </label>
                ))}
              </div>
              {errors.day && <p className="mt-1 text-sm text-claret" role="alert">{errors.day.message}</p>}
            </fieldset>
            <fieldset>
              <legend className="mb-2 text-sm uppercase tracking-wider text-ink-soft">Время</legend>
              <div className="flex flex-wrap items-center gap-2">
                {slots.map((s) => (
                  <label key={s} className={chip}>
                    <input type="radio" value={s} className="sr-only" {...register('time')} />
                    {s}
                  </label>
                ))}
                <span className="text-xs text-ink-soft"><T>{slotsNote}</T></span>
              </div>
              {errors.time && <p className="mt-1 text-sm text-claret" role="alert">{errors.time.message}</p>}
            </fieldset>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ваше имя" autoComplete="name" error={errors.name?.message} {...register('name')} />
              <Field
                label="Ваш телефон" type="tel" inputMode="tel" autoComplete="tel" placeholder="+7 (___) ___-__-__"
                error={errors.phone?.message}
                {...register('phone', { onChange: (e) => { e.target.value = maskPhone(e.target.value); } })}
              />
            </div>
            <Field label="Возраст ребёнка" placeholder="например, 7 лет" error={errors.age?.message} {...register('age')} />
            <div>
              <label htmlFor="comment" className="mb-1 block text-sm text-ink-soft">Комментарий</label>
              <textarea id="comment" rows={3} {...register('comment')} className="w-full border border-line bg-ivory px-4 py-2 outline-none focus:border-bottle" />
            </div>
            <div>
              <Button type="submit">Записаться на экскурсию</Button>
              <p className="mt-3 text-xs text-ink-soft">
                {consent} (<a href="/privacy/" className="link-u">политика</a>).
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
