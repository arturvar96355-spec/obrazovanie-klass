'use client';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

const KEY = 'a11y-mode';
const CLASSES = ['a11y-large', 'a11y-contrast', 'a11y-still'];

function apply(on: boolean) {
  CLASSES.forEach((c) => document.documentElement.classList.toggle(c, on));
}

/** Версия для слабовидящих: крупный шрифт, высокий контраст, без анимаций. Сохраняется в localStorage. */
export function A11yToggle({ className = '', label = false }: { className?: string; label?: boolean }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === '1') { setOn(true); apply(true); }
    } catch { /* localStorage недоступен */ }
  }, []);
  const toggle = () => {
    const next = !on;
    setOn(next);
    apply(next);
    try { localStorage.setItem(KEY, next ? '1' : '0'); } catch { /* ignore */ }
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label="Версия для слабовидящих"
      title="Версия для слабовидящих"
      className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-transparent text-bottle transition-colors hover:border-bottle aria-pressed:bg-bottle aria-pressed:text-ivory ${className}`}
    >
      <Eye size={20} aria-hidden />
      <span className={label ? 'text-sm' : 'sr-only'}>{on ? 'Обычная версия' : 'Для слабовидящих'}</span>
    </button>
  );
}
