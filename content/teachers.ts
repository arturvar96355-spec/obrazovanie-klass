export interface TeacherSlot { subject: string; name: string; initials: string }

const name = '[имя — уточнить]';
export const teachers: TeacherSlot[] = [
  { subject: 'Английский язык', name, initials: 'А' },
  { subject: 'Китайский язык', name, initials: 'К' },
  { subject: 'Начальные классы', name, initials: 'Н' },
  { subject: 'Математика', name, initials: 'М' },
  { subject: 'Технология', name, initials: 'Т' },
  { subject: 'Физическая культура', name, initials: 'Ф' },
  { subject: 'Шахматы', name, initials: 'Ш' },
  { subject: 'Музыка', name, initials: 'М' },
];
export const teachersLead = 'Родители чаще всего благодарят именно учителей.';
export const photoNote = '[фото — от клиента, нужно согласие]';
