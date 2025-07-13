import { Shield, Users, Star, Percent } from 'lucide-react';
import ComponentWrapper from './component-wrapper';

export default function Reviews() {
  return (
    <ComponentWrapper>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mb-16'>
        {/** Upwork Card **/}
        <div className='group bg-slate-800/50 hover:shadow-green-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-green-500 rounded-xl transition-all duration-300'>
          <h3 className='mb-6 font-semibold text-white text-2xl'>
            Upwork Achievements
          </h3>

          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <Shield className='w-6 h-6 text-green-400' />
              <span className='font-medium text-white'>250+ Sites Fixed</span>
            </div>

            <div className='flex items-center gap-3'>
              <Users className='w-6 h-6 text-green-400' />
              <span className='font-medium text-white'>150+ Clients</span>
            </div>

            <div className='flex items-center gap-1'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='w-5 h-5 text-yellow-400' />
              ))}
              <span className='ml-2 text-slate-300'>All 5 Stars</span>
            </div>
          </div>
        </div>

        {/** Fiverr Card **/}
        <div className='group bg-slate-800/50 hover:shadow-blue-500/20 hover:shadow-lg backdrop-blur-sm p-6 border border-slate-700 hover:border-blue-500 rounded-xl transition-all duration-300'>
          <h3 className='mb-6 font-semibold text-white text-2xl'>
            Fiverr Achievements
          </h3>

          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <Shield className='w-6 h-6 text-blue-400' />
              <span className='font-medium text-white'>4500+ Sites Fixed</span>
            </div>

            <div className='flex items-center gap-3'>
              <Users className='w-6 h-6 text-blue-400' />
              <span className='font-medium text-white'>1600+ Clients</span>
            </div>

            <div className='flex items-center gap-1'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='w-5 h-5 text-yellow-400' />
              ))}
              <span className='ml-2 text-slate-300'>5 Stars</span>
            </div>

            <div className='flex items-center gap-2 text-slate-300'>
              <Percent className='w-5 h-5 text-purple-400' />
              <span>99.99% Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}
