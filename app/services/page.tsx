export const dynamic = 'force-static';

import { Metadata } from 'next';
import ComponentWrapper from '@/components/component-wrapper';
import { H1, H2, StatsCards, TrustIndicator } from '@/components/ui';
import Link from 'next/link';
import { ArrowRight, Ban, Code2, ShieldCheck, Wrench } from 'lucide-react';

// ---- SEO ----
export const metadata: Metadata = {
  title: 'Services | Security & Development',
  description:
    'Malware Removal & Fix Hacked, Blacklist Removal, Website Development (Next.js & WordPress), and Fix Website Errors.',
  alternates: { canonical: 'https://www.mdpabel.com/services' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Services',
    description:
      'Malware Removal, Blacklist Removal, Website Development (Next.js & WordPress), Fix Website Errors.',
    url: 'https://www.mdpabel.com/services',
  },
};

// ---- Data ----
const services = [
  {
    slug: '/services/wordpress-malware-removal-service',
    title: 'Malware Removal & Fix Hacked',
    blurb:
      'Rapid cleanup of injected malware, backdoors, and spam—with hardening and a clear post-incident report.',
    points: [
      'Same-day cleanup in most cases',
      'Backdoor & malicious user removal',
      'Hardening + password rotation',
    ],
    icon: ShieldCheck,
    cta: 'Get cleaned up',
    featured: true,
  },
  {
    slug: '/services/blacklist-removal-service',
    title: 'Blacklist Removal',
    blurb:
      'Remove “Deceptive site” warnings and search red flags. We clean spam pages/redirects and submit reviews.',
    points: [
      'Google Safe Browsing & vendors',
      'Spam/redirect cleanup',
      'Search Console assistance',
    ],
    icon: Ban,
    cta: 'Remove blacklist',
  },
  {
    slug: '/services/website-development',
    title: 'Website Development (Next.js & WordPress)',
    blurb:
      'Fast, secure sites with modern DX—headless builds, custom themes, and scalable architecture.',
    points: [
      'Performance-first builds',
      'Accessibility & SEO basics',
      'Clean, maintainable code',
    ],
    icon: Code2,
    cta: 'Start a build',
    badges: ['Next.js', 'WordPress'],
  },
  {
    slug: '/services/fix-website-errors',
    title: 'Fix Website Errors',
    blurb:
      'Troubleshoot crashes, PHP errors, plugin conflicts, 404/500s, and deployment issues—without downtime.',
    points: [
      'Log analysis & monitoring',
      'Rollback/patch strategy',
      'Zero-downtime mindset',
    ],
    icon: Wrench,
    cta: 'Fix my site',
  },
];

const Page = () => {
  return (
    <ComponentWrapper className='text-slate-400 antialiased'>
      {/* ===== Hero (kept as-is) ===== */}
      <div className='relative py-10 text-center'>
        <H1 className='mb-6'>Trusted Website Services</H1>
        <H2 className='mb-10'>
          From Troubleshooting and Security to Custom Development — We've Got
          You Covered
        </H2>
        <StatsCards />
        <TrustIndicator />
      </div>

      {/* ===== Services (updated UI) ===== */}
      <section className='py-12'>
        <div className='mx-auto'>
          <div className='gap-6 grid md:grid-cols-2 lg:grid-cols-3'>
            {services.map((item) => (
              <ServiceCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Quick Help Bar (kept) ===== */}
      <section className='pt-12'>
        <div className='bg-gradient-to-br from-slate-300/5 to-slate-400/10 mx-auto p-6 border border-slate-400/10 rounded-2xl'>
          <div className='items-center gap-6 grid sm:grid-cols-2'>
            <div>
              <h2 className='font-bold text-slate-300 text-2xl'>
                Not sure where to start?
              </h2>
              <p className='mt-2'>
                Tell me what’s going on—errors, warnings, or a hacked site—and
                I’ll recommend the fastest path to a fix.
              </p>
            </div>
            <div className='sm:justify-self-end'>
              <div className='flex flex-wrap gap-3'>
                <Link
                  prefetch
                  href='/contact'
                  className='inline-flex items-center bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/60 font-semibold text-slate-100 transition'>
                  Contact
                </Link>
                <Link
                  prefetch
                  href='/guides'
                  className='inline-flex items-center hover:bg-slate-300/5 px-5 py-3 border border-slate-400/20 rounded-xl font-semibold transition'>
                  Read guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: JSON-LD for services */}
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Services',
            itemListElement: services.map((s, i) => ({
              '@type': 'Service',
              position: i + 1,
              name: s.title,
              url: `https://www.mdpabel.com${s.slug}`,
              areaServed: 'Global',
              provider: { '@type': 'Person', name: 'Md Pabel' },
            })),
          }),
        }}
      />
    </ComponentWrapper>
  );
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-flex items-center bg-slate-300/5 px-2.5 py-1 border border-slate-400/20 rounded-full text-xs'>
      {children}
    </span>
  );
}

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const Icon = item.icon;
  const isFeatured = Boolean(item.featured);

  return (
    <article
      className={[
        'group relative overflow-hidden rounded-2xl p-6 transition-all',
        // Surface + border + subtle ring
        'bg-gradient-to-br from-slate-300/5 to-slate-400/10 border border-slate-400/10 ring-1 ring-slate-400/10 shadow-sm',
        // Hover depth
        'hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-900/20',
        // Featured layout span
        isFeatured ? 'lg:col-span-2' : '',
      ].join(' ')}>
      {/* Spotlight on hover */}
      <div
        aria-hidden='true'
        className='-z-10 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none [mask-image:radial-gradient(420px_180px_at_25%_-20%,rgba(168,85,247,0.28),transparent_70%)]'
      />

      {/* Featured badge */}
      {isFeatured && (
        <span className='inline-flex top-4 right-4 absolute items-center gap-1 bg-purple-400/10 px-2.5 py-1 border border-purple-300/30 rounded-full text-slate-300 text-xs'>
          <svg
            viewBox='0 0 24 24'
            className='w-3.5 h-3.5 text-purple-400'
            aria-hidden='true'>
            <path
              fill='currentColor'
              d='M12 2l2.39 4.84 5.33.78-3.86 3.76.91 5.3L12 14.77 6.23 16.68l.91-5.3L3.28 7.62l5.33-.78L12 2z'
            />
          </svg>
          Most requested
        </span>
      )}

      <div className='flex items-start gap-4'>
        <div className='flex justify-center items-center bg-purple-400/20 rounded-xl ring-1 ring-purple-300/30 w-12 h-12'>
          <Icon className='w-6 h-6 text-purple-400' aria-hidden='true' />
        </div>
        <div className='flex-1'>
          <h2 className='font-semibold text-slate-300 text-xl'>{item.title}</h2>
          <p className='mt-2'>{item.blurb}</p>
        </div>
      </div>

      {item.badges && item.badges.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-4'>
          {item.badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
      )}

      <ul className='space-y-2 mt-4 text-sm'>
        {item.points.map((p) => (
          <li key={p} className='flex items-start gap-2'>
            <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-4 h-4 text-emerald-300 shrink-0'>
              ✓
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className='flex flex-wrap items-center gap-3 mt-6'>
        <Link
          prefetch
          href={item.slug}
          className='inline-flex items-center bg-purple-500 hover:bg-purple-600 px-5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/60 font-semibold text-slate-100 transition'>
          {item.cta}
          <ArrowRight className='ml-2 w-4 h-4' aria-hidden='true' />
        </Link>
        <Link
          prefetch
          href={item.slug}
          className='inline-flex items-center hover:bg-slate-300/5 px-4 py-2 border border-slate-400/20 rounded-xl font-semibold transition'>
          Learn more
        </Link>
      </div>

      {/* Subtle corner glow */}
      <div
        aria-hidden='true'
        className='-top-24 -right-24 absolute bg-purple-400/10 blur-3xl rounded-full w-48 h-48 pointer-events-none'
      />
    </article>
  );
}

export default Page;
