import { ArrowLeft, Calendar, CheckCircle, RefreshCw } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import { SchemaOrgHarmonized } from '@/components/SchemaOrgHarmonized';
import Image from 'next/image';
import * as cheerio from 'cheerio';
import CommentsList from '@/components/comment-list';
import CommentForm from '@/components/comment-form';

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await wordpress.getPostBySlug(slug, 'case-study');
  if (!post) return { title: 'Post Not Found' };

  return generateSEOMetadata({
    yoastData: post.yoastSEO,
    fallbackTitle: `${post.title} - Case Study`,
    fallbackDescription: post.excerpt.replace(/<[^>]+>/g, ''),
    fallbackImage: post.featuredImage?.url,
    canonical: `https://www.mdpabel.com/case-studies/${slug}`,
  });
}

const CaseStudy = async ({ params }: CaseStudyDetailPageProps) => {
  const { slug } = await params;
  const post = await wordpress.getPostBySlug(slug, 'case-study');

  if (!post) {
    notFound();
  }

  // Cheerio logic to extract headings remains the same
  const $ = cheerio.load(post.content);
  const headings: Array<{ id: string; text: string }> = [];
  $('h2').each((index, element) => {
    let headingText = $(element).text();
    let id = $(element).attr('id');
    if (!id) {
      id = headingText
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      $(element).attr('id', id);
    }
    headings.push({ id, text: headingText });
  });
  const contentWithIds = $.html();

  return (
    <div className='bg-slate-900 mb-10 min-h-screen text-white'>
      <SchemaOrgHarmonized
        canonical={`https://www.mdpabel.com/case-studies/${slug}`}
        yoastData={post.yoastSEO}
      />
      <ComponentWrapper>
        <div className='py-8'>
          <Link
            href='/case-studies'
            className='inline-flex items-center gap-2 mb-8 text-purple-400 hover:text-purple-300 transition-colors'>
            <ArrowLeft className='w-4 h-4' />
            Back to Case Studies
          </Link>
        </div>

        {/* Use <main> or <article> for semantic structure */}
        <main className='mx-auto max-w-4xl'>
          <div className='space-y-12'>
            {/* 1. Header Section */}
            <header className='space-y-6'>
              {post.featuredImage && (
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  className='shadow-lg border border-slate-700 rounded-lg w-full object-cover'
                  width={post.featuredImage.width || 800}
                  height={post.featuredImage.height || 450} // Aspect ratio 16:9
                  priority // Load the main image faster
                />
              )}
              <h1
                id='overview'
                className='font-bold text-slate-100 text-4xl lg:text-5xl leading-tight'
                dangerouslySetInnerHTML={{ __html: post.title }}
              />

              {/* Integrated Metadata */}
              <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 text-sm'>
                <div className='flex items-center gap-2'>
                  <Calendar className='w-4 h-4' />
                  <span>
                    Published: {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                {post.modified !== post.date && (
                  <div className='flex items-center gap-2'>
                    <RefreshCw className='w-4 h-4' />
                    <span>
                      Updated: {new Date(post.modified).toLocaleDateString()}
                    </span>
                  </div>
                )}
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span className='capitalize'>{post.status}</span>
                </div>
              </div>

              {post.excerpt && (
                <p
                  className='pl-4 border-purple-400 border-l-4 text-slate-300 text-lg leading-relaxed'
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              )}
            </header>

            {/* 2. Table of Contents */}
            {headings.length > 0 && (
              <div className='bg-slate-800/50 p-6 border border-slate-700 rounded-lg'>
                <h2 className='mb-4 font-semibold text-white'>On this page</h2>
                <ul className='space-y-2'>
                  {headings.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className='text-purple-400 hover:text-purple-300 text-sm hover:underline transition-colors'>
                        {section.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Main Content Body */}
            {post.content && (
              <div className='bg-slate-800/50 p-8 border border-slate-700 rounded-lg'>
                <div
                  className='prose-img:shadow-lg prose-invert prose-li:mb-2 prose-headings:pb-2 prose-img:border prose-headings:border-slate-700 prose-img:border-slate-600 prose-headings:border-b prose-img:rounded-lg max-w-none prose-headings:font-bold hover:prose-a:text-purple-300 prose-a:text-purple-400 prose-em:text-purple-300 prose-headings:text-white prose-ol:text-slate-300 prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-a:no-underline prose-p:leading-relaxed prose prose-lg'
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />
              </div>
            )}
          </div>

          <CommentsList postId={post.id} />
          <CommentForm postId={post.id} />
        </main>
      </ComponentWrapper>
    </div>
  );
};

export default CaseStudy;
