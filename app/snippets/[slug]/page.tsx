import { Calendar, Clock } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = await wordpress.getPostBySlug(slug, 'snippet');

  if (!post) {
    return {
      title: 'Snippet Not Found',
    };
  }

  const title = `${post.title} - Code Snippet | MD Pabel`;
  const description =
    post.acf?.description__usage_notes?.replace(/<[^>]*>/g, '') ||
    post.excerpt?.replace(/<[^>]*>/g, '') ||
    'Useful code snippet for developers.';

  return {
    title,
    description,
    keywords: `${
      post.acf?.language
    } snippet, ${post.title.toLowerCase()}, code example, development utility`,
    alternates: {
      canonical: `https://www.mdpabel.com/snippets/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.mdpabel.com/snippets/${slug}`,
      siteName: 'MD Pabel',
      images: [
        {
          url: '/images/snippets-opengraph-image.png', // Use a default image since no featuredImage
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/snippets-opengraph-image.png'],
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

const SnippetPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await wordpress.getPostBySlug(slug, 'snippet');

  if (!post) {
    return notFound();
  }

  const reading_time = 5; // Adjust as needed

  return (
    <div className='bg-slate-900 py-16 text-white'>
      <ComponentWrapper>
        <article>
          <div className='mb-8'>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='bg-purple-500/20 px-3 py-1 rounded-full text-purple-400 text-sm'>
                {post.acf?.language || 'Utility'}
              </span>
            </div>

            <h1
              className='mb-4 font-bold text-3xl lg:text-4xl'
              dangerouslySetInnerHTML={{ __html: post.title }}></h1>

            <div className='flex items-center gap-6 mb-6 text-slate-400 text-sm'>
              <div className='flex items-center gap-1'>
                <Calendar className='w-4 h-4' />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Clock className='w-4 h-4' />
                <span>{reading_time} min read</span>
              </div>
            </div>
          </div>

          {post.acf?.description__usage_notes && (
            <div
              className='prose-invert mb-8 max-w-none text-slate-300 prose'
              dangerouslySetInnerHTML={{
                __html: post.acf.description__usage_notes,
              }}></div>
          )}

          <pre className='bg-slate-900 p-6 rounded-lg overflow-x-auto text-slate-200 text-sm'>
            <code dangerouslySetInnerHTML={{ __html: post.acf?.code_ }}></code>
          </pre>
        </article>
      </ComponentWrapper>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            name: post.title,
            description: (
              post.acf?.description__usage_notes || post.excerpt
            ).replace(/<[^>]*>/g, ''),
            codeSampleType: 'code snippet',
            programmingLanguage: post.acf?.language || 'JavaScript',
            datePublished: post.date,
            url: `https://www.mdpabel.com/snippets/${post.slug}`,
            author: {
              '@type': 'Person',
              name: post.author?.name || 'MD Pabel Team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'MD Pabel',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.mdpabel.com/images/logo.png', // Replace with actual logo
              },
            },
          }),
        }}
      />
    </div>
  );
};

export default SnippetPage;
