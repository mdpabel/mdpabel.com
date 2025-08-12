import { Metadata } from 'next';
import { Plus, Minus } from 'lucide-react';
import ComponentWrapper from '@/components/component-wrapper';
import { Heading } from '@/components/ui';
import { wordpress } from '@/lib/wordpress';
import Link from 'next/link';
import Pagination from '@/components/pagination';
import he from 'he';

export const metadata: Metadata = {
  title: 'FAQ Accordion - WordPress Support & Services',
  description:
    'Interactive FAQ accordion with detailed answers about WordPress security, malware removal, and development services.',
  keywords: 'WordPress FAQ accordion, interactive help, service questions',
  alternates: {
    canonical: 'https://www.mdpabel.com/faq-v5',
  },
};

type FAQType = {
  searchParams: Promise<{
    page: string;
  }>;
};

const PER_PAGE = 12;

const FAQ = async ({ searchParams }: FAQType) => {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const { posts, total, hasMore, totalPages } = await wordpress.getPosts({
    postType: 'faq',
    perPage: PER_PAGE,
    status: 'publish',
    page,
  });

  if (!posts) {
    <ComponentWrapper>
      <h2 className='text-slate-300 text-center'>There is no FAQ found</h2>
    </ComponentWrapper>;
  }

  return (
    <div className='bg-slate-900 pt-10 pb-20 text-white'>
      <ComponentWrapper>
        <div className='mb-12 text-center'>
          <Heading as='h1'>Frequently Asked Questions</Heading>
          <p className='mx-auto mt-4 max-w-3xl text-slate-300 text-lg'>
            Get detailed answers to the most common questions about our
            WordPress services
          </p>
        </div>

        <div className='mx-auto max-w-4xl'>
          <div className='border border-slate-700 rounded-lg overflow-hidden'>
            {posts.map((faq, index) => (
              <details
                key={index}
                className={`group ${
                  index !== posts.length - 1 ? 'border-b border-slate-700' : ''
                }`}>
                <summary className='flex justify-between items-center hover:bg-slate-800 p-6 transition-colors cursor-pointer list-none'>
                  <span className='pr-4 font-semibold text-lg'>
                    {faq.title}
                  </span>
                  <div className='flex-shrink-0'>
                    <Plus className='group-open:hidden w-5 h-5 text-purple-400' />
                    <Minus className='hidden group-open:block w-5 h-5 text-purple-400' />
                  </div>
                </summary>
                <div className='px-6 pb-6 border-slate-700/50 border-t text-slate-300 leading-relaxed'>
                  <div
                    className='prose-invert pt-4 max-w-none text-gray-300 prose'
                    dangerouslySetInnerHTML={{
                      __html: faq.content,
                    }}></div>
                </div>
              </details>
            ))}
          </div>
        </div>

        <Pagination total={total} totalPages={totalPages} perPage={PER_PAGE} />

        <div className='mt-12 text-center'>
          <div className='bg-gradient-to-r from-purple-600/20 to-blue-600/20 mx-auto p-8 border border-purple-500/30 rounded-lg max-w-2xl'>
            <h3 className='mb-3 font-bold text-white text-xl'>
              Need More Help?
            </h3>
            <p className='mb-6 text-slate-300'>
              Our expert team is ready to help with your specific WordPress
              needs
            </p>
            <div className='flex sm:flex-row flex-col justify-center gap-4'>
              <Link
                href='/hire-me'
                className='bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors'>
                Hire Me
              </Link>
              <Link
                href='/services'
                className='hover:bg-purple-400/10 px-6 py-3 border border-purple-400 rounded-lg font-semibold text-purple-400 transition-colors'>
                Services
              </Link>
            </div>
          </div>
        </div>
      </ComponentWrapper>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: posts.map((faq) => ({
              '@type': 'Question',
              name: he.decode(faq.title),
              acceptedAnswer: {
                '@type': 'Answer',
                text: he.decode(faq.content), // sanitized or plain text
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default FAQ;
