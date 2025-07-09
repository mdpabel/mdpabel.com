import { Calendar, Users, Globe, Shield, Code, Layers } from 'lucide-react';
import Links from '@/components/links';
import ComponentWrapper from './component-wrapper';

const STATS = [
  {
    id: 'years-of-experience',
    icon: Calendar,
    label: 'Years of Experience',
    value: '7+',
  },
  {
    id: 'clients-served',
    icon: Users,
    label: 'Clients Served',
    value: '1600+',
  },
  {
    id: 'global-reach',
    icon: Globe,
    label: 'Global Reach',
    value: '56%',
  },
  {
    id: 'websites-resolved',
    icon: Shield,
    label: 'Malware Removal & Fix Hacked',
    value: '4500+',
    featured: true,
  },
  {
    id: 'dsa-problems-solved',
    icon: Code,
    label: 'DS&A Problems Solved',
    value: '800+',
  },
  {
    id: 'projects-completed',
    icon: Layers,
    label: 'Projects Completed',
    value: '1600+',
  },
];

const Stats = () => {
  return (
    <ComponentWrapper>
      <ul className='gap-2 grid grid-cols-1 md:grid-cols-2'>
        {STATS.map((stat, index) => (
          <li
            key={index}
            className='group relative flex flex-col gap-2 bg-slate-900 p-2.5 sm:p-3.5 border border-slate-800 hover:border-slate-600 rounded-lg font-regular text-md text-slate-400 hover:text-slate-100'>
            {/* Content */}
            <div className='z-10 relative flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <span>{stat.label}: </span>
                <span className='font-medium text-slate-300'>{stat.value}</span>
              </div>
              <stat.icon />
            </div>
          </li>
        ))}
      </ul>
    </ComponentWrapper>
  );
};

export default Stats;
