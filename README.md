# obrazovanie-klass — концепт сайта

Сайт-концепт частной школы и детского сада «Классическое образование» (Next.js 16, статический экспорт). Не является официальным сайтом, не индексируется.

## Команды
- `npm run dev` — разработка
- `npm run build` — сборка в `out/`
- `npm run typecheck` — проверка типов
- `npm run placeholders` — список всех заглушек `[… — уточнить]` из `content/`

## Где что
- Тексты, цены, контакты — `content/`
- Дизайн-система — `/styleguide`
- План — `docs/PLAN.md`, факты — `docs/FACTS.md`, решения — `DECISIONS.md`

## Деплой
GitHub Pages: сборка с `NEXT_PUBLIC_BASE_PATH=/obrazovanie-klass`. Cloudflare Pages: build `npm run build`, output `out`.

## Статус
Этапы 1–7 готовы: каркас, дизайн-система, контент, главная со всеми секциями, сцена «День ученика», калькулятор, путь поступления, запись на экскурсию. Дальше: внутренние страницы (school, kindergarten, admission, prices, teachers, contacts), basePath для GitHub Pages, OG-картинка, Lighthouse.
