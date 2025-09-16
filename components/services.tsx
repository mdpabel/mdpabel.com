import {
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Code,
  Server,
  GitBranch,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Link from 'next/link';

type Service = {
  title: string;
  href: string;
  desc: string;
  highlights: string[];
  icon: React.ElementType;
  accent: {
    bar: string; // bg-* for left stripe
    icon: string; // text-* for icon
  };
  meta?: string; // small badge text
  featured?: boolean; // span 2 columns on md+
};

const services: Service[] = [
  {
    title: 'Malware Removal From Hacked Websites',
    href: '/services/wordpress-malware-removal-service',
    desc: 'Emergency cleanup, blacklist removal, hardening, and ongoing monitoring.',
    highlights: [
      'Google “hacked” warning & redirects',
      'Backdoors & spam users removed',
      'Report + prevention steps',
    ],
    icon: AlertTriangle,
    accent: { bar: 'bg-red-400/60', icon: 'text-red-300' },
    meta: 'Priority • 24/7',
    featured: true,
  },
  {
    title: 'Fix Website Errors',
    href: '/services/fix-wordpress-errors',
    desc: 'Rapid diagnosis and repair of common WordPress & hosting issues.',
    highlights: [
      '404 / WSOD / database errors',
      'Plugin & theme conflicts',
      'Broken links / images',
    ],
    icon: Wrench,
    accent: { bar: 'bg-amber-300/60', icon: 'text-amber-300' },
    meta: 'Triage first',
  },
  {
    title: 'Website Development',
    href: '/services/custom-website-development',
    desc: 'Custom builds with clean code, security-first, and SEO foundations.',
    highlights: [
      'Responsive UI components',
      'Secure coding practices',
      'Fast & SEO-friendly',
    ],
    icon: Code,
    accent: { bar: 'bg-emerald-300/60', icon: 'text-emerald-300' },
    meta: 'Design → Build',
  },
  {
    title: 'Headless WordPress Development (Next.js)',
    href: '/headless-wordpress-development',
    desc: 'Next.js front-end with WordPress content — previews, GraphQL/REST, ISR.',
    highlights: [
      'ISR/SSG/SSR where it fits',
      'WPGraphQL / REST',
      'Editor draft previews',
    ],
    icon: Server,
    accent: { bar: 'bg-sky-300/60', icon: 'text-sky-300' },
    meta: 'Modern stack',
  },
  {
    title: 'Convert WordPress to Next.js (Headless Migration)',
    href: '/convert-wordpress-to-nextjs',
    desc: 'Zero-downtime plan with 301s, SEO parity, and safe, staged cutover.',
    highlights: [
      'URL mapping & 301 redirects',
      'SEO parity & crawl checks',
      'Secure previews',
    ],
    icon: GitBranch,
    accent: { bar: 'bg-indigo-300/60', icon: 'text-indigo-300' },
    meta: 'Staged launch',
  },
];

const cardBase =
  'group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30';
const stripeBase = 'absolute left-0 top-0 h-full w-1.5';
const bodyPad = 'p-6 sm:p-7';
const titleCls = 'text-slate-200 font-semibold text-lg';
const descCls = 'text-slate-300/90 text-sm mt-2';
const highlightLi = 'flex items-start gap-2 text-sm text-slate-300';
const bullet = 'mt-1 h-4 w-4 shrink-0 text-emerald-300';

function ServiceCard({
  s,
  className = '',
}: {
  s: Service;
  className?: string;
}) {
  const Icon = s.icon;
  return (
    <Link href={s.href} className={`${cardBase} ${className}`}>
      <span className={`${stripeBase} ${s.accent.bar}`} aria-hidden='true' />
      <div className={bodyPad}>
        <div className='flex justify-between items-start gap-3'>
          <div className='flex items-center gap-3'>
            <span className='inline-flex justify-center items-center bg-white/10 rounded-xl ring-1 ring-white/10 w-10 h-10'>
              <Icon className={`h-5 w-5 ${s.accent.icon}`} />
            </span>
            <h3 className={titleCls}>{s.title}</h3>
          </div>
          {s.meta && (
            <span className='hidden sm:inline bg-white/5 ml-2 px-2 py-0.5 border border-white/10 rounded-full text-slate-300 text-xs shrink-0'>
              {s.meta}
            </span>
          )}
        </div>

        <p className={descCls}>{s.desc}</p>

        <ul className='space-y-2 mt-4'>
          {s.highlights.map((h) => (
            <li key={h} className={highlightLi}>
              <CheckCircle2 className={bullet} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className='inline-flex items-center gap-2 mt-5 text-slate-300 text-sm'>
          <span>Learn more</span>
          <ArrowRight className='w-4 h-4 transition group-hover:translate-x-0.5' />
        </div>
      </div>
    </Link>
  );
}

const ServicesAlt = () => {
  return (
    <ComponentWrapper className='mt-10'>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 auto-rows-fr'>
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            s={s}
            className={s.featured ? 'md:col-span-2' : ''}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default ServicesAlt;
