import { Resend } from 'resend';
import FormSubmissionEmail, {
  type FormSubmissionEmailProps,
} from '@/components/form-submission-email';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY in environment');
}

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async ({
  data,
  subject,
}: {
  data: FormSubmissionEmailProps;
  subject: string;
}) => {
  try {
    const res = await resend.emails.send({
      from: 'MD Pabel <support@mdpabel.com>',
      to: 'mdpabel385@gmail.com',
      subject,
      react: FormSubmissionEmail(data),
    });

    console.log('resend ', res);
  } catch (error) {
    console.log(error);
  }
};
