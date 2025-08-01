import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import Title, { Heading } from '@/components/ui';
import { notFound } from 'next/navigation';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';
import { Metadata } from 'next';
import { siteData } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Case Studies: WordPress Security & Development Success Stories',
  description:
    'Explore real-world case studies showcasing our WordPress security solutions, malware removal projects, and custom development work that helped businesses succeed.',
  keywords:
    'WordPress case studies, security success stories, malware removal case studies, WordPress development projects, client success stories, website security solutions',
  alternates: {
    canonical: 'https://www.mdpabel.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies: WordPress Security & Development Success Stories',
    description:
      'Real success stories from our WordPress security and development projects.',
    url: 'https://www.mdpabel.com/case-studies',
    siteName: 'MD Pabel',
    images: [
      {
        url: '/images/case-studies-opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'WordPress Security Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export async function generateStaticParams() {
  const { posts, total } = await wordpress.getPosts({
    postType: 'case-study',
    status: 'publish',
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const CaseStudies = async () => {
  const { posts, total } = await wordpress.getPosts({
    postType: 'case-study',
    status: 'publish',
  });

  if (!posts || posts.length === 0) {
    return notFound();
  }

  const featuredCaseStudy =
    posts.find((post) =>
      post.categories?.some((cat) => cat.name === 'Featured'),
    ) || posts[0];

  const otherCaseStudies = posts.filter(
    (post) => post.id !== featuredCaseStudy.id,
  );

  // Extract first impact metric from the case study for display
  const extractFirstMetric = (impactMetrics: string) => {
    if (!impactMetrics) return '100%';
    const firstMetric = impactMetrics.split(',')[0]?.trim();
    return firstMetric || '100%';
  };

  return (
    <div className='bg-slate-900 py-8 sm:py-12 lg:py-16 text-white'>
      <ComponentWrapper>
        <div className='mb-8 sm:mb-12'>
          <Heading as='h1' className='!text-center'>
            Case Studies
          </Heading>
          <p className='mt-4 text-slate-400 text-lg text-center'>
            Real-world success stories from our WordPress security and
            development projects
          </p>
        </div>

        {/* Featured Case Study */}
        <div className='bg-slate-800 mb-12 rounded-xl overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='relative aspect-video lg:aspect-auto'>
              <img
                src={featuredCaseStudy.featuredImage?.url}
                alt={featuredCaseStudy.title}
                className='w-full h-full object-cover'
              />
              <div className='top-4 left-4 absolute'>
                <span className='bg-purple-500 px-3 py-1 rounded-full font-medium text-white text-sm'>
                  Featured
                </span>
              </div>
            </div>
            <div className='p-6 lg:p-8'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {featuredCaseStudy.categories?.map((category, index) => (
                  <span
                    key={index}
                    className='bg-slate-700 px-3 py-1 rounded-full text-slate-300 text-sm'>
                    {category.name}
                  </span>
                ))}
              </div>

              <h2 className='mb-4 font-bold text-white text-2xl lg:text-3xl leading-tight'>
                <Link
                  href={`/case-studies/${featuredCaseStudy.slug}`}
                  className='hover:text-purple-400 transition-colors'
                  dangerouslySetInnerHTML={{
                    __html: featuredCaseStudy.title,
                  }}></Link>
              </h2>

              <p
                className='mb-6 text-slate-300 text-base line-clamp-3'
                dangerouslySetInnerHTML={{
                  __html:
                    featuredCaseStudy.acf?.description ||
                    featuredCaseStudy.excerpt,
                }}></p>

              {/* Key Results Preview */}
              <div className='gap-4 grid grid-cols-3 mb-6'>
                <div className='text-center'>
                  <div className='flex justify-center items-center mb-2'>
                    <TrendingUp className='w-5 h-5 text-green-400' />
                  </div>
                  <div className='font-bold text-white text-xl'>
                    {extractFirstMetric(featuredCaseStudy.acf?.impactMetrics)}
                  </div>
                  <div className='text-slate-400 text-sm'>Improvement</div>
                </div>
                <div className='text-center'>
                  <div className='flex justify-center items-center mb-2'>
                    <Users className='w-5 h-5 text-blue-400' />
                  </div>
                  <div className='font-bold text-white text-xl'>
                    {siteData.stats.completedProjects}
                  </div>
                  <div className='text-slate-400 text-sm'>Projects Done</div>
                </div>
                <div className='text-center'>
                  <div className='flex justify-center items-center mb-2'>
                    <Zap className='w-5 h-5 text-yellow-400' />
                  </div>
                  <div className='font-bold text-white text-xl'>100%</div>
                  <div className='text-slate-400 text-sm'>Success Rate</div>
                </div>
              </div>

              <Link
                href={`/case-studies/${featuredCaseStudy.slug}`}
                className='group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium text-white transition-colors'>
                View Case Study
                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>

        {/* Other Case Studies Grid */}
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {otherCaseStudies.map((caseStudy) => (
            <article
              key={caseStudy.id}
              className='group bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:transform'>
              <div className='relative aspect-video overflow-hidden'>
                <img
                  src={caseStudy.featuredImage?.url}
                  alt={caseStudy.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-3'>
                  {caseStudy.categories?.slice(0, 2).map((category, index) => (
                    <span
                      key={index}
                      className='bg-slate-700 px-2 py-1 rounded text-slate-300 text-xs'>
                      {category.name}
                    </span>
                  ))}
                </div>

                <h3 className='mb-3 font-bold text-white group-hover:text-purple-400 text-lg leading-tight transition-colors'>
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    dangerouslySetInnerHTML={{
                      __html: caseStudy.title,
                    }}></Link>
                </h3>

                <p
                  className='mb-4 text-slate-400 text-sm line-clamp-2'
                  dangerouslySetInnerHTML={{
                    __html: caseStudy.acf?.description || caseStudy.excerpt,
                  }}></p>

                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2 text-slate-500 text-sm'>
                    <Calendar className='w-4 h-4' />
                    <span>{new Date(caseStudy.date).toLocaleDateString()}</span>
                  </div>

                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className='group/link inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm transition-colors'>
                    Read More
                    <ArrowRight className='w-3 h-3 transition-transform group-hover/link:translate-x-1' />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ComponentWrapper>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Case Studies: WordPress Security & Development Success Stories',
            description:
              'Real-world case studies showcasing our WordPress security solutions and development work.',
            url: 'https://www.mdpabel.com/case-studies',
            hasPart: posts.map((post) => ({
              '@type': 'Article',
              headline: post.title,
              datePublished: post.date,
              url: `https://www.mdpabel.com/case-studies/${post.slug}`,
              image: post.featuredImage?.url,
              description: (post.acf?.description || post.excerpt).replace(
                /<[^>]*>/g,
                '',
              ),
            })),
          }),
        }}
      />
    </div>
  );
};

export default CaseStudies;
