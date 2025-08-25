import { siteData } from '@/data/site-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutAuthor = () => {
  return (
    <div className='mt-12 pt-8 border-t'>
      <h3 className='mb-4 font-semibold text-gray-200 text-lg'>
        About the Author
      </h3>
      <div className='flex sm:flex-row flex-col items-start gap-4'>
        <Image
          src='https://pbs.twimg.com/profile_images/1872535618959613953/6snM38Cr.jpg'
          alt='MD Pabel'
          width={100}
          height={100}
          className='rounded-full'
        />
        <div>
          <h4 className='font-semibold text-gray-200 text-xl'>MD Pabel</h4>
          <p className='mt-2 text-gray-300'>
            MD Pabel is the Founder and CEO of 3Zero Digital, a leading agency
            specializing in custom web development, WordPress security, and
            malware removal. With over {siteData.stats.experience} years of
            experience, he has completed more than
            {siteData.stats.completedProjects} projects, served over{' '}
            {siteData.stats.clientsSatisfied} clients, and resolved
            {siteData.stats.fixfixHackedWebsites} cases of malware and hacked
            websites.
          </p>
          <div className='flex flex-wrap gap-4 mt-4'>
            <Link
              href='https://3zerodigital.com'
              className='text-blue-400 hover:underline'>
              3Zero Digital
            </Link>
            <Link
              href='https://www.linkedin.com/in/mdpabe1'
              className='text-blue-400 hover:underline'>
              LinkedIn
            </Link>
            <Link
              href='https://github.com/mdpabel'
              className='text-blue-400 hover:underline'>
              GitHub
            </Link>
            <Link
              href='https://leetcode.com/u/mdpabel/'
              className='text-blue-400 hover:underline'>
              LeetCode
            </Link>
            <Link
              href='https://www.hackerrank.com/profile/mdpabel385'
              className='text-blue-400 hover:underline'>
              HackerRank
            </Link>
            <Link
              href='https://mdpabeldev.medium.com/'
              className='text-blue-400 hover:underline'>
              Medium
            </Link>
            <Link
              href='https://dev.to/md_pabel_fe07e07449db7326'
              className='text-blue-400 hover:underline'>
              Dev.to
            </Link>
            <Link
              href='https://x.com/mdpabe11'
              className='text-blue-400 hover:underline'>
              X (Twitter)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
