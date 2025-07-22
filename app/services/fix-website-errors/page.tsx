export const dynamic = 'force-static';

import ComponentWrapper from '@/components/component-wrapper';
import {
  Description,
  Heading,
  StatsCards,
  TrustIndicator,
} from '@/components/ui';
import { AlertTriangle, Zap, Clock, CheckCircle } from 'lucide-react';
import React from 'react';
import MiniServices from './fix-errors-services';

const page = () => {
  return (
    <ComponentWrapper>
      <div className='relative py-20 text-center'>
        <Heading className='mb-6'>Website Troubleshooting Services</Heading>
        <Description>
          Professional solutions for all your website issues. Our expert team
          fixes errors quickly and efficiently, getting your site back online
          with minimal downtime.
        </Description>

        <StatsCards />
        <TrustIndicator />
      </div>

      {/* Emergency Alert Section */}
      <div className='bg-red-900/20 mb-16 p-8 border border-red-700 rounded-lg'>
        <div className='flex items-center gap-3 mb-4'>
          <AlertTriangle className='w-6 h-6 text-red-400' />
          <h2 className='font-semibold text-red-400 text-xl'>
            Website Down? We're Here to Help!
          </h2>
        </div>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
          <div className='text-center'>
            <Clock className='mx-auto mb-2 w-8 h-8 text-blue-400' />
            <h3 className='mb-2 font-medium text-white'>
              24/7 Emergency Support
            </h3>
            <p className='text-slate-300 text-sm'>
              Round-the-clock assistance for critical website issues
            </p>
          </div>
          <div className='text-center'>
            <Zap className='mx-auto mb-2 w-8 h-8 text-yellow-400' />
            <h3 className='mb-2 font-medium text-white'>Rapid Response</h3>
            <p className='text-slate-300 text-sm'>
              Most issues resolved within hours, not days
            </p>
          </div>
          <div className='text-center'>
            <CheckCircle className='mx-auto mb-2 w-8 h-8 text-green-400' />
            <h3 className='mb-2 font-medium text-white'>Guaranteed Results</h3>
            <p className='text-slate-300 text-sm'>
              100% success rate with money-back guarantee
            </p>
          </div>
        </div>
      </div>

      <MiniServices />
    </ComponentWrapper>
  );
};

export default page;
