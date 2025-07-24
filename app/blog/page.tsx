import { Calendar, Clock, ArrowRight } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import Title from '@/components/ui';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'WordPress Blog & Insights: Security, Malware Removal, Error Fixing & Blacklist Removal',
  description:
    'Explore expert guides on WordPress security best practices, malware detection and removal, fixing common errors, Google blacklist removal, and development tips to keep your site secure and optimized.',
  keywords:
    'WordPress security, WordPress malware removal, SEO spam WordPress, WordPress error fixing, Google blacklist removal WordPress, WordPress development tips, WordPress plugins security, malware scanner WordPress, WordPress hacked site recovery, detect SEO spam in WordPress',
  alternates: {
    canonical: 'https://www.mdpabel.com/blog', // Replace with your actual domain and path
  },
  openGraph: {
    title:
      'WordPress Blog & Insights: Security, Malware Removal, Error Fixing & Blacklist Removal',
    description:
      'Discover in-depth articles on WordPress malware removal, security tips, error fixes, blacklist removal, and development insights for a safer website.',
    url: 'https://www.mdpabel.com/blog',
    siteName: 'MD Pabel', // Replace with your site name
    images: [
      {
        url: '/images/blog-opengraph-image.png', // Add a default OG image (e.g., 1200x630px)
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
    images: ['/images/blog-opengraph-image.png'], // Same as OG image
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
    status: 'publish',
  });

  if (!posts || posts.length === 0) {
    return [];
  }

  // Map the slugs of the posts to the params object
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Blogs = async () => {
  const { posts, total } = await wordpress.getPosts();

  if (!posts) {
    return notFound();
  }

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);
  const otherPosts = posts.slice(4);

  const reading_time = 10;

  return (
    <div className='bg-slate-900 py-16 text-white'>
      <ComponentWrapper>
        <div className='mb-12'>
          <Title>Blog & Insights</Title>
        </div>

        {/* Featured Post */}
        <div className='bg-slate-800 mb-12 border border-slate-700 rounded-lg overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='aspect-video lg:aspect-auto'>
              <img
                src={featuredPost.featuredImage?.url}
                alt={featuredPost.title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-8'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {featuredPost.categories?.map((category, index) => (
                  <span
                    key={index}
                    className='bg-purple-500/20 px-3 py-1 rounded-full text-purple-400 text-sm'>
                    {category.name}
                  </span>
                ))}
              </div>

              <h2 className='mb-4 font-bold text-white text-2xl lg:text-3xl'>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className='hover:text-purple-400 transition-colors'
                  dangerouslySetInnerHTML={{
                    __html: featuredPost.title,
                  }}></Link>
              </h2>

              <p
                className='mb-6 text-slate-300'
                dangerouslySetInnerHTML={{
                  __html: featuredPost.excerpt,
                }}></p>

              <div className='flex items-center gap-6 mb-6 text-slate-400 text-sm'>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-4 h-4' />
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='w-4 h-4' />
                  <span>{reading_time} min read</span>
                </div>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className='group inline-flex items-center gap-2 text-purple-400 hover:text-blue-300 transition-colors'>
                Read Full Article
                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className='mb-12'>
          <h3 className='mb-6 font-semibold text-white text-xl'>
            Recent Posts
          </h3>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
            {recentPosts.map((post) => (
              <article key={post.id} className='group'>
                <div className='mb-4 rounded-lg aspect-video overflow-hidden'>
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

                <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 transition-colors'>
                  <Link
                    href={`/blog/${post.slug}`}
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}></Link>
                </h4>

                <p
                  className='mb-3 text-slate-400 text-sm line-clamp-2'
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
        <div>
          <h3 className='mb-6 font-semibold text-white text-xl'>
            More Articles
          </h3>
          <div className='space-y-6'>
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className='group flex gap-4 bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300'>
                <div className='flex-shrink-0 rounded-lg w-48 aspect-video overflow-hidden'>
                  <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>

                <div className='flex-1'>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    {post.categories?.map((category, index) => (
                      <span
                        key={index}
                        className='bg-slate-700 px-2 py-1 rounded-full text-slate-300 text-xs'>
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <h4 className='mb-2 font-semibold text-white group-hover:text-purple-400 text-lg transition-colors'>
                    <Link
                      href={`/blog/${post.slug}`}
                      dangerouslySetInnerHTML={{
                        __html: post.title,
                      }}></Link>
                  </h4>

                  <p
                    className='mb-4 text-slate-400 line-clamp-2'
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}></p>

                  <div className='flex items-center gap-4 text-slate-500 text-sm'>
                    <div className='flex items-center gap-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
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
              description: post.excerpt.replace(/<[^>]*>/g, ''), // Strip HTML for clean text
              author: {
                '@type': 'Person',
                name: post.author?.name || 'MD Pabel Team', // Use actual author if available
              },
              publisher: {
                '@type': 'Organization',
                name: 'MD Pabel',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.mdpabel.com/images/blog-opengraph-image.png', // Replace with actual logo URL if available (e.g., a square image)
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
