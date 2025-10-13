import Header from '@/components/header';
import './globals.css';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';
import TawkTo from '@/components/tawk-chat';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <GoogleTagManager gtmId='GTM-W3CL327W' />
      <body>
        <div className='grid grid-rows-[auto_1fr_auto] bg-slate-900 w-full min-h-[100dvh]'>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <TawkTo />
        </div>
      </body>
    </html>
  );
}
