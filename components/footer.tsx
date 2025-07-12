import Link from 'next/link';
import { siteData } from '@/data/site-data';
import ComponentWrapper from './component-wrapper';

const Footer2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-900 border-slate-800 border-t text-white'>
      <ComponentWrapper>
        <div className='py-12'>
          {/* Top Section */}
          <div className='space-y-6 text-center'>
            <div className='flex justify-center items-center gap-3'>
              <div className='flex justify-center items-center bg-linear-to-b from-purple-50 to-purple-100 rounded w-10 h-10'>
                {siteData.personal.logo}
              </div>
              <h3 className='font-semibold text-2xl'>
                {siteData.personal.name}
              </h3>
            </div>
            <p className='mx-auto max-w-md text-gray-400'>
              {siteData.personal.tagline}
            </p>

            {/* Navigation */}
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {siteData.navigation.main.slice(1).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='text-gray-400 hover:text-purple-300 text-sm transition-colors'>
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className='flex justify-center items-center gap-4 pt-4'>
              {siteData.social.links.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className='bg-slate-800 hover:bg-slate-700 p-2 rounded-full text-gray-400 hover:text-purple-300 transition-colors'
                  aria-label={social.name}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className='mt-8 pt-8 border-slate-800 border-t text-center'>
            <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
              <div className='text-gray-400 text-sm'>
                © {currentYear} {siteData.personal.name}. All rights reserved.
              </div>
              <div className='flex items-center gap-4 text-sm'>
                {siteData.navigation.legal.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className='text-gray-400 hover:text-purple-300 transition-colors'>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </footer>
  );
};

export default Footer2;
