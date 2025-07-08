import ComponentWrapper from '@/components/component-wrapper';
import React from 'react';

const HomePage = () => {
  return (
    <ComponentWrapper className='mb-20'>
      <Hero />
      <Stats />
    </ComponentWrapper>
  );
};

function Hero() {
  return (
    <div
      className='px-5 sm:px-0 py-6 sm:py-16 pb-14 text-left sm:text-center transition-opacity duration-300 container'
      id='hero-text'>
      <h1 className='bg-clip-text bg-linear-to-b from-amber-50 to-purple-500 mb-2 sm:mb-4 font-bold text-transparent text-2xl sm:text-5xl sm:leading-tight'>
        Build. Secure. Scale.
      </h1>{' '}
      <p className='hidden sm:block px-4 text-gray-400 text-lg'>
        {' '}
        I create secure, high-performance websites and applications tailored to
        your needs. With expertise in full-stack development, web security, and
        optimization, I deliver solutions that drive growth and reliability.
      </p>{' '}
      <p className='sm:hidden block px-0 text-gray-400 text-md'>
        Secure, fast, and scalable websites and applications designed to drive
        growth.
      </p>{' '}
    </div>
  );
}
import { Calendar, Users, Globe, Shield, Code, Layers } from 'lucide-react';

const STATS = [
  {
    id: 'years-of-experience',
    icon: Calendar,
    label: 'Years of Experience',
    value: '7+',
  },
  {
    id: 'clients-served',
    icon: Users,
    label: 'Clients Served',
    value: '1600+',
  },
  {
    id: 'global-reach',
    icon: Globe,
    label: 'Global Reach',
    value: '56%',
  },
  {
    id: 'websites-resolved',
    icon: Shield,
    label: 'Malware Removal & Fix Hacked',
    value: '4500+',
    featured: true,
  },
  {
    id: 'dsa-problems-solved',
    icon: Code,
    label: 'DS&A Problems Solved',
    value: '800+',
  },
  {
    id: 'projects-completed',
    icon: Layers,
    label: 'Projects Completed',
    value: '1600+',
  },
];

const Stats = () => {
  return (
    <ul className='gap-2 grid grid-cols-1 md:grid-cols-2'>
      {STATS.map((stat, index) => (
        <li
          key={index}
          className='group relative flex flex-col gap-2 bg-slate-900 p-2.5 sm:p-3.5 border border-slate-800 hover:border-slate-600 rounded-lg font-regular text-md text-slate-400 hover:text-slate-100'>
          {/* Glowing Animated Bar */}
          {/* <div className='top-0 left-1/2 absolute rounded-t-lg w-2/5 h-[1px] overflow-hidden -translate-x-1/2'>
            <div className='bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full h-full animate-gradient-x' />
          </div> */}

          {/* Content */}
          <div className='z-10 relative flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <span>{stat.label}</span>
              <span>{stat.value}</span>
            </div>
            <stat.icon />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
