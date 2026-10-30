import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'primary' | 'ghost' | 'light';
const styles: Record<Variant, string> = {
  primary: 'bg-bottle text-ivory border-bottle hover:bg-claret hover:border-claret',
  ghost: 'bg-transparent text-bottle border-bottle hover:bg-bottle hover:text-ivory',
  light: 'bg-ivory text-bottle border-ivory hover:bg-paper',
};
const base = 'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 border px-6 py-3 text-[0.95rem] font-medium transition-colors duration-300';

type LinkProps = ComponentProps<'a'> & { variant?: Variant; href: string };
type ButtonProps = ComponentProps<'button'> & { variant?: Variant; href?: undefined };

export function Button(props: LinkProps | ButtonProps) {
  const { variant = 'primary', className = '', ...rest } = props;
  const cls = `${base} ${styles[variant]} ${className}`;
  if (props.href !== undefined) {
    const { href, ...a } = rest as ComponentProps<'a'> & { href: string };
    if (href.startsWith('/')) return <Link href={href} {...a} className={cls} />;
    return <a href={href} {...a} className={cls} />;
  }
  return <button {...(rest as ComponentProps<'button'>)} className={cls} />;
}
