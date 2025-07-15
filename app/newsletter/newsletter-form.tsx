import { Button } from '@/components/ui';

export const NewsletterForm = () => {
  return (
    <div className='group bg-slate-800/50 hover:shadow-blue-500/20 hover:shadow-lg backdrop-blur-sm mx-auto p-6 border border-slate-700 hover:border-blue-500 rounded-xl max-w-md transition-all duration-300'>
      <div className='bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 font-bold text-transparent text-2xl'>
        Subscribe to Our Newsletter
      </div>
      <div className='mb-4 text-slate-300'>
        Get the latest security updates, exclusive insights, and performance
        tips straight to your inbox.
      </div>
      <form className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Enter your email'
          className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none text-slate-200 transition-all duration-300 placeholder-slate-400'
          required
        />
        <Button type='submit'>Subscribe Now</Button>
      </form>
    </div>
  );
};
