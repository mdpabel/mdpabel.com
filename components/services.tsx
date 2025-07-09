import {
  Shield,
  Globe,
  Code,
  Search,
  Wrench,
  CheckCircle,
  Monitor,
  ShieldCheck,
} from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Title from './title';

const Services = () => {
  return (
    <div className='px-5 sm:px-0 py-6 sm:py-16'>
      <div className='relative space-y-8'>
        <Title>Services</Title>

        <div className='pb-8' />

        <ComponentWrapper>
          {/* Malware Removal with Process */}
          <div className='relative bg-slate-900 mb-6 p-8 border border-slate-800 hover:border-slate-600 rounded-lg transition-all duration-300'>
            <div className='gap-8 grid grid-cols-1 lg:grid-cols-2'>
              <div>
                <div className='flex items-center gap-4 mb-6'>
                  <Shield className='w-8 h-8 text-slate-400' />
                  <div>
                    <h3 className='font-bold text-slate-300 text-xl'>
                      WordPress Malware Removal
                    </h3>
                    <p className='text-slate-400'>Complete Security Solution</p>
                  </div>
                </div>

                <p className='mb-6 text-slate-400'>
                  Professional malware detection and removal service. We follow
                  a systematic approach to ensure your website is completely
                  clean and secure from future attacks.
                </p>

                <div className='flex items-center gap-4 text-sm'>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-purple-400' />
                    <span className='text-slate-400'>99.9% Success Rate</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-purple-400' />
                    <span className='text-slate-400'>4500+ Sites Cleaned</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-purple-400' />
                    <span className='text-slate-400'>24-48h Delivery</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='mb-4 font-semibold text-slate-400 text-lg'>
                  Our Process
                </h4>
                <div className='space-y-3'>
                  <div className='flex items-center gap-3'>
                    <ShieldCheck className='w-4 h-4 text-purple-400' />
                    <div>
                      <div className='font-medium text-slate-400'>
                        Deep Scanning
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Comprehensive file analysis
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <ShieldCheck className='w-4 h-4 text-purple-400' />
                    <div>
                      <div className='font-medium text-slate-400'>
                        Malware Removal
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Clean infected files
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <ShieldCheck className='w-4 h-4 text-purple-400' />
                    <div>
                      <div className='font-medium text-slate-400'>
                        Security Hardening
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Patch vulnerabilities
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <ShieldCheck className='w-4 h-4 text-purple-400' />
                    <div>
                      <div className='font-medium text-slate-400'>
                        Monitoring Setup
                      </div>
                      <div className='text-slate-400 text-sm'>
                        Ongoing protection
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className='right-2 bottom-1.5 absolute flex items-center rounded-tl rounded-br font-medium text-purple-300 text-xs'>
              <span className='flex mr-1.5 w-2 h-2'>
                <span className='inline-flex absolute bg-purple-400 opacity-75 rounded-full w-2 h-2 animate-ping'></span>
                <span className='inline-flex relative bg-purple-500 rounded-full w-2 h-2'></span>
              </span>
              Expert
            </span>
          </div>

          {/* Other Services */}
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-slate-900 p-6 border border-slate-800 hover:border-slate-600 rounded-lg transition-all duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <Code className='w-6 h-6 text-slate-400' />
                <h3 className='font-semibold text-slate-300 text-xl'>
                  Website Development
                </h3>
              </div>

              <p className='mb-4 text-slate-400'>
                Custom web applications built with modern technologies, focusing
                on security, performance, and scalability.
              </p>

              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Planning & Design
                  </span>
                  <span className='text-slate-400 text-sm'>1-2 days</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>Development</span>
                  <span className='text-slate-400 text-sm'>1-3 weeks</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Testing & Launch
                  </span>
                  <span className='text-slate-400 text-sm'>2-3 days</span>
                </div>
              </div>
            </div>

            <div className='bg-slate-900 p-6 border border-slate-800 hover:border-slate-600 rounded-lg transition-all duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <Globe className='w-6 h-6 text-slate-400' />
                <h3 className='font-semibold text-slate-300 text-xl'>
                  Blacklist Removal
                </h3>
              </div>

              <p className='mb-4 text-slate-400'>
                Professional domain reputation recovery service. We help remove
                your site from security blacklists.
              </p>

              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Analysis & Cleanup
                  </span>
                  <span className='text-slate-400 text-sm'>1-2 days</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>
                    Blacklist Removal
                  </span>
                  <span className='text-slate-400 text-sm'>3-5 days</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-400 text-sm'>Monitoring</span>
                  <span className='text-slate-400 text-sm'>Ongoing</span>
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
