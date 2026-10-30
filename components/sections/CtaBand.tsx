import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

export function CtaBand() {
  return (
    <section className="on-dark bg-bottle py-16 text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
        <p className="max-w-xl font-serif text-3xl md:text-4xl">Приходите на экскурсию — посмотрите, как проходит день.</p>
        <div className="flex flex-wrap gap-3">
          <Button href="/admission/" variant="light">Записаться на экскурсию</Button>
          <Button href={`tel:${site.phones.school.tel}`} variant="ghost" className="!border-ivory !text-ivory hover:!bg-ivory hover:!text-bottle">{site.phones.school.display}</Button>
        </div>
      </div>
    </section>
  );
}
