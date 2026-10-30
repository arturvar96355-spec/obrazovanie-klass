import { Shell } from '@/components/sections/Shell';

export default function NotFound() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="roman text-xl">404</p>
        <h1 className="mt-2 text-5xl">Страница не найдена</h1>
        <p className="mt-4"><a href="/" className="link-u text-bottle">Вернуться на главную</a></p>
      </div>
    </Shell>
  );
}
