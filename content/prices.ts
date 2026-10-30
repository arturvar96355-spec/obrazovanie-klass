export type ProgramId = 'garden' | 'school14' | 'school511';

export interface Program {
  id: ProgramId;
  label: string;
  /** Цена в год с московской регистрацией, ₽ */
  withReg: number;
  /** Цена в год без московской регистрации (цена + субсидия города), ₽ */
  withoutReg: number;
  /** Месяцев в расчётном году (школа — сентябрь–май; сад — весь год) */
  months: number;
  honors: boolean;
}

export const programs: Program[] = [
  { id: 'garden', label: 'Детский сад', withReg: 1_080_000, withoutReg: 1_335_000, months: 12, honors: false },
  { id: 'school14', label: 'Школа, 1–4 классы', withReg: 810_000, withoutReg: 970_300, months: 9, honors: true },
  { id: 'school511', label: 'Школа, 5–11 классы', withReg: 810_000, withoutReg: 994_600, months: 9, honors: true },
];

/** Скидки не суммируются — берётся наибольшая (D-05). Правило сочетания — [уточнить у школы]. */
export const discounts = {
  second: 0.1,
  third: 0.2,
  honors: 0.1,
  rule: '[как суммируются скидки — уточнить; в расчёте применяется наибольшая]',
};

export const gardenPartDay = { perMonth: 68_000, note: '[неполный день: годовая сумма и часы — уточнить]' };

export const included = [
  { title: 'Обучение', text: 'Классы по 12–15 человек, домашнее задание с учителем-предметником.' },
  { title: 'Питание', text: 'Завтрак, обед и полдник. [число приёмов пищи и меню — уточнить]' },
  { title: 'Учебники и канцелярия', text: 'Всё покупает школа. Дополнительных платежей нет.' },
  { title: 'Продлёнка до 19:00', text: 'Ребёнок остаётся в школе: занятия, самоподготовка, свободное время.' },
  { title: 'Кружки', text: '[кружки: что входит в цену, что оплачивается отдельно — уточнить]' },
];

export const refundNote = 'Возвращаем деньги за неиспользованное время: если Вы переезжаете или переходите в другую школу, неизрасходованная часть оплаты возвращается.';
export const priceDisclaimer = 'Расчёт ориентировочный. Точная сумма — по договору.';
