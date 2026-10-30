'use client';
import { Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { A11yToggle } from '@/components/widgets/A11yToggle';
import { site } from '@/content/site';

export const nav = [
  { href: '/school/', label: 'Школа' },
  { href: '/kindergarten/', label: 'Детский сад' },
  { href: '/admission/', label: 'Поступление' },
  { href: '/prices/', label: 'Стоимость' },
  { href: '/teachers/', label: 'Учителя' },
  { href: '/contacts/', label: 'Контакты' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="font-serif text-xl leading-none text-bottle md:text-2xl">
          Классическое
          <span className="block text-[0.62em] uppercase tracking-[0.3em] text-gold-ink">образование</span>
        </Link>
        <nav aria-label="Основная" className="hidden items-center gap-4 xl:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="link-u whitespace-nowrap text-sm text-ink">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 md:gap-3">
          <a href={`tel:${site.phones.school.tel}`} className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-bottle 2xl:flex">
            <Phone size={16} aria-hidden /> {site.phones.school.display}
          </a>
          <A11yToggle />
          <Button href="/admission/" className="max-md:hidden whitespace-nowrap !px-4 !py-2 text-sm">Записаться на экскурсию</Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center xl:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Мобильная" className="border-t border-line bg-ivory px-4 pb-6 pt-2 xl:hidden">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 font-serif text-xl">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
