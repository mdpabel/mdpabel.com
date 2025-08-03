export const dynamic = 'force-static';

import { Calendar, Clock, ArrowRight } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import Title from '@/components/ui';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';

import { Metadata } from 'next';
import Pagination from '@/components/pagination';

export const metadata: Metadata = {
  title:
    'WordPress Blog & Insights: Security, Malware Removal, Error Fixing & Blacklist Removal',
  description:
    'Explore expert guides on WordPress security best practices, malware detection and removal, fixing common errors, Google blacklist removal, and development tips to keep your site secure and optimized.',
  keywords:
    'WordPress security, WordPress malware removal, SEO spam WordPress, WordPress error fixing, Google blacklist removal WordPress, WordPress development tips, WordPress plugins security, malware scanner WordPress, WordPress hacked site recovery, detect SEO spam in WordPress',
  alternates: {
    canonical: 'https://www.mdpabel.com/blog',
  },
  openGraph: {
    title:
      'WordPress Blog & Insights: Security, Malware Removal, Error Fixing & Blacklist Removal',
    description:
      'Discover in-depth articles on WordPress malware removal, security tips, error fixes, blacklist removal, and development insights for a safer website.',
    url: 'https://www.mdpabel.com/blog',
    siteName: 'MD Pabel',
    images: [
      {
        url: '/images/blog-opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'WordPress Security and Malware Removal Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'WordPress Blog & Insights: Security, Malware Removal, Error Fixing & Blacklist Removal',
    description:
      'Expert advice on WordPress security, malware removal, error fixing, blacklist removal, and more.',
    images: ['/images/blog-opengraph-image.png'],
    site: '@mdpabe11',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export async function generateStaticParams() {
  const { posts, hasMore, total, totalPages } = await wordpress.getPosts({
    status: 'publish',
  });

  if (!posts || posts.length === 0) {
    return [];
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PER_PAGE = 9;

type BlogType = {
  searchParams: Promise<{
    page: string;
  }>;
};

const Blogs = async ({ searchParams }: BlogType) => {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const { posts, total, hasMore, totalPages } = await wordpress.getPosts({
    perPage: PER_PAGE,
    status: 'publish',
    page,
  });

  if (!posts) {
    return notFound();
  }

  const reading_time = 10;

  if (page === 1) {
    const sortedPosts = posts.sort((a, b) => {
      const aIsFeatured = a.categories?.some((cat) => cat.name === 'Featured')
        ? 1
        : 0;
      const bIsFeatured = b.categories?.some((cat) => cat.name === 'Featured')
        ? 1
        : 0;
      return bIsFeatured - aIsFeatured;
    });

    const featuredPost = sortedPosts[0];
    const recentPosts = sortedPosts.slice(1, 4);
    const otherPosts = sortedPosts.slice(4);

    return (
      <div className='bg-slate-900 py-8 sm:py-12 lg:py-16 text-white'>
        <ComponentWrapper>
          <div className='mb-8 sm:mb-12'>
            <Title>Blog & Insights</Title>
          </div>

          {/* Featured Post */}
          <div className='bg-slate-800 mb-8 sm:mb-12 border border-slate-700 rounded-lg overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='aspect-video lg:aspect-auto'>
                <img
                  src={featuredPost.featuredImage?.url}
                  alt={featuredPost.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 sm:p-6 lg:p-8'>
                <div className='flex flex-wrap gap-2 mb-3 sm:mb-4'>
                  {featuredPost.categories?.map((category, index) => (
                    <span
                      key={index}
                      className='bg-purple-500/20 px-2 sm:px-3 py-1 rounded-full text-purple-400 text-xs sm:text-sm'>
                      {category.name}
                    </span>
                  ))}
                </div>

                <h2 className='mb-3 sm:mb-4 font-bold text-white text-xl sm:text-2xl lg:text-3xl leading-tight'>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className='hover:text-purple-400 transition-colors'
                    dangerouslySetInnerHTML={{
                      __html: featuredPost.title,
                    }}></Link>
                </h2>

                <p
                  className='mb-4 sm:mb-6 text-slate-300 text-sm sm:text-base line-clamp-3'
                  dangerouslySetInnerHTML={{
                    __html: featuredPost.excerpt,
                  }}></p>

                <div className='flex sm:flex-row flex-col sm:items-center gap-3 sm:gap-6 mb-4 sm:mb-6 text-slate-400 text-xs sm:text-sm'>
                  <div className='flex items-center gap-1'>
                    <Calendar className='w-3 sm:w-4 h-3 sm:h-4' />
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-3 sm:w-4 h-3 sm:h-4' />
                    <span>{reading_time} min read</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className='group inline-flex items-center gap-2 text-purple-400 hover:text-blue-300 text-sm sm:text-base transition-colors'>
                  Read Full Article
                  <ArrowRight className='w-3 sm:w-4 h-3 sm:h-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className='mb-8 sm:mb-12'>
            <h3 className='mb-4 sm:mb-6 font-semibold text-white text-lg sm:text-xl'>
              More Posts
            </h3>
            <div className='gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
              {recentPosts.map((post) => (
                <article key={post.id} className='group'>
                  <div className='mb-3 sm:mb-4 rounded-lg aspect-video overflow-hidden'>
                    <img
                      src={post.featuredImage?.url}
                      alt={post.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>

                  <div className='flex flex-wrap gap-1 mb-2'>
                    {post.categories?.slice(0, 2).map((category, index) => (
                      <span
                        key={index}
                        className='bg-slate-700 px-2 py-1 rounded text-slate-300 text-xs'>
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 text-sm sm:text-base leading-tight transition-colors'>
                    <Link
                      href={`/blog/${post.slug}`}
                      dangerouslySetInnerHTML={{
                        __html: post.title,
                      }}></Link>
                  </h4>

                  <p
                    className='mb-3 text-slate-400 text-xs sm:text-sm line-clamp-2'
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}></p>

                  <div className='flex justify-between items-center text-slate-500 text-xs'>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{reading_time} min read</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Other Posts */}
          <div className='mb-8 sm:mb-12'>
            <div className='space-y-4 sm:space-y-6'>
              {otherPosts.map((post) => (
                <article
                  key={post.id}
                  className='group bg-slate-800 p-4 sm:p-6 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300'>
                  {/* Mobile Layout - Stacked */}
                  <div className='sm:hidden block'>
                    <div className='mb-4 rounded-lg aspect-video overflow-hidden'>
                      <img
                        src={post.featuredImage?.url}
                        alt={post.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>

                    <div className='flex flex-wrap gap-2 mb-2'>
                      {post.categories?.map((category, index) => (
                        <span
                          key={index}
                          className='bg-slate-700 px-2 py-1 rounded-full text-slate-300 text-xs'>
                          {category.name}
                        </span>
                      ))}
                    </div>

                    <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 text-base leading-tight transition-colors'>
                      <Link
                        href={`/blog/${post.slug}`}
                        dangerouslySetInnerHTML={{
                          __html: post.title,
                        }}></Link>
                    </h4>

                    <p
                      className='mb-4 text-slate-400 text-sm line-clamp-2'
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}></p>

                    <div className='flex flex-col gap-2 text-slate-500 text-xs'>
                      <div className='flex items-center gap-1'>
                        <Calendar className='w-3 h-3' />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-3 h-3' />
                        <span>{reading_time} min</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Side by Side */}
                  <div className='hidden sm:flex gap-4'>
                    <div className='flex-shrink-0 rounded-lg w-32 sm:w-40 lg:w-48 aspect-video overflow-hidden'>
                      <img
                        src={post.featuredImage?.url}
                        alt={post.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>

                    <div className='flex-1 min-w-0'>
                      <div className='flex flex-wrap gap-2 mb-2'>
                        {post.categories?.map((category, index) => (
                          <span
                            key={index}
                            className='bg-slate-700 px-2 py-1 rounded-full text-slate-300 text-xs'>
                            {category.name}
                          </span>
                        ))}
                      </div>

                      <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 text-base lg:text-lg leading-tight transition-colors'>
                        <Link
                          href={`/blog/${post.slug}`}
                          dangerouslySetInnerHTML={{
                            __html: post.title,
                          }}></Link>
                      </h4>

                      <p
                        className='mb-4 text-slate-400 text-sm line-clamp-2'
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}></p>

                      <div className='flex items-center gap-4 text-slate-500 text-sm'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='w-4 h-4' />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Clock className='w-4 h-4' />
                          <span>{reading_time} min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <Pagination
            totalPages={totalPages}
            total={total}
            perPage={PER_PAGE}
          />
        </ComponentWrapper>

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'WordPress Blog & Insights: Security, Malware Removal, Error Fixing & Blacklist Removal',
              description:
                'Expert articles on WordPress security, malware removal, fixing errors, blacklist removal, and development best practices.',
              url: 'https://www.mdpabel.com/blog',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.mdpabel.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blog',
                    item: 'https://www.mdpabel.com/blog',
                  },
                ],
              },
              hasPart: posts.map((post) => ({
                '@type': 'BlogPosting',
                headline: post.title,
                datePublished: post.date,
                url: `https://www.mdpabel.com/blog/${post.slug}`,
                image:
                  post.featuredImage?.url ||
                  'https://www.mdpabel.com/images/blog-opengraph-image.png',
                description: post.excerpt.replace(/<[^>]*>/g, ''),
                author: {
                  '@type': 'Person',
                  name: post.author?.name || 'MD Pabel Team',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'MD Pabel',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.mdpabel.com/images/blog-opengraph-image.png',
                  },
                },
              })),
            }),
          }}
        />
      </div>
    );
  }

  // For page > 1, use a simple grid layout like "More Posts"
  return (
    <div className='bg-slate-900 py-8 sm:py-12 lg:py-16 text-white'>
      <ComponentWrapper>
        <div className='mb-8 sm:mb-12'>
          <Title>Blog & Insights - Page {page}</Title>
        </div>

        <div className='mb-8 sm:mb-12'>
          <h3 className='mb-4 sm:mb-6 font-semibold text-white text-lg sm:text-xl'>
            Posts
          </h3>
          <div className='gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post) => (
              <article key={post.id} className='group'>
                <div className='mb-3 sm:mb-4 rounded-lg aspect-video overflow-hidden'>
                  <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>

                <div className='flex flex-wrap gap-1 mb-2'>
                  {post.categories?.slice(0, 2).map((category, index) => (
                    <span
                      key={index}
                      className='bg-slate-700 px-2 py-1 rounded text-slate-300 text-xs'>
                      {category.name}
                    </span>
                  ))}
                </div>

                <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 text-sm sm:text-base leading-tight transition-colors'>
                  <Link
                    href={`/blog/${post.slug}`}
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}></Link>
                </h4>

                <p
                  className='mb-3 text-slate-400 text-xs sm:text-sm line-clamp-2'
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}></p>

                <div className='flex justify-between items-center text-slate-500 text-xs'>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{reading_time} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Pagination totalPages={totalPages} total={total} perPage={PER_PAGE} />
      </ComponentWrapper>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `WordPress Blog & Insights: Page ${page}`,
            description:
              'Expert articles on WordPress security, malware removal, fixing errors, blacklist removal, and development best practices.',
            url: `https://www.mdpabel.com/blog?page=${page}`,
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.mdpabel.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://www.mdpabel.com/blog',
                },
              ],
            },
            hasPart: posts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              datePublished: post.date,
              url: `https://www.mdpabel.com/blog/${post.slug}`,
              image:
                post.featuredImage?.url ||
                'https://www.mdpabel.com/images/blog-opengraph-image.png',
              description: post.excerpt.replace(/<[^>]*>/g, ''),
              author: {
                '@type': 'Person',
                name: post.author?.name || 'MD Pabel Team',
              },
              publisher: {
                '@type': 'Organization',
                name: 'MD Pabel',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.mdpabel.com/images/blog-opengraph-image.png',
                },
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Blogs;
