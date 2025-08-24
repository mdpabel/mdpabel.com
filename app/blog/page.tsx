import ComponentWrapper from '@/components/component-wrapper';
import Title from '@/components/ui';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';

import { Metadata } from 'next';
import Pagination from '@/components/pagination';
import BlogCard from './blog-card';

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

  return (
    <div className='pt-10 pb-20'>
      <ComponentWrapper>
        <div className='mb-8 sm:mb-12'>
          <Title>Blog & Insights {page > 1 && `- Page ${page}`}</Title>
        </div>

        <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={{
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                date: post.date,
                featuredImage: post.featuredImage,
                categories: post.categories,
              }}
              readingTime={reading_time}
            />
          ))}
        </div>

        <div className='mt-12'>
          <Pagination
            totalPages={totalPages}
            total={total}
            perPage={PER_PAGE}
          />
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
