import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ComponentWrapper from '@/components/component-wrapper';
import { Heading, Description } from '@/components/ui';
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react';

interface Params {
  params: Promise<{ slug: string }>;
}

// Force static generation
export const dynamic = 'force-static';

// Generate metadata for SEO
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params; // Await params to resolve slug
  const slug = resolvedParams.slug;

  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { title: 'Service Not Found' };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents); // Extract frontmatter

  return {
    metadataBase: new URL('https://www.mdpabel.com'),
    title: data.title,
    description: data.description,
    keywords: data.keywords ? data.keywords.split(', ') : undefined,
    authors: [{ name: 'Your Company Name' }],
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.mdpabel.com/services/fix-website-errors/${slug}`,
      siteName: 'Your Company Name',
      images: [
        {
          url: data.ogImage || `/services/${slug}.png`, // Dynamic OG image
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data.ogImage || `/services/${slug}.png`],
      site: '@mdpabe11', // Replace with your Twitter handle
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
    alternates: {
      canonical: `https://www.mdpabel.com/services/fix-website-errors/${slug}`,
    },
  };
}

// Render the page
export default async function ServicePage({ params }: Params) {
  const resolvedParams = await params; // Await params to resolve slug
  const slug = resolvedParams.slug;

  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents); // Extract frontmatter and any additional content

  const processedContent = await remark()
    .use(html)
    .process(data.longDescription || content);
  const contentHtml = processedContent.toString(); // Convert longDescription (or fallback to content) to HTML

  // Handle benefits as array of strings or maps (objects)
  const symptoms = Array.isArray(data.symptoms) ? data.symptoms : [];
  const benefits = Array.isArray(data.benefits)
    ? data.benefits.map((benefit: string | { [key: string]: string }) =>
        typeof benefit === 'string'
          ? benefit
          : `${Object.keys(benefit)[0]}: ${benefit[Object.keys(benefit)[0]]}`,
      )
    : [];
  const faqs = Array.isArray(data.faqs) ? data.faqs : [];

  return (
    <ComponentWrapper>
      <div className='relative py-20 text-center'>
        <Heading className='mb-6'>{data.title}</Heading>
        <Description>{data.shortDescription}</Description>
        {/* Add StatsCards or TrustIndicator if present in frontmatter */}
      </div>

      {/* Warning/Info box: Uses symptoms and benefits from frontmatter */}
      <div className='bg-red-900/20 mb-16 p-8 border border-red-700 rounded-lg'>
        <div className='flex items-center gap-3 mb-4'>
          <AlertTriangle className='w-6 h-6 text-red-400' />
          <h2 className='font-semibold text-red-400 text-xl'>
            Potential Issues and Solutions
          </h2>
        </div>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h3 className='mb-3 font-medium text-white'>Common Symptoms:</h3>
            <ul className='space-y-2 text-slate-300'>
              {symptoms.map((symptom: string, index: number) => (
                <li key={index} className='flex items-center gap-2'>
                  <AlertCircle className='w-4 h-4 text-red-400' />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='mb-3 font-medium text-white'>Key Benefits:</h3>
            <ul className='space-y-2 text-slate-300'>
              {benefits.map((benefit: string, index: number) => (
                <li key={index} className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Render longDescription as main content */}
      <div className='mb-16'>
        <div
          className='prose-invert max-w-none prose'
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>

      {/* Price and Delivery Time */}
      <div className='mb-8 text-center'>
        <p className='mb-2 font-semibold text-white text-xl'>
          Price: ${data.price}
        </p>
        <p className='text-gray-300 text-lg'>
          Delivery Time: {data.deliveryTime}
        </p>
      </div>

      {/* FAQs section */}
      {faqs.length > 0 && (
        <div className='mb-16'>
          <h2 className='mb-6 font-bold text-white text-2xl'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {faqs.map(
              (faq: { question: string; answer: string }, index: number) => (
                <div key={index} className='bg-slate-800 p-4 rounded-lg'>
                  <h3 className='mb-2 font-semibold text-purple-400 text-lg'>
                    {faq.question}
                  </h3>
                  <p className='text-gray-300'>{faq.answer}</p>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </ComponentWrapper>
  );
}

// Prebuild all static paths at build time
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.md'));

  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}
