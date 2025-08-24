import { siteData } from '@/data/site-data';
import Image from 'next/image';
import React from 'react';
import { FaUpwork } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si';
import fiverrScreenshot from '@/public/fiverr-screenshot.png';
import upworkScreenshot from '@/public/upwork-screenshot.png';
import ComponentWrapper from './component-wrapper';

const PlatFormScreenshots = () => {
  return (
    <ComponentWrapper className='mb-20'>
      <div className='gap-8 grid grid-cols-1 lg:grid-cols-2'>
        {/* Fiverr Screenshot */}
        <div className='bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-600 rounded-xl overflow-hidden'>
          <div className='bg-green-600/20 px-6 py-4 border-green-600/30 border-b'>
            <div className='flex items-center gap-3'>
              <SiFiverr className='w-8 h-8' />
              <div>
                <div className='font-semibold text-green-400'>
                  Fiverr Profile
                </div>
                <div className='text-gray-300 text-sm'>
                  Level 2 Seller • {siteData.companies.freelance[0].projects}{' '}
                  Orders
                </div>
              </div>
            </div>
          </div>
          <div className='p-6'>
            <Image
              src={fiverrScreenshot}
              alt='Fiverr malware removal stats'
              className='mb-4 rounded-lg w-full object-cover'
            />
            <div className='gap-4 grid grid-cols-3 text-center'>
              <div>
                <div className='font-bold text-green-400 text-2xl'>4.9</div>
                <div className='text-gray-400 text-xs'>Rating</div>
              </div>
              <div>
                <div className='font-bold text-green-400 text-2xl'>
                  {siteData.companies.freelance[0].projects}
                </div>
                <div className='text-gray-400 text-xs'>Orders</div>
              </div>
              <div>
                <div className='font-bold text-green-400 text-2xl'>98%</div>
                <div className='text-gray-400 text-xs'>Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upwork Screenshot */}
        <div className='bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-600 rounded-xl overflow-hidden'>
          <div className='bg-blue-600/20 px-6 py-4 border-b border-blue-600/30'>
            <div className='flex items-center gap-3'>
              <FaUpwork className='w-8 h-8' />
              <div>
                <div className='font-semibold text-blue-400'>
                  Upwork Profile
                </div>
                <div className='text-gray-300 text-sm'>
                  Top Rated • {siteData.companies.freelance[1].projects} Jobs
                </div>
              </div>
            </div>
          </div>
          <div className='p-6'>
            <Image
              src={upworkScreenshot}
              alt='Upwork malware removal stats'
              className='mb-4 rounded-lg w-full object-cover'
            />
            <div className='gap-4 grid grid-cols-3 text-center'>
              <div>
                <div className='font-bold text-blue-400 text-2xl'>5.0</div>
                <div className='text-gray-400 text-xs'>Rating</div>
              </div>
              <div>
                <div className='font-bold text-blue-400 text-2xl'>
                  {siteData.companies.freelance[1].projects}
                </div>
                <div className='text-gray-400 text-xs'>Jobs</div>
              </div>
              <div>
                <div className='font-bold text-blue-400 text-2xl'>100%</div>
                <div className='text-gray-400 text-xs'>Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PlatFormScreenshots;
