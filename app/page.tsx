export const dynamic = 'force-static';

import CaseStudies from '@/components/case-studies';
import ComponentWrapper from '@/components/component-wrapper';
import FeaturedTemplates from '@/components/featured-templates';
import Hero from '@/components/hero';
import Links from '@/components/links';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import Stats from '@/components/stats';

import type { Metadata } from 'next';
import { siteData } from '@/data/site-data';

export const metadata: Metadata = {
  title: `${siteData.personal.name} - Full Stack Developer, Malware Removal & Security Specialist`,
  description: `Expert in WordPress malware removal, fixing hacked websites, website security hardening, and full stack development. Over ${siteData.stats.experience} years experience serving ${siteData.stats.clientsSatisfied} clients worldwide in malware cleanup, web development, and performance optimization.`,
  keywords: [
    'WordPress Malware Removal',
    'Fix Hacked WordPress',
    'Website Security',
    'Full Stack Developer Bangladesh',
    'WordPress Security Specialist',
    'Malware Scanner',
    'Clean Hacked Site',
    'WordPress Security Plugin',
    'MERN Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Website Maintenance',
    'Blacklist Removal',
    'Google Blacklist Fix',
    'Hosting Suspension Recovery',
    ...siteData.skills.languages,
    ...siteData.skills.frontend,
    ...siteData.skills.backend,
    ...siteData.skills.databases,
    ...siteData.skills.tools,
    ...siteData.skills.cms,
    ...siteData.skills.security,
  ].join(', '),
  authors: [{ name: siteData.personal.name, url: 'https://www.mdpabel.com' }],
  creator: siteData.personal.name,
  openGraph: {
    title: `${siteData.personal.name} - Build Secure, Scalable Web Solutions`,
    description:
      'Specializing in WordPress malware removal, hacked site fixes, security hardening, and custom full stack development with React, Next.js, Node.js, and more.',
    url: 'https://www.mdpabel.com',
    siteName: 'MD Pabel',
    images: [
      {
        url: siteData.personal.avatar,
        width: 800,
        height: 600,
        alt: 'MD Pabel Avatar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.personal.name} - WordPress Security & Full Stack Expert`,
    description:
      'Restore your hacked WordPress site, remove malware, and build secure web apps. 2700+ sites secured, 1300+ happy clients.',
    images: [siteData.personal.avatar],
    creator: '@mdpabel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.mdpabel.com'),
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Links />
      <Stats />
      <Services />
    </div>
  );
};

export default HomePage;
