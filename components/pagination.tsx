'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  total: number;
  perPage?: number;
}

export default function Pagination({
  totalPages,
  total,
  perPage = 10,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

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
            <span className='px-4 py-2 text-slate-500'>...</span>
          )}

          {/* Dynamic Page Range */}
          {pageNumbers.map((page) => (
            <Link
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
            <span className='px-4 py-2 text-slate-500'>...</span>
          )}

          {/* Last Page (if more than one page) */}
          {totalPages > 1 && (
            <Link
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
      </div>

      {/* Summary Info */}
      <p className='text-slate-400 text-sm'>
        Showing {(currentPage - 1) * perPage + 1} to{' '}
        {Math.min(currentPage * perPage, total)} of {total} posts
      </p>
    </nav>
  );
}
