'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react'; // Alternative if using lucide

const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchParams?.get('q') || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams?.toString());
    if (searchValue) {
      params.set('q', searchValue);
    } else {
      params.delete('q');
    }
    router.push(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center gap-2 mx-auto max-w-md'>
      <input
        type='text'
        placeholder='Search...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='flex-grow bg-slate-900/50 p-3 border border-slate-600 focus:border-blue-500 rounded-lg focus:outline-none text-slate-200 transition-all duration-300 placeholder-slate-400'
      />
      <button
        type='submit'
        className='flex items-center gap-2 bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 px-4 py-3 rounded-lg font-bold text-white transition-all duration-300'>
        <Search className='w-5 h-5' />
        Search
      </button>
    </form>
  );
};

export default SearchForm;
