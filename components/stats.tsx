import { Calendar, Users, Globe, Shield, Code, Layers } from 'lucide-react';
import Links from '@/components/links';
import ComponentWrapper from './component-wrapper';

const STATS = [
  {
    id: 'years-of-experience',
    icon: Calendar,
    label: 'Years of Experience',
    value: '7+',
    gradientFrom: 'blue-400',
    gradientTo: 'purple-400',
    hoverColor: 'blue-500',
    mobile: true,
  },
  {
    id: 'clients-served',
    icon: Users,
    label: 'Clients Served',
    value: '1600+',
    gradientFrom: 'green-400',
    gradientTo: 'blue-400',
    hoverColor: 'green-500',
    mobile: true,
  },
  {
    id: 'global-reach',
    icon: Globe,
    label: 'Global Reach',
    value: '56%',
    gradientFrom: 'purple-400',
    gradientTo: 'pink-400',
    hoverColor: 'purple-500',
  },
  {
    id: 'websites-resolved',
    icon: Shield,
    label: 'Malware Removal & Fix Hacked',
    value: '4500+',
    featured: true,
    gradientFrom: 'yellow-400',
    gradientTo: 'orange-400',
    hoverColor: 'yellow-500',
    mobile: true,
  },
  {
    id: 'dsa-problems-solved',
    icon: Code,
    label: 'DS&A Problems Solved',
    value: '800+',
    gradientFrom: 'pink-400',
    gradientTo: 'red-400',
    hoverColor: 'pink-500',
  },
  {
    id: 'projects-completed',
    icon: Layers,
    label: 'Projects Completed',
    value: '1600+',
    gradientFrom: 'orange-400',
    gradientTo: 'yellow-400',
    hoverColor: 'orange-500',
    mobile: true,
  },
];

const Stats = () => {
  return (
    <ComponentWrapper>
      <ul className='gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {STATS.map((stat, index) => (
          <li
            key={index}
            className={`group bg-slate-800/50 hover:shadow-${
              stat.hoverColor
            }/20 hover:shadow-lg backdrop-blur-sm p-4 md:p-6 border border-slate-700 hover:border-${
              stat.hoverColor
            } rounded-xl transition-all duration-300 ${
              stat.featured ? 'md:col-span-2 lg:col-span-1' : ''
            } ${!stat.mobile && 'hidden md:block'}`}>
            <div className='flex items-center gap-4'>
              <stat.icon
                className={`h-10 hidden md:block w-10 text-${stat.gradientFrom}`}
              />
              <div className='flex flex-col'>
                <div
                  className={`bg-clip-text bg-gradient-to-r from-${stat.gradientFrom} to-${stat.gradientTo} mb-1 font-bold text-transparent text-2xl`}>
                  {stat.value}
                </div>
                <div className='text-slate-300'>{stat.label}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ComponentWrapper>
  );
};

export default Stats;
