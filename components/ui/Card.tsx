import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-line bg-paper p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lift ${className}`}>
      {children}
    </div>
  );
}
