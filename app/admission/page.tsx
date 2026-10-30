import { Admission } from '@/components/sections/Admission';
import { PageHero } from '@/components/sections/PageHero';
import { Shell } from '@/components/sections/Shell';
import { T } from '@/components/ui/T';
import { Wrap } from '@/components/ui/Wrap';
import { admissionPage } from '@/content/pages';

export const metadata = { title: 'Поступление' };

export default function AdmissionPage() {
  return (
    <Shell>
      <PageHero title={admissionPage.title} lead={admissionPage.lead} />
      <Admission n="" title="Путь поступления и запись" lead="Выберите день и время — заявка откроется в мессенджере с готовым текстом." />
      <Wrap className="bg-paper !max-w-none">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-2xl text-lg"><T>{admissionPage.process}</T></p>
          <h2 className="mt-10 text-3xl">{admissionPage.docsTitle}</h2>
          <ol className="mt-5 grid gap-x-10 md:grid-cols-2">
            {admissionPage.docs.map((d, i) => (
              <li key={d} className="flex gap-4 border-b border-line py-3"><span className="roman w-6" aria-hidden>{i + 1}</span><span>{d}</span></li>
            ))}
          </ol>
        </div>
      </Wrap>
    </Shell>
  );
}
