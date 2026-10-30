import type { ComponentProps } from 'react';

type Variant = 'primary' | 'ghost' | 'light';
const styles: Record<Variant, string> = {
  primary: 'bg-bottle text-ivory border-bottle hover:bg-claret hover:border-claret',
  ghost: 'bg-transparent text-bottle border-bottle hover:bg-bottle hover:text-ivory',
  light: 'bg-ivory text-bottle border-ivory hover:bg-paper',
};

type Props = ComponentProps<'a'> & { variant?: Variant };

export function Button({ variant = 'primary', className = '', ...rest }: Props) {
  return (
    <a
      {...rest}
      className={`inline-flex min-h-11 items-center justify-center gap-2 border px-6 py-3 text-[0.95rem] font-medium tracking-wide transition-[background-color,color,border-color,transform] duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    />
  );
}
