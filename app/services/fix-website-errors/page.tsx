export const dynamic = 'force-static';

import ComponentWrapper from '@/components/component-wrapper';
import {
  Description,
  Heading,
  StatsCards,
  TrustIndicator,
} from '@/components/ui';
import {
  AlertTriangle,
  Globe,
  Shield,
  Settings,
  Zap,
  Lock,
  Database,
  FileX,
  Server,
  ExternalLink,
  ChevronRight,
  Clock,
  CheckCircle,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SearchForm from '@/components/search';

// ... same metadata ...

const troubleshootingServices = [
  {
    id: 'http-404',
    title: 'HTTP 404 Not Found Errors',
    description:
      'Fix broken links, missing pages, and 404 error pages with proper redirects and page restoration.',
    icon: FileX,
    price: 49,
    duration: '2-4 hours',
    difficulty: 'Easy',
    urgency: 'Medium',
  },
  {
    id: 'http-403',
    title: 'HTTP 403 Forbidden Errors',
    description:
      'Resolve permission issues, access restrictions, and file permission problems.',
    icon: Shield,
    price: 59,
    duration: '1-3 hours',
    difficulty: 'Medium',
    urgency: 'High',
  },
  {
    id: 'ssl-issues',
    title: 'SSL Certificate Issues',
    description:
      'Install SSL certificates, fix mixed content warnings, and ensure HTTPS compliance.',
    icon: Lock,
    price: 79,
    duration: '3-6 hours',
    difficulty: 'Medium',
    urgency: 'High',
  },
  {
    id: 'dns-problems',
    title: 'DNS Resolution Problems',
    description:
      'Fix domain name system issues, propagation problems, and DNS configuration errors.',
    icon: Globe,
    price: 69,
    duration: '2-8 hours',
    difficulty: 'Hard',
    urgency: 'High',
  },
  {
    id: 'fatal-error',
    title: 'PHP Fatal Errors',
    description:
      'Debug and fix PHP fatal errors, memory limit issues, and server-side code problems.',
    icon: AlertTriangle,
    price: 89,
    duration: '1-4 hours',
    difficulty: 'Hard',
    urgency: 'Critical',
  },
  {
    id: 'critical-error',
    title: 'WordPress Critical Errors',
    description:
      'Resolve WordPress critical errors, white screen of death, and plugin conflicts.',
    icon: Settings,
    price: 99,
    duration: '2-6 hours',
    difficulty: 'Hard',
    urgency: 'Critical',
  },
  {
    id: 'mixed-content',
    title: 'Mixed Content Errors',
    description:
      'Fix HTTP/HTTPS mixed content warnings and ensure all resources load securely.',
    icon: ExternalLink,
    price: 39,
    duration: '1-2 hours',
    difficulty: 'Easy',
    urgency: 'Medium',
  },
  {
    id: 'database-errors',
    title: 'Database Connection Errors',
    description:
      'Fix database connection issues, query errors, and database corruption problems.',
    icon: Database,
    price: 79,
    duration: '2-5 hours',
    difficulty: 'Medium',
    urgency: 'High',
  },
  {
    id: 'server-errors',
    title: 'Server 500 Internal Errors',
    description:
      'Resolve internal server errors, configuration issues, and server-side problems.',
    icon: Server,
    price: 89,
    duration: '3-8 hours',
    difficulty: 'Hard',
    urgency: 'Critical',
  },
  {
    id: 'performance-issues',
    title: 'Website Performance Issues',
    description:
      'Optimize slow loading websites, improve Core Web Vitals, and enhance user experience.',
    icon: Zap,
    price: 129,
    duration: '4-12 hours',
    difficulty: 'Medium',
    urgency: 'Medium',
  },
];

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case 'Critical':
      return 'text-red-400 bg-red-900/20';
    case 'High':
      return 'text-orange-400 bg-orange-900/20';
    case 'Medium':
      return 'text-yellow-400 bg-yellow-900/20';
    default:
      return 'text-green-400 bg-green-900/20';
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Hard':
      return 'text-red-400';
    case 'Medium':
      return 'text-yellow-400';
    default:
      return 'text-green-400';
  }
};

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

      <SearchForm />

      {/* Services List */}
      <div className='mb-16'>
        <h2 className='mb-8 font-bold text-white text-3xl text-center'>
          Common Website Issues We Fix
        </h2>
        <div className='space-y-4'>
          {troubleshootingServices.map((service, index) => (
            <div
              key={service.id}
              className='group bg-slate-800/50 hover:bg-slate-800/80 p-6 border border-slate-700 rounded-lg transition-all duration-300'>
              <div className='flex md:flex-row flex-col justify-between md:items-center gap-4'>
                <div className='flex flex-1 items-start gap-4'>
                  <div className='bg-slate-700 p-3 rounded-lg'>
                    <service.icon className='w-6 h-6 text-blue-400' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-2 font-semibold text-white text-lg'>
                      {service.title}
                    </h3>
                    <p className='mb-3 text-slate-300 text-sm'>
                      {service.description}
                    </p>
                    <div className='flex flex-wrap gap-3'>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getUrgencyColor(
                          service.urgency,
                        )}`}>
                        {service.urgency} Priority
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(
                          service.difficulty,
                        )} bg-slate-700`}>
                        {service.difficulty}
                      </span>
                      <span className='bg-slate-700 px-2 py-1 rounded-full text-slate-300 text-xs'>
                        <Clock className='inline mr-1 w-3 h-3' />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='text-right'>
                    <div className='flex items-center gap-1 text-slate-400 text-sm'>
                      <DollarSign className='w-4 h-4' />
                      <span>Starting at</span>
                    </div>
                    <div className='font-bold text-white text-2xl'>
                      ${service.price}
                    </div>
                  </div>
                  <Link
                    href={`/services/fix-website-errors/${service.id}`}
                    className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition-colors'>
                    Fix Now
                    <ArrowRight className='w-4 h-4' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className='bg-slate-800/50 p-8 border border-slate-700 rounded-lg text-center'>
        <h2 className='mb-4 font-bold text-white text-2xl'>
          Need Help With Something Else?
        </h2>
        <p className='mb-6 text-slate-300'>
          Can't find your specific issue? Our team handles all types of website
          problems. Get a free consultation to discuss your needs.
        </p>
        <div className='flex sm:flex-row flex-col justify-center gap-4'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition-colors'>
            Get Free Consultation
            <ChevronRight className='w-4 h-4' />
          </Link>
          <Link
            href='/services'
            className='bg-slate-700 hover:bg-slate-600 px-6 py-3 border border-slate-600 rounded-lg font-medium text-white transition-colors'>
            View All Services
          </Link>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default page;
