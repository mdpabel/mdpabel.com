'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui';
import { submitFormAction } from '@/app/actions/submit-form';

export type FormState =
  | { status: 'idle' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string }
  | { status: 'skipped'; message?: string };

export const initialFormState: FormState = { status: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending} aria-disabled={pending}>
      {pending ? (
        <>
          <svg
            viewBox='0 0 24 24'
            className='inline mr-2 w-4 h-4 animate-spin'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}>
            <circle cx='12' cy='12' r='9' className='opacity-25' />
            <path d='M12 3a9 9 0 0 1 9 9' className='opacity-75' />
          </svg>
          Sending…
        </>
      ) : (
        'Submit Inquiry'
      )}
    </Button>
  );
}

const ContactForm = () => {
  const [state, formAction] = useFormState<FormState, FormData>(
    submitFormAction,
    initialFormState,
  );

  // ensure page URL is attached on submit
  const pageUrlRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (pageUrlRef.current) pageUrlRef.current.value = window.location.href;
  }, []);

  return (
    <div className='mb-16 p-8'>
      <h2 className='mb-6 font-bold text-white text-3xl text-center'>
        Get in Touch
      </h2>
      <p className='mb-8 text-slate-300 text-center'>
        Ready to start your project? Fill out the form below or contact me
        directly.
      </p>

      {/* No try/catch: we post to formAction and read {status,message} from state */}
      <form
        className='space-y-4 mx-auto max-w-md'
        action={async (fd) => {
          if (!fd.get('formName')) fd.set('formName', 'General Contact');
          if (!fd.get('pageUrl')) {
            const v = pageUrlRef.current?.value || window.location.href;
            fd.set('pageUrl', v);
          }
          await formAction(fd); // returns void; state is updated for us
          // Optionally reset on success:
          // if ((state as any)?.status === 'success') (e.currentTarget as HTMLFormElement).reset();
          // Note: above line runs with stale state inside same tick; if you want reset-on-success,
          // do it with a useEffect that watches `state.status === 'success'`.
        }}>
        <input type='hidden' name='formName' value='General Contact' />
        <input type='hidden' name='pageUrl' ref={pageUrlRef} defaultValue='' />
        <input
          type='text'
          name='_honey'
          tabIndex={-1}
          autoComplete='off'
          className='hidden'
        />
        <input
          type='text'
          name='name'
          required
          placeholder='Your Name'
          className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
        />
        <input
          type='email'
          name='email'
          required
          placeholder='Your Email'
          className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
        />
        <textarea
          name='notes'
          placeholder='Project Details'
          rows={5}
          className='bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none w-full text-slate-200 transition-all duration-300 placeholder-slate-400'
        />
        text-sm
        <SubmitButton />
        {state.status === 'success' && (
          <p role='status' className='text-emerald-300 text-sm'>
            {state.message}roe-300m
          </p>
        )}
        {state.status === 'error' && (
          <p role='status' className='text-rose-300 text-sm'>
            {state.message}
          </p>
        )}
      </form>

      <div className='mt-8 text-slate-300 text-center'>
        <p>Response time: ~30 minutes average</p>
      </div>
    </div>
  );
};

export default ContactForm;
