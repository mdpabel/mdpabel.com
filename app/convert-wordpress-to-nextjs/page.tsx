import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';
import Script from 'next/script';

export const metadata = {
  title:
    'Convert WordPress to Next.js (Headless Migration) | Fast, Safe & SEO-Ready',
  description:
    'Zero-downtime WordPress to Next.js migration: content modeling, redirects, editor previews, WPGraphQL/REST, ISR/SSG/SSR, and SEO parity.',
  keywords: [
    'convert wordpress to nextjs',
    'wordpress to nextjs migration',
    'headless wordpress migration',
    'nextjs headless wordpress',
    'wpgraphql migration',
    'wordpress headless convert',
  ],
  alternates: {
    canonical: 'https://www.mdpabel.com/convert-wordpress-to-nextjs',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Convert WordPress to Next.js (Headless Migration)',
    description:
      'We migrate WordPress to a fast, secure Next.js frontend with editor previews and SEO parity.',
    url: 'https://www.mdpabel.com/convert-wordpress-to-nextjs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert WordPress to Next.js (Headless Migration)',
    description:
      'Safe migration to Headless WordPress + Next.js with ISR/SSG/SSR and redirects.',
  },
};

export default function Page() {
  const orgName = 'MD Pabel';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WordPress to Next.js Migration',
    serviceType: 'Web development',
    provider: { '@type': 'Organization', name: orgName },
    areaServed: 'Global',
    category: 'Headless CMS Migration',
    description:
      'End-to-end migration from classic WordPress to a headless WordPress + Next.js stack with SEO parity, redirects, and editor previews.',
    offers: {
      '@type': 'Offer',
      url: 'https://www.mdpabel.com/convert-wordpress-to-nextjs',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <ComponentWrapper className='text-gray-400 antialiased'>
      <Script
        id='ld-migrate'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div
          aria-hidden='true'
          className='absolute inset-0 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_60%)]'>
          <div className='-top-32 -left-32 absolute bg-slate-400/10 blur-3xl rounded-full w-72 h-72' />
          <div className='-right-24 -bottom-24 absolute bg-slate-400/10 blur-3xl rounded-full w-72 h-72' />
        </div>

        <div className='mx-auto pt-20 pb-16'>
          <div className='items-center gap-10 grid lg:grid-cols-2'>
            {/* Left */}
            <div>
              <Heading
                as='h1'
                multiLines={['Convert WordPress', 'to Next.js (Headless)']}
                className='sm:text-[40px] text-3xl sm:leading-tight [text-wrap:balance]'
              />
              <p className='mt-5 max-w-2xl'>
                Migrate to a <strong>headless WordPress</strong> backend with a{' '}
                <strong>Next.js</strong> frontend—keep your editors in WordPress
                while delivering a faster, more secure site with ISR/SSG/SSR and
                SEO parity.
              </p>

              <ul className='gap-3 grid grid-cols-1 sm:grid-cols-2 mt-6 text-sm'>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Redirects & URL mapping (no link rot)
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  WPGraphQL/REST wiring to CPTs & fields
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Draft previews with auth
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Zero-downtime cutover plan
                </li>
              </ul>

              <div className='flex flex-wrap gap-3 mt-8'>
                <a
                  href='#contact'
                  className='inline-flex items-center bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 font-semibold text-slate-900 transition'>
                  Get Migration Estimate
                </a>
                <a
                  href='#features'
                  className='inline-flex items-center hover:bg-white/5 px-5 py-3 border border-white/10 rounded-xl font-semibold transition'>
                  See migration plan
                </a>
              </div>
            </div>

            {/* Right illustration card */}
            <div className='lg:justify-self-end'>
              <div className='relative bg-slate-800/50 shadow-xl p-6 border border-white/10 rounded-2xl'>
                <div className='flex justify-between items-center text-xs'>
                  <span>classic WP → headless WP + Next.js</span>
                  <span className='inline-flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded-lg text-emerald-300'>
                    <span className='bg-emerald-300 rounded-full w-1.5 h-1.5' />{' '}
                    Safe
                  </span>
                </div>

                <div className='space-y-2 mt-4 font-mono text-sm'>
                  <div className='bg-[#0B1220]/70 p-3 rounded-lg'>
                    // map URLs → 301 redirects
                  </div>
                  <div className='bg-[#0B1220]/70 p-3 rounded-lg'>
                    fetch('/api/graphql') → hydrate
                  </div>
                  <div className='bg-[#0B1220]/70 p-3 rounded-lg'>
                    export const revalidate = 60; // ISR ✓
                  </div>
                </div>

                <div className='gap-2 grid grid-cols-3 mt-6 text-xs text-center'>
                  <div className='bg-[#0B1220]/60 p-3 rounded-lg'>
                    <p className='font-semibold text-gray-200'>Author</p>
                    <p>WordPress</p>
                  </div>
                  <div className='bg-[#0B1220]/60 p-3 rounded-lg'>
                    <p className='font-semibold text-gray-200'>Build</p>
                    <p>Next.js</p>
                  </div>
                  <div className='bg-[#0B1220]/60 p-3 rounded-lg'>
                    <p className='font-semibold text-gray-200'>Deliver</p>
                    <p>CDN / Edge</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end illustration */}
          </div>
        </div>
      </section>

      {/* Features / plan */}
      <section id='features' className='py-20'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <Heading as='h2' className='text-2xl sm:text-4xl sm:leading-tight'>
              WordPress → Next.js migration: what we deliver
            </Heading>
            <p className='mt-3'>
              We handle the technical lift and protect your traffic—content,
              URLs, SEO, and editorial workflows preserved.
            </p>
          </div>

          <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10'>
            {[
              {
                title: 'Audit & Parity',
                text: 'Inventory content, templates, plugins. Define SEO parity and KPIs.',
              },
              {
                title: 'URL Mapping & 301s',
                text: 'One-to-one routes or improved structure with 301 redirects.',
              },
              {
                title: 'Content Modeling',
                text: 'CPTs/fields for clean APIs—no theme lock-in or plugin bloat.',
              },
              {
                title: 'WPGraphQL / REST',
                text: 'Wire data flows, auth, pagination; ACF/Yoast/Woo supported.',
              },
              {
                title: 'Previews & Roles',
                text: 'Secure draft previews with auth; editors keep WordPress.',
              },
              {
                title: 'Perf & Hosting',
                text: 'ISR/SSG/SSR per route; CDN/Edge caching and CI/CD.',
              },
            ].map((f) => (
              <article
                key={f.title}
                className='bg-slate-800/50 p-6 border border-white/10 rounded-2xl'>
                <h3 className='font-semibold text-gray-200 text-lg'>
                  {f.title}
                </h3>
                <p className='mt-2 text-sm'>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id='process'
        className='bg-white/5 px-6 sm:px-10 py-20 border-white/10 border-t'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <Heading as='h2' className='text-2xl sm:text-4xl sm:leading-tight'>
              How the migration works
            </Heading>
            <p className='mt-3'>
              A careful, low-risk migration with clear checkpoints and rollback
              plans.
            </p>
          </div>

          <ol className='gap-6 grid md:grid-cols-2 lg:grid-cols-4 mt-10'>
            {[
              {
                step: 'Step 1',
                title: 'Audit',
                text: 'Crawl, inventory, analytics review, tech assessment.',
              },
              {
                step: 'Step 2',
                title: 'Plan & Model',
                text: 'Define routes, 301s, content types, fields, and APIs.',
              },
              {
                step: 'Step 3',
                title: 'Build & Integrate',
                text: 'Next.js components, previews, CI/CD, monitoring.',
              },
              {
                step: 'Step 4',
                title: 'Cutover & Verify',
                text: 'Staged launch, QA, SEO checks, post-launch fixes.',
              },
            ].map((p) => (
              <li
                key={p.title}
                className='bg-slate-800/50 p-6 border border-white/10 rounded-2xl'>
                <p className='text-xs'>{p.step}</p>
                <h3 className='mt-1 font-semibold text-gray-200'>{p.title}</h3>
                <p className='mt-2 text-sm'>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Plans */}
      <section className='py-20'>
        <div className='mx-auto'>
          <div className='items-stretch gap-8 grid lg:grid-cols-2'>
            <div className='bg-slate-800/50 p-8 border border-white/10 rounded-2xl'>
              <Heading
                as='h3'
                className='text-2xl sm:text-3xl sm:leading-tight'>
                One-Time Migration
              </Heading>
              <p className='mt-3'>
                Best for sites moving off classic WordPress in a single project.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>{' '}
                  URL mapping & 301 redirects
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>{' '}
                  Previews, SEO parity, analytics
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>{' '}
                  Launch support & warranty
                </li>
              </ul>
              <a
                href='#contact'
                className='inline-flex items-center bg-gray-100 hover:bg-gray-200 mt-6 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 font-semibold text-slate-900 transition'>
                Get Estimate
              </a>
            </div>

            <div className='bg-slate-800/50 p-8 border border-white/10 rounded-2xl'>
              <Heading
                as='h3'
                className='text-2xl sm:text-3xl sm:leading-tight'>
                Managed Evolution
              </Heading>
              <p className='mt-3'>
                For teams preferring phased migration with ongoing improvements.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>{' '}
                  Strangler pattern rollout
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>{' '}
                  Monitoring, SLOs, experiments
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>{' '}
                  Roadmap & enablement
                </li>
              </ul>
              <a
                href='#contact'
                className='inline-flex items-center hover:bg-white/5 mt-6 px-5 py-3 border border-white/10 rounded-xl font-semibold transition'>
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id='faq'
        className='bg-white/5 px-6 sm:px-10 py-20 border-white/10 border-t'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <Heading as='h2' className='text-2xl sm:text-4xl sm:leading-tight'>
              Frequently asked questions
            </Heading>
            <p className='mt-3'>
              Everything you need to know about migrating WordPress to Next.js.
            </p>
          </div>

          <div className='gap-4 grid md:grid-cols-2 mt-10'>
            {[
              {
                q: 'Will our rankings drop?',
                a: 'Our redirects, SEO parity checks, and crawl/analytics monitoring protect traffic during and after launch.',
              },
              {
                q: 'Can editors still use WordPress?',
                a: 'Yes. WordPress remains the CMS; Next.js consumes content via GraphQL or REST with secure previews.',
              },
              {
                q: 'How long does it take?',
                a: 'Depends on scope. Typical migrations run 3–8 weeks for marketing sites; phased rollouts available.',
              },
              {
                q: 'Can you migrate WooCommerce?',
                a: 'Yes. We support Woo data/APIs, cart/checkout strategies, and SEO-safe URL mapping.',
              },
            ].map((f) => (
              <details
                key={f.q}
                className='group bg-slate-800/50 open:bg-slate-800/50 p-6 border border-white/10 rounded-2xl'>
                <summary className='flex justify-between items-center font-semibold text-gray-200 cursor-pointer list-none'>
                  {f.q}
                  <span className='ml-4 group-open:rotate-45 transition'>
                    +
                  </span>
                </summary>
                <p className='mt-3 text-sm'>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className='py-20'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl'>
          <div className='bg-slate-800/50 p-8 border border-white/10 rounded-2xl'>
            <Heading as='h2' className='text-2xl sm:text-4xl sm:leading-tight'>
              Request a migration plan
            </Heading>
            <p className='mt-3'>
              Tell us about your current stack, content, and goals—we’ll reply
              with steps and timelines.
            </p>

            <form
              className='gap-4 grid sm:grid-cols-2 mt-8'
              action='mailto:team@example.com'
              method='post'
              encType='text/plain'>
              <div className='sm:col-span-1'>
                <label
                  htmlFor='name'
                  className='block font-medium text-gray-200 text-sm'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  required
                  placeholder='Jane Doe'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 w-full text-gray-200 placeholder:text-gray-500'
                />
              </div>
              <div className='sm:col-span-1'>
                <label
                  htmlFor='email'
                  className='block font-medium text-gray-200 text-sm'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='you@example.com'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 w-full text-gray-200 placeholder:text-gray-500'
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='url'
                  className='block font-medium text-gray-200 text-sm'>
                  Current site URL
                </label>
                <input
                  id='url'
                  name='website'
                  type='url'
                  placeholder='https://your-site.com'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 w-full text-gray-200 placeholder:text-gray-500'
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='notes'
                  className='block font-medium text-gray-200 text-sm'>
                  What are you migrating?
                </label>
                <textarea
                  id='notes'
                  name='notes'
                  rows={4}
                  placeholder='Example: 500 posts, docs, WooCommerce, redirects, preview, multi-lang…'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 w-full text-gray-200 placeholder:text-gray-500'
                />
              </div>
              <div className='flex flex-wrap items-center gap-3 sm:col-span-2'>
                <button
                  type='submit'
                  className='inline-flex items-center bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 font-semibold text-slate-900 transition'>
                  Send Request
                </button>
                <a
                  href='tel:+10000000000'
                  className='inline-flex items-center hover:bg-white/5 px-6 py-3 border border-white/10 rounded-xl font-semibold transition'>
                  Or call us
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ComponentWrapper>
  );
}
