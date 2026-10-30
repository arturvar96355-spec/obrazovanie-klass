import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { LenisProvider } from '@/components/motion/LenisProvider';
import { site } from '@/content/site';

const playfair = localFont({
  src: [
    { path: './fonts/playfair-display-cyrillic-wght-normal.woff2', style: 'normal', weight: '400 900' },
    { path: './fonts/playfair-display-latin-wght-normal.woff2', style: 'normal', weight: '400 900' },
    { path: './fonts/playfair-display-cyrillic-wght-italic.woff2', style: 'italic', weight: '400 900' },
    { path: './fonts/playfair-display-latin-wght-italic.woff2', style: 'italic', weight: '400 900' },
  ],
  variable: '--font-playfair',
  display: 'swap',
});
const golos = localFont({
  src: [
    { path: './fonts/golos-text-cyrillic-wght-normal.woff2', style: 'normal', weight: '400 900' },
    { path: './fonts/golos-text-latin-wght-normal.woff2', style: 'normal', weight: '400 900' },
  ],
  variable: '--font-golos',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: { default: `${site.name} — частная школа и детский сад в Москве`, template: `%s — ${site.name}` },
  description: site.description,
  robots: { index: false, follow: false },
  icons: { icon: `${base}/favicon.svg` },
  openGraph: { title: site.name, description: site.description, locale: 'ru_RU', type: 'website', images: [`${base}/og.jpg`] },
};
export const viewport: Viewport = { themeColor: '#1E3B2F', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${playfair.variable} ${golos.variable}`} suppressHydrationWarning>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-bottle focus:px-4 focus:py-2 focus:text-ivory">
          К содержимому
        </a>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
