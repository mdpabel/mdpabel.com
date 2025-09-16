import ComponentWrapper from '@/components/component-wrapper';

export const metadata = {
  title: 'Blacklist Removal Service | Fix “Deceptive Site” & Security Warnings',
  description:
    'Blacklist Removal Service — fast cleanup of spam/redirects and review submissions to vendors. Clear warnings like “Deceptive site ahead” and restore trust.',
  alternates: {
    canonical: 'https://www.mdpabel.com/blacklist-removal',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Blacklist Removal Service',
    description:
      'We remove blacklist warnings, fix malicious redirects/SEO spam, and submit reviews to vendors to restore your site’s reputation.',
    url: 'https://www.mdpabel.com/blacklist-removal',
  },
};

const vendors = [
  'Abusix',
  'ADMINUSLabs',
  'AegisLab',
  'Ahnlab',
  'AILabs',
  'Alibaba',
  'AlienVault',
  'AlphaMountain',
  'AlphaSOC',
  'Alyac',
  'Antivir',
  'Antiy',
  'ArcSight Threat Intelligence',
  'AutoShun',
  'Avast',
  'AVG',
  'Baidu',
  'BitDefender',
  'BforeAi',
  'Bkav',
  'Certego',
  'Chong Lua Dao',
  'CINS Army',
  'ClamAV',
  'Clean-MX',
  'Cluster25',
  'Cloudflare',
  'CMC',
  'CRDF',
  'Criminal IP',
  'CrowdSec',
  'CrowdStrike',
  'CyanSecurity',
  'Cybereason',
  'Cyble',
  'Cylance',
  'Cynet',
  'CyRadar',
  'Deep Instinct',
  'DNS8',
  'DrWeb',
  'eGambit',
  'Elastic',
  'Emsisoft',
  'ESET',
  'FireEye',
  'F-Prot',
  'F-Secure',
  'Forcepoint ThreatSeeker',
  'Fortinet',
  'GData',
  'Gridinsoft',
  'Hacksoft',
  'Hauri',
  'Heimdal',
  'Hoplite Industries',
  'Ikarus',
  'IPsum',
  'Jiangmin',
  'K7',
  'Kaspersky',
  'Lionic',
  'Lumu',
  'Malbeacon',
  'Malwarebytes',
  'Malwares.com',
  'MAX',
  'MaxSecure',
  'McAfee',
  'Skyhigh',
  'Microsoft',
  'Microworld',
  'NANO',
  'Netcraft',
  'Panda',
  'Phishing Database',
  'PhishLabs',
  'Qihoo360',
  'QuickHeal',
  'Quttera',
  'Rising',
  'Sangfor',
  'Safe Browsing',
  'Scumware.org',
  'SecureAge',
  'Seclookup',
  'Segasec',
  'Sentinel One',
  'SOCRadar',
  'Sophos',
  'Spamhaus',
  'Sucuri',
  'Symantec',
  'Tencent',
  'TheHacker',
  'Trapmine',
  'TrendMicro',
  'Trustwave',
  'Trustlook',
  'URLQuery',
  'Varist',
  'VBA32',
  'Viettel Threat Intelligence',
  'Vipre',
  'VirIT',
  'VirusDie',
  'Webroot',
  'Xcitium Verdict Cloud',
  'Yandex',
  'Zillya',
  'ZoneAlarm',
];

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
                Blacklist Removal Service
              </h1>
              <p className='mt-5 max-w-2xl'>
                Clear “Deceptive site” and security warnings by fixing the root
                cause, removing spam/redirects, and submitting reviews to
                vendors until your domain is marked safe again.
              </p>
              <ul className='gap-3 grid grid-cols-1 sm:grid-cols-2 mt-6 text-sm'>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Same-day remediation in most cases
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Vendor review submissions
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  SEO spam & redirect cleanup
                </li>
                <li className='flex items-center gap-3'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 rounded-full w-5 h-5 text-emerald-300'>
                    ✓
                  </span>
                  Hardening & monitoring
                </li>
              </ul>
              <div className='flex flex-wrap gap-3 mt-8'>
                <a
                  href='#contact'
                  className='inline-flex items-center bg-purple-400 hover:bg-purple-600 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/70 font-semibold text-slate-900 transition'>
                  Start Removal
                </a>
                <a
                  href='#features'
                  className='inline-flex items-center hover:bg-slate-300/5 px-5 py-3 border border-slate-400/20 rounded-xl font-semibold transition'>
                  See what's included
                </a>
              </div>
              <p className='mt-4 text-xs'>
                No lock-in. Confidential. Works with any host or CMS.
              </p>
            </div>

            {/* Simple illustration card */}
            <div className='lg:justify-self-end'>
              <div className='relative bg-slate-300/5 shadow-xl p-6 border border-slate-400/10 rounded-2xl ring-1 ring-slate-400/10'>
                <div className='flex justify-between items-center text-xs'>
                  <span>Security warnings</span>
                  <span className='inline-flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded-lg text-emerald-300'>
                    <span className='bg-emerald-300 rounded-full w-1.5 h-1.5' />{' '}
                    Cleared
                  </span>
                </div>
                <div className='space-y-2 mt-4 font-mono text-sm'>
                  <div className='bg-slate-900/60 p-3 rounded-lg'>
                    Removed: malicious redirects &amp; spam pages
                  </div>
                  <div className='bg-slate-900/60 p-3 rounded-lg'>
                    Patched: vulnerable plugin &amp; disallowed file edit
                  </div>
                  <div className='bg-slate-900/60 p-3 rounded-lg'>
                    Submitted: Google/Safe Browsing review ✓
                  </div>
                </div>
                <div className='gap-2 grid grid-cols-3 mt-6 text-xs text-center'>
                  <div className='bg-slate-900/40 p-3 rounded-lg'>
                    <p className='font-semibold text-slate-300'>Diagnose</p>
                    <p>Root cause</p>
                  </div>
                  <div className='bg-slate-900/40 p-3 rounded-lg'>
                    <p className='font-semibold text-slate-300'>Remediate</p>
                    <p>Spam &amp; redirects</p>
                  </div>
                  <div className='bg-slate-900/40 p-3 rounded-lg'>
                    <p className='font-semibold text-slate-300'>Review</p>
                    <p>Vendors</p>
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
            <p className='text-sm'>Emergency response</p>
          </div>
          <div>
            <p className='font-extrabold text-slate-300 text-3xl'>8K+</p>
            <p className='text-sm'>Incidents resolved</p>
          </div>
          <div>
            <p className='font-extrabold text-slate-300 text-3xl'>99%</p>
            <p className='text-sm'>Success rate</p>
          </div>
          <div>
            <p className='font-extrabold text-slate-300 text-3xl'>A+</p>
            <p className='text-sm'>Vendor handling</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id='features' className='py-20'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <h2 className='font-bold text-slate-300 text-3xl'>
              What's included
            </h2>
            <p className='mt-3'>
              Focused on clearing warnings fast—end-to-end remediation and
              vendor reviews.
            </p>
          </div>

          <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10'>
            {[
              {
                title: 'Root-Cause Diagnosis',
                text: 'Identify why your domain was flagged: malware, phishing content, redirects, or SEO spam.',
                icon: (
                  <path d='M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z' />
                ),
              },
              {
                title: 'Cleanup & SEO Fix',
                text: 'Remove malicious redirects/spam, sanitize sitemaps, and repair hacked SEO artifacts.',
                icon: <path d='M3 7h18M3 12h18M3 17h18' />,
              },
              {
                title: 'Review Submissions',
                text: 'Prepare evidence and submit reconsiderations to relevant vendors until cleared.',
                icon: <path d='M8 21h8M12 17v4M5 3h14v10H5z' />,
              },
              {
                title: 'Search Console Help',
                text: 'Configure Search Console, address security issues, and manage index cleanup.',
                icon: (
                  <>
                    <path d='M12 20v-6' />
                    <path d='M6 12h12' />
                    <path d='M4 6h16' />
                  </>
                ),
              },
              {
                title: 'Hardening',
                text: 'Patch vulnerabilities, rotate passwords, enforce SSL, and reduce attack surface.',
                icon: (
                  <>
                    <path d='M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z' />
                    <path d='M9 12l2 2 4-4' />
                  </>
                ),
              },
              {
                title: 'Monitoring',
                text: 'Post-removal monitoring and alerts to catch regressions early.',
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
              How blacklist removal works
            </h2>
            <p className='mt-3'>
              Tight, proven steps to clear warnings quickly.
            </p>
          </div>

          <ol className='gap-6 grid md:grid-cols-2 lg:grid-cols-4 mt-10'>
            {[
              {
                step: 'Step 1',
                title: 'Triage',
                text: 'Collect flagged URLs, vendor messages, and recent changes.',
              },
              {
                step: 'Step 2',
                title: 'Investigate',
                text: 'Snapshot site; analyze files/DB; confirm indicators of compromise.',
              },
              {
                step: 'Step 3',
                title: 'Remediate',
                text: 'Clean spam/redirects, patch/harden, validate pages and sitemaps.',
              },
              {
                step: 'Step 4',
                title: 'Review & Monitor',
                text: 'Submit vendor reviews and watch status until cleared.',
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

      {/* Vendors (SEO) */}
      <section id='vendors' className='py-20'>
        <div className='mx-auto'>
          <div className='max-w-2xl'>
            <h2 className='font-bold text-slate-300 text-3xl'>
              Supported blacklists & security vendors
            </h2>
            <p className='mt-3'>
              We routinely handle warnings and review requests for providers
              such as{' '}
              <em className='text-slate-300'>
                Safe Browsing, Cloudflare, Microsoft, McAfee, Kaspersky, ESET,
                Sucuri, Symantec
              </em>{' '}
              and many more.
            </p>
          </div>
          <div className='bg-gradient-to-br from-slate-300/5 to-slate-400/10 mt-8 p-6 border border-slate-400/10 rounded-2xl'>
            <ul className='gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-sm'>
              {vendors.map((v) => (
                <li
                  key={v}
                  className='inline-flex items-center gap-2 bg-[#0F172B]/50 px-3 py-2 border border-slate-400/10 rounded-lg'
                  title={v}>
                  <span
                    className='bg-purple-400 rounded-full w-1.5 h-1.5'
                    aria-hidden='true'
                  />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-xs'>
              We don’t represent these vendors; we follow their guidelines to
              submit thorough requests.
            </p>
          </div>
        </div>
      </section>

      {/* Plans / CTA */}
      <section className='py-20'>
        <div className='mx-auto'>
          <div className='items-stretch gap-8 grid lg:grid-cols-2'>
            <div className='bg-slate-300/5 p-8 border border-slate-400/10 rounded-2xl'>
              <h3 className='font-bold text-slate-300 text-2xl'>
                One-Time Blacklist Removal
              </h3>
              <p className='mt-3'>
                Ideal when your domain is newly flagged and needs rapid action.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Diagnosis, cleanup & vendor review submissions
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Root-cause report + prevention checklist
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
                className='inline-flex items-center bg-purple-500 hover:bg-purple-600 mt-6 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300/70 font-semibold text-slate-900 transition'>
                Request Removal
              </a>
            </div>

            <div className='bg-gradient-to-br from-slate-300/5 to-slate-400/10 p-8 border border-slate-400/10 rounded-2xl ring-1 ring-slate-400/10'>
              <h3 className='font-bold text-slate-300 text-2xl'>
                Managed Monitoring
              </h3>
              <p className='mt-3'>
                Ongoing surveillance and fast response if a warning reappears.
              </p>
              <ul className='space-y-2 mt-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Integrity & blacklist monitoring
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Fast-track vendor submissions
                </li>
                <li className='flex items-start gap-2'>
                  <span className='inline-flex justify-center items-center bg-emerald-400/20 mt-1 rounded-full w-5 h-5 text-emerald-300 shrink-0'>
                    ✓
                  </span>
                  Monthly security health report
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
              Everything you need to know about our Blacklist Removal Service.
            </p>
          </div>

          <div className='gap-4 grid md:grid-cols-2 mt-10'>
            {[
              {
                q: 'How long does blacklist removal take?',
                a: 'Cleanup is typically same-day. Vendor reviews vary by provider and can take from hours to several days.',
              },
              {
                q: 'Do you submit to multiple vendors?',
                a: 'Yes. We identify which vendors flagged your domain and submit evidence-based requests to each.',
              },
              {
                q: 'Do you guarantee removal?',
                a: 'We guarantee fixing the cause and submitting proper reviews. Final approval timing depends on each vendor.',
              },
              {
                q: 'What access do you need?',
                a: 'Usually CMS/hosting access (e.g., WP admin + cPanel/FTP/SSH) and Google Search Console. We use secure credential handoff.',
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
              Request blacklist removal
            </h2>
            <p className='mt-3'>
              Share flagged URLs, vendor messages, and any recent changes—we’ll
              reply with next steps.
            </p>

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
                  What warnings are you seeing?
                </label>
                <textarea
                  id='notes'
                  name='notes'
                  rows={4}
                  placeholder='Example: “Deceptive site ahead”, redirects from /shop, Sucuri or Safe Browsing message…'
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
    </ComponentWrapper>
  );
}
