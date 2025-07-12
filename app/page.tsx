import CaseStudies from '@/components/case-studies';
import ComponentWrapper from '@/components/component-wrapper';
import FeaturedTemplates from '@/components/featured-templates';
import Hero from '@/components/hero';
import Links from '@/components/links';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import Stats from '@/components/stats';

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
