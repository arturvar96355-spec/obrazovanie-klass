import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`border border-line bg-white/60 p-6 transition-colors duration-300 hover:border-bottle ${className}`}>{children}</div>;
}
