// app/services/blacklist-removal/clean-v1/page.tsx
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';

export default function BlacklistRemovalClean1() {
  return (
    <div className='bg-slate-900 min-h-screen'>
      {/* Urgency Hero */}
      <ComponentWrapper>
        <div className='mx-auto px-5 py-16 max-w-4xl text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center gap-2 bg-red-600/10 mb-4 px-4 py-2 border border-red-600/20 rounded-full'>
              <AlertTriangle className='w-5 h-5 text-red-400' />
              <span className='font-medium text-red-400'>
                Blacklisted Website Emergency
              </span>
            </div>
            <Heading className='mb-4'>
              Get Your Website Off Blacklists Fast
            </Heading>
            <p className='mx-auto max-w-2xl text-slate-400 text-xl'>
              Being blacklisted costs you 70-90% of your traffic immediately.
              Our emergency response team can restore your site in 3-7 days.
            </p>
          </div>

          {/* Impact Stats */}
          <div className='gap-6 grid md:grid-cols-3 mb-12'>
            {[
              {
                icon: TrendingDown,
                stat: '70-90%',
                label: 'Traffic Loss',
                description: 'Immediate impact',
              },
              {
                icon: Clock,
                stat: '3-7 days',
                label: 'Recovery Time',
                description: 'Average removal',
              },
              {
                icon: TrendingUp,
                stat: '300+',
                label: 'Sites Recovered',
                description: 'Successful removals',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-slate-800 p-6 border border-slate-700 rounded-lg text-center'>
                <item.icon className='mx-auto mb-3 w-8 h-8 text-slate-400' />
                <div className='font-bold text-slate-300 text-2xl'>
                  {item.stat}
                </div>
                <div className='font-medium text-slate-300'>{item.label}</div>
                <div className='text-slate-400 text-sm'>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </ComponentWrapper>

      {/* Blacklist Types */}
      <ComponentWrapper>
        <div className='mx-auto mb-16 px-5 max-w-4xl'>
          <h2 className='mb-8 font-medium text-slate-300 text-2xl text-center'>
            Blacklist Types We Remove
          </h2>
          <div className='gap-4 grid md:grid-cols-2'>
            {[
              {
                name: 'Google Safe Browsing',
                impact: 'Chrome & Firefox warnings',
                recovery: '2-5 days',
              },
              {
                name: 'Microsoft SmartScreen',
                impact: 'Edge browser warnings',
                recovery: '3-7 days',
              },
              {
                name: 'McAfee SiteAdvisor',
                impact: 'Red ratings in search',
                recovery: '1-3 days',
              },
              {
                name: 'Norton Safe Web',
                impact: 'Security warnings',
                recovery: '2-4 days',
              },
              {
                name: 'Sucuri Blacklist',
                impact: 'Website firewall blocks',
                recovery: '1-2 days',
              },
              {
                name: 'Spam Blacklists',
                impact: 'Email delivery issues',
                recovery: '1-5 days',
              },
            ].map((blacklist, index) => (
              <div
                key={index}
                className='bg-slate-800 p-4 border border-slate-700 rounded-lg'>
                <div className='flex items-start gap-3'>
                  <AlertTriangle className='flex-shrink-0 mt-0.5 w-5 h-5 text-red-400' />
                  <div>
                    <h3 className='mb-1 font-medium text-slate-300'>
                      {blacklist.name}
                    </h3>
                    <p className='mb-2 text-slate-400 text-sm'>
                      {blacklist.impact}
                    </p>
                    <div className='text-green-400 text-xs'>
                      Recovery: {blacklist.recovery}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ComponentWrapper>

      {/* Pricing Card */}
      <ComponentWrapper>
        <div className='mx-auto mb-16 px-5 max-w-md'>
          <div className='bg-slate-800 p-8 border border-slate-700 rounded-lg text-center'>
            <div className='mb-6'>
              <div className='inline-flex items-center gap-2 bg-red-600/10 mb-4 px-3 py-1 border border-red-600/20 rounded-full'>
                <Clock className='w-4 h-4 text-red-400' />
                <span className='font-medium text-red-400 text-sm'>
                  Emergency Service
                </span>
              </div>
              <h3 className='mb-2 font-bold text-slate-300 text-2xl'>
                Blacklist Removal Service
              </h3>
              <div className='mb-2 font-bold text-slate-300 text-4xl'>$199</div>
              <p className='text-slate-400'>Per website • Emergency response</p>
            </div>

            <div className='mb-8 text-left'>
              <h4 className='mb-4 font-medium text-slate-300'>
                Emergency service includes:
              </h4>
              <ul className='space-y-2 text-slate-400 text-sm'>
                {[
                  'Immediate blacklist assessment',
                  'Root cause identification',
                  'Malware cleanup if needed',
                  'Professional submission to authorities',
                  'Status monitoring until removal',
                  'Prevention measures setup',
                  'Post-removal verification',
                ].map((feature, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <CheckCircle className='flex-shrink-0 mt-0.5 w-4 h-4 text-green-400' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className='bg-red-600 hover:bg-red-700 mb-4 px-6 py-3 rounded-lg w-full font-medium text-white transition-colors'>
              Start Emergency Removal
            </button>
            <p className='text-slate-500 text-xs'>
              ✓ 300+ sites recovered ✓ 98.5% success rate ✓ 24/7 support
            </p>
          </div>
        </div>
      </ComponentWrapper>

      {/* Emergency CTA */}
      <ComponentWrapper>
        <div className='mx-auto px-5 py-16 max-w-2xl text-center'>
          <AlertTriangle className='mx-auto mb-4 w-12 h-12 text-red-400' />
          <h2 className='mb-4 font-medium text-slate-300 text-2xl'>
            Don't Wait - Every Day Costs You Money
          </h2>
          <p className='mb-8 text-slate-400'>
            Being blacklisted means losing customers, revenue, and search
            rankings every single day. Our emergency team is standing by to
            begin recovery immediately.
          </p>
          <button className='bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-medium text-white transition-colors'>
            Get Emergency Help Now
          </button>
        </div>
      </ComponentWrapper>
    </div>
  );
}
