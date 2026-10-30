import { Reveal } from '@/components/motion/Reveal';
import { Card } from '@/components/ui/Card';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { photoNote, teachers, teachersLead } from '@/content/teachers';

export function Teachers({ n = 'VI' }: { n?: string }) {
  return (
    <section id="teachers" aria-labelledby="t-h" className="border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead n={n} id="t-h" title="Учителя" lead={teachersLead} />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {teachers.map((t, i) => (
            <li key={t.subject}>
              <Reveal delay={(i % 4) * 0.08}>
                <Card className="h-full !p-4">
                  <div aria-hidden className="flex aspect-[4/5] items-center justify-center border border-line bg-paper font-serif text-4xl font-bold text-bottle/50">{t.initials}</div>
                  <h3 className="mt-3 font-serif text-lg">{t.subject}</h3>
                  <p className="mt-1 text-sm"><T>{t.name}</T></p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-soft"><T>{photoNote}</T></p>
      </div>
    </section>
  );
}
