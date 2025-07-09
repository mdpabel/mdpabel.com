'use client';
import { useState } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import ComponentWrapper from './component-wrapper';
import Title from './title';
import Image from 'next/image';

const REVIEW_SOURCES = [
  { id: 'all', label: 'All Reviews' },
  {
    id: 'fiverr',
    label: 'Fiverr',
    icon: '/images/platforms/fiverr-logo.png',
    count: 950,
  },
  {
    id: 'upwork',
    label: 'Upwork',
    icon: '/images/platforms/upwork-logo.png',
    count: 480,
  },
  {
    id: 'direct',
    label: 'Direct Clients',
    icon: '/images/platforms/client-logo.png',
    count: 170,
  },
];

const REVIEWS = [
  // Same data as before with source property matching REVIEW_SOURCES ids
];

const Reviews = () => {
  const [activeSource, setActiveSource] = useState('all');

  const filteredReviews =
    activeSource === 'all'
      ? REVIEWS
      : REVIEWS.filter(
          (review) => review.source.toLowerCase() === activeSource,
        );

  return (
    <div className='px-5 sm:px-0 py-6 sm:py-16'>
      <div className='relative space-y-8'>
        <Title>Client Testimonials</Title>
        <div className='pb-8' />

        <ComponentWrapper>
          {/* Platform Stats */}
          <div className='gap-4 grid grid-cols-1 md:grid-cols-3 mb-10'>
            {REVIEW_SOURCES.slice(1).map((source) => (
              <button
                key={source.id}
                onClick={() => setActiveSource(source.id)}
                className={`relative overflow-hidden bg-slate-900 border rounded-lg p-6 transition-all duration-300 text-left ${
                  activeSource === source.id
                    ? 'border-purple-500 shadow-lg shadow-purple-900/20'
                    : 'border-slate-800 hover:border-slate-600'
                }`}>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='relative w-10 h-10'>
                    <Image
                      src={source.icon}
                      alt={source.label}
                      fill
                      objectFit='contain'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-slate-300 text-lg'>
                      {source.label}
                    </h3>
                  </div>
                </div>

                <div className='space-y-2'>
                  <div className='font-bold text-slate-300 text-2xl'>
                    {source.count}+
                  </div>
                  <div className='text-slate-400 text-sm'>
                    Satisfied clients
                  </div>
                </div>

                <div className='mt-3 text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='inline-block fill-current w-4 h-4'
                    />
                  ))}
                </div>

                {/* Background Pattern */}
                <div className='right-0 bottom-0 absolute opacity-5'>
                  <svg
                    width='120'
                    height='120'
                    viewBox='0 0 120 120'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className='flex mb-8 border-slate-800 border-b overflow-x-auto scrollbar-hide'>
            {REVIEW_SOURCES.map((source) => (
              <button
                key={source.id}
                onClick={() => setActiveSource(source.id)}
                className={`px-6 py-3 text-sm font-medium flex items-center gap-2 whitespace-nowrap ${
                  activeSource === source.id
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-slate-400 hover:text-slate-300'
                }`}>
                {source.id !== 'all' && (
                  <div className='relative w-5 h-5'>
                    <Image
                      src={source.icon}
                      alt={source.label}
                      fill
                      objectFit='contain'
                    />
                  </div>
                )}
                {source.label}
                {source.id !== 'all' && (
                  <span className='bg-slate-800 px-2 py-0.5 rounded-full text-slate-400 text-xs'>
                    {source.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className={`group bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-lg p-6 transition-all duration-300 ${
                  review.source.toLowerCase() === activeSource
                    ? 'ring-1 ring-purple-500/50'
                    : ''
                }`}>
                <div className='flex justify-between items-start mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='relative rounded-full w-12 h-12 overflow-hidden'>
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div>
                      <h3 className='font-medium text-slate-300'>
                        {review.name}
                      </h3>
                      <p className='text-slate-400 text-sm'>{review.role}</p>
                    </div>
                  </div>

                  <div className='text-yellow-400'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 inline-block ${
                          i < review.rating ? 'fill-current' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className='relative mb-4'>
                  <Quote className='-top-2 -left-2 absolute opacity-50 w-8 h-8 text-slate-700' />
                  <p className='z-10 relative pl-4 text-slate-400'>
                    {review.content}
                  </p>
                </div>

                <div className='flex justify-between items-center pt-4 border-slate-800 border-t'>
                  <span className='text-slate-500 text-sm'>{review.date}</span>

                  <div className='flex items-center gap-2'>
                    <div className='relative w-5 h-5'>
                      <Image
                        src={
                          REVIEW_SOURCES.find(
                            (s) => s.id === review.source.toLowerCase(),
                          )?.icon || '/images/platforms/default-logo.png'
                        }
                        alt={review.source}
                        fill
                        objectFit='contain'
                      />
                    </div>
                    <span className='text-slate-400 text-sm'>
                      {review.source}
                    </span>
                  </div>
                </div>

                {/* View on platform link (appears on hover) */}
                <div className='absolute inset-0 flex justify-center items-center bg-slate-900/90 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity'>
                  <a
                    href='#'
                    className='flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white transition-colors'>
                    View on {review.source} <ExternalLink className='w-4 h-4' />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* More reviews */}
          {filteredReviews.length > 6 && (
            <div className='mt-8 text-center'>
              <a
                href={`/reviews${
                  activeSource !== 'all' ? `?source=${activeSource}` : ''
                }`}
                className='inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors'>
                View all{' '}
                {activeSource !== 'all'
                  ? REVIEW_SOURCES.find((s) => s.id === activeSource)?.label
                  : ''}{' '}
                reviews
                <ExternalLink className='w-4 h-4' />
              </a>
            </div>
          )}
        </ComponentWrapper>
      </div>
    </div>
  );
};

export default Reviews;
