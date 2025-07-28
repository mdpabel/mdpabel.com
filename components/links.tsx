import { SiLeetcode, SiUpwork } from 'react-icons/si';
import { FaGithub, FaMediumM } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { TbBrandFiverr, TbBrandHackerrank } from 'react-icons/tb';
import ComponentWrapper from './component-wrapper';
import { PiDevToLogo } from 'react-icons/pi';

const LINKS = [
  {
    id: 'leetcode',
    icon: SiLeetcode,
    label: 'LeetCode',
    url: 'https://leetcode.com/u/mdpabel/',
  },
  {
    id: 'github',
    icon: FaGithub,
    label: 'GitHub',
    url: 'https://github.com/mdpabel',
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mdpabe1',
  },
  {
    id: 'hackerrank',
    icon: TbBrandHackerrank,
    label: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/mdpabel385',
  },
  {
    id: 'medium',
    icon: FaMediumM,
    label: 'Medium',
    url: 'https://mdpabeldev.medium.com/',
  },
  {
    id: 'dev.to',
    icon: PiDevToLogo,
    label: 'Dev.to',
    url: 'https://dev.to/md_pabel_fe07e07449db7326',
  },
];

const Links = () => {
  return (
    <ComponentWrapper>
      <div className='flex justify-center gap-6 mb-10 py-4'>
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 transition-transform duration-300'>
            <link.icon className='w-6 h-6 text-gray-400 hover:text-gray-200 transition-all' />
          </a>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Links;
