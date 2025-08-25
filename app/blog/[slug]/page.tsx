export const dynamic = 'force-static';

import React, { Suspense } from 'react';
import { wordpress } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';
import Link from 'next/link';
import { Metadata } from 'next';
import he from 'he';
import Image from 'next/image';

import ViewCounter, { ViewCounterSkeleton } from '@/components/view-counter';
import { generateTOC } from '@/lib/utils';
import AboutAuthor from '@/components/about-author';
import { generateSEOMetadata, SchemaOrg } from '@/lib/seo';
import { SchemaOrgHarmonized } from '@/components/SchemaOrgHarmonized';

interface SingleBlogProps {
  params: Promise<{ slug: string }>; // as per your original typing
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

  console.log(post.yoastSEO);

  const decodedTitle = he.decode(post.title);
  const postById = await wordpress.getPostById(post.id);
  const relatedPosts = await wordpress.getRelatedPosts(post.id, 3);

  const strippedExcerpt = post.excerpt.replace(/<[^>]*>/g, '');
  const strippedContent = post.content.replace(/<[^>]*>/g, '');

  const toc = generateTOC(post.content);

  let index = 0;
  let anchoredContent = post.content.replace(
    /<h([2-6])([^>]*)>(.*?)<\/h\1>/g,
    (match, level, attrs, content) => {
      const id = `heading-${index++}`;
      const newAttrs = attrs.trim() ? `${attrs} id="${id}"` : `id="${id}"`;
      return `<h${level} ${newAttrs}>${content}</h${level}>`;
    },
  );

  return (
    <>
      <ComponentWrapper>
        <SchemaOrgHarmonized
          canonical={`https://www.mdpabel.com/blog/${slug}`}
          yoastData={post.yoastSEO}
        />
        {/* Blog Header */}
        <header className='mb-12 text-left sm:text-center'>
          <Heading className='!text-3xl md:!text-4xl text-center'>
            {decodedTitle}
          </Heading>

          <div className='flex flex-wrap justify-center items-center gap-2 mt-4 text-gray-400 text-sm'>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className='hidden sm:inline mx-2'>|</span>
            <span>{post.author.name}</span>
            {/* Views with Suspense */}
            <span className='hidden sm:inline mx-2'>•</span>
            <Suspense fallback={<ViewCounterSkeleton />}>
              <ViewCounter postId={post.id} />
            </Suspense>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className='relative mb-12 w-full'>
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || decodedTitle}
              className='shadow-lg rounded-lg w-full h-full object-cover'
              width={post.featuredImage.width || 1200}
              height={post.featuredImage.height || 630}
              priority
            />
          </div>
        )}

        {/* Table of Contents */}
        {toc.length > 0 && (
          <div className='mb-12'>
            <h2 className='mb-4 font-bold text-gray-200 text-xl'>
              Table of Contents
            </h2>
            <ul className='pl-6 list-disc'>
              {toc.map((item) => (
                <li key={item.id} className={`ml-${(item.level - 2) * 4}`}>
                  <Link
                    href={`#${item.id}`}
                    className='text-blue-400 hover:underline'>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Blog Content */}
        <article
          style={{ wordBreak: 'break-word' }}
          className='prose-invert max-w-none text-gray-300 break-words prose prose-lg'>
          <div dangerouslySetInnerHTML={{ __html: anchoredContent }} />
        </article>

        {/* Author Section */}
        <AboutAuthor />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className='mt-12'>
            <h3 className='mb-4 font-semibold text-gray-200 text-lg'>Tags</h3>
            <div className='flex flex-wrap gap-2'>
              {post.tags.map((tag: any) => (
                <Link
                  key={tag.id}
                  href={`/blog/tag/${tag.slug}`}
                  className='bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-gray-400 text-sm transition-colors'>
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className='mt-16'>
            <h2 className='mb-6 font-bold text-gray-200 text-2xl'>
              Related Posts
            </h2>
            <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
              {relatedPosts.map((related: any) => (
                <Link
                  href={`/blog/${related.slug}`}
                  key={related.id}
                  className='block bg-gray-800 shadow-md hover:shadow-lg rounded-lg transition-shadow'>
                  {related.featuredImage && (
                    <div className='relative rounded-t-lg w-full h-40 overflow-hidden'>
                      <img
                        src={related.featuredImage.url}
                        alt={related.title}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  )}
                  <div className='p-4'>
                    <h3 className='mb-2 font-semibold text-gray-200 text-lg'>
                      {related.title}
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      {new Date(related.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </ComponentWrapper>

      {/* JSON-LD Schema, unchanged except variable names */}
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
    </>
  );
}
