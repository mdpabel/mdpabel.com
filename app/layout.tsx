import Header from '@/components/header';
import './globals.css';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <div className='grid grid-rows-[auto_1fr_auto] bg-slate-900 w-full min-h-[100dvh]'>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
