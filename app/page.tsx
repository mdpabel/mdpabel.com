import ComponentWrapper from '@/components/component-wrapper';
import Hero from '@/components/hero';
import Links from '@/components/links';
import Services from '@/components/services';
import Stats from '@/components/stats';
import React from 'react';

const HomePage = () => {
  return (
    <div className='mb-20'>
      <Hero />
      <Links />
      <Stats />
      <Services />
    </div>
  );
};

export default HomePage;
