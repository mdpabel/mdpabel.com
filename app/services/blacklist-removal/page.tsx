export const dynamic = 'force-static';

import ComponentWrapper from '@/components/component-wrapper';
import {
  Description,
  Heading,
  StatsCards,
  TrustIndicator,
} from '@/components/ui';
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import React from 'react';
import BlacklistRemovalForm from './blacklist-removal-form';
import { Metadata } from 'next';
import BlacklistFAQ from './blacklist-faq';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mdpabel.com'),
  title:
    'Advanced Blacklist Removal Service | Fix Blacklisted Site & Delist from Google',
  description:
    'Expert blacklist removal for hacked websites. Delist from Google, Spamhaus, and major vendors. Fast recovery with 99.9% success rate. Trusted by 4500+ businesses. Starting at $79.',
  keywords: [
    'blacklist removal',
    'fix blacklisted site',
    'delist from google blacklist',
    'website blacklist cleanup',
    'remove from spamhaus',
    'blacklist recovery',
    'site delisting service',
    'google safe browsing removal',
    'av vendor delist',
    'website reputation repair',
  ],
  authors: [{ name: 'Your Company Name' }],
  openGraph: {
    title:
      'Advanced Blacklist Removal Service | Fix Blacklisted Site & Delist from Google',
    description:
      'Expert blacklist removal for hacked websites. Delist from Google, Spamhaus, and major vendors. Fast recovery with 99.9% success rate. Trusted by 4500+ businesses. Starting at $79.',
    url: 'https://www.mdpabel.com/services/blacklist-removal',
    siteName: 'Your Company Name',
    images: [
      {
        url: '/blacklist-removal.png', // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: 'Blacklist Removal Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Advanced Blacklist Removal Service | Fix Blacklisted Site & Delist from Google',
    description:
      'Expert blacklist removal for hacked websites. Delist from Google, Spamhaus, and major vendors. Fast recovery with 99.9% success rate. Trusted by 4500+ sites. Starting at $79.',
    images: ['/blacklist-removal.png'], // Replace with actual Twitter image path
    site: '@mdpabe11', // Replace with your Twitter handle
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
  alternates: {
    canonical: 'https://www.mdpabel.com/services/blacklist-removal', // Replace with your actual domain
  },
};

const vendors = [
  'Abusix',
  'ADMINUSLabs',
  'AegisLab',
  'Ahnlab',
  'AILabs',
  'Alibaba',
  'AlienVault',
  'AlphaMountain',
  'AlphaSOC',
  'Alyac',
  'Antivir',
  'Antiy',
  'ArcSight Threat Intelligence',
  'AutoShun',
  'Avast',
  'AVG',
  'Baidu',
  'BitDefender',
  'BforeAi',
  'Bkav',
  'Certego',
  'Chong Lua Dao',
  'CINS Army',
  'ClamAV',
  'Clean-MX',
  'Cluster25',
  'Cloudflare',
  'CMC',
  'CRDF',
  'Criminal IP',
  'CrowdSec',
  'CrowdStrike',
  'CyanSecurity',
  'Cybereason',
  'Cyble',
  'Cylance',
  'Cynet',
  'CyRadar',
  'Deep Instinct',
  'DNS8',
  'DrWeb',
  'eGambit',
  'Elastic',
  'Emsisoft',
  'ESET',
  'FireEye',
  'F-Prot',
  'F-Secure',
  'Forcepoint ThreatSeeker',
  'Fortinet',
  'GData',
  'Gridinsoft',
  'Hacksoft',
  'Hauri',
  'Heimdal',
  'Hoplite Industries',
  'Ikarus',
  'IPsum',
  'Jiangmin',
  'K7',
  'Kaspersky',
  'Lionic',
  'Lumu',
  'Malbeacon',
  'Malwarebytes',
  'Malwares.com',
  'MAX',
  'MaxSecure',
  'McAfee',
  'Skyhigh',
  'Microsoft',
  'Microworld',
  'NANO',
  'Netcraft',
  'Panda',
  'Phishing Database',
  'PhishLabs',
  'Qihoo360',
  'QuickHeal',
  'Quttera',
  'Rising',
  'Sangfor',
  'Safe Browsing',
  'Scumware.org',
  'SecureAge',
  'Seclookup',
  'Segasec',
  'Sentinel One',
  'SOCRadar',
  'Sophos',
  'Spamhaus',
  'Sucuri',
  'Symantec',
  'Tencent',
  'TheHacker',
  'Trapmine',
  'TrendMicro',
  'Trustwave',
  'Trustlook',
  'URLQuery',
  'Varist',
  'VBA32',
  'Viettel Threat Intelligence',
  'Vipre',
  'VirIT',
  'VirusDie',
  'Webroot',
  'Xcitium Verdict Cloud',
  'Yandex',
  'Zillya',
  'ZoneAlarm',
];

const page = () => {
  const sectionHeadingClass = 'text-center text-3xl sm:text-3xl mb-4';

  return (
    <ComponentWrapper>
      <div className='relative pt-10 pb-20 text-center'>
        <Heading className='mb-6'>Advanced Blacklist Removal</Heading>

        <Description>
          Expert blacklist removal and site reputation repair services. Get
          delisted from major vendors and restore your website's trust. Trusted
          by thousands of businesses worldwide.
        </Description>

        {/* Stats Cards */}
        <StatsCards />

        {/* Trust Indicators */}
        <TrustIndicator />
      </div>
      <div className='bg-red-900/20 mb-16 p-8 border border-red-700 rounded-lg'>
        <div className='flex items-center gap-3 mb-4'>
          <AlertTriangle className='w-6 h-6 text-red-400' />
          <h2 className='font-semibold text-red-400 text-xl'>
            Is Your Site Blacklisted?
          </h2>
        </div>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h3 className='mb-3 font-medium text-white'>
              Common Blacklist Symptoms:
            </h3>
            <ul className='space-y-2 text-slate-300'>
              <li className='flex items-center gap-2'>
                <AlertCircle className='w-4 h-4 text-red-400' />
                <span>Browser warnings like "This site may be hacked"</span>
              </li>
              <li className='flex items-center gap-2'>
                <AlertCircle className='w-4 h-4 text-red-400' />
                <span>Email delivery failures or spam folder placement</span>
              </li>
              <li className='flex items-center gap-2'>
                <AlertCircle className='w-4 h-4 text-red-400' />
                <span>Traffic drop from search engines</span>
              </li>
              <li className='flex items-center gap-2'>
                <AlertCircle className='w-4 h-4 text-red-400' />
                <span>Site blocked by antivirus software</span>
              </li>
              <li className='flex items-center gap-2'>
                <AlertCircle className='w-4 h-4 text-red-400' />
                <span>Notifications from hosting or Google Search Console</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-3 font-medium text-white'>
              Immediate Actions Needed:
            </h3>
            <ul className='space-y-2 text-slate-300'>
              <li className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4 text-green-400' />
                <span>Don't panic - we can get you delisted quickly</span>
              </li>
              <li className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4 text-green-400' />
                <span>Clean any malware first (use our service if needed)</span>
              </li>
              <li className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4 text-green-400' />
                <span>Contact us for professional delisting</span>
              </li>
              <li className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4 text-green-400' />
                <span>Avoid DIY submissions that might delay approval</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BlacklistRemovalForm />

      {/* Symptoms Section */}
      <div className='group bg-slate-800/50 backdrop-blur-sm mb-16 p-8 border border-slate-700 rounded-xl transition-all duration-300'>
        <Heading as='h2' className={sectionHeadingClass}>
          Symptoms of Being Blacklisted
        </Heading>
        <p className='mb-6 text-slate-300 text-center'>
          Identify if your site is blacklisted to take quick action and prevent
          further damage.
        </p>
        <ul className='space-y-4 text-slate-300'>
          <li className='flex items-start gap-3'>
            <AlertCircle className='mt-1 w-5 h-5 text-red-400' />
            <div>
              <span className='font-medium'>Google Warnings:</span> "Deceptive
              site ahead" or "This site may be hacked" in search results.
            </div>
          </li>
          <li className='flex items-start gap-3'>
            <AlertCircle className='mt-1 w-5 h-5 text-red-400' />
            <div>
              <span className='font-medium'>Email Issues:</span> Emails from
              your domain bounced or marked as spam.
            </div>
          </li>
          <li className='flex items-start gap-3'>
            <AlertCircle className='mt-1 w-5 h-5 text-red-400' />
            <div>
              <span className='font-medium'>Browser Blocks:</span> Site
              inaccessible due to AV or firewall blocks.
            </div>
          </li>
          <li className='flex items-start gap-3'>
            <AlertCircle className='mt-1 w-5 h-5 text-red-400' />
            <div>
              <span className='font-medium'>Traffic and Ranking Drop:</span>{' '}
              Sudden decrease in visitors and search rankings.
            </div>
          </li>
        </ul>
      </div>

      {/* Blacklist Removal Process Section */}
      <div className='group bg-slate-800/50 backdrop-blur-sm mb-16 p-8 border border-slate-700 rounded-xl transition-all duration-300'>
        <Heading as='h2' className={sectionHeadingClass}>
          Our Blacklist Removal Process
        </Heading>
        <p className='mb-6 text-slate-300 text-center'>
          Our expert process ensures quick and effective delisting from
          blacklists.
        </p>
        <ol className='space-y-4 text-slate-300 list-decimal list-inside'>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>Verify and clean any remaining issues on your site.</span>
          </li>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>Identify all blacklists affecting your site.</span>
          </li>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>Submit delisting requests with proof of cleanup.</span>
          </li>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>Monitor status and follow up until fully delisted.</span>
          </li>
        </ol>
      </div>

      {/* DIY vs Professional Table */}
      <div className='group bg-slate-800/50 backdrop-blur-sm mb-16 p-8 border border-slate-700 rounded-xl transition-all duration-300'>
        <Heading as='h2' className={sectionHeadingClass}>
          DIY vs Professional Blacklist Removal
        </Heading>
        <p className='mb-6 text-slate-300 text-center'>
          Compare approaches to fixing blacklisted sites.
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-slate-300 border-collapse'>
            <thead>
              <tr className='bg-slate-700/50'>
                <th className='p-4 border border-slate-600 text-left'>
                  Approach
                </th>
                <th className='p-4 border border-slate-600 text-left'>Pros</th>
                <th className='p-4 border border-slate-600 text-left'>Cons</th>
                <th className='p-4 border border-slate-600 text-left'>
                  Recommended For
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-4 border border-slate-600'>DIY Removal</td>
                <td className='p-4 border border-slate-600'>
                  Free, control over process
                </td>
                <td className='p-4 border border-slate-600'>
                  Time-consuming, risk of rejection, missed blacklists
                </td>
                <td className='p-4 border border-slate-600'>
                  Tech experts with time
                </td>
              </tr>
              <tr>
                <td className='p-4 border border-slate-600'>
                  Professional Service
                </td>
                <td className='p-4 border border-slate-600'>
                  Expert handling, high success rate, fast delisting
                </td>
                <td className='p-4 border border-slate-600'>
                  Costs starting at $79
                </td>
                <td className='p-4 border border-slate-600'>
                  Businesses needing quick recovery
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Vendors Section */}
      <div className='group bg-slate-800/50 backdrop-blur-sm mb-16 p-8 border border-slate-700 rounded-xl transition-all duration-300'>
        <Heading as='h2' className={sectionHeadingClass}>
          Blacklists We Can Help Remove You From
        </Heading>
        <p className='mb-6 text-slate-300 text-center'>
          We have experience delisting from these major blacklists and security
          vendors.
        </p>
        <div className='gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-slate-300'>
          {vendors.map((v) => (
            <div
              key={v}
              className='p-2 border border-slate-700 rounded-md text-center'>
              {v}
            </div>
          ))}
        </div>
      </div>

      {/* Specific Blacklists Section */}
      <div className='group bg-slate-800/50 backdrop-blur-sm mb-16 p-8 border border-slate-700 rounded-xl transition-all duration-300'>
        <Heading as='h2' className={sectionHeadingClass}>
          Removing from Specific Blacklists
        </Heading>
        <p className='mb-6 text-slate-300 text-center'>
          Steps for common blacklists like Google and Spamhaus.
        </p>
        <ul className='space-y-4 text-slate-300'>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>
              Google Safe Browsing: Submit reconsideration via Search Console.
            </span>
          </li>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>
              Spamhaus: Use their removal form after verifying cleanup.
            </span>
          </li>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>AV Vendors: Contact support with proof of no threats.</span>
          </li>
          <li className='flex items-start gap-3'>
            <CheckCircle className='mt-1 w-5 h-5 text-green-400' />
            <span>
              Monitor and prevent re-listing with security best practices.
            </span>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className='bg-red-900/20 mb-16 p-8 border border-red-700 rounded-lg'>
        <Heading as='h2' className={sectionHeadingClass}>
          FAQ: Common Questions About Blacklist Removal
        </Heading>
        <BlacklistFAQ />
      </div>
    </ComponentWrapper>
  );
};

export default page;
