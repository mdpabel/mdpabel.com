// app/rss/blog.xml/route.ts
import RSS from 'rss';
import { NextResponse } from 'next/server';
import { wordpress } from '@/lib/wordpress';

export const dynamic = 'force-dynamic';

export async function GET() {
  const siteUrl = 'https://www.mdpabel.com';

  // Fetch all published posts
  const { posts } = await wordpress.getPosts({
    status: 'publish',
  });

  if (!posts || posts.length === 0) {
    return new Response('No posts found', { status: 404 });
  }

  // Filter for blog posts (exclude those with 'Website Security' category)
  const blogPosts = posts.filter(
    (post) => !post.categories?.some((cat) => cat.name === 'Website Security'),
  );

  // Create RSS feed for blog
  const feed = new RSS({
    title: 'MD Pabel Blog Posts',
    description:
      'General blog posts on WordPress issues, performance, and more.',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss/blog.xml`,
    language: 'en-US',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, MD Pabel`,
  });

  // Add each blog post to the feed
  blogPosts.forEach((post) => {
    const postUrl = `${siteUrl}/blog/${post.slug}`;
    feed.item({
      title: post.title,
      url: postUrl,
      guid: postUrl,
      description: post.excerpt,
      custom_elements: [{ 'content:encoded': post.content }],
      date: post.date,
      author: post.author?.name || 'MD Pabel Team',
      categories: post.categories?.map((cat) => cat.name) || [],
      enclosure: post.featuredImage?.url
        ? { url: post.featuredImage.url }
        : undefined,
    });
  });

  const xml = feed.xml({ indent: true });

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
