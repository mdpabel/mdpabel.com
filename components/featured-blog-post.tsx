import { wordpress } from '@/lib/wordpress';
import React from 'react';
import ComponentWrapper from './component-wrapper';
import Link from 'next/link';

const FeaturedBlogPost = async () => {
  const { posts } = await wordpress.getPosts({
    perPage: 7,
    page: 1,
    orderBy: 'date',
  });

  return (
    <ComponentWrapper className='mt-10'>
      <div>
        {posts.map((post) => (
          <Link
            key={post.id}
            className='group flex justify-between items-center py-3 border-b border-b-slate-700/50 text-md text-slate-300/80 no-underline'
            href={`/blog/${post.slug}`}>
            <div
              className='w-[calc(100%-80px)] transition-transform group-hover:translate-x-2'
              dangerouslySetInnerHTML={{
                __html: post.title,
              }}></div>
            <PostView postId={post.id} />
          </Link>
        ))}
      </div>
      <Link href='/blog'>
        <div className='mt-4 text-slate-300/80 text-sm hover:underline'>
          View all blog posts
        </div>
      </Link>
    </ComponentWrapper>
  );
};

const PostView = async ({ postId }: { postId: number }) => {
  const { views } = await wordpress.postViewCounter(postId);

  return (
    <div className='block w-[80px] text-gray-500 text-xs text-right capitalize'>
      {views} Views
    </div>
  );
};

export default FeaturedBlogPost;
