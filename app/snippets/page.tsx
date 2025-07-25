// app/snippets/page.tsx
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import Title from '@/components/ui';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code Snippets: React, JavaScript & Development Utilities',
  description:
    'Explore useful code snippets for React hooks, JavaScript utilities, and development tools to enhance your WordPress and web projects.',
  keywords:
    'React hooks, JavaScript snippets, development utilities, code examples, WordPress development snippets, React debounce hook, utility functions',
  alternates: {
    canonical: 'https://www.mdpabel.com/snippets', // Replace with your actual domain and path
  },
  openGraph: {
    title: 'Code Snippets: React, JavaScript & Development Utilities',
    description:
      'Handy code snippets for React, JavaScript, and other development needs to boost productivity in your projects.',
    url: 'https://www.mdpabel.com/snippets',
    siteName: 'MD Pabel', // Replace with your site name
    images: [
      {
        url: '/images/snippets-opengraph-image.png', // Add a default OG image (e.g., 1200x630px)
        width: 1200,
        height: 630,
        alt: 'Code Snippets Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Snippets: React, JavaScript & Development Utilities',
    description:
      'Useful snippets for React hooks, JS utilities, and more for developers.',
    images: ['/images/snippets-opengraph-image.png'], // Same as OG image
    site: '@mdpabe11', // Replace with your Twitter handle
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
  const { posts } = await wordpress.getPosts({
    postType: 'snippet',
    status: 'publish',
  });

  if (!posts || posts.length === 0) {
    return [];
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Snippets = async () => {
  const { posts, total } = await wordpress.getPosts({
    postType: 'snippet',
    status: 'publish',
  });

  if (!posts || posts.length === 0) {
    return notFound();
  }

  const featuredSnippet = posts[0];
  const recentSnippets = posts.slice(1, 4);
  const otherSnippets = posts.slice(4);

  const reading_time = 5; // Adjust based on typical snippet length

  return (
    <div className='bg-slate-900 py-16 text-white'>
      <ComponentWrapper>
        <div className='mb-12'>
          <Title>Code Snippets</Title>
        </div>

        {/* Featured Snippet */}
        <div className='bg-slate-800 mb-12 p-8 border border-slate-700 rounded-lg overflow-hidden'>
          <div className='flex flex-wrap gap-2 mb-4'>
            <span className='bg-purple-500/20 px-3 py-1 rounded-full text-purple-400 text-sm'>
              {featuredSnippet.acf?.language || 'Utility'}
            </span>
          </div>

          <h2 className='mb-4 font-bold text-white text-2xl lg:text-3xl'>
            <Link
              href={`/snippets/${featuredSnippet.slug}`}
              className='hover:text-purple-400 transition-colors'
              dangerouslySetInnerHTML={{
                __html: featuredSnippet.title,
              }}></Link>
          </h2>

          <p
            className='mb-6 text-slate-300'
            dangerouslySetInnerHTML={{
              __html:
                featuredSnippet.acf?.description__usage_notes ||
                featuredSnippet.excerpt,
            }}></p>

          <pre className='bg-slate-900 mb-6 p-4 rounded-lg overflow-x-auto text-slate-200 text-sm line-clamp-6'>
            <code
              dangerouslySetInnerHTML={{
                __html: featuredSnippet.acf?.code_,
              }}></code>
          </pre>

          <div className='flex items-center gap-6 mb-6 text-slate-400 text-sm'>
            <div className='flex items-center gap-1'>
              <Calendar className='w-4 h-4' />
              <span>{new Date(featuredSnippet.date).toLocaleDateString()}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock className='w-4 h-4' />
              <span>{reading_time} min read</span>
            </div>
          </div>

          <Link
            href={`/snippets/${featuredSnippet.slug}`}
            className='group inline-flex items-center gap-2 text-purple-400 hover:text-blue-300 transition-colors'>
            View Full Snippet
            <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        {/* Recent Snippets */}
        <div className='mb-12'>
          <h3 className='mb-6 font-semibold text-white text-xl'>
            Recent Snippets
          </h3>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
            {recentSnippets.map((snippet) => (
              <article
                key={snippet.id}
                className='group bg-slate-800 p-6 border border-slate-700 rounded-lg'>
                <div className='flex flex-wrap gap-1 mb-2'>
                  <span className='bg-slate-700 px-2 py-1 rounded text-slate-300 text-xs'>
                    {snippet.acf?.language || 'Utility'}
                  </span>
                </div>

                <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 transition-colors'>
                  <Link
                    href={`/snippets/${snippet.slug}`}
                    dangerouslySetInnerHTML={{
                      __html: snippet.title,
                    }}></Link>
                </h4>

                <p
                  className='mb-3 text-slate-400 text-sm line-clamp-2'
                  dangerouslySetInnerHTML={{
                    __html:
                      snippet.acf?.description__usage_notes || snippet.excerpt,
                  }}></p>

                <pre className='bg-slate-900 mb-3 p-2 rounded overflow-x-auto text-slate-200 text-xs line-clamp-3'>
                  <code
                    dangerouslySetInnerHTML={{
                      __html: snippet.acf?.code_,
                    }}></code>
                </pre>

                <div className='flex justify-between items-center text-slate-500 text-xs'>
                  <span>{new Date(snippet.date).toLocaleDateString()}</span>
                  <span>{reading_time} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Other Snippets */}
        <div>
          <h3 className='mb-6 font-semibold text-white text-xl'>
            More Snippets
          </h3>
          <div className='space-y-6'>
            {otherSnippets.map((snippet) => (
              <article
                key={snippet.id}
                className='group flex gap-4 bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300'>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    <span className='bg-slate-700 px-2 py-1 rounded-full text-slate-300 text-xs'>
                      {snippet.acf?.language || 'Utility'}
                    </span>
                  </div>

                  <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 text-lg transition-colors'>
                    <Link
                      href={`/snippets/${snippet.slug}`}
                      dangerouslySetInnerHTML={{
                        __html: snippet.title,
                      }}></Link>
                  </h4>

                  <p
                    className='mb-4 text-slate-400 line-clamp-2'
                    dangerouslySetInnerHTML={{
                      __html:
                        snippet.acf?.description__usage_notes ||
                        snippet.excerpt,
                    }}></p>

                  <pre className='bg-slate-900 mb-4 p-4 rounded-lg overflow-x-auto text-slate-200 text-sm line-clamp-4'>
                    <code
                      dangerouslySetInnerHTML={{
                        __html: snippet.acf?.code_,
                      }}></code>
                  </pre>

                  <div className='flex items-center gap-4 text-slate-500 text-sm'>
                    <div className='flex items-center gap-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{new Date(snippet.date).toLocaleDateString()}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Clock className='w-4 h-4' />
                      <span>{reading_time} min</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </ComponentWrapper>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Code Snippets: React, JavaScript & Development Utilities',
            description:
              'Collection of useful code snippets for React, JavaScript, and development utilities.',
            url: 'https://www.mdpabel.com/snippets',
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
                  name: 'Snippets',
                  item: 'https://www.mdpabel.com/snippets',
                },
              ],
            },
            hasPart: posts.map((post) => ({
              '@type': 'CreativeWork',
              headline: post.title,
              datePublished: post.date,
              url: `https://www.mdpabel.com/snippets/${post.slug}`,
              description: (
                post.acf?.description__usage_notes || post.excerpt
              ).replace(/<[^>]*>/g, ''), // Strip HTML for clean text
              author: {
                '@type': 'Person',
                name: post.author?.name || 'MD Pabel Team', // Use actual author if available
              },
              publisher: {
                '@type': 'Organization',
                name: 'MD Pabel',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.mdpabel.com/images/snippets-opengraph-image.png', // Replace with actual logo URL if available
                },
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Snippets;
