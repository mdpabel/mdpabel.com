'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is blacklist removal and why do I need it?',
    answer:
      "Blacklist removal involves requesting delisting from security vendors after cleaning your site. It's essential to restore functionality, email delivery, and search rankings.",
  },
  {
    question: 'How long does it take to remove from blacklists?',
    answer:
      'It varies by vendor, but our process typically achieves delisting within 24-48 hours after submission.',
  },
  {
    question: 'Can you remove from Google blacklist?',
    answer:
      'Yes, we handle Google Safe Browsing delists and Search Console reconsideration requests with high success.',
  },
  {
    question: 'What if my site is still infected with malware?',
    answer:
      'We recommend combining with our malware removal service to ensure the site is clean before delisting.',
  },
  {
    question: 'Which blacklists do you support for removal?',
    answer:
      'We support a wide range including Google, Spamhaus, Sucuri, and many AV vendors—check our list above for details.',
  },
];

const BlacklistFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='space-y-4'>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className='bg-slate-800/50 p-4 border border-slate-700 rounded-lg'>
          <button
            className='flex justify-between items-center w-full font-medium text-slate-200 text-left'
            onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {faq.question}
            {openIndex === index ? (
              <ChevronUp className='w-5 h-5' />
            ) : (
              <ChevronDown className='w-5 h-5' />
            )}
          </button>
          {openIndex === index && (
            <p className='mt-2 text-slate-400'>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlacklistFAQ;
