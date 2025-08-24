'use client';

import Link, { useLinkStatus } from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PaginationProps {
  totalPages: number;
  total: number;
  perPage?: number;
}

/** Animated dot-dot-dot shown while any Link navigation is pending */
function PendingDots({
  className = 'ml-3 text-slate-400',
}: {
  className?: string;
}) {
  const { pending } = useLinkStatus();
  const [visible, setVisible] = useState(false);

  // Small delay to avoid flicker on fast navigations
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    if (pending) t = setTimeout(() => setVisible(true), 120);
    else setVisible(false);
    return () => {
      if (t) clearTimeout(t);
    };
  }, [pending]);

  if (!pending || !visible) return null;

  return (
    <span
      className={`inline-flex items-center ${className}`}
      role='status'
      aria-live='polite'>
      <span className='sr-only'>Loading…</span>
      <span aria-hidden='true' className='dots'>
        ...
      </span>
      <style jsx>{`
        .dots {
          display: inline-block;
          overflow: hidden;
          width: 0ch;
          vertical-align: baseline;
          animation: dots-reveal 1s steps(3, end) infinite;
        }
        @keyframes dots-reveal {
          from {
            width: 0ch;
          }
          to {
            width: 3ch;
          }
        }
      `}</style>
    </span>
  );
}

export default function Pagination({
  totalPages,
  total,
  perPage = 10,
}: PaginationProps) {
  const { pending } = useLinkStatus();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  console.log({ pending });

  const maxVisiblePages = 5; // Maximum number of page buttons to show (excluding first, last, and ellipses)

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Calculate pagination range
  const getPaginationRange = () => {
    const totalVisible = Math.min(maxVisiblePages, totalPages - 2); // Subtract 2 for first and last pages
    let start = Math.max(2, currentPage - Math.floor(totalVisible / 2));
    const end = Math.min(totalPages - 1, start + totalVisible - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < totalVisible) {
      start = Math.max(2, end - totalVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPaginationRange();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav
      className='flex flex-col items-center gap-4 sm:gap-6 mt-8'
      aria-label='Blog pagination'>
      <div className='flex items-center gap-2'>
        {/* Previous Button */}
        <Link
          prefetch={true}
          href={createPageURL(currentPage - 1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            isFirstPage
              ? 'pointer-events-none border-slate-700 bg-slate-800 text-slate-500 opacity-50'
              : 'border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:border-slate-500'
          }`}
          aria-disabled={isFirstPage}
          tabIndex={isFirstPage ? -1 : undefined}>
          <ChevronLeft className='w-4 h-4' />
          <span className='hidden sm:inline'>Previous</span>
        </Link>

        {/* Page Numbers */}
        <div className='flex items-center gap-2'>
          {/* First Page */}
          <Link
            prefetch={true}
            href={createPageURL(1)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              currentPage === 1
                ? 'border-purple-500 bg-purple-500 text-white'
                : 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
            }`}
            aria-current={currentPage === 1 ? 'page' : undefined}
            aria-label='Go to first page'>
            1
          </Link>

          {/* Ellipsis before dynamic range */}
          {pageNumbers[0] > 2 && (
            <span className='px-4 py-2 text-slate-500'>…</span>
          )}

          {/* Dynamic Page Range */}
          {pageNumbers.map((page) => (
            <Link
              prefetch={true}
              key={page}
              href={createPageURL(page)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                currentPage === page
                  ? 'border-purple-500 bg-purple-500 text-white'
                  : 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
              }`}
              aria-current={currentPage === page ? 'page' : undefined}
              aria-label={`Go to page ${page}`}>
              {page}
            </Link>
          ))}

          {/* Ellipsis after dynamic range */}
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className='px-4 py-2 text-slate-500'>…</span>
          )}

          {/* Last Page (if more than one page) */}
          {totalPages > 1 && (
            <Link
              prefetch={true}
              href={createPageURL(totalPages)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                currentPage === totalPages
                  ? 'border-purple-500 bg-purple-500 text-white'
                  : 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
              }`}
              aria-current={currentPage === totalPages ? 'page' : undefined}
              aria-label='Go to last page'>
              {totalPages}
            </Link>
          )}
        </div>

        {/* Next Button */}
        <Link
          prefetch={true}
          href={createPageURL(currentPage + 1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            isLastPage
              ? 'pointer-events-none border-slate-700 bg-slate-800 text-slate-500 opacity-50'
              : 'border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:border-slate-500'
          }`}
          aria-disabled={isLastPage}
          tabIndex={isLastPage ? -1 : undefined}>
          <span className='hidden sm:inline'>Next</span>
          <ChevronRight className='w-4 h-4' />
        </Link>

        {/* Animated dots at the END of the pagination row while navigating */}
        <PendingDots />
      </div>

      {/* Summary Info */}
      <p className='text-slate-400 text-sm'>
        Showing {(currentPage - 1) * perPage + 1} to{' '}
        {Math.min(currentPage * perPage, total)} of {total} posts
      </p>
    </nav>
  );
}
