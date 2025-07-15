import React from 'react';
import ComponentWrapper from './component-wrapper';
import { Heading } from './ui';
import { Construction } from 'lucide-react';

const UnderDevelopment = () => {
  return (
    <ComponentWrapper>
      <div className='flex flex-col justify-center items-center px-5 sm:px-0 py-16 min-h-[70vh] text-center'>
        {/* Icon */}
        <div className='mb-6'>
          <Construction className='w-16 h-16 text-purple-400' />
        </div>

        {/* Heading */}
        <Heading>Page Under Development</Heading>

        {/* Description */}
        <p className='mt-4 max-w-xl text-gray-400 text-lg'>
          We’re working hard to bring this page to life. Please check back soon
          for updates or explore other sections of our website.
        </p>

        {/* Back to Home Button */}
        <div className='mt-8'>
          <a
            href='/'
            className='inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-white transition-colors'>
            Go Back to Home
          </a>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default UnderDevelopment;
