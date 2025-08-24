import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import * as React from 'react';
import he from 'he';

export type BlogCardProps = {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    date: string | Date;
    featuredImage?: {
      url: string;
      width?: number;
      height?: number;
    } | null;
    categories?: { name: string }[];
  };
  readingTime: number; // in minutes
  className?: string;
  /** Optional locale for date formatting (e.g., "en-US") */
  locale?: string;
};

export default function BlogCard({
  post,
  readingTime,
  className = '',
  locale,
}: BlogCardProps) {
  const { featuredImage, title, excerpt, slug, date, categories = [] } = post;

  const formattedDate = React.useMemo(() => {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString(locale ?? undefined);
  }, [date, locale]);

  const maxCategories = 2;
  const displayedCategories = categories.slice(0, maxCategories);
  const moreCount =
    categories.length > maxCategories ? categories.length - maxCategories : 0;

  return (
    <div
      className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden mb-6 ${className}`}>
      {/* Image */}
      <div className='aspect-video'>
        {process.env.NODE_ENV === 'production' ? (
          <Image
            src={featuredImage?.url || '/images/not-found-image.jpg'}
            alt={he.decode(title)}
            className='w-full h-full object-cover'
            width={featuredImage?.width ?? 800}
            height={featuredImage?.height ?? 450}
            sizes='100vw'
            priority={true}
          />
        ) : (
          <img
            src={featuredImage?.url || '/images/not-found-image.jpg'}
            alt={he.decode(title)}
            className='w-full h-full object-cover'
            width={featuredImage?.width ?? 800}
            height={featuredImage?.height ?? 450}
          />
        )}
      </div>

      {/* Content */}
      <div className='p-4'>
        {/* Categories */}
        {categories.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-3'>
            {displayedCategories.map((category, i) => (
              <span
                key={`${category.name}-${i}`}
                className='bg-purple-500/20 px-2 py-0.5 rounded-full text-purple-400 text-xs'>
                {category.name}
              </span>
            ))}
            {moreCount > 0 && (
              <span className='bg-slate-700/50 px-2 py-0.5 rounded-full text-slate-300 text-xs'>
                +{moreCount} more
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h2 className='mb-2 font-bold text-white text-lg leading-snug'>
          <Link
            href={`/blog/${slug}`}
            className='text-gray-300 hover:text-gray-200 transition-colors'
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </h2>

        {/* Excerpt */}
        <p
          className='mb-3 text-slate-400 text-sm line-clamp-3'
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        {/* Meta */}
        {/* <div className='flex flex-col gap-2 mb-4 text-slate-400 text-xs'>
          <div className='flex items-center gap-1'>
            <Calendar className='w-3 h-3' />
            <span>{formattedDate}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='w-3 h-3' />
            <span>{readingTime} min read</span>
          </div>
        </div> */}

        {/* CTA */}
        <Link
          href={`/blog/${slug}`}
          className='group inline-flex items-center gap-2 text-purple-400 hover:text-blue-300 text-sm transition-colors'
          aria-label={`Read full article: ${he.decode(title)}`}>
          Read Full Article
          <ArrowRight className='w-3 h-3 transition-transform group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  );
}
