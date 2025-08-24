'use client';

import * as React from 'react';
import { Eye } from 'lucide-react';

type ViewCounterProps = {
  postId: number;
  className?: string;
};

export default function ViewCounter({ postId, className }: ViewCounterProps) {
  const [views, setViews] = React.useState<number | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        // Always call the API to read the latest count for this session.
        // The API itself ensures we don't increment twice per user/session.
        const res = await fetch('/api/views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ postId }),
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to reach view counter');
        const data = (await res.json()) as { views?: number; error?: string };
        if (cancelled) return;
        if (typeof data.views === 'number') setViews(data.views);
        else setError(data.error || 'Unable to load views');
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Unable to load views');
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [postId]);

  return (
    <div
      className={[
        'inline-flex select-none items-center gap-1.5 rounded-full px-3 py-1.5',
        'ring-1 ring-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5',
        'shadow-sm hover:ring-white/20 transition',
        className || '',
      ].join(' ')}
      title={
        views === null
          ? 'Loading views…'
          : error
          ? 'View count unavailable'
          : `${views.toLocaleString()} total views`
      }
      aria-live='polite'>
      <Eye className='opacity-80 w-4 h-4' aria-hidden />
      {error ? (
        <span className='opacity-70 text-xs'>—</span>
      ) : views === null ? (
        <span className='opacity-70 text-xs'>…</span>
      ) : (
        <>
          <span className='font-medium tabular-nums text-xs'>
            {views.toLocaleString()}
          </span>
          <span className='opacity-70 text-[10px]'>views</span>
        </>
      )}
    </div>
  );
}

export function ViewCounterSkeleton({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={[
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5',
        'ring-1 ring-white/10 bg-white/5',
        'animate-pulse',
        className,
      ].join(' ')}
      aria-hidden>
      <div className='bg-white/20 rounded-full w-4 h-4' />
      <div className='bg-white/20 rounded w-12 h-3' />
    </div>
  );
}
