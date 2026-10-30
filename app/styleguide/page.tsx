import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Field } from '@/components/ui/Field';
import { T } from '@/components/ui/T';
import { formatRub } from '@/lib/typograph';

const colors = [
  ['ivory', '#F7F3EA', 'Фон'], ['paper', '#EFE8D8', 'Подложки'], ['bottle', '#1E3B2F', 'Основной'],
  ['claret', '#7A2633', 'Акцент'], ['gold', '#B08D57', 'Линии'], ['ink', '#1A1A17', 'Текст'],
] as const;

export const metadata = { title: 'Дизайн-система' };

export default function Styleguide() {
  return (
    <main id="main" className="mx-auto max-w-5xl space-y-14 px-4 py-12 md:px-8">
      <header>
        <Badge>Дизайн-система</Badge>
        <h1 className="mt-4 text-4xl md:text-6xl">Классическое образование</h1>
      </header>
      <section aria-labelledby="c">
        <h2 id="c" className="border-b border-line pb-3 text-3xl">Цвета</h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
          {colors.map(([n, hex, role]) => (
            <li key={n}><div className="h-16 border border-line" style={{ background: hex }} /><p className="mt-2 text-sm font-medium">{n}</p><p className="text-xs text-ink-soft">{hex} · {role}</p></li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="t">
        <h2 id="t" className="border-b border-line pb-3 text-3xl">Типографика</h2>
        <h3 className="mt-6 text-3xl">Заголовок — PT Serif Bold</h3>
        <p className="mt-4 max-w-2xl"><T>{'Основной текст — Golos Text. Классы по 12-15 человек, от 810 000 ₽ в год - без вступительных взносов.'}</T></p>
        <p className="mt-2">{formatRub(970300)} · <T>[заглушка — уточнить]</T></p>
      </section>
      <section aria-labelledby="b">
        <h2 id="b" className="border-b border-line pb-3 text-3xl">Кнопки, карточки, поля</h2>
        <div className="mt-6 flex flex-wrap gap-3"><Button href="#">Записаться на экскурсию</Button><Button href="#" variant="ghost">Подробнее</Button></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card><h3 className="text-xl">Карточка</h3><p className="mt-2 text-sm text-ink-soft">Рамка темнеет при наведении.</p></Card>
          <Card><Field label="Ваше имя" placeholder="Введите имя" /></Card>
          <Card><Field label="Телефон" defaultValue="+7" error="Введите номер полностью" /></Card>
        </div>
      </section>
    </main>
  );
}
