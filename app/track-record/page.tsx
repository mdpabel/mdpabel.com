import { Shield, Code, ExternalLink } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';
import { siteData } from '@/data/site-data';
import fiverrScreenshot from '@/public/fiverr-screenshot.png';
import upworkScreenshot from '@/public/upwork-screenshot.png';
import Image from 'next/image';
import { SiFiverr } from 'react-icons/si';
import { FaUpwork } from 'react-icons/fa6';

const Projects = () => {
  return (
    <div className='bg-slate-900 py-16 text-white'>
      <ComponentWrapper>
        <div className='mb-12 text-center'>
          <Heading>Proven Track Record</Heading>
          <p className='mt-4 text-gray-400 text-lg'>
            4500+ hacked sites recovered • {siteData.stats.completedProjects}+
            projects completed • 7+ years experience
          </p>
        </div>

        {/* Platform Screenshots - Malware Removal Proof */}
        <div className='mb-20'>
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
                      Level 2 Seller •{' '}
                      {siteData.companies.freelance[0].projects} Orders
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
                      Top Rated • {siteData.companies.freelance[1].projects}{' '}
                      Jobs
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

          {/* Additional Trust Indicators */}
          <div className='gap-4 grid grid-cols-2 md:grid-cols-4 mt-8'>
            {[
              {
                label: 'Sites Recovered',
                value: siteData.stats.completedProjects,
                color: 'red',
              },
              { label: 'Avg Response', value: '< 1hr', color: 'green' },
              { label: 'Success Rate', value: '99.8%', color: 'yellow' },
              { label: 'Years Active', value: '7+', color: 'purple' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`bg-${stat.color}-900/20 border border-${stat.color}-700 rounded-lg p-4 text-center`}>
                <div className={`text-xl font-bold text-${stat.color}-400`}>
                  {stat.value}
                </div>
                <div className='text-gray-400 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Projects;
