export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-gold px-3 py-1 text-xs uppercase tracking-[0.18em] text-bottle">
      {children}
    </span>
  );
}
