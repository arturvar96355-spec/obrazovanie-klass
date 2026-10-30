import { Shell } from '@/components/sections/Shell';
import { T } from '@/components/ui/T';
import { privacyStub } from '@/content/copy';

export const metadata = { title: 'Политика конфиденциальности' };

export default function Privacy() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <h1 className="text-4xl md:text-6xl">Политика конфиденциальности</h1>
        <p className="mt-6 text-lg"><T>{privacyStub}</T></p>
        <p className="mt-4 text-ink-soft">Это концепт сайта. Заявки не сохраняются: текст формируется в Вашем браузере и открывается в мессенджере.</p>
      </div>
    </Shell>
  );
}
