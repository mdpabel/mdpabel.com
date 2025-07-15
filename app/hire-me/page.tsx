export const dynamic = 'force-static';

import ComponentWrapper from '@/components/component-wrapper';
import { Button, Description, Heading, TrustIndicator } from '@/components/ui';
import {
  Shield,
  Code,
  Wrench,
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Coffee,
  Gamepad2,
  CheckCircle,
  DollarSign,
  Clock,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/site-data'; // Assuming siteData is in a separate file
import Stats from '@/components/stats';

// Metadata (similar to other pages)
export const metadata: Metadata = {
  title: 'Hire Me - MD Pabel | 3Zero Digital',
  description:
    'Hire experienced full-stack developer and security specialist for your web projects. Custom development, security solutions, and maintenance services.',
};

const HireMePage = () => {
  return (
    <ComponentWrapper>
      <div className='relative py-20 text-center'>
        <Heading className='mb-6'>Hire Me for Your Next Project</Heading>
        <Description>
          {siteData.personal.description} Let's build secure and scalable web
          solutions together.
        </Description>
        <Stats />
      </div>

      {/* Interests Section */}
      <div className='mb-16'>
        <h2 className='mb-8 font-bold text-white text-3xl text-center'>
          Personal Interests
        </h2>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
          <div className='group bg-slate-800/50 hover:shadow-blue-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-blue-500 rounded-xl text-center transition-all duration-300'>
            <div className='flex justify-center mb-4 text-blue-400'>
              {siteData.interests.coffee.icon}
            </div>
            <h3 className='mb-2 font-bold text-white text-xl'>
              {siteData.interests.coffee.title}
            </h3>
            <p className='text-slate-300'>
              {siteData.interests.coffee.description}
            </p>
          </div>
          <div className='group bg-slate-800/50 hover:shadow-blue-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-blue-500 rounded-xl text-center transition-all duration-300'>
            <div className='flex justify-center mb-4 text-blue-400'>
              {siteData.interests.gaming.icon}
            </div>
            <h3 className='mb-2 font-bold text-white text-xl'>
              {siteData.interests.gaming.title}
            </h3>
            <p className='text-slate-300'>
              {siteData.interests.gaming.description}
            </p>
          </div>
        </div>
      </div>

      {/* Signup and Chat Section */}
      <div className='bg-green-900/20 mb-8 p-8 border border-green-700 rounded-lg'>
        <div className='flex items-center gap-3 mb-4'>
          <MessageCircle className='w-6 h-6 text-green-400' />
          <h2 className='font-semibold text-green-400 text-xl'>
            Sign Up and Chat Instantly (Recommended)
          </h2>
        </div>
        <p className='mb-6 text-slate-300'>
          Create a quick account to access our mini Fiverr-style platform. Once
          signed in, you can open a ticket or start a live chat for direct
          communication about your project. Get real-time responses and seamless
          collaboration.
        </p>
        <div className='flex justify-center gap-4'>
          <Link
            href='/signup'
            className='bg-green-900 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300'>
            Sign Up Now
          </Link>
          <Link
            href='/login'
            className='bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300'>
            Already have an account? Login
          </Link>
        </div>
      </div>

      {/* Hire Form Section */}
      <div className='bg-slate-800/50 mb-16 p-8 border border-slate-700 rounded-lg'>
        <h2 className='mb-6 font-bold text-white text-3xl text-center'>
          Get in Touch
        </h2>
        <p className='mb-8 text-slate-300 text-center'>
          Ready to start your project? Fill out the form below or contact me
          directly.
        </p>
        <form className='space-y-4 mx-auto max-w-md'>
          <input
            type='text'
            placeholder='Your Name'
            className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
          />
          <textarea
            placeholder='Project Details'
            rows={5}
            className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
          />
          <Button type='submit'>Submit Inquiry</Button>
        </form>
        <div className='mt-8 text-slate-300 text-center'>
          <p>Response time: ~30 minutes average</p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default HireMePage;
