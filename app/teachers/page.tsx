import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Shell } from '@/components/sections/Shell';
import { Teachers } from '@/components/sections/Teachers';
import { teachersPage } from '@/content/pages';

export const metadata = { title: 'Учителя' };

export default function TeachersPage() {
  return (
    <Shell>
      <PageHero title={teachersPage.title} lead={teachersPage.lead} />
      <Teachers n="" />
      <p className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <Link href="/sveden/#employees" className="link-u text-bottle">Педагогический состав — в сведениях об образовательной организации</Link>
      </p>
    </Shell>
  );
}
