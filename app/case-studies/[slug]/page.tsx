export const dynamic = 'force-static';

import {
  Calendar,
  ArrowLeft,
  Code,
  Shield,
  Database,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';
import { Metadata } from 'next';

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CaseStudy = async ({ params }: CaseStudyDetailPageProps) => {
  const { slug } = await params;
  const post = await wordpress.getPostBySlug(slug, 'case-study');

  if (!post) {
    notFound();
  }

  const { acf } = post;

  const sections = [
    {
      key: 'problem_statement',
      title: 'Problem Statement',
      icon: AlertTriangle,
      color: 'red',
    },
    { key: 'key_issues', title: 'Key Issues', icon: Database, color: 'yellow' },
    {
      key: 'solution_overview',
      title: 'Solution Overview',
      icon: Code,
      color: 'blue',
    },
    {
      key: 'key_results',
      title: 'Key Results',
      icon: CheckCircle,
      color: 'green',
    },
    {
      key: 'Impact_Metrics',
      title: 'Impact Metrics',
      icon: Shield,
      color: 'purple',
    },
  ].filter((section) => acf?.[section.key as keyof typeof acf]);

  return (
    <div className='bg-slate-900 min-h-screen text-white'>
      <ComponentWrapper>
        <div className='py-8'>
          <Link
            href='/case-studies'
            className='inline-flex items-center gap-2 mb-8 text-purple-400 hover:text-purple-300 transition-colors'>
            <ArrowLeft className='w-4 h-4' />
            Back to Case Studies
          </Link>
        </div>

        <div className='gap-8 grid grid-cols-1 lg:grid-cols-4'>
          {/* Sidebar Navigation */}
          <div className='hidden lg:block lg:col-span-1'>
            <div className='top-8 sticky space-y-6'>
              {/* Navigation */}
              <div className='bg-slate-800 p-6 border border-slate-700 rounded-lg'>
                <h3 className='mb-4 font-semibold text-white'>Documentation</h3>
                <nav className='space-y-2'>
                  <a
                    href='#overview'
                    className='group flex items-center gap-3 hover:bg-slate-700 p-2 rounded-lg text-slate-300 hover:text-white transition-colors'>
                    <Database className='w-4 h-4 text-purple-400 group-hover:text-purple-300' />
                    <span className='text-sm'>Overview</span>
                  </a>
                  {sections.map((section) => (
                    <a
                      key={section.key}
                      href={`#${section.key}`}
                      className='group flex items-center gap-3 hover:bg-slate-700 p-2 rounded-lg text-slate-300 hover:text-white transition-colors'>
                      <section.icon
                        className={`w-4 h-4 text-${section.color}-400 group-hover:text-${section.color}-300`}
                      />
                      <span className='text-sm'>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Metadata */}
              <div className='bg-slate-800 p-6 border border-slate-700 rounded-lg'>
                <h3 className='mb-4 font-semibold text-white'>
                  Case Study Info
                </h3>
                <div className='space-y-3 text-sm'>
                  <div>
                    <span className='text-slate-400'>Published:</span>
                    <div className='text-slate-300'>
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  {post.modified !== post.date && (
                    <div>
                      <span className='text-slate-400'>Updated:</span>
                      <div className='text-slate-300'>
                        {new Date(post.modified).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                  <div>
                    <span className='text-slate-400'>Status:</span>
                    <div className='text-green-400 capitalize'>
                      {post.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='space-y-8 lg:col-span-3'>
            {/* Header */}
            <div className='bg-slate-800 border border-slate-700 rounded-lg overflow-hidden'>
              {post.featuredImage && (
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  className='w-full h-64 object-cover'
                />
              )}
              <div className='p-8'>
                <div className='flex items-center gap-3 mb-4'>
                  <Shield className='w-6 h-6 text-purple-400' />
                  <span className='bg-slate-700 px-3 py-1 rounded-full text-sm'>
                    Case Study
                  </span>
                </div>

                <h1
                  id='overview'
                  className='mb-4 font-bold text-3xl leading-tight'
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />

                {post.excerpt && (
                  <p
                    className='text-slate-300 text-lg leading-relaxed'
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                )}
              </div>
            </div>

            {/* Main Content */}
            {post.content && (
              <div className='bg-slate-800 p-8 border border-slate-700 rounded-lg'>
                <div
                  className='prose-img:shadow-lg prose-invert prose-li:mb-2 prose-headings:pb-2 prose-img:border prose-headings:border-slate-700 prose-img:border-slate-600 prose-headings:border-b prose-img:rounded-lg max-w-none prose-headings:font-bold hover:prose-a:text-purple-300 prose-a:text-purple-400 prose-em:text-purple-300 prose-headings:text-white prose-ol:text-slate-300 prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-a:no-underline prose-p:leading-relaxed prose prose-lg'
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            )}

            {/* ACF Sections */}
            {sections.map((section) => (
              <div
                key={section.key}
                className='bg-slate-800 p-8 border border-slate-700 rounded-lg'>
                <div className='flex items-center gap-3 mb-6'>
                  <section.icon
                    className={`w-6 h-6 text-${section.color}-400`}
                  />
                  <h2
                    id={section.key}
                    className='font-bold text-white text-2xl'>
                    {section.title}
                  </h2>
                </div>
                <div
                  className='prose-invert max-w-none hover:prose-a:text-purple-300 prose-a:text-purple-400 prose-ol:text-slate-300 prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-a:no-underline prose prose-slate'
                  dangerouslySetInnerHTML={{
                    __html: acf?.[section.key as keyof typeof acf] as string,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default CaseStudy;
