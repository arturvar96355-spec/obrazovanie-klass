'use client';
import { MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
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

function Contact({ title, phone, email }: { title: string; phone: { display: string; tel: string }; email: string }) {
  return (
    <div className="text-sm leading-snug">
      <p className="text-xs uppercase tracking-wider text-ink-soft">{title}</p>
      <a href={`tel:${phone.tel}`} className="block font-medium text-bottle">{phone.display}</a>
      <a href={`mailto:${email}`} className="link-u text-ink-soft">{email}</a>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="border-b border-line bg-ivory">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
          <Link href="/" className="font-serif text-xl font-bold leading-none text-bottle md:text-2xl">
            Классическое
            <span className="block text-[0.6em] font-normal uppercase tracking-[0.3em]">образование</span>
          </Link>
          <p className="hidden items-center gap-2 text-sm text-ink-soft lg:flex"><MapPin size={16} aria-hidden /> Москва, Староволынская ул., 12, корп. 5</p>
          <div className="hidden gap-8 md:flex">
            <Contact title="Школа" phone={site.phones.school} email={site.email.school} />
            <Contact title="Детский сад" phone={site.phones.garden[0]} email={site.email.garden} />
          </div>
          <A11yToggle />
        </div>
      </div>
      <div className="sticky top-0 z-40 bg-bottle text-ivory">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
          <nav aria-label="Основная" className="hidden md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="px-4 py-3.5 text-[0.95rem] transition-colors hover:bg-white/10">{n.label}</Link>
            ))}
          </nav>
          <button
            type="button"
            className="flex min-h-12 items-center gap-2 md:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />} Меню
          </button>
          <Link href="/admission/" className="my-1.5 border border-ivory px-4 py-2 text-sm transition-colors hover:bg-ivory hover:text-bottle">Записаться на экскурсию</Link>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Мобильная" className="border-t border-white/15 px-4 pb-4 md:hidden">
            <ul>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/15 py-3 text-lg">{n.label}</Link></li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
