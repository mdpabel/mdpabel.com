'use client';

import { useState } from 'react';
import { Wrench } from 'lucide-react';
import { allServices } from './data';

const INITIAL_VISIBLE = 18;
const LOAD_MORE_STEP = 18;

const MiniServices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredServices = allServices.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const visibleServices = filteredServices.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_STEP, filteredServices.length),
    );
  };

  const hasMore = visibleCount < filteredServices.length;

  return (
    <div className='mb-16'>
      <div className='flex items-center gap-2 mx-auto mb-8 max-w-md'>
        <input
          type='text'
          placeholder='Search services...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='flex-grow bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none text-slate-200 transition-all duration-300 placeholder-slate-400'
        />
      </div>
      {filteredServices.length === 0 ? (
        <p className='text-slate-300 text-center'>
          No services found matching your search.
        </p>
      ) : (
        <>
          <ul className='space-y-4'>
            {visibleServices.map((service, index) => (
              <li
                key={index}
                className='group flex justify-between items-center bg-slate-800/50 hover:bg-slate-700/50 p-4 border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-300'>
                <div className='flex flex-grow items-center gap-4'>
                  <div className='flex justify-center items-center bg-blue-500/20 group-hover:bg-blue-500/40 rounded-full w-10 h-10 transition-colors duration-300'>
                    <Wrench className='w-5 h-5 text-blue-400' />
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='font-semibold text-white group-hover:text-blue-300 text-lg transition-colors duration-300'>
                      {service.title}
                    </h3>
                    <p className='text-slate-400 text-sm'>
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='font-bold text-green-400'>
                    ${service.price.toFixed(2)}
                  </span>
                  <button className='bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 px-4 py-2 rounded-md font-medium text-white transition-all duration-300'>
                    Order
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {hasMore && (
            <div className='flex justify-center mt-8'>
              <button
                onClick={handleLoadMore}
                className='bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300'>
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MiniServices;
