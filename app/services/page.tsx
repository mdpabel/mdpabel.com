'use client';
import React, { useState, useMemo, useEffect } from 'react';
import ComponentWrapper from '@/components/component-wrapper';
import {
  Description,
  Heading,
  StatsCards,
  TrustIndicator,
} from '@/components/ui';
import {
  Shield,
  Wrench,
  Code,
  Globe,
  Clock,
  Star,
  Search,
  ArrowRight,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { allServices, Service } from '@/data/services';

const ServicesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [displayCount, setDisplayCount] = useState(15);

  const getIcon = (title: string) => {
    if (
      title.toLowerCase().includes('blacklist') ||
      title.toLowerCase().includes('removal')
    ) {
      return <Shield className='w-5 h-5 text-red-600' />;
    }
    if (
      title.toLowerCase().includes('fix') ||
      title.toLowerCase().includes('error')
    ) {
      return <Wrench className='w-5 h-5 text-orange-600' />;
    }
    if (
      title.toLowerCase().includes('development') ||
      title.toLowerCase().includes('plugin')
    ) {
      return <Code className='w-5 h-5 text-green-600' />;
    }
    if (
      title.toLowerCase().includes('seo') ||
      title.toLowerCase().includes('optimization')
    ) {
      return <Globe className='w-5 h-5 text-blue-600' />;
    }
    return <Star className='w-5 h-5 text-purple-600' />;
  };

  const filteredAndSortedServices = useMemo(() => {
    let filtered = allServices.filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => {
          const aFeatured = a.featured || false;
          const bFeatured = b.featured || false;
          if (aFeatured && !bFeatured) return -1;
          if (!aFeatured && bFeatured) return 1;
          return 0;
        });
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [searchTerm, sortBy]);

  const displayedServices = filteredAndSortedServices.slice(0, displayCount);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        setDisplayCount((prev) =>
          Math.min(prev + 15, filteredAndSortedServices.length),
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredAndSortedServices.length]);

  const renderServiceCard = (
    service: Service,
    index: number,
    isLarge = false,
  ) => (
    <div
      key={service.slug}
      className={`bg-slate-800/50 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow ${
        isLarge ? 'col-span-2 md:col-span-1 md:row-span-2' : ''
      }`}>
      <div className='flex justify-between items-start gap-4'>
        <div className='flex flex-1 items-start gap-3 min-w-0'>
          <div className='flex flex-shrink-0 justify-center items-center bg-gray-50 mt-1 rounded-lg w-8 h-8'>
            {getIcon(service.title)}
          </div>
          <div className='flex-1 min-w-0'>
            <div className='flex items-start gap-2 mb-2'>
              <h3 className='flex-1 font-medium text-slate-200 text-sm leading-tight'>
                {service.title}
              </h3>
              {service.featured && (
                <Zap className='flex-shrink-0 w-4 h-4 text-yellow-500' />
              )}
            </div>
            <p className='mb-3 text-slate-400 text-xs line-clamp-2 leading-relaxed'>
              {service.description}
            </p>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-gray-900'>
                ${service.price}
              </span>
              <Link
                href={`/services/${service.slug}`}
                className='inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700 text-xs'>
                Details <ArrowRight className='w-3 h-3' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ComponentWrapper>
      <div className='relative py-10 text-center'>
        <Heading className='mb-6'>
          Trusted Website Services for Every Stage
        </Heading>
        <Description className='mx-auto max-w-2xl'>
          From Troubleshooting and Security to Custom Development — We've Got
          You Covered
        </Description>
        <StatsCards />
        <TrustIndicator />
      </div>

      {/* Search and Sort Bar */}
      <div className='flex sm:flex-row flex-col gap-4 mb-8'>
        <div className='relative flex-1'>
          <Search className='top-1/2 left-3 absolute w-4 h-4 text-slate-400 -translate-y-1/2 transform' />
          <input
            type='text'
            placeholder='Search services...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='py-2 pr-3 pl-9 border border-slate-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-slate-400 text-sm'
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className='px-3 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 text-slate-400 text-sm'>
          <option value='popular'>Most Popular</option>
          <option value='price-low'>Price: Low to High</option>
          <option value='price-high'>Price: High to Low</option>
          <option value='name'>Alphabetical</option>
        </select>
      </div>

      {/* Results Counter */}
      <div className='mb-6'>
        <p className='text-slate-400 text-sm'>
          Showing {displayedServices.length} of{' '}
          {filteredAndSortedServices.length} services
        </p>
      </div>

      {/* Services Grid */}
      <div className='mb-16'>
        {displayedServices.length > 0 && (
          <>
            {/* First Row - Special Layout */}
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2 mb-4'>
              <div>{renderServiceCard(displayedServices[0], 0, true)}</div>
              <div className='gap-4 grid grid-rows-2'>
                {displayedServices[1] &&
                  renderServiceCard(displayedServices[1], 1)}
                {displayedServices[2] &&
                  renderServiceCard(displayedServices[2], 2)}
              </div>
            </div>

            {/* Remaining Services - 3 Column Grid */}
            {displayedServices.length > 3 && (
              <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {displayedServices
                  .slice(3)
                  .map((service, index) =>
                    renderServiceCard(service, index + 3),
                  )}
              </div>
            )}
          </>
        )}

        {filteredAndSortedServices.length === 0 && (
          <div className='bg-gray-50 py-12 rounded-lg text-center'>
            <Search className='mx-auto mb-4 w-12 h-12 text-gray-400' />
            <p className='mb-2 text-gray-500'>No services found</p>
            <p className='text-gray-400 text-sm'>
              Try adjusting your search terms
            </p>
          </div>
        )}

        {displayCount < filteredAndSortedServices.length && (
          <div className='mt-8 text-center'>
            <div className='inline-flex items-center gap-2 text-gray-500 text-sm'>
              <div className='bg-gray-400 rounded-full w-2 h-2 animate-pulse'></div>
              <div className='bg-gray-400 rounded-full w-2 h-2 animate-pulse animation-delay-150'></div>
              <div className='bg-gray-400 rounded-full w-2 h-2 animate-pulse animation-delay-300'></div>
              <span className='ml-2'>Loading more services...</span>
            </div>
          </div>
        )}
      </div>
    </ComponentWrapper>
  );
};

export default ServicesList;
