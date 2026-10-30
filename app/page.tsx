import { T } from '@/components/ui/T';
import { hero } from '@/content/copy';

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-4 py-24">
      <h1 className="text-6xl"><T>{hero.title}</T></h1>
      <p className="mt-4 text-ink-soft"><T>{hero.subtitle}</T></p>
    </main>
  );
}
