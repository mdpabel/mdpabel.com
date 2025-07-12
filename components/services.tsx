import {
  Shield,
  Globe,
  Code,
  Wrench,
  CheckCircle,
  ShieldCheck,
  Clock,
  Star,
} from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Title, { Heading } from './title';

const Services = () => {
  return (
    <div className='px-5 sm:px-0 py-6 sm:py-16'>
      <div className='relative space-y-8'>
        <Title>Services</Title>

        <div className='pb-8' />

        <ComponentWrapper>
          {/* Featured Service - Malware Removal */}
          <div className='relative bg-slate-900 mb-8 p-8 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300'>
            <div className='gap-8 grid grid-cols-1 lg:grid-cols-2'>
              <div>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='flex justify-center items-center bg-red-500/20 rounded-full w-12 h-12'>
                    <Shield className='w-6 h-6 text-red-400' />
                  </div>
                  <div>
                    <Heading as='h3' className='!mb-1 text-white !text-xl'>
                      Malware Removal From Hacked Site
                    </Heading>
                    <p className='text-slate-400 text-sm'>
                      Complete Security Solution
                    </p>
                  </div>
                </div>

                <p className='mb-6 text-slate-300'>
                  Professional malware detection and removal service. We follow
                  a systematic approach to ensure your website is completely
                  clean and secure from future attacks.
                </p>

                <div className='gap-3 grid grid-cols-1 sm:grid-cols-2'>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span className='text-slate-300 text-sm'>
                      99.9% Success Rate
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span className='text-slate-300 text-sm'>
                      4500+ Sites Cleaned
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-4 h-4 text-blue-400' />
                    <span className='text-slate-300 text-sm'>
                      24-48h Delivery
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Star className='w-4 h-4 text-yellow-400' />
                    <span className='text-slate-300 text-sm'>Expert Level</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='mb-4 font-semibold text-white text-lg'>
                  Our Process
                </h4>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <div className='flex justify-center items-center bg-blue-500/20 rounded-full w-8 h-8'>
                      <span className='font-medium text-blue-400 text-sm'>
                        1
                      </span>
                    </div>
                    <div>
                      <div className='font-medium text-slate-200'>
                        Deep Scanning
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Comprehensive file analysis and threat detection
                      </div>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='flex justify-center items-center bg-red-500/20 rounded-full w-8 h-8'>
                      <span className='font-medium text-red-400 text-sm'>
                        2
                      </span>
                    </div>
                    <div>
                      <div className='font-medium text-slate-200'>
                        Malware Removal
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Safe removal of all infected files and code
                      </div>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='flex justify-center items-center bg-green-500/20 rounded-full w-8 h-8'>
                      <span className='font-medium text-green-400 text-sm'>
                        3
                      </span>
                    </div>
                    <div>
                      <div className='font-medium text-slate-200'>
                        Security Hardening
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Patch vulnerabilities and strengthen defenses
                      </div>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='flex justify-center items-center bg-purple-500/20 rounded-full w-8 h-8'>
                      <span className='font-medium text-purple-400 text-sm'>
                        4
                      </span>
                    </div>
                    <div>
                      <div className='font-medium text-slate-200'>
                        Monitoring Setup
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Ongoing protection and monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Grid */}
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
            <div className='p-6 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex justify-center items-center bg-blue-500/20 rounded-full w-10 h-10'>
                  <Code className='w-5 h-5 text-blue-400' />
                </div>
                <h3 className='font-semibold text-white text-lg'>
                  Website Development
                </h3>
              </div>

              <p className='mb-4 text-slate-300'>
                Custom web applications built with modern technologies, focusing
                on security, performance, and scalability.
              </p>

              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Planning & Design
                  </span>
                  <span className='text-slate-300 text-sm'>1-2 days</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>Development</span>
                  <span className='text-slate-300 text-sm'>1-3 weeks</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Testing & Launch
                  </span>
                  <span className='text-slate-300 text-sm'>2-3 days</span>
                </div>
              </div>
            </div>

            <div className='p-6 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex justify-center items-center bg-orange-500/20 rounded-full w-10 h-10'>
                  <Globe className='w-5 h-5 text-orange-400' />
                </div>
                <h3 className='font-semibold text-white text-lg'>
                  Blacklist Removal
                </h3>
              </div>

              <p className='mb-4 text-slate-300'>
                Professional domain reputation recovery service. We help remove
                your site from security blacklists and restore trust.
              </p>

              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Analysis & Cleanup
                  </span>
                  <span className='text-slate-300 text-sm'>1-2 days</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Blacklist Removal
                  </span>
                  <span className='text-slate-300 text-sm'>3-5 days</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>Monitoring</span>
                  <span className='text-slate-300 text-sm'>Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </div>
  );
};

export default Services;
