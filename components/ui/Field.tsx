import type { ComponentProps } from 'react';

type Props = ComponentProps<'input'> & { label: string; error?: string };

export function Field({ label, error, id, ...rest }: Props) {
  const fid = id ?? `f-${label}`;
  return (
    <div>
      <label htmlFor={fid} className="mb-1 block text-sm text-ink-soft">{label}</label>
      <input
        id={fid}
        aria-invalid={!!error}
        aria-describedby={error ? `${fid}-e` : undefined}
        {...rest}
        className="min-h-11 w-full border border-line bg-ivory px-4 py-2 text-base outline-none transition-colors focus:border-bottle aria-[invalid=true]:border-claret"
      />
      {error && <p id={`${fid}-e`} className="mt-1 text-sm text-claret">{error}</p>}
    </div>
  );
}
