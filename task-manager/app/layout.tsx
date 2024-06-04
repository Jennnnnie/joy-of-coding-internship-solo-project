'use client';

import { usePathname } from 'next/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/Navbar';
import Calendar from './components/Calendar';
import ThemeSwitch from './components/ThemeSwitch';
import { Providers } from './Providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <NavBar />
          {(pathname === '/' || pathname === '/dashboard') && <Calendar />}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
