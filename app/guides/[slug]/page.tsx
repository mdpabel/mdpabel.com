export const dynamic = 'force-static';

import React, { Suspense } from 'react';
import { wordpress } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import ComponentWrapper from '@/components/component-wrapper';
import Image from 'next/image';
import { Metadata } from 'next';
import he from 'he';
import { Calendar, User, Eye } from 'lucide-react';

import ViewCounter, { ViewCounterSkeleton } from '@/components/view-counter';
import AboutAuthor from '@/components/about-author';
import { generateSEOMetadata } from '@/lib/seo';
import { SchemaOrgHarmonized } from '@/components/SchemaOrgHarmonized';
import Link from 'next/link';

interface SingleGuideProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: SingleGuideProps): Promise<Metadata> {
  const { slug } = await params;

  const post =
    (await wordpress.getPostBySlug(slug, 'guide')) ||
    (await wordpress.getPostBySlug(slug));

  if (!post) return { title: 'Guide Not Found' };

  return generateSEOMetadata({
    yoastData: post.yoastSEO,
    fallbackTitle: `${post.title} - Guide`,
    fallbackDescription: String(post.excerpt || '').replace(/<[^>]+>/g, ''),
    fallbackImage: post.featuredImage?.url,
    canonical: `https://www.mdpabel.com/guides/${slug}`,
  });
}

export default async function SingleGuide({ params }: SingleGuideProps) {
  const { slug } = await params;

  const post =
    (await wordpress.getPostBySlug(slug, 'guide')) ||
    (await wordpress.getPostBySlug(slug));
  if (!post) return notFound();

  const decodedTitle = he.decode(post.title || '');
  const strippedExcerpt = String(post.excerpt || '').replace(/<[^>]*>/g, '');
  const strippedContent = String(post.content || '').replace(/<[^>]*>/g, '');

  return (
    <div className='bg-slate-900 min-h-screen text-white'>
      <SchemaOrgHarmonized
        canonical={`https://www.mdpabel.com/guides/${slug}`}
        yoastData={post.yoastSEO}
      />

      <ComponentWrapper>
        {/* Lock the readable width to ~850px */}
        <main className='mx-auto py-10 max-w-[850px]'>
          {/* Breadcrumbs */}
          <nav className='mb-6 text-slate-400 text-sm'>
            <Link href='/' className='hover:text-slate-200'>
              Home
            </Link>
            <span className='px-2'>/</span>
            <Link href='/guides' className='hover:text-slate-200'>
              Guides
            </Link>
            <span className='px-2'>/</span>
            <span className='text-slate-300'>{he.decode(post.title)}</span>
          </nav>

          {/* Title & Meta */}
          <header className='mb-6'>
            <h1
              className='font-bold text-slate-100 text-4xl leading-tight tracking-tight'
              dangerouslySetInnerHTML={{ __html: decodedTitle }}
            />
            <div className='flex flex-wrap items-center gap-3 mt-3 text-xs'>
              <span className='inline-flex items-center gap-2 bg-slate-800/70 px-3 py-1 rounded-full text-slate-300'>
                <Calendar className='w-3.5 h-3.5' />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className='inline-flex items-center gap-2 bg-slate-800/70 px-3 py-1 rounded-full text-slate-300'>
                <User className='w-3.5 h-3.5' />
                {post.author?.name || 'MD Pabel Team'}
              </span>
              <Suspense fallback={<ViewCounterSkeleton />}>
                <ViewCounter postId={post.id} />
              </Suspense>
            </div>
          </header>

          {/* Feature image */}
          {post.featuredImage && (
            <figure className='bg-slate-800/40 mb-8 border border-slate-700 rounded-xl overflow-hidden'>
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || decodedTitle}
                className='w-full object-cover'
                width={post.featuredImage.width || 1200}
                height={post.featuredImage.height || 630}
                priority
              />
            </figure>
          )}

          {/* Content */}
          <article
            className='prose-invert prose-li:mb-2 prose-img:border prose-img:border-slate-600 prose-img:rounded-lg max-w-none prose-headings:font-semibold hover:prose-a:text-purple-300 prose-a:text-purple-400 prose-headings:text-white prose-p:text-slate-300 prose prose-lg'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className='mt-10'>
              <h3 className='mb-3 font-semibold text-slate-200 text-sm'>
                Tags
              </h3>
              <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag: any) => (
                  <Link
                    key={tag.id}
                    href={`/guides/tag/${tag.slug}`}
                    className='bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full text-slate-300 text-xs'>
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author moved to bottom for narrow max width */}
          <div className='bg-slate-800/50 mt-10 p-5 border border-slate-700 rounded-xl'>
            <h2 className='mb-3 font-semibold text-slate-200 text-sm'>
              About the author
            </h2>
            <AboutAuthor />
          </div>
        </main>
      </ComponentWrapper>

      {/* Fallback JSON-LD when Yoast isn't present */}
      {!post.yoastSEO && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: decodedTitle,
              description: strippedExcerpt,
              articleBody: strippedContent,
              datePublished: post.date,
              dateModified: post.modified || post.date,
              image:
                post.featuredImage?.url ||
                'https://www.mdpabel.com/images/blog-opengraph-image.png',
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
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://www.mdpabel.com/guides/${slug}`,
              },
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
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: decodedTitle,
                    item: `https://www.mdpabel.com/guides/${slug}`,
                  },
                ],
              },
              isPartOf: {
                '@type': 'CreativeWorkSeries',
                name: 'Guides',
                url: 'https://www.mdpabel.com/guides',
              },
            }),
          }}
        />
      )}
    </div>
  );
}
