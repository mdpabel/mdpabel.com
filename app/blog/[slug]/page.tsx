export const dynamic = 'force-static';

// Corrected import statement
import React, { Suspense } from 'react';
import { wordpress } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import ComponentWrapper from '@/components/component-wrapper';
import Link from 'next/link';
import { Metadata } from 'next';
import he from 'he';
import Image from 'next/image';
import * as cheerio from 'cheerio';
import { Calendar, User, Eye } from 'lucide-react';

import ViewCounter, { ViewCounterSkeleton } from '@/components/view-counter';
import AboutAuthor from '@/components/about-author';
import { generateSEOMetadata } from '@/lib/seo';
import { SchemaOrgHarmonized } from '@/components/SchemaOrgHarmonized';

interface SingleBlogProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: SingleBlogProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await wordpress.getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return generateSEOMetadata({
    yoastData: post.yoastSEO,
    fallbackTitle: `${post.title} - Blog`,
    fallbackDescription: post.excerpt.replace(/<[^>]+>/g, ''),
    fallbackImage: post.featuredImage?.url,
    canonical: `https://www.mdpabel.com/blog/${slug}`,
  });
}

export default async function SingleBlog({ params }: SingleBlogProps) {
  const { slug } = await params;
  const post = await wordpress.getPostBySlug(slug);
  if (!post) return notFound();

  const relatedPosts = await wordpress.getRelatedPosts(post.id, 3);
  const decodedTitle = he.decode(post.title);

  const strippedExcerpt = post.excerpt.replace(/<[^>]*>/g, '');
  const strippedContent = post.content.replace(/<[^>]*>/g, '');

  const $ = cheerio.load(post.content);
  const headings: Array<{ id: string; text: string; level: number }> = [];

  $('h2, h3, h4').each((index, element) => {
    const heading = $(element);
    const text = heading.text();
    const level = parseInt(element.tagName.substring(1), 10);
    let id = heading.attr('id');

    if (!id) {
      id = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      heading.attr('id', id);
    }
    headings.push({ id, text, level });
  });

  const contentWithIds = $.html();

  return (
    <div className='bg-slate-900 min-h-screen text-white'>
      <SchemaOrgHarmonized
        canonical={`https://www.mdpabel.com/blog/${slug}`}
        yoastData={post.yoastSEO}
      />
      <ComponentWrapper>
        <main className='mx-auto py-12 max-w-4xl'>
          <div className='space-y-12'>
            {/* Header Section */}
            <header className='space-y-6'>
              {post.featuredImage && (
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || decodedTitle}
                  className='shadow-lg border border-slate-700 rounded-lg w-full object-cover'
                  width={post.featuredImage.width || 1200}
                  height={post.featuredImage.height || 630}
                  priority
                />
              )}
              <h1
                className='font-bold text-slate-100 text-4xl lg:text-5xl leading-tight'
                dangerouslySetInnerHTML={{ __html: decodedTitle }}
              />

              {/* Integrated Metadata */}
              <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 text-sm'>
                <div className='flex items-center gap-2'>
                  <Calendar className='w-4 h-4' />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <User className='w-4 h-4' />
                  <span>{post.author.name}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Eye className='w-4 h-4' />
                  <Suspense fallback={<ViewCounterSkeleton />}>
                    <ViewCounter postId={post.id} />
                  </Suspense>
                </div>
              </div>
            </header>

            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className='bg-slate-800/50 p-6 border border-slate-700 rounded-lg'>
                <h2 className='mb-4 font-semibold text-white text-xl'>
                  On this page
                </h2>
                <ul className='space-y-2'>
                  {headings.map((heading) => (
                    <li
                      key={heading.id}
                      style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
                      <Link
                        href={`#${heading.id}`}
                        className='text-purple-400 hover:text-purple-300 hover:underline transition-colors'>
                        {heading.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Content Body */}
            <div className='bg-slate-800/50 p-8 border border-slate-700 rounded-lg'>
              <article
                className='prose-img:shadow-lg prose-invert prose-li:mb-2 prose-headings:pb-2 prose-img:border prose-headings:border-slate-700 prose-img:border-slate-600 prose-headings:border-b prose-img:rounded-lg max-w-none prose-headings:font-bold hover:prose-a:text-purple-300 prose-a:text-purple-400 prose-em:text-purple-300 prose-headings:text-white prose-ol:text-slate-300 prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-a:no-underline prose-p:leading-relaxed prose prose-lg'
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className='mt-8'>
                <h3 className='mb-4 font-semibold text-slate-200 text-lg'>
                  Tags
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag: any) => (
                    <Link
                      key={tag.id}
                      href={`/blog/tag/${tag.slug}`}
                      className='bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full text-slate-300 text-sm transition-colors'>
                      #{tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author Section */}
            <AboutAuthor />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className='mt-8'>
                <h2 className='mb-6 font-bold text-slate-200 text-2xl'>
                  Related Posts
                </h2>
                <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
                  {relatedPosts.map((related: any) => (
                    <Link
                      href={`/blog/${related.slug}`}
                      key={related.id}
                      className='block bg-slate-800/50 hover:bg-slate-700/50 shadow-md hover:shadow-lg border border-slate-700 rounded-lg transition-all duration-300'>
                      {related.featuredImage && (
                        <Image
                          src={related.featuredImage.url}
                          alt={related.title}
                          className='rounded-t-lg w-full h-40 object-cover'
                          width={400}
                          height={225}
                        />
                      )}
                      <div className='p-4'>
                        <h3
                          className='mb-2 font-semibold text-slate-200 text-lg'
                          dangerouslySetInnerHTML={{
                            __html: he.decode(related.title),
                          }}
                        />
                        <p className='text-slate-400 text-sm'>
                          {new Date(related.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </ComponentWrapper>

      {/* Corrected JSON-LD Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: decodedTitle,
            datePublished: post.date,
            dateModified: post.modified || post.date,
            author: { '@type': 'Person', name: post.author.name },
            publisher: {
              '@type': 'Organization',
              name: 'MD Pabel',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.mdpabel.com/images/blog-opengraph-image.png',
              },
            },
            image:
              post.featuredImage?.url ||
              'https://www.mdpabel.com/images/blog-opengraph-image.png',
            description: strippedExcerpt,
            articleBody: strippedContent,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.mdpabel.com/blog/${slug}`,
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
                  name: 'Blog',
                  item: 'https://www.mdpabel.com/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: decodedTitle,
                  item: `https://www.mdpabel.com/blog/${slug}`,
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
