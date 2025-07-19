import React from 'react';
import { wordpress } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';
import Link from 'next/link';

interface SingleBlogProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: SingleBlogProps) {
  const { slug } = await params;

  const post = await wordpress.getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt.replace(/<[^>]*>/g, '').slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.excerpt.replace(/<[^>]*>/g, '').slice(0, 160),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      type: 'article',
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage.url,
              alt: post.featuredImage.alt || post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt.replace(/<[^>]*>/g, '').slice(0, 160),
      images: post.featuredImage ? [post.featuredImage.url] : [],
    },
  };
}

export default async function SingleBlog({ params }: SingleBlogProps) {
  const { slug } = await params;

  const post = await wordpress.getPostBySlug(slug);

  if (!post) return notFound();

  const relatedPosts = await wordpress.getRelatedPosts(post.id, 3);

  return (
    <ComponentWrapper>
      <div className='px-5 sm:px-0 py-10 sm:py-16 container'>
        {/* Blog Header */}
        <header className='mb-12 text-left sm:text-center'>
          <Heading>{post.title}</Heading>
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
            <img
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              className='shadow-lg rounded-lg w-full h-full object-cover'
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
  );
}
