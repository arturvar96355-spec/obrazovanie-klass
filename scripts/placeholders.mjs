// Находит все заглушки вида [текст — уточнить] в /content и печатает список.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = new URL('../content/', import.meta.url).pathname;
const re = /\[([^\[\]\n]*?(?:уточнить|от клиента|подобрать|сверить|проверить|время)[^\[\]\n]*)\]/gi;
const found = new Map();

for (const f of readdirSync(dir).filter((n) => n.endsWith('.ts'))) {
  const text = readFileSync(join(dir, f), 'utf8');
  for (const m of text.matchAll(re)) {
    const key = `[${m[1]}]`;
    found.set(key, [...(found.get(key) ?? []), f]);
  }
}
const rows = [...found].sort((a, b) => a[0].localeCompare(b[0], 'ru'));
for (const [k, files] of rows) console.log(`- ${k}  (${[...new Set(files)].join(', ')})`);
console.log(`\nВсего уникальных заглушек: ${rows.length}`);
