import { Reveal } from '@/components/motion/Reveal';
import { Card } from '@/components/ui/Card';
import { SectionHead } from '@/components/ui/SectionHead';
import { T } from '@/components/ui/T';
import { photoNote, teachers, teachersLead } from '@/content/teachers';

export function Teachers() {
  return (
    <section id="teachers" aria-labelledby="t-h" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHead n="VI" id="t-h" title="Учителя" lead={teachersLead} />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {teachers.map((t, i) => (
            <li key={t.subject}>
              <Reveal delay={(i % 4) * 0.08}>
                <Card className="h-full !bg-ivory !p-4">
                  <div aria-hidden className="flex aspect-[4/5] items-center justify-center border border-line bg-paper font-serif text-5xl text-bottle/70">{t.initials}</div>
                  <h3 className="mt-3 font-serif text-lg">{t.subject}</h3>
                  <p className="mt-1 text-sm"><T>{t.name}</T></p>
                  <p className="mt-1 text-xs text-ink-soft"><T>{photoNote}</T></p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
