import { Button } from '@/components/ui';

const ContactForm = () => {
  return (
    <div className='bg-slate-800/50 mb-16 p-8 border border-slate-700 rounded-lg'>
      <h2 className='mb-6 font-bold text-white text-3xl text-center'>
        Get in Touch
      </h2>
      <p className='mb-8 text-slate-300 text-center'>
        Ready to start your project? Fill out the form below or contact me
        directly.
      </p>
      <form className='space-y-4 mx-auto max-w-md'>
        <input
          type='text'
          placeholder='Your Name'
          className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
        />
        <input
          type='email'
          placeholder='Your Email'
          className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
        />
        <textarea
          placeholder='Project Details'
          rows={5}
          className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
        />
        <Button type='submit'>Submit Inquiry</Button>
      </form>
      <div className='mt-8 text-slate-300 text-center'>
        <p>Response time: ~30 minutes average</p>
      </div>
    </div>
  );
};

export default ContactForm;
