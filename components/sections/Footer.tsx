import Link from 'next/link';
import { T } from '@/components/ui/T';
import { site } from '@/content/site';
import { A11yToggle } from '@/components/widgets/A11yToggle';

export function Footer() {
  return (
    <footer className="on-dark bg-bottle pb-24 pt-14 text-ivory md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-3 text-sm text-ivory/75"><T>{`${site.legalName}. ${site.address.city}, ${site.address.street}.`}</T></p>
          <p className="mt-3 text-sm text-ivory/75">Лицензия {site.license} на осуществление образовательной деятельности.</p>
        </div>
        <div className="text-sm text-ivory/75">
          <p className="mb-2 text-xs uppercase tracking-widest text-gold-soft">Реквизиты</p>
          <p>ОГРН: <T>{site.requisites.ogrn}</T></p>
          <p>ИНН: <T>{site.requisites.inn}</T></p>
          <p>КПП: {site.requisites.kpp}</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li><Link className="link-u inline-block min-h-6 font-medium text-gold-soft" href="/sveden/">Сведения об образовательной организации</Link></li>
          <li><A11yToggle label className="!text-ivory aria-pressed:!bg-ivory aria-pressed:!text-bottle -ml-2 px-2" /></li>
          <li><Link className="link-u" href="/privacy/">Политика конфиденциальности</Link></li>
          <li><a className="link-u" href={site.social.telegramChannel} target="_blank" rel="noopener noreferrer">Telegram-канал</a></li>
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-ivory/20 px-4 pt-6 text-xs text-ivory/60 md:px-8">{site.concept.note}</p>
    </footer>
  );
}
