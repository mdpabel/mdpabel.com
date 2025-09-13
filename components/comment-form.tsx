// app/components/CommentForm.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitComment, type CommentActionState } from '@/app/actions/comments';

const initialState: CommentActionState = {
  ok: undefined,
  pending: undefined,
  message: '',
};

// ---- UI primitives (purple accent) ------------------------------------------
function InputBase(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = '', ...rest } = props;
  return (
    <input
      {...rest}
      className={[
        'w-full rounded-2xl px-4 py-3',
        'bg-white/5 text-slate-100 placeholder:text-slate-400',
        'border border-white/10',
        'outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-purple-500/40',
        'transition-shadow',
        className,
      ].join(' ')}
    />
  );
}

function TextareaBase(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  const { className = '', ...rest } = props;
  return (
    <textarea
      {...rest}
      className={[
        'w-full rounded-2xl px-4 py-3',
        'bg-white/5 text-slate-100 placeholder:text-slate-400',
        'border border-white/10',
        'outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-purple-500/40',
        'transition-shadow',
        className,
      ].join(' ')}
    />
  );
}

function Spinner() {
  return (
    <svg
      viewBox='0 0 24 24'
      className='w-4 h-4 animate-spin'
      aria-hidden='true'>
      <circle
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
        fill='none'
        opacity='0.2'
      />
      <path
        d='M22 12a10 10 0 0 1-10 10'
        stroke='currentColor'
        strokeWidth='4'
        fill='none'
      />
    </svg>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className={[
        'inline-flex items-center gap-2',
        'rounded-2xl px-5 py-2.5',
        'bg-purple-500/90 text-white hover:bg-purple-500',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        'shadow-lg shadow-purple-900/30 ring-1 ring-white/10',
        'transition-colors',
      ].join(' ')}>
      {pending && <Spinner />}
      {pending ? 'Submitting…' : 'Post comment'}
    </button>
  );
}
// -----------------------------------------------------------------------------

export default function CommentForm({
  postId,
  parent,
  maxLength = 2000, // UI counter only
}: {
  postId: number;
  parent?: number;
  maxLength?: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(submitComment, initialState);
  const [contentLen, setContentLen] = useState(0);

  // Reset on success/queued
  useEffect(() => {
    if (state.ok && formRef.current) {
      formRef.current.reset();
      setContentLen(0);
    }
  }, [state.ok]);

  const counterColor = useMemo(() => {
    if (contentLen > maxLength) return 'text-rose-400';
    if (contentLen > maxLength * 0.9) return 'text-amber-400';
    return 'text-slate-400';
  }, [contentLen, maxLength]);

  return (
    <div className='not-prose'>
      <form
        ref={formRef}
        action={formAction}
        className={[
          'mt-6 rounded-2xl',
          'border border-white/10 bg-white/[0.02] backdrop-blur',
          'p-5 md:p-6 shadow-xl shadow-black/20',
        ].join(' ')}>
        {/* Hidden post context */}
        <input type='hidden' name='postId' value={postId} />
        <input type='hidden' name='parent' value={parent || 0} />

        {/* Honeypot (hidden) */}
        <input
          id='website'
          name='website'
          type='text'
          tabIndex={-1}
          autoComplete='off'
          className='top-auto left-[-10000px] absolute opacity-0 w-0 h-0'
          aria-hidden='true'
        />

        {/* Compact 2-col row with placeholders */}
        <div className='gap-3 grid grid-cols-1 md:grid-cols-2'>
          <div>
            <label className='sr-only' htmlFor='authorName'>
              Name
            </label>
            <InputBase
              id='authorName'
              name='authorName'
              type='text'
              required
              autoComplete='name'
              placeholder='Name *'
              aria-invalid={!!state.errors?.authorName}
              aria-describedby={
                state.errors?.authorName ? 'err-name' : undefined
              }
            />
            {state.errors?.authorName && (
              <p id='err-name' className='mt-1 text-rose-400 text-sm'>
                {state.errors.authorName}
              </p>
            )}
          </div>

          <div>
            <label className='sr-only' htmlFor='authorEmail'>
              Email
            </label>
            <InputBase
              id='authorEmail'
              name='authorEmail'
              type='email'
              required
              autoComplete='email'
              placeholder='Email *'
              aria-invalid={!!state.errors?.authorEmail}
              aria-describedby={
                state.errors?.authorEmail ? 'err-email' : undefined
              }
            />
            {state.errors?.authorEmail && (
              <p id='err-email' className='mt-1 text-rose-400 text-sm'>
                {state.errors.authorEmail}
              </p>
            )}
          </div>
        </div>

        <div className='mt-3'>
          <label className='sr-only' htmlFor='authorUrl'>
            Website
          </label>
          <InputBase
            id='authorUrl'
            name='authorUrl'
            type='url'
            placeholder='Website (optional)'
          />
        </div>

        <div className='mt-3'>
          <label className='sr-only' htmlFor='content'>
            Comment
          </label>
          <div className='relative'>
            <TextareaBase
              id='content'
              name='content'
              rows={5}
              required
              placeholder='Write your comment…'
              onChange={(e) => setContentLen(e.currentTarget.value.length)}
              aria-invalid={!!state.errors?.content}
              aria-describedby={
                state.errors?.content ? 'err-content' : 'comment-counter'
              }
            />
            <div
              id='comment-counter'
              className={`pointer-events-none absolute bottom-2 right-3 text-xs ${counterColor}`}>
              {contentLen}/{maxLength}
            </div>
          </div>
          {state.errors?.content && (
            <p id='err-content' className='mt-1 text-rose-400 text-sm'>
              {state.errors.content}
            </p>
          )}
        </div>

        {/* Status Banner */}
        {state.message && (
          <div
            role='status'
            className={[
              'mt-4 rounded-xl px-4 py-2.5 text-sm',
              state.ok
                ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-300 border border-rose-500/20',
            ].join(' ')}>
            {state.message}
          </div>
        )}

        {/* Actions (tight) */}
        <div className='flex sm:flex-row flex-col sm:justify-between items-start sm:items-center gap-3 mt-4'>
          <p className='text-slate-400 text-xs'>
            By commenting you agree to our{' '}
            <a
              href='/terms'
              className='decoration-slate-500 hover:decoration-slate-300 underline'>
              terms
            </a>
            .
          </p>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
