import { Phone } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/content/site';

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-bottle bg-ivory md:hidden">
      <a href={`tel:${site.phones.school.tel}`} className="flex min-h-14 items-center justify-center gap-2 text-bottle"><Phone size={18} aria-hidden /> Позвонить</a>
      <Link href="/admission/" className="flex min-h-14 items-center justify-center bg-bottle text-ivory">Записаться</Link>
    </div>
  );
}
