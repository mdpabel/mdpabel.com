import Link from 'next/link';
import ComponentWrapper from '@/components/component-wrapper';

export const metadata = {
  title: 'Fix Website Errors | HTTP 500/403/404, SSL, Fatal Error & More',
  description:
    'Fix Website Errors — rapid diagnosis and repair for HTTP 500/403/404, SSL certificate issues, PHP fatal errors, and WordPress “There has been a critical error on your website”.',
  alternates: {
    canonical: 'https://www.mdpabel.com/services/fix-website-errors',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Fix Website Errors',
    description:
      'Fast troubleshooting for HTTP errors, SSL problems, fatal errors, and critical site issues. Safe rollbacks, clear fixes, zero-downtime mindset.',
    url: 'https://www.mdpabel.com/services/fix-website-errors',
  },
};

export default function Page() {
  return (
    <ComponentWrapper className='text-slate-400 antialiased'>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div
          aria-hidden='true'
          className='absolute inset-0 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]'>
          <div className='-top-32 -left-32 absolute bg-purple-400/10 blur-3xl rounded-full w-72 h-72' />
          <div className='-right-24 -bottom-24 absolute bg-purple-400/10 blur-3xl rounded-full w-72 h-72' />
        </div>

        <div className='mx-auto pt-20 pb-16'>
          <div className='items-center gap-10 grid lg:grid-cols-2'>
            <div>
              <h1 className='font-extrabold text-slate-300 text-4xl/tight sm:text-5xl tracking-tight'>
                Fix Website Errors
              </h1>
              <p className='mt-5 max-w-2xl'>
                Downtime or strange errors? We diagnose quickly, apply safe
                fixes, and get your site stable—without risky guesswork.
              </p>
              <ul className='gap-3 grid grid-cols-1 sm:grid-cols-2 mt-6 text-sm'>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Rapid root-cause analysis
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Safe rollbacks & staging first
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Works with WordPress & Next.js
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Zero-downtime mindset
                </li>
              </ul>
              <div className='flex flex-wrap gap-3 mt-8'>
                <a
                  href='#contact'
                  className='inline-flex items-center bg-purple-400 hover:bg-purple-600 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/70 font-semibold text-slate-900 transition'>
                  Start a Fix
                </a>
                <a
                  href='#errors'
                  className='inline-flex items-center hover:bg-slate-300/5 px-5 py-3 border border-slate-400/20 rounded-xl font-semibold transition'>
                  See common errors
                </a>
              </div>
              <p className='mt-4 text-xs'>
                No lock-in. Confidential. Works with any host or theme.
              </p>
            </div>

            {/* Simple illustration card */}
            <div className='lg:justify-self-end'>
              <div className='relative bg-slate-300/5 shadow-xl p-6 border border-slate-400/10 rounded-2xl ring-1 ring-slate-400/10'>
                <div className='flex justify-between items-center text-xs'>
                  <span>error.log</span>
                  <span className='inline-flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded-lg text-emerald-300'>
                    <span className='bg-emerald-300 rounded-full w-1.5 h-1.5' />{' '}
                    Resolved
                  </span>
                </div>
                <div className='space-y-2 mt-4 font-mono text-sm'>
                  <div className='bg-slate-900/60 p-3 rounded-lg'>
                    [error] PHP Fatal error: Uncaught Error: Call to undefined
                    function
                  </div>
                  <div className='bg-slate-900/60 p-3 rounded-lg'>
                    Fix: rollback plugin, patch code, clear cache ✓
                  </div>
                  <div className='bg-slate-900/60 p-3 rounded-lg'>
                    200 OK on health check ✓
                  </div>
                </div>
                <div className='gap-2 grid grid-cols-3 mt-6 text-xs text-center'>
                  <div className='bg-slate-900/40 p-3 rounded-lg'>
                    <p className='font-semibold text-slate-300'>Investigate</p>
                    <p>Logs & traces</p>
                  </div>
                  <div className='bg-slate-900/40 p-3 rounded-lg'>
                    <p className='font-semibold text-slate-300'>Fix</p>
                    <p>Code & config</p>
                  </div>
                  <div className='bg-slate-900/40 p-3 rounded-lg'>
                    <p className='font-semibold text-slate-300'>Validate</p>
                    <p>Uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <section className='bg-slate-300/5 border-slate-500/10 border-y'>
        <div className='gap-6 grid grid-cols-2 md:grid-cols-4 mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl text-center'>
          <div>
            <p className='font-extrabold text-slate-300 text-3xl'>24/7</p>
            <p className='text-sm'>Emergency support</p>
          </div>
          <div>
            <p className='font-extrabold text-slate-300 text-3xl'>8K+</p>
            <p className='text-sm'>Issues resolved</p>
          </div>
          <div>
            <p className='font-extrabold text-slate-300 text-3xl'>&lt;1h</p>
            <p className='text-sm'>Typical first response</p>
          </div>
          <div>
            <p className='font-extrabold text-slate-300 text-3xl'>100%</p>
            <p className='text-sm'>Money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* Common Errors (link malware/blacklist) */}
      <section id='errors' className='py-20'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <h2 className='font-bold text-slate-300 text-3xl'>
              Common issues we fix
            </h2>
            <p className='mt-3'>
              If it breaks user journeys or damages trust, we fix it—cleanly and
              quickly.
            </p>
          </div>

          <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10'>
            {[
              {
                title: 'Malware Removal',
                text: 'Hacked site cleanup, backdoors, spam, redirects, and hardening.',
                href: '/services/wordpress-malware-removal-service',
              },
              {
                title: 'Blacklist Removal',
                text: 'Clear “Deceptive site” and similar warnings with vendor reviews.',
                href: '/services/blacklist-removal',
              },
              {
                title: 'HTTP 500 (Server Error)',
                text: 'Unhandled exceptions, PHP/Node crashes, memory limits.',
              },
              {
                title: 'HTTP 403 (Forbidden)',
                text: 'Permissions, WAF/rules, misconfigured auth.',
              },
              {
                title: 'HTTP 404 (Not Found)',
                text: 'Broken routes/links, rewrites, headless WP slugs.',
              },
              {
                title: 'SSL / Certificate Errors',
                text: 'Invalid certs, mixed content, HSTS, redirects.',
              },
              {
                title: 'PHP Fatal Error',
                text: 'Plugin/theme conflicts, missing functions, autoloaders.',
              },
              {
                title: '“There has been a critical error on your website”',
                text: 'WordPress fatal recovery, debug & safe rollback.',
              },
              {
                title: '…and more',
                text: 'Caching/CDN, database issues, deployment rollbacks, etc.',
              },
            ].map((e) => (
              <article
                key={e.title}
                className='bg-slate-300/5 p-6 border border-slate-400/10 rounded-2xl'>
                <div className='flex justify-center items-center bg-purple-400/20 rounded-xl ring-1 ring-purple-300/30 w-10 h-10'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-5 h-5 text-purple-500'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M12 9v4m0 4h.01' />
                    <path d='M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z' />
                  </svg>
                </div>
                <h3 className='mt-4 font-semibold text-slate-300 text-lg'>
                  {e.href ? (
                    <Link href={e.href} className='hover:underline'>
                      {e.title}
                    </Link>
                  ) : (
                    e.title
                  )}
                </h3>
                <p className='mt-2 text-sm'>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id='features' className='py-20'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <h2 className='font-bold text-slate-300 text-3xl'>
              What’s included
            </h2>
            <p className='mt-3'>
              Practical troubleshooting, clear communication, and durable fixes.
            </p>
          </div>

          <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10'>
            {[
              {
                title: 'Diagnostics & Logging',
                text: 'Error logs, tracing, and health checks to pinpoint the real cause.',
                icon: (
                  <path d='M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z' />
                ),
              },
              {
                title: 'Safe Rollbacks',
                text: 'Staged changes, backups, and rollbacks—no cowboy fixes in production.',
                icon: (
                  <>
                    <path d='M3 12a9 9 0 1 0 9-9' />
                    <path d='M3 3v6h6' />
                  </>
                ),
              },
              {
                title: 'Code & Config Repair',
                text: 'Plugin/theme conflicts, routes, env vars, caching and CDN fixes.',
                icon: <path d='M3 7h18M3 12h18M3 17h18' />,
              },
              {
                title: 'Security & SSL',
                text: 'TLS/redirect chains, HSTS, mixed content, permission hardening.',
                icon: (
                  <>
                    <path d='M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z' />
                    <path d='M9 12l2 2 4-4' />
                  </>
                ),
              },
              {
                title: 'Database & Migrations',
                text: 'Schema drift, corrupt tables, and reliable migration paths.',
                icon: <path d='M4 6h16v4H4zM4 14h16v4H4z' />,
              },
              {
                title: 'Monitoring',
                text: 'Uptime and regression monitoring with clear alerts.',
                icon: (
                  <>
                    <path d='M12 8v4m0 4h.01' />
                    <path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' />
                  </>
                ),
              },
            ].map((f) => (
              <article
                key={f.title}
                className='bg-slate-300/5 p-6 border border-slate-400/10 rounded-2xl'>
                <div className='flex justify-center items-center bg-purple-400/20 rounded-xl ring-1 ring-purple-300/30 w-10 h-10'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-5 h-5 text-purple-500'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    {f.icon}
                  </svg>
                </div>
                <h3 className='mt-4 font-semibold text-slate-300 text-lg'>
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
        className='bg-slate-300/5 px-10 py-20 border-slate-500/10 border-t'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <h2 className='font-bold text-slate-300 text-3xl'>
              How troubleshooting works
            </h2>
            <p className='mt-3'>
              A steady, low-risk approach that restores stability quickly.
            </p>
          </div>

          <ol className='gap-6 grid md:grid-cols-2 lg:grid-cols-4 mt-10'>
            {[
              {
                step: 'Step 1',
                title: 'Triage',
                text: 'Gather symptoms, URLs, and the exact error messages. Secure access handoff.',
              },
              {
                step: 'Step 2',
                title: 'Investigate',
                text: 'Review logs, reproduce the issue, and isolate the failing layer.',
              },
              {
                step: 'Step 3',
                title: 'Fix',
                text: 'Apply minimal, safe changes with rollbacks and staging when possible.',
              },
              {
                step: 'Step 4',
                title: 'Validate',
                text: 'Monitor, confirm user flows, and leave a concise report.',
              },
            ].map((p) => (
              <li
                key={p.title}
                className='bg-[#0F172B]/60 p-6 border border-slate-400/10 rounded-2xl'>
                <p className='text-xs'>{p.step}</p>
                <h3 className='mt-1 font-semibold text-slate-300'>{p.title}</h3>
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
            <div className='bg-slate-300/5 p-8 border border-slate-400/10 rounded-2xl'>
              <h3 className='font-bold text-slate-300 text-2xl'>
                One-Time Fix
              </h3>
              <p className='mt-3'>
                Ideal for urgent errors breaking key pages or admin access.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Root-cause analysis & safe repair
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Report with prevention steps
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  30-day remediation warranty
                </li>
              </ul>
              <a
                href='#contact'
                className='inline-flex items-center bg-purple-500 hover:bg-purple-600 mt-6 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/70 font-semibold text-slate-100 transition'>
                Request a Fix
              </a>
            </div>

            <div className='bg-gradient-to-br from-slate-300/5 to-slate-400/10 p-8 border border-slate-400/10 rounded-2xl ring-1 ring-slate-400/10'>
              <h3 className='font-bold text-slate-300 text-2xl'>
                Pro Support Retainer
              </h3>
              <p className='mt-3'>
                For teams that want fast answers and ongoing stability.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Priority troubleshooting & monitoring
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Performance & cache review
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Monthly health report
                </li>
              </ul>
              <a
                href='#contact'
                className='inline-flex items-center hover:bg-slate-300/5 mt-6 px-5 py-3 border border-slate-400/20 rounded-xl font-semibold transition'>
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id='faq'
        className='bg-slate-300/5 px-10 py-20 border-slate-500/10 border-t'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <h2 className='font-bold text-slate-300 text-3xl'>
              Frequently asked questions
            </h2>
            <p className='mt-3'>
              Everything you need to know about our error-fix service.
            </p>
          </div>

          <div className='gap-4 grid md:grid-cols-2 mt-10'>
            {[
              {
                q: 'How fast can you fix it?',
                a: 'Most urgent issues get same-day fixes. Complex infra or third-party dependencies may take longer, but we’ll keep you updated.',
              },
              {
                q: 'Do you need full access?',
                a: 'Typically CMS/admin + hosting (FTP/SSH/cPanel) and error logs. We use a secure credential handoff.',
              },
              {
                q: 'Will you edit core files?',
                a: 'We avoid risky edits. We patch at the right layer, document changes, and keep rollbacks ready.',
              },
              {
                q: 'Do you work on staging first?',
                a: 'Yes, whenever possible. If production changes are required, we schedule safe windows.',
              },
            ].map((f) => (
              <details
                key={f.q}
                className='group bg-[#0F172B]/60 open:bg-[#0F172B]/70 p-6 border border-slate-400/10 rounded-2xl'>
                <summary className='flex justify-between items-center font-semibold text-slate-300 cursor-pointer list-none'>
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
          <div className='bg-slate-300/5 p-8 border border-slate-400/10 rounded-2xl'>
            <h2 className='font-bold text-slate-300 text-3xl'>
              Request a website fix
            </h2>
            <p className='mt-3'>
              Tell us what you’re seeing—URLs, exact messages, and what changed
              recently.
            </p>

            {/* Swap action/method for your handler (API route/form service) */}
            <form
              className='gap-4 grid sm:grid-cols-2 mt-8'
              action='mailto:security@example.com'
              method='post'
              encType='text/plain'>
              <div className='sm:col-span-1'>
                <label
                  htmlFor='name'
                  className='block font-medium text-slate-300 text-sm'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  required
                  placeholder='Jane Doe'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-slate-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/60 w-full text-slate-300 placeholder:text-slate-500'
                />
              </div>
              <div className='sm:col-span-1'>
                <label
                  htmlFor='email'
                  className='block font-medium text-slate-300 text-sm'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='you@example.com'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-slate-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/60 w-full text-slate-300 placeholder:text-slate-500'
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='url'
                  className='block font-medium text-slate-300 text-sm'>
                  Website URL
                </label>
                <input
                  id='url'
                  name='website'
                  type='url'
                  required
                  placeholder='https://your-site.com'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-slate-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/60 w-full text-slate-300 placeholder:text-slate-500'
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='notes'
                  className='block font-medium text-slate-300 text-sm'>
                  What errors are you seeing?
                </label>
                <textarea
                  id='notes'
                  name='notes'
                  rows={4}
                  placeholder='Examples: HTTP 500 on /checkout, “There has been a critical error…”, SSL error in Chrome, etc.'
                  className='bg-[#0F172B]/60 mt-2 px-4 py-3 border border-slate-400/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/60 w-full text-slate-300 placeholder:text-slate-500'
                />
              </div>
              <div className='flex flex-wrap items-center gap-3 sm:col-span-2'>
                <button
                  type='submit'
                  className='inline-flex items-center bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/70 font-semibold text-slate-100 transition'>
                  Send Request
                </button>
                <a
                  href='tel:+10000000000'
                  className='inline-flex items-center hover:bg-slate-300/5 px-6 py-3 border border-slate-400/20 rounded-xl font-semibold transition'>
                  Or call us
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* JSON-LD (keywords help SEO for error types) */}
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Website Troubleshooting & Error Fix',
            name: 'Fix Website Errors',
            description:
              'Rapid diagnosis and repair for HTTP errors, SSL issues, PHP fatals, and WordPress critical errors. Safe rollbacks and durable fixes.',
            provider: { '@type': 'Person', name: 'Md Pabel' },
            areaServed: 'Global',
            url: 'https://www.mdpabel.com/services/fix-website-errors',
            keywords: [
              'HTTP 500',
              'HTTP 403',
              'HTTP 404',
              'SSL error',
              'certificate error',
              'mixed content',
              'PHP fatal error',
              'WordPress critical error',
              'There has been a critical error on your website',
              'Malware removal',
              'Blacklist removal',
              'Next.js errors',
              'WordPress errors',
            ].join(', '),
          }),
        }}
      />
    </ComponentWrapper>
  );
}
