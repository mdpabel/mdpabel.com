'use server';

import { headers } from 'next/headers';
import { sendEmail } from '@/lib/resend';
import type {
  FormSubmissionEmailProps,
  FormField,
} from '@/components/form-submission-email';
import { FormState } from '@/components/contact-form';

const RESERVED = new Set(['formName', 'pageUrl', 'subject', '_honey']);

function buildEmailProps(
  fd: FormData,
  hdrs: Headers,
): FormSubmissionEmailProps {
  const formName = String(fd.get('formName') || 'Website Inquiry');
  const pageUrl = String(fd.get('pageUrl') || hdrs.get('referer') || '');
  const ipRaw = hdrs.get('x-forwarded-for') || '';
  const ipAddress = ipRaw.split(',')[0]?.trim() || undefined;
  const userAgent = hdrs.get('user-agent') || undefined;

  const fields: FormField[] = [];
  for (const [key, val] of fd.entries()) {
    if (RESERVED.has(key)) continue;
    if (typeof val === 'string' && val.trim().length > 0) {
      fields.push({ key, value: val });
    }
  }

  const replyToEmail =
    (fd.get('email') as string) ||
    (fd.get('contact_email') as string) ||
    undefined;

  return {
    formName,
    pageUrl,
    submittedAt: new Date().toISOString(),
    replyToEmail,
    fields,
    ipAddress,
    userAgent,
    brandName: 'MD Pabel',
  };
}

/** Server action compatible with `useFormState` */
export async function submitFormAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Honeypot: silently succeed, no error UI
  if (formData.get('_honey')) {
    return { status: 'skipped', message: 'Skipped (honeypot)' };
  }

  const hdrs = await headers(); // no await
  const data = buildEmailProps(formData, hdrs);

  const name = (formData.get('name') as string) || '';
  const email = (formData.get('email') as string) || '';
  const subjectOverride = (formData.get('subject') as string) || '';
  const subject =
    subjectOverride ||
    `New ${data.formName} form — ${name || email || 'Visitor'}`;

  try {
    await sendEmail({ data, subject });
    return {
      status: 'success',
      message: 'Thanks! Your message has been sent.',
    };
  } catch (err: any) {
    console.error(
      'submitFormAction error:',
      err?.statusCode,
      err?.message,
      err,
    );
    return {
      status: 'error',
      message:
        'Email could not be sent. Please try again or email support@mdpabel.com.',
    };
  }
}
