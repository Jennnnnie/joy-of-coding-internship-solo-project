import type { Metadata } from 'next';
import { useState } from 'react';
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
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <NavBar />
          <Calendar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
