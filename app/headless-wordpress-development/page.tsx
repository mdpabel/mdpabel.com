import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';
import Script from 'next/script';

export const metadata = {
  title: 'Headless WordPress Development (Next.js) | Fast, Secure & SEO-First',
  description:
    'Headless WordPress development with Next.js: ISR/SSG/SSR, WPGraphQL/REST, secure previews, Core Web Vitals, and enterprise-grade security. Hire a headless WordPress agency.',
  keywords: [
    'headless wordpress',
    'headless wordpress development',
    'headless wordpress development services',
    'headless wordpress agency',
    'convert wordpress to nextjs',
    'nextjs headless wordpress',
    'wordpress nextjs',
  ],
  alternates: {
    canonical: 'https://www.mdpabel.com/headless-wordpress-development',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Headless WordPress Development (Next.js)',
    description:
      'We build blazing-fast headless WordPress sites with Next.js—editor previews, WPGraphQL/REST, ISR/SSG, and security hardening.',
    url: 'https://www.mdpabel.com/headless-wordpress-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Headless WordPress Development (Next.js)',
    description:
      'Next.js + WordPress headless architecture for speed, SEO, and security.',
  },
};

export default function Page() {
  const orgName = 'MD Pabel';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Headless WordPress Development',
    serviceType: 'Web development',
    provider: { '@type': 'Organization', name: orgName },
    areaServed: 'Global',
    category: 'Headless CMS Development',
    description:
      'Headless WordPress development services using Next.js (ISR/SSG/SSR), WPGraphQL/REST, secure previews, and performance optimization.',
    offers: {
      '@type': 'Offer',
      url: 'https://www.mdpabel.com/headless-wordpress-development',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <ComponentWrapper className='text-gray-400 antialiased'>
      {/* JSON-LD */}
      <Script
        id='ld-service'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — same two-column layout as your Malware Removal page */}
      <section className='relative overflow-hidden'>
        <div
          aria-hidden='true'
          className='absolute inset-0 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_60%)]'>
          {/* neutral blobs (no purple) */}
          <div className='-top-32 -left-32 absolute bg-slate-400/10 blur-3xl rounded-full w-72 h-72' />
          <div className='-right-24 -bottom-24 absolute bg-slate-400/10 blur-3xl rounded-full w-72 h-72' />
        </div>

        <div className='mx-auto pt-20 pb-16'>
          <div className='items-center gap-10 grid lg:grid-cols-2'>
            {/* Left: Heading + copy + bullets + CTAs */}
            <div>
              {/* Smaller hero title to fit nicely */}
              <Heading
                as='h1'
                multiLines={['Headless WordPress', 'Development (Next.js)']}
                className='sm:text-[40px] text-3xl sm:leading-tight [text-wrap:balance]'
              />
              <p className='mt-5 max-w-2xl'>
                We’re a <strong>headless WordPress agency</strong> building{' '}
                <strong>Next.js</strong> front-ends powered by WordPress.
                Editor-friendly <strong>draft previews</strong>, WPGraphQL/REST
                integrations, and performance by default with ISR/SSG/SSR.
              </p>

              <ul className='gap-3 grid grid-cols-1 sm:grid-cols-2 mt-6 text-sm'>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Instant previews & content workflows
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  ISR/SSG for speed at scale
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  WPGraphQL & REST integrations
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Edge-cached CDN delivery
                </li>
              </ul>

              <div className='flex flex-wrap gap-3 mt-8'>
                {/* neutral primary button (no purple) */}
                <a
                  href='#contact'
                  className='inline-flex items-center bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 font-semibold text-slate-900 transition'>
                  Start a Headless Project
                </a>
                <a
                  href='#features'
                  className='inline-flex items-center hover:bg-white/5 px-5 py-3 border border-white/10 rounded-xl font-semibold transition'>
                  See what&apos;s included
                </a>
              </div>

              <p className='mt-4 text-xs'>
                Planning to{' '}
                <a
                  className='hover:text-gray-300 decoration-gray-500 underline'
                  href='/convert-wordpress-to-nextjs'>
                  convert WordPress to Next.js
                </a>
                ? We support migrations with zero editorial disruption.
              </p>
            </div>

            {/* Right: Illustration card */}
            <div className='lg:justify-self-end'>
              <div className='relative bg-slate-800/50 shadow-xl p-6 border border-white/10 rounded-2xl'>
                <div className='flex justify-between items-center text-xs'>
                  <span>content → build → edge</span>
                  <span className='inline-flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded-lg text-emerald-300'>
                    <span className='bg-emerald-300 rounded-full w-1.5 h-1.5' />{' '}
                    Fast
                  </span>
                </div>

                <div className='space-y-2 mt-4 font-mono text-sm'>
                  <div className='bg-[#0B1220]/70 p-3 rounded-lg'>
                    // WordPress (CMS)
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
            {/* End right card */}
          </div>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <section className='bg-white/5 border-white/10 border-y'>
        <div className='gap-6 grid grid-cols-2 md:grid-cols-4 mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl text-center'>
          <div>
            <p className='font-extrabold text-gray-200 text-3xl'>95+</p>
            <p className='text-sm'>Perf score target</p>
          </div>
          <div>
            <p className='font-extrabold text-gray-200 text-3xl'>ISR</p>
            <p className='text-sm'>Fresh content, cached</p>
          </div>
          <div>
            <p className='font-extrabold text-gray-200 text-3xl'>0</p>
            <p className='text-sm'>Theme lock-in</p>
          </div>
          <div>
            <p className='font-extrabold text-gray-200 text-3xl'>100%</p>
            <p className='text-sm'>Decoupled stack</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id='features' className='py-20'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            {/* purple is allowed here because it’s a heading */}
            <Heading
              as='h2'
              className='text-slate-200 text-2xl sm:text-4xl sm:leading-tight'>
              What’s included in our headless WordPress development services
            </Heading>
            <p className='mt-3'>
              We pair <strong>WordPress headless</strong> content with a{' '}
              <strong>Next.js</strong> frontend—editor-friendly publishing meets
              modern performance and security.
            </p>
          </div>

          <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10'>
            {[
              {
                title: 'Content Modeling',
                text: 'Reusable blocks, custom post types, and fields—no plugin bloat.',
                icon: <path d='M3 7h18M3 12h18M3 17h18' />,
              },
              {
                title: 'WPGraphQL / REST',
                text: 'Clean APIs with auth and pagination; works with ACF, Yoast, WooCommerce.',
                icon: <path d='M12 6v6l4 2' />,
              },
              {
                title: 'Next.js Rendering',
                text: 'SSG, SSR, and ISR where it fits—fast by default, dynamic when needed.',
                icon: (
                  <>
                    <path d='M12 3l8 4-8 4-8-4 8-4zm0 8l8 4-8 4-8-4 8-4z' />
                  </>
                ),
              },
              {
                title: 'Editor Previews',
                text: 'One-click draft previews with auth guards—what you see is what ships.',
                icon: (
                  <>
                    <path d='M12 8v4m0 4h.01' />
                    <path d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </>
                ),
              },
              {
                title: 'SEO & Analytics',
                text: 'Structured data, OG tags, sitemaps, robots, and first-party analytics.',
                icon: (
                  <>
                    <path d='M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z' />
                    <path d='M9 12l2 2 4-4' />
                  </>
                ),
              },
              {
                title: 'Security & Ops',
                text: 'Hardened WordPress, tokenized APIs, CI/CD, staging, and CDN/edge caching.',
                icon: (
                  <>
                    <path d='M15 10l4.553 2.276A2 2 0 0121 14.09V17a2 2 0 01-2 2h-5' />
                    <path d='M9 14l-4.553-2.276A2 2 0 013 9.91V7a2 2 0 012-2h5' />
                  </>
                ),
              },
            ].map((f) => (
              <article
                key={f.title}
                className='bg-slate-800/50 p-6 border border-white/10 rounded-2xl'>
                <div className='flex justify-center items-center bg-white/10 rounded-xl ring-1 ring-white/10 w-10 h-10'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-5 h-5 text-gray-300'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={1.5}
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    {f.icon}
                  </svg>
                </div>
                <h3 className='mt-4 font-semibold text-gray-200 text-lg'>
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
            <Heading
              as='h2'
              className='text-slate-200 text-2xl sm:text-4xl sm:leading-tight'>
              How we build headless WordPress with Next.js
            </Heading>
            <p className='mt-3'>
              A clear path from discovery to launch—minimal risk, maximum
              velocity.
            </p>
          </div>

          <ol className='gap-6 grid md:grid-cols-2 lg:grid-cols-4 mt-10'>
            {[
              {
                step: 'Step 1',
                title: 'Discover',
                text: 'Audit current WordPress, model content, and align on KPIs and editorial workflows.',
              },
              {
                step: 'Step 2',
                title: 'Architect',
                text: 'Choose API strategy (GraphQL/REST), caching, and rendering modes per route.',
              },
              {
                step: 'Step 3',
                title: 'Implement',
                text: 'Build components, set up previews, CI/CD, and migrate content safely.',
              },
              {
                step: 'Step 4',
                title: 'Launch & Optimize',
                text: 'Edge-cache, monitor Core Web Vitals, and iterate with experiments.',
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

      {/* Plans / CTA */}
      <section className='py-20'>
        <div className='mx-auto'>
          <div className='items-stretch gap-8 grid lg:grid-cols-2'>
            <div className='bg-slate-800/50 p-8 border border-white/10 rounded-2xl'>
              <Heading
                as='h3'
                className='text-slate-200 text-2xl sm:text-3xl sm:leading-tight'>
                Headless WordPress Starter
              </Heading>
              <p className='mt-3'>
                Great for sites moving off classic WordPress or starting fresh.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Next.js app with ISR, SEO, and analytics
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  WPGraphQL/REST wired to CPTs & fields
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Draft previews + CI/CD pipeline
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
                className='text-slate-200 text-2xl sm:text-3xl sm:leading-tight'>
                Headless WordPress Pro (Managed)
              </Heading>
              <p className='mt-3'>
                For teams that want ongoing improvements and monitoring.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Managed previews, environments & releases
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Performance/error monitoring & SLOs
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Growth experiments & A/B testing support
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
            <Heading
              as='h2'
              className='text-slate-200 text-2xl sm:text-4xl sm:leading-tight'>
              Frequently asked questions
            </Heading>
            <p className='mt-3'>
              Everything you need to know about{' '}
              <strong>headless WordPress development</strong> with Next.js.
            </p>
          </div>

          <div className='gap-4 grid md:grid-cols-2 mt-10'>
            {[
              {
                q: 'Will my editors still use WordPress?',
                a: 'Yes. WordPress remains the CMS for authoring, approvals, and media. The Next.js app consumes content via GraphQL or REST.',
              },
              {
                q: 'Is headless good for SEO?',
                a: 'Yes—Next.js supports server rendering, metadata APIs, structured data, and fast pages, which help search performance.',
              },
              {
                q: 'Do you handle migrations from classic WordPress?',
                a: 'Yes. We plan redirects, content modeling, and safe cutovers to convert WordPress to Next.js with minimal downtime.',
              },
              {
                q: 'How do previews work?',
                a: 'We add secure draft preview routes that fetch unpublished content for authorized users—no impact on public caching.',
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
            <Heading
              as='h2'
              className='text-slate-200 text-2xl sm:text-4xl sm:leading-tight'>
              Discuss your headless WordPress project
            </Heading>
            <p className='mt-3'>
              Tell us about your goals and timeline—we’ll reply quickly with a
              plan.
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
                  Current site URL (optional)
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
                  What do you want to build?
                </label>
                <textarea
                  id='notes'
                  name='notes'
                  rows={4}
                  placeholder='Example: blog + docs + marketing, draft previews, localization, WooCommerce API…'
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

            <p className='mt-6 text-xs'>
              Also offering:{' '}
              <a
                className='hover:text-gray-300 decoration-gray-500 underline'
                href='/services/wordpress-malware-removal-service'>
                WordPress Malware Removal Service
              </a>
            </p>
          </div>
        </div>
      </section>
    </ComponentWrapper>
  );
}
