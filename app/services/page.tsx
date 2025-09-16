// app/services/page.tsx
import Script from 'next/script';
import { Heading } from '@/components/ui';
import ComponentWrapper from '@/components/component-wrapper';
import ServicesAlt from '@/components/services';

export const metadata = {
  title: 'Services | WordPress Development, Security & Headless (Next.js)',
  description:
    'Browse all services: malware removal, fixing WordPress errors, custom website development, headless WordPress with Next.js, and migrations to Next.js.',
  alternates: { canonical: 'https://www.mdpabel.com/services' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Services | MD Pabel',
    description:
      'WordPress security, development, and headless Next.js services.',
    url: 'https://www.mdpabel.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | MD Pabel',
    description:
      'WordPress development & security, plus headless Next.js expertise.',
  },
};

export default function Page() {
  // Simple ItemList schema for the services directory
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Malware Removal From Hacked Websites',
        url: 'https://www.mdpabel.com/wordpress-malware-removal-service',
      },
      {
        '@type': 'Service',
        name: 'Fix Website Errors',
        url: 'https://www.mdpabel.com/fix-wordpress-errors',
      },
      {
        '@type': 'Service',
        name: 'Website Development',
        url: 'https://www.mdpabel.com/custom-website-development',
      },
      {
        '@type': 'Service',
        name: 'Headless WordPress Development (Next.js)',
        url: 'https://www.mdpabel.com/headless-wordpress-development',
      },
      {
        '@type': 'Service',
        name: 'Convert WordPress to Next.js (Headless Migration)',
        url: 'https://www.mdpabel.com/convert-wordpress-to-nextjs',
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <Script
        id='ld-services'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Intro */}
      <ComponentWrapper className='pt-12'>
        <Heading as='h1' className='sm:text-[40px] text-3xl sm:leading-tight'>
          Services
        </Heading>
        <p className='mt-3 max-w-2xl text-gray-400'>
          WordPress security and development, plus headless Next.js expertise.
          Explore the options below or reach out if you’re not sure which
          service fits best.
        </p>
      </ComponentWrapper>

      {/* Cards */}
      <ServicesAlt />

      {/* Optional CTA footer */}
      <ComponentWrapper className='pb-16'>
        <div className='bg-slate-800/50 mt-8 p-6 sm:p-8 border border-white/10 rounded-2xl'>
          <h2 className='font-semibold text-slate-200 text-xl'>
            Not sure where to start?
          </h2>
          <p className='mt-2 text-slate-300 text-sm'>
            Tell us about your site and goals. We’ll suggest the best path and
            share a clear plan.
          </p>
          <div className='mt-4'>
            <a
              href='/#contact'
              className='inline-flex items-center bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 font-semibold text-slate-900 transition'>
              Contact us
            </a>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
}
