import { Calendar, Users, Globe, Shield, Code, Layers } from 'lucide-react';
import { SiUpwork } from 'react-icons/si';
import { TbBrandFiverr } from 'react-icons/tb';

export const EXPERIENCES = [
  {
    id: '3zero-digital',
    company: '3Zero Digital',
    role: 'Founder & Lead Developer',
    period: '2024 - Present',
    location: 'Global',
    icon: Users,
    description:
      'Founded and leading a team of 10+ developers, delivering secure web solutions and digital products.',
    isActive: true,
  },
  {
    id: 'fiverr',
    company: 'Fiverr',
    role: 'Freelance Developer',
    period: '2018 - Present',
    location: 'Global',
    icon: TbBrandFiverr,
    description:
      'Specialized in malware removal, fixing hacked websites, and website maintenance for clients worldwide.',
    isActive: true,
  },
  {
    id: 'upwork',
    company: 'Upwork',
    role: 'Freelance Developer',
    period: '2023 - Present',
    location: 'Global',
    icon: SiUpwork,
    description:
      'Full-stack web development, custom applications, and technical consulting for various clients.',
    isActive: true,
  },
  {
    id: 'uk-agency',
    company: 'UK Agency',
    role: 'Developer',
    period: '2025 - Present',
    location: 'United Kingdom',
    icon: Code,
    description:
      'Building custom websites and web applications for agency clients using modern technologies.',
    isActive: true,
  },
  {
    id: 'us-agency',
    company: 'US Agency',
    role: 'Developer',
    period: '2025 - Present',
    location: 'United States',
    icon: Shield,
    description:
      'Responsible for client website maintenance, updates, and ongoing technical support.',
    isActive: true,
  },
  {
    id: 'canada-client',
    company: 'Canada Client',
    role: 'Lead Developer',
    period: '2024 - Present',
    location: 'Canada',
    icon: Layers,
    description:
      'Leading development of Next.js based websites and applications with focus on performance and user experience.',
    isActive: true,
  },
];
