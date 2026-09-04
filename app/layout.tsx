import type { Metadata } from 'next';
import { DM_Mono, Manrope, Newsreader } from 'next/font/google';
import './globals.css';

const sans = Manrope({ variable: '--font-sans', subsets: ['latin'] });
const serif = Newsreader({ variable: '--font-serif', subsets: ['latin'], style: ['normal', 'italic'] });
const mono = DM_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  title: 'Septian Nuril Arifin  Mobile & Backend Developer',
  description: 'Technical portfolio Septian Nuril Arifin: Flutter, Kotlin, Laravel, REST API, dan MySQL.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body></html>;
}
