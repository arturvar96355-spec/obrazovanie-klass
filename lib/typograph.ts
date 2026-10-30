const NBSP = ' ';
const SHORT_WORDS = 'в|во|к|ко|с|со|у|о|об|от|до|по|на|за|из|не|ни|но|а|и|я|же|бы|ли|то|для|при|про|над|под|без';
const UNITS = '₽|руб\\.?|мин|мес|чел\\.?|кл\\.?|лет|года|год|класс[а-я]*|этаж[а-я]*|%';

/** Типографика для русского текста: ёлочки, тире, неразрывные пробелы, ₽ после числа. */
export function typograph(input: string): string {
  let s = input;
  // «ёлочки» из прямых кавычек (вложенные — „лапки“)
  let open = true;
  s = s.replace(/"/g, () => { const q = open ? '«' : '»'; open = !open; return q; });
  // вложенные кавычки: «a «b» c» → «a „b“ c»
  let depth = 0;
  s = s.replace(/[«»]/g, (c) => {
    if (c === '«') return depth++ === 0 ? '«' : '„';
    return --depth === 0 ? '»' : '“';
  });
  // длинное тире
  s = s.replace(/\s[-–]\s/g, `${NBSP}— `).replace(/^— /, `—${NBSP}`);
  // диапазоны: 12-15 → 12–15 (только цифры)
  s = s.replace(/(\d)-(\d)/g, '$1–$2');
  // тысячи: 970 300 → неразрывный пробел
  s = s.replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NBSP}`);
  // число + единица
  s = s.replace(new RegExp(`(\\d) (${UNITS})(?![а-яa-z])`, 'gi'), `$1${NBSP}$2`);
  // короткие слова
  const re = new RegExp(`(^|[\\s«(])(${SHORT_WORDS}) `, 'gi');
  s = s.replace(re, `$1$2${NBSP}`).replace(re, `$1$2${NBSP}`);
  return s;
}

const nf = new Intl.NumberFormat('ru-RU');
export const formatNumber = (n: number) => nf.format(n).replace(/\s/g, NBSP);
export const formatRub = (n: number) => `${formatNumber(Math.round(n))}${NBSP}₽`;
