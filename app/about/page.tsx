import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import me from '@/public/images/me.webp';
import { H1, H2 } from '@/components/ui';
import { siteData } from '@/data/site-data';
import ComponentWrapper from '@/components/component-wrapper';
import PlatFormScreenshots from '@/components/platform-screenshots';

export const dynamic = 'force-static';

// Helper function to calculate years of experience
function calculateYearsSince(startDate: Date): number {
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - startDate.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = timeDiff / millisecondsInYear;
  return Math.floor(years) + (years % 1 >= 0.5 ? 0.5 : 0);
}

const About = () => {
  const coding = calculateYearsSince(new Date(2019, 0, 12));
  const experience = calculateYearsSince(new Date(2018, 0, 7));

  return (
    <ComponentWrapper className='pt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='lg:ml-20'>
          <Image
            className='rounded-2xl aspect-square lg:rotate-3'
            src={me}
            width={600}
            height={1000}
            alt='Me'
            priority={true}
          />
        </div>
        <div className='space-y-10 lg:order-first lg:row-span-2 py-10 lg:py-0'>
          <H1>MD Pabel.</H1>
          <H2>
            I live in Bangladesh, where I solve problems with code and secure
            websites.
          </H2>
          <div className='space-y-4'>
            <p className='text-slate-300'>
              I’m MD Pabel, a Full Stack Web Developer and WordPress Security
              Expert from Bangladesh — and the founder of 3Zero Digital. My
              journey began in a small town with a passion for clean code and
              secure systems. Since then, I’ve worked with over{' '}
              {siteData.stats.clientsSatisfied} clients across{' '}
              {siteData.stats.globalImpacts} of the globe, helping businesses
              stay online, secure, and optimized. Whether it's recovering hacked
              websites or building secure platforms from scratch, I bring
              real-world experience to every project.
            </p>
            <p className='text-slate-300'>
              With a strong focus on{' '}
              <b>
                WordPress malware removal, site hardening, and full-stack
                development
              </b>
              , I’ve personally cleaned over{' '}
              {siteData.stats.fixfixHackedWebsites} infected websites. From
              startups to enterprises, I’ve helped clients recover their online
              presence, prevent cyber threats, and scale with confidence. My
              work is built on trust, transparency, and a deep understanding of
              how to blend performance with protection.
            </p>
            <p className='text-slate-300'>
              I believe that technology should not only innovate — it must also
              protect. With {siteData.stats.experience.slice(0, 1)}+ years of
              hands-on experience and over 800 DS/Algo problems solved, I bring
              both technical depth and practical solutions to the table. At 3
              Zero Digital, our mission is simple:{' '}
              <b>0 Vulnerability, 0 Downtime, 0 Error</b> — and I work every day
              to deliver on that promise.
            </p>
          </div>
        </div>
        <div className='flex justify-center lg:ml-10'>
          <ul className='space-y-4'>
            <li>
              <Link
                href='#'
                className='group flex space-x-4 font-medium text-slate-300 hover:text-purple-500 dark:hover:text-purple-500 text-sm transition'>
                <FaXTwitter className='w-5 h-5' /> <span>Follow on X</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='group flex space-x-4 font-medium text-slate-300 hover:text-purple-500 dark:hover:text-purple-500 text-sm transition'>
                <FaInstagram className='w-5 h-5' />{' '}
                <span>Follow on Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='group flex space-x-4 font-medium text-slate-300 hover:text-purple-500 dark:hover:text-purple-500 text-sm transition'>
                <FaGithub className='w-5 h-5' /> <span>Follow on GitHub</span>
              </Link>
            </li>
            <li className='pb-2'>
              <Link
                href='#'
                className='group flex space-x-4 font-medium text-slate-300 hover:text-purple-500 dark:hover:text-purple-500 text-sm transition'>
                <FaLinkedin className='w-5 h-5' />{' '}
                <span>Follow on LinkedIn</span>
              </Link>
            </li>
            <li className='pt-5 border-gray-300 dark:border-gray-600 border-t'>
              <Link
                href='#'
                className='group flex space-x-4 font-medium text-slate-300 hover:text-purple-500 dark:hover:text-purple-500 text-sm transition'>
                <MdOutlineEmail className='w-5 h-5' />{' '}
                <span>pabel7396@gmail.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-20'>
        <div className='mb-12'>
          <H2>Proven Track Record</H2>
          <p className='mt-4 text-gray-400 text-lg'>
            4500+ hacked sites recovered • {siteData.stats.completedProjects}+
            projects completed • 7+ years experience
          </p>
        </div>

        {/* Platform Screenshots - Malware Removal Proof */}
        <PlatFormScreenshots />
      </div>

      {/* Real World Experience Section */}
      <div className='space-y-4 mt-10'>
        <h2 className='font-semibold dark:text-zinc-100 text-2xl'>
          Real World Experience
          <sup className='ml-4 text-gray-600 dark:text-gray-400 text-sm'>
            Last updated: 04 Aug 25
          </sup>
        </h2>
        <ul className='gap-x-8 gap-y-3 grid md:grid-cols-2'>
          <ListItem
            leftText='Real World Experience'
            rightText={siteData.stats.experience}
          />
          <ListItem
            leftText='Project Success'
            rightText={siteData.stats.completedProjects}
          />
          <ListItem
            leftText='Hacked Website Fixes'
            rightText={siteData.stats.fixfixHackedWebsites}
          />
          <ListItem
            leftText='Clients'
            rightText={siteData.stats.clientsSatisfied}
          />
          <ListItem
            leftText='Global Impact'
            rightText={siteData.stats.globalImpacts}
          />
          <ListItem
            leftText='Websites Launched'
            rightText={siteData.stats.websiteLaunched}
          />
        </ul>
      </div>

      {/* Skills Section */}
      <div className='py-10'>
        {/* Coding Stats */}
        <div className='space-y-4'>
          <div className='flex justify-center pt-4'>
            <img
              width={500}
              height={300}
              alt='Leetcode MD Pabel'
              src='https://leetcard.jacoblin.cool/mdpabel?theme=light&font=Karma'
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

// ListItem component for consistent styling
const ListItem = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string | number;
}) => {
  return (
    <li className='flex justify-between'>
      <span className='text-slate-300'>{leftText}</span>
      <span className='bg-slate-200 dark:bg-slate-200 px-3 rounded-full'>
        {rightText}
      </span>
    </li>
  );
};

export default About;
