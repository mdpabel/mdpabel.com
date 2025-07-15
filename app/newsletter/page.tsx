import { Lightbulb, Lock, Rocket } from 'lucide-react';
import { Heading, Description } from '@/components/ui'; // Assuming these are located in '@/components/ui'
import ComponentWrapper from '@/components/component-wrapper';
import { NewsletterForm } from './newsletter-form';

export const FeatureCards = () => {
  return (
    <div className='gap-6 grid grid-cols-1 md:grid-cols-3 mb-16'>
      <div className='group flex flex-col justify-center items-center bg-slate-800/50 hover:shadow-blue-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-blue-500 rounded-xl transition-all duration-300'>
        <Lock className='mb-4 w-10 h-10 text-blue-400' />
        <div className='bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 font-bold text-transparent text-2xl'>
          Security Updates
        </div>
        <div className='text-slate-300'>
          Latest security patches and best practices.
        </div>
      </div>
      <div className='group flex flex-col justify-center items-center bg-slate-800/50 hover:shadow-green-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-green-500 rounded-xl transition-all duration-300'>
        <Lightbulb className='mb-4 w-10 h-10 text-green-400' />
        <div className='bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2 font-bold text-transparent text-2xl'>
          Exclusive Insights
        </div>
        <div className='text-slate-300'>Tips and trends from our experts.</div>
      </div>
      <div className='group flex flex-col justify-center items-center bg-slate-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm p-6 border border-slate-700 hover:border-purple-500 rounded-xl transition-all duration-300'>
        <Rocket className='mb-4 w-10 h-10 text-purple-400' />
        <div className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 font-bold text-transparent text-2xl'>
          Performance Boosts
        </div>
        <div className='text-slate-300'>
          Learn to optimize your website speed.
        </div>
      </div>
    </div>
  );
};

const NewsletterPage = () => {
  return (
    <>
      <ComponentWrapper className='relative py-20 text-center'>
        <Heading className='mb-6'>
          Join Our Newsletter{' '}
          <Rocket className='inline-block ml-2 w-8 h-8 text-purple-400' />
        </Heading>

        <Description className='mx-auto max-w-2xl'>
          Get exclusive insights into web security, performance optimization,
          and the latest digital trends delivered directly to your inbox. Stay
          ahead with 3 Zero Digital.
        </Description>

        <FeatureCards />

        <NewsletterForm />
      </ComponentWrapper>
    </>
  );
};

export default NewsletterPage;
