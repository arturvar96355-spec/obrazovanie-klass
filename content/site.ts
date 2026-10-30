export const site = {
  name: 'Классическое образование',
  legalName: 'ОАНО «Классическое образование»',
  description:
    'Частная школа и детский сад в Очаково-Матвеевском. Домашние задания, учебники и обеды — в школе. Классы по 12–15 человек.',
  founded: 2002,
  address: {
    street: 'Староволынская ул., д. 12, корп. 5',
    city: 'Москва',
    zip: '119501',
    district: 'Очаково-Матвеевское, ЗАО',
    mapUrl: 'https://yandex.com/maps/org/classical_education/60954227114/',
  },
  phones: {
    school: { display: '+7 (495) 131-06-00', tel: '+74951310600' },
    garden: [
      { display: '+7 (495) 101-46-36', tel: '+74951014636' },
      { display: '+7 (916) 636-04-54', tel: '+79166360454' },
    ],
  },
  email: { school: 'info@obrazovanie-klass.ru', garden: 'info@klass-obrazovanie.ru' },
  hours: { building: '8:00–19:00', lessons: '9:00–15:45', gardenAdmin: '9:00–19:00' },
  license: '№ 038351 от 14.04.2017',
  requisites: {
    ogrn: '1177700003645 [ОГРН — сверить с документами]',
    inn: '9729061054 [ИНН — сверить с документами]',
    kpp: '772901001',
  },
  rating: { school: { value: '4.9', count: 272 }, garden: { value: '5.0', count: 82 }, asOf: '30.10.2026' },
  stats: { staff: 55, rooms: 23, classSize: '12–15', gardenGroup: '10–12' },
  director: { name: 'Двойнишников Владимир Анатольевич', short: 'Владимир Анатольевич', role: 'Директор' },
  social: {
    telegram: 'https://t.me/klassobr',
    telegramChannel: 'https://t.me/obrazovanie_klass',
    max: 'https://max.ru/u/f9LHodD0cOJX2SgK6rQ3XC6KTk2DcHZEBZ4aUFOy1dsbEZAkpNSyBcI-uqo',
    vk: 'https://vk.com/obrazovanieklass',
    youtube: 'https://www.youtube.com/channel/UC3r9-UOAlPTIfNswYlrCzeA',
    rutube: 'https://rutube.ru/channel/47645818/',
  },
  /** Канал заявок: что открывается после отправки формы (D-07). */
  booking: {
    primary: 'telegram' as 'telegram' | 'whatsapp' | 'max',
    telegram: 'klassobr',
    whatsapp: '79254984221',
    whatsappNote: '[WhatsApp — подтвердить, что номер принадлежит школе]',
  },
  concept: {
    studio: 'Kovagor',
    note: 'Концепт сайта, подготовлен для «Классическое образование» студией Kovagor. Не является официальным сайтом компании.',
  },
};
