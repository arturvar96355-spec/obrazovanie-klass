import { site } from '@/content/site';

export interface BookingData {
  day: string;
  time: string;
  name: string;
  phone: string;
  age: string;
  comment?: string;
}

export function buildBookingText(d: BookingData): string {
  const lines = [
    'Здравствуйте! Хотим на экскурсию.',
    `День: ${d.day}, время: ${d.time}.`,
    `Имя: ${d.name}. Телефон: ${d.phone}.`,
    `Возраст ребёнка: ${d.age}.`,
  ];
  if (d.comment?.trim()) lines.push(`Комментарий: ${d.comment.trim()}`);
  return lines.join('\n');
}

export function channelUrl(text: string): string {
  const b = site.booking;
  if (b.primary === 'whatsapp') return `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(text)}`;
  if (b.primary === 'max') return site.social.max;
  return `https://t.me/${b.telegram}`;
}

/** Telegram и MAX не подставляют текст сами — копируем его в буфер и открываем чат. */
export const channelNeedsCopy = () => site.booking.primary !== 'whatsapp';
export const channelName = () => ({ telegram: 'Telegram', whatsapp: 'WhatsApp', max: 'MAX' })[site.booking.primary];

/** Ближайшие рабочие дни, начиная с завтрашнего. */
export function nextWorkdays(count: number, from = new Date()): { value: string; label: string; short: string }[] {
  const out: { value: string; label: string; short: string }[] = [];
  const d = new Date(from);
  while (out.length < count) {
    d.setDate(d.getDate() + 1);
    const wd = d.getDay();
    if (wd === 0 || wd === 6) continue;
    out.push({
      value: d.toISOString().slice(0, 10),
      label: new Intl.DateTimeFormat('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }).format(d),
      short: new Intl.DateTimeFormat('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' }).format(d),
    });
  }
  return out;
}
