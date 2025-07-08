// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'MD Pabel - Full Stack Developer & Security Specialist | 3 Zero Digital',
  description:
    'Expert full-stack developer and security specialist. Delivering zero vulnerability, zero downtime, and zero error solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
