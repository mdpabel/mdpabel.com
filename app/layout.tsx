import Header from '@/components/header';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='grid grid-rows-[auto_1fr_auto] bg-slate-900 w-full min-h-[100dvh]'>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
