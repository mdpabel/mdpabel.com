import React from 'react';
import { wordpress } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';
import Link from 'next/link';
import { Metadata } from 'next';
import he from 'he'; // Import he for decoding
import Image from 'next/image';

interface SingleBlogProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: SingleBlogProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await wordpress.getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const decodedTitle = he.decode(post.title); // Decode with he

  const strippedExcerpt = post.excerpt.replace(/<[^>]*>/g, '').slice(0, 160);
  const keywords = [
    ...post.categories.map((cat) => cat.name),
    ...post.tags.map((tag) => tag.name),
    'WordPress security',
    'WordPress malware removal',
    'WordPress error fixing',
    'Google blacklist removal WordPress',
    'WordPress development tips',
  ].join(', ');

  return {
    title: `${decodedTitle} | MD Pabel Blog`, // Use decoded title
    description: strippedExcerpt,
    keywords,
    alternates: {
      canonical: `https://www.mdpabel.com/blog/${slug}`,
    },
    openGraph: {
      title: decodedTitle, // Use decoded title
      description: strippedExcerpt,
      url: `https://www.mdpabel.com/blog/${slug}`,
      siteName: 'MD Pabel',
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage.url,
              width: 1200,
              height: 630,
              alt: post.featuredImage.alt || decodedTitle, // Update alt if needed
            },
          ]
        : [
            {
              url: '/images/blog-opengraph-image.png',
              width: 1200,
              height: 630,
              alt: 'WordPress Security and Malware Removal Blog',
            },
          ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: decodedTitle, // Use decoded title
      description: strippedExcerpt,
      images: post.featuredImage
        ? [post.featuredImage.url]
        : ['/images/blog-opengraph-image.png'],
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
}

export default async function SingleBlog({ params }: SingleBlogProps) {
  const { slug } = await params;

  const post = await wordpress.getPostBySlug(slug);

  if (!post) return notFound();

  const decodedTitle = he.decode(post.title); // Decode with he

  const relatedPosts = await wordpress.getRelatedPosts(post.id, 3);

  const strippedExcerpt = post.excerpt.replace(/<[^>]*>/g, '');
  const strippedContent = post.content.replace(/<[^>]*>/g, '');

  return (
    <>
      <ComponentWrapper>
        <div className='px-5 sm:px-0 py-10 sm:py-16 container'>
          {/* Blog Header */}
          <header className='mb-12 text-left sm:text-center'>
            <Heading className='!text-4xl text-center'>{decodedTitle}</Heading>{' '}
            {/* Use decoded title */}
            <div className='mt-4 text-gray-400 text-sm'>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className='mx-2'>|</span>
              <span>{post.author.name}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className='relative mb-12 w-full h-[450px]'>
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || decodedTitle}
                className='shadow-lg rounded-lg w-full h-full object-cover'
                layout='fill'
                objectFit='cover'
                priority
              />
            </div>
          )}

          {/* Blog Content */}
          <article className='prose-invert max-w-none text-gray-300 prose prose-lg'>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className='mt-12'>
              <h3 className='mb-4 font-semibold text-gray-200 text-lg'>Tags</h3>
              <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag) => (
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
                {relatedPosts.map((related) => (
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
        </div>
      </ComponentWrapper>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: decodedTitle, // Use decoded title
            datePublished: post.date,
            dateModified: post.modified || post.date,
            author: {
              '@type': 'Person',
              name: post.author.name,
            },
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
                  name: decodedTitle, // Use decoded title
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
