/** Тонкая орнамент-рамка в SVG: двойная линия с угловыми засечками. */
export function Frame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-8 md:p-12 ${className}`}>
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-gold" preserveAspectRatio="none">
        <rect x="6" y="6" width="calc(100% - 12px)" height="calc(100% - 12px)" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="12" y="12" width="calc(100% - 24px)" height="calc(100% - 24px)" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
