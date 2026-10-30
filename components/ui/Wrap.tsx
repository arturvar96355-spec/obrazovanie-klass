import type { ReactNode } from 'react';

export function Wrap({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20 ${className}`}>
      {children}
    </section>
  );
}
