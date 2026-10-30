import { PageHero } from '@/components/sections/PageHero';
import { Route } from '@/components/sections/Route';
import { Shell } from '@/components/sections/Shell';
import { T } from '@/components/ui/T';
import { Wrap } from '@/components/ui/Wrap';
import { contactsPage } from '@/content/pages';
import { site } from '@/content/site';

export const metadata = { title: 'Контакты' };

const social: [string, string][] = [
  ['Telegram школы', site.social.telegram], ['Telegram-канал', site.social.telegramChannel], ['MAX', site.social.max],
  ['ВКонтакте', site.social.vk], ['YouTube', site.social.youtube], ['RuTube', site.social.rutube],
];

export default function ContactsPage() {
  return (
    <Shell>
      <PageHero title={contactsPage.title} lead={contactsPage.lead} />
      <Wrap>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl">Школа</h2>
            <p className="mt-3"><a className="link-u text-bottle" href={`tel:${site.phones.school.tel}`}>{site.phones.school.display}</a></p>
            <p><a className="link-u text-bottle" href={`mailto:${site.email.school}`}>{site.email.school}</a></p>
            <p className="mt-2 text-sm text-ink-soft">Здание открыто {site.hours.building}, уроки {site.hours.lessons}</p>
          </div>
          <div>
            <h2 className="text-2xl">Детский сад</h2>
            {site.phones.garden.map((p) => <p key={p.tel} className="mt-3 first:mt-3 [&+p]:mt-0"><a className="link-u text-bottle" href={`tel:${p.tel}`}>{p.display}</a></p>)}
            <p><a className="link-u text-bottle" href={`mailto:${site.email.garden}`}>{site.email.garden}</a></p>
            <p className="mt-2 text-sm text-ink-soft">Администрация сада {site.hours.gardenAdmin}</p>
          </div>
          <div>
            <h2 className="text-2xl">Мы в сети</h2>
            <ul className="mt-3 space-y-1">
              {social.map(([n, u]) => <li key={n}><a className="link-u text-bottle" href={u} target="_blank" rel="noopener noreferrer">{n}</a></li>)}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-ink-soft"><T>{contactsPage.guest}</T></p>
      </Wrap>
      <Route n="" />
    </Shell>
  );
}
