import {
  Calendar,
  Tag,
  ArrowRight,
  User,
  CheckCircle,
  Shield,
  BarChart,
  Globe,
} from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Title from './ui';
import Image from 'next/image';

const CASE_STUDIES = [
  {
    id: 'ecommerce-security',
    title: 'E-Commerce Security Overhaul',
    description:
      'Recovered a hacked Shopify store and implemented robust security measures to prevent future breaches.',
    icon: Shield,
    stats: [
      { label: 'Time to Restore', value: '24 hours' },
      { label: 'Security Score', value: '+90%' },
      { label: 'Revenue Saved', value: '$15K/day' },
    ],
    date: 'Jan 2023',
    client: 'Fashion Retailer',
    link: '/case-studies/ecommerce-security',
  },
  {
    id: 'custom-dashboard',
    title: 'Custom Analytics Dashboard',
    description:
      'Built a real-time analytics dashboard for a SaaS company using Next.js and PostgreSQL.',
    icon: BarChart,
    stats: [
      { label: 'Data Points', value: '2M+' },
      { label: 'Loading Speed', value: '<1s' },
      { label: 'User Adoption', value: '98%' },
    ],
    date: 'Mar 2023',
    client: 'SaaS Provider',
    link: '/case-studies/custom-dashboard',
  },
  {
    id: 'blacklist-recovery',
    title: 'Multi-Domain Blacklist Recovery',
    description: `Successfully removed 5 domains from Google's security blacklist after a major malware attack.`,
    icon: Globe,
    stats: [
      { label: 'Domains Recovered', value: '5' },
      { label: 'Recovery Time', value: '72 hours' },
      { label: 'Traffic Restored', value: '100%' },
    ],
    date: 'Jun 2023',
    client: 'Marketing Agency',
    link: '/case-studies/blacklist-recovery',
  },
];

const CaseStudies = () => {
  return (
    <div className='px-5 sm:px-0 py-6 sm:py-16'>
      <div className='relative space-y-8'>
        <Title>Case Studies</Title>
        <div className='pb-8' />

        <ComponentWrapper>
          {/* Featured Case Study */}
          <div className='bg-slate-900 mb-8 border border-slate-800 hover:border-slate-600 rounded-lg overflow-hidden transition-all duration-300'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='relative h-full min-h-[300px]'>
                <Image
                  src={CASE_STUDIES[0].image}
                  alt={CASE_STUDIES[0].title}
                  fill
                  objectFit='cover'
                />
              </div>
              <div className='p-8'>
                <div className='flex items-center gap-2 mb-4'>
                  <span className='bg-purple-600 px-2 py-1 rounded-full text-white text-xs'>
                    Featured
                  </span>
                  <span className='text-slate-400 text-sm'>
                    {CASE_STUDIES[0].date}
                  </span>
                </div>

                <h3 className='mb-4 font-bold text-slate-300 text-2xl'>
                  {CASE_STUDIES[0].title}
                </h3>
                <p className='mb-6 text-slate-400'>
                  {CASE_STUDIES[0].description}
                </p>

                <div className='mb-6'>
                  <div className='mb-2 font-semibold text-slate-300'>
                    Key Achievements:
                  </div>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2 text-slate-400'>
                      <CheckCircle className='w-4 h-4 text-purple-400' />
                      <span>
                        Restored website functionality within 24 hours
                      </span>
                    </li>
                    <li className='flex items-center gap-2 text-slate-400'>
                      <CheckCircle className='w-4 h-4 text-purple-400' />
                      <span>Implemented advanced security protocols</span>
                    </li>
                    <li className='flex items-center gap-2 text-slate-400'>
                      <CheckCircle className='w-4 h-4 text-purple-400' />
                      <span>Reduced vulnerability surface by 90%</span>
                    </li>
                  </ul>
                </div>

                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2 text-slate-400'>
                    <User className='w-4 h-4' />
                    <span>{CASE_STUDIES[0].client}</span>
                  </div>
                  <a
                    href={CASE_STUDIES[0].link}
                    className='flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors'>
                    Read full case study <ArrowRight className='w-4 h-4' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Case Studies */}
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
            {CASE_STUDIES.slice(1).map((study) => (
              <div
                key={study.id}
                className='flex gap-4 bg-slate-900 p-6 border border-slate-800 hover:border-slate-600 rounded-lg transition-all duration-300'>
                <div className='relative flex-shrink-0 rounded-md w-20 h-20 overflow-hidden'>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    objectFit='cover'
                  />
                </div>
                <div>
                  <h3 className='mb-2 font-bold text-slate-300 text-lg'>
                    {study.title}
                  </h3>
                  <p className='mb-3 text-slate-400 text-sm'>
                    {study.description}
                  </p>
                  <div className='flex justify-between items-center'>
                    <div className='text-slate-400 text-xs'>{study.client}</div>
                    <a
                      href={study.link}
                      className='flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm transition-colors'>
                      Details <ArrowRight className='w-3 h-3' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ComponentWrapper>
      </div>
    </div>
  );
};

export default CaseStudies;
