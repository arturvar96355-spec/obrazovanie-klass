import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Field } from '@/components/ui/Field';
import { Frame } from '@/components/ui/Frame';
import { T } from '@/components/ui/T';
import { Reveal } from '@/components/motion/Reveal';
import { formatRub } from '@/lib/typograph';

const colors = [
  ['ivory', '#F7F3EA', 'Фон'],
  ['paper', '#EFE8D8', 'Карточки'],
  ['bottle', '#1E3B2F', 'Основной'],
  ['claret', '#7A2633', 'Акцент'],
  ['gold', '#B08D57', 'Точечно'],
  ['ink', '#1A1A17', 'Текст'],
] as const;

export const metadata = { title: 'Дизайн-система' };

export default function Styleguide() {
  return (
    <main id="main" className="mx-auto max-w-5xl space-y-16 px-4 py-12 md:px-8">
      <header>
        <Badge>Дизайн-система</Badge>
        <h1 className="mt-4 text-5xl md:text-7xl">Классическое образование</h1>
        <p className="mt-4 max-w-xl text-ink-soft"><T>Журнальная вёрстка: серифные заголовки, тонкие линейки, редкое золото и бордо.</T></p>
      </header>

      <section aria-labelledby="c">
        <p className="roman">I</p><h2 id="c" className="text-3xl">Цвета</h2><hr className="rule my-4" />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {colors.map(([n, hex, role]) => (
            <li key={n}>
              <div className="h-20 border border-line" style={{ background: hex }} />
              <p className="mt-2 text-sm font-medium">{n}</p>
              <p className="text-xs text-ink-soft">{hex} · {role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="t">
        <p className="roman">II</p><h2 id="t" className="text-3xl">Типографика</h2><hr className="rule my-4" />
        <h3 className="text-4xl md:text-5xl">Всё — в школе</h3>
        <h4 className="mt-4 text-2xl">Заголовок третьего уровня</h4>
        <p className="dropcap mt-6 max-w-2xl text-lg">
          <T>{'Домашнее задание ребёнок делает в школе, с учителем-предметником. Классы по 12-15 человек, стоимость от 810 000 ₽ в год - без вступительных взносов.'}</T>
        </p>
        <p className="mt-4 font-serif italic text-ink-soft"><T>Подпись к фото курсивом: [фото школы — от клиента]</T></p>
        <p className="mt-4">Число с ₽: {formatRub(970300)}</p>
      </section>

      <section aria-labelledby="b">
        <p className="roman">III</p><h2 id="b" className="text-3xl">Кнопки, карточки, поля</h2><hr className="rule my-4" />
        <div className="flex flex-wrap gap-4">
          <Button href="#">Записаться на экскурсию</Button>
          <Button href="#" variant="ghost">Подробнее</Button>
          <span className="bg-bottle p-2"><Button href="#" variant="light">На тёмном</Button></span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card><h3 className="text-xl">Карточка</h3><p className="mt-2 text-sm text-ink-soft">Подъём на 4 px и золотая рамка при наведении.</p></Card>
          <Card><Badge>Бейдж</Badge><p className="mt-3 text-sm">Метка раздела.</p></Card>
          <Card><Field label="Ваше имя" placeholder="Введите имя" /></Card>
        </div>
        <div className="mt-6 max-w-sm"><Field label="Телефон с ошибкой" defaultValue="+7" error="Введите номер полностью" /></div>
      </section>

      <section aria-labelledby="p">
        <p className="roman">IV</p><h2 id="p" className="text-3xl">Заглушки и рамка</h2><hr className="rule my-4" />
        <p className="text-lg"><T>Директор — Владимир Анатольевич, [фамилия — уточнить]. Слово директора: [слово директора — от клиента].</T></p>
        <Reveal className="mt-8">
          <Frame><p className="font-serif text-2xl italic"><T>{'"Директор буквально «живет» своей школой"'}</T></p></Frame>
        </Reveal>
      </section>
    </main>
  );
}
