import Header from '@/components/header';
import './globals.css';
import Footer from '@/components/footer';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <NextTopLoader color='#ad46ff' />
        <div className='grid grid-rows-[auto_1fr_auto] bg-slate-900 w-full min-h-[100dvh]'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
