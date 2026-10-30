import type { ReactNode } from 'react';

export function Wrap({ children, className = '', id, bg = '' }: { children: ReactNode; className?: string; id?: string; bg?: string }) {
  return (
    <section id={id} className={bg}>
      <div className={`mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 ${className}`}>{children}</div>
    </section>
  );
}
