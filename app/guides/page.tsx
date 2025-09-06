import ComponentWrapper from '@/components/component-wrapper';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import { Metadata } from 'next';
import Pagination from '@/components/pagination';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title:
    'WordPress Guides & Tutorials: Security, Malware Removal, Error Fixing & Optimization',
  description:
    'Explore step-by-step WordPress guides on security best practices, malware detection and removal, fixing common errors, blacklist removal, and performance optimization.',
  keywords:
    'WordPress guides, WordPress tutorials, WordPress security, WordPress malware removal, SEO spam WordPress, WordPress error fixing, Google blacklist removal WordPress, WordPress optimization, WordPress plugins security, WordPress hacked site recovery',
  alternates: {
    canonical: 'https://www.mdpabel.com/guides',
  },
  openGraph: {
    title:
      'WordPress Guides & Tutorials: Security, Malware Removal, Error Fixing & Optimization',
    description:
      'Actionable guides on WordPress security, malware removal, error fixes, blacklist removal, and optimization.',
    url: 'https://www.mdpabel.com/guides',
    siteName: 'MD Pabel',
    images: [
      {
        url: '/images/blog-opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'WordPress Guides & Tutorials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'WordPress Guides & Tutorials: Security, Malware Removal, Error Fixing & Optimization',
    description: 'Step-by-step guides for a safer, faster WordPress site.',
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
  const { posts } = await wordpress.getPosts({
    status: 'publish',
    postType: 'guide',
  });

  if (!posts || posts.length === 0) return [];
  return posts.map((post: any) => ({ slug: post.slug }));
}

const PER_PAGE = 9;

type GuidesType = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const Guides = async ({ searchParams }: GuidesType) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const { posts, total, totalPages } = await wordpress.getPosts({
    postType: 'guide',
    status: 'publish',
    perPage: PER_PAGE,
    page,
  });

  if (!posts) return notFound();

  return (
    <div className='pt-10 pb-20'>
      <ComponentWrapper>
        <h1 className='sr-only'>WordPress Guides & Tutorials</h1>

        <div role='list' aria-label='Guides list'>
          {posts.map((post: any) => (
            <Link
              key={post.id}
              className='group flex justify-between items-center py-3 border-b border-b-slate-700/50 text-md text-slate-300/80 no-underline'
              href={`/guides/${post.slug}`}>
              <div
                className='w-[calc(100%-80px)] transition-transform group-hover:translate-x-2'
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className='block w-[80px] text-gray-500 text-xs text-right capitalize'>
                {new Date(post.date).toLocaleDateString()}
              </div>
            </Link>
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

      {/* JSON-LD: CollectionPage with item details */}
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'WordPress Guides & Tutorials: Security, Malware Removal, Error Fixing & Optimization',
            description:
              'Actionable WordPress guides on security, malware removal, fixing errors, blacklist removal, and optimization.',
            url: 'https://www.mdpabel.com/guides',
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
                  name: 'Guides',
                  item: 'https://www.mdpabel.com/guides',
                },
              ],
            },
            hasPart: posts.map((post: any) => ({
              '@type': 'Article',
              headline: post.title,
              datePublished: post.date,
              url: `https://www.mdpabel.com/guides/${post.slug}`,
              image:
                post?.featuredImage?.url ||
                'https://www.mdpabel.com/images/blog-opengraph-image.png',
              description: String(post?.excerpt || '')
                .replace(/<[^>]*>/g, '')
                .trim(),
              author: {
                '@type': 'Person',
                name: post?.author?.name || 'MD Pabel Team',
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

export default Guides;
