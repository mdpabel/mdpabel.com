import Header from '@/components/header';
import './globals.css';
import Footer from '@/components/footer';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <div className='grid grid-rows-[auto_1fr_auto] bg-slate-900 w-full min-h-[100dvh]'>
            <Header />
            <main className='mb-20'>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
