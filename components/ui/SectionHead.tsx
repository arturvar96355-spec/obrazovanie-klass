import { Reveal } from '@/components/motion/Reveal';
import { T } from './T';

export function SectionHead({ n, title, lead, id }: { n?: string; title: string; lead?: string; id?: string }) {
  return (
    <Reveal className="mb-8 md:mb-12">
      <div className="flex items-baseline gap-4 border-b border-line pb-4">
        {n && <span className="roman text-lg" aria-hidden>{n}</span>}
        <h2 id={id} className="text-3xl md:text-4xl"><T>{title}</T></h2>
      </div>
      {lead && <p className="mt-4 max-w-2xl text-lg text-ink-soft"><T>{lead}</T></p>}
    </Reveal>
  );
}
