import { SiLeetcode, SiUpwork } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { TbBrandFiverr, TbBrandHackerrank } from 'react-icons/tb';
import ComponentWrapper from './component-wrapper';

const LINKS = [
  {
    id: 'leetcode',
    icon: SiLeetcode,
    label: 'LeetCode',
    url: 'https://leetcode.com/',
  },
  {
    id: 'github',
    icon: FaGithub,
    label: 'GitHub',
    url: 'https://github.com/',
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    url: 'https://linkedin.com/',
  },
  {
    id: 'fiverr',
    icon: TbBrandFiverr,
    label: 'Fiverr',
    url: 'https://fiverr.com/',
  },
  {
    id: 'upwork',
    icon: SiUpwork,
    label: 'Upwork',
    url: 'https://upwork.com/',
  },
  {
    id: 'hackerrank',
    icon: TbBrandHackerrank,
    label: 'HackerRank',
    url: 'https://hackerrank.com/',
  },
];

const Links = () => {
  return (
    <ComponentWrapper>
      <div className='flex justify-center gap-8 mb-10 py-4'>
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
