import { SectionHead } from '@/components/ui/SectionHead';
import { AdmissionPath } from '@/components/widgets/AdmissionPath';
import { BookingForm } from '@/components/widgets/BookingForm';

export function Admission() {
  return (
    <section id="admission" aria-labelledby="a-h" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 md:px-8 md:py-28">
      <SectionHead n="IX" id="a-h" title="Поступление" lead="Пять шагов от первого звонка до первого дня. Начните с экскурсии — она бесплатная." />
      <AdmissionPath />
      <div className="mt-16 grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="text-3xl">Запись на экскурсию</h3>
          <p className="mt-3 text-ink-soft">Выберите день и время. Заявка откроется в мессенджере с готовым текстом — отправьте её, и мы подтвердим встречу.</p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
