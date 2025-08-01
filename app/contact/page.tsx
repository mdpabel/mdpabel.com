import ComponentWrapper from '@/components/component-wrapper';
import ContactForm from '@/components/contact-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Contact Us: Get in Touch for WordPress Security & Development Services',
  description:
    'Reach out to MD Pabel for expert WordPress security, malware removal, and custom development services. Contact us today to discuss your project needs.',
  keywords:
    'contact MD Pabel, WordPress security consultation, malware removal inquiry, custom WordPress development quote, website support services, get in touch',
  alternates: {
    canonical: 'https://www.mdpabel.com/contact',
  },
  openGraph: {
    title:
      'Contact Us: Get in Touch for WordPress Security & Development Services',
    description:
      'Contact MD Pabel for professional WordPress security and development solutions.',
    url: 'https://www.mdpabel.com/contact',
    siteName: 'MD Pabel',
    images: [
      {
        url: '/screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Contact MD Pabel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return (
    <ComponentWrapper>
      <ContactForm />
    </ComponentWrapper>
  );
};

export default page;
