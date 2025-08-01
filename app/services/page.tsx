import { Metadata } from 'next';
import ServicesList from './client-page';

export const metadata: Metadata = {
  title:
    'Services: WordPress Security, Malware Removal & Development by MD Pabel',
  description:
    "Explore MD Pabel's professional WordPress services including security audits, malware removal, custom development, and ongoing maintenance to protect and optimize your website.",
  keywords:
    'WordPress services, security solutions, malware removal, custom WordPress development, website maintenance, MD Pabel services, plugin development',
  alternates: {
    canonical: 'https://www.mdpabel.com/services',
  },
  openGraph: {
    title:
      'Services: WordPress Security, Malware Removal & Development by MD Pabel',
    description:
      'Professional WordPress security and development services offered by MD Pabel.',
    url: 'https://www.mdpabel.com/services',
    siteName: 'MD Pabel',
    images: [
      {
        url: '/screenshot.png',
        width: 1200,
        height: 630,
        alt: 'MD Pabel Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return <ServicesList />;
};

export default page;
