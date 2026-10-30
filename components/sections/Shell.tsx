import type { ReactNode } from 'react';
import { Cursor } from '@/components/motion/Cursor';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileBar } from './MobileBar';

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileBar />
      <Cursor />
    </>
  );
}
