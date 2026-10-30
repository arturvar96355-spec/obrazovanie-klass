import { Reveal } from '@/components/motion/Reveal';
import { T } from './T';

export function SectionHead({ n, title, lead, id }: { n: string; title: string; lead?: string; id?: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      {n && <p className="roman text-xl" aria-hidden>{n}</p>}
      <h2 id={id} className="mt-1 max-w-3xl text-4xl md:text-5xl"><T>{title}</T></h2>
      <hr className="rule mt-5 max-w-xs" />
      {lead && <p className="mt-5 max-w-2xl text-lg text-ink-soft"><T>{lead}</T></p>}
    </Reveal>
  );
}
