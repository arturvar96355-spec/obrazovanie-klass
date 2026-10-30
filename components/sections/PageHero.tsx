import Link from 'next/link';
import { T } from '@/components/ui/T';

export function PageHero({ title, lead, crumb }: { title: string; lead?: string; crumb?: string }) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 md:px-8 md:pb-14 md:pt-12">
        <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-ink-soft">
          <Link href="/" className="link-u">Главная</Link> <span aria-hidden>/</span> <span aria-current="page">{crumb ?? title}</span>
        </nav>
        <div className="fade-up">
          <h1 className="text-4xl md:text-6xl"><T>{title}</T></h1>
          {lead && <p className="mt-6 max-w-2xl text-lg text-ink-soft"><T>{lead}</T></p>}
        </div>
      </div>
    </section>
  );
}
