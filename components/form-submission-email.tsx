import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading as EHeading,
  Text,
  Hr,
  Button,
} from '@react-email/components';

/** A single form field (generic). */
export type FormField = {
  /** Machine key, e.g., "name", "email", "website", "notes" */
  key: string;
  /** Human label for the field (optional; we'll prettify key if missing) */
  label?: string;
  /** The submitted value (string or ReactNode); falsy values are skipped */
  value?: React.ReactNode;
};

export type FormSubmissionEmailProps = {
  /** Form name or purpose, e.g., "Headless WordPress Project", "Malware Removal" */
  formName: string;
  /** Where the form lives, useful for triage */
  pageUrl?: string;
  /** ISO time or human string; defaults to now */
  submittedAt?: string;
  /** Use this to set a visible primary contact email */
  replyToEmail?: string;
  /** Optional phone number to make it easy to call back */
  phone?: string;
  /** All submitted fields (order preserved) */
  fields: FormField[];

  /** Extra metadata (IP, UA, etc.) */
  ipAddress?: string;
  userAgent?: string;
  attachmentsCount?: number;

  /** Brand config (optional) */
  brandName?: string; // e.g., "MD Pabel"
  dashboardUrl?: string; // link to your CRM/inbox/ticket
  accentColor?: string; // defaults to Tailwind purple-400
};

const px = (n: number) => `${n}px`;

/** Safely prettify a key into a label (e.g. "first_name" -> "First Name") */
const pretty = (key: string) =>
  key
    .replaceAll('-', ' ')
    .replaceAll('_', ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (c) => c.toUpperCase());

/** Pulls a nice value to show in the Preview line */
const whoFrom = (fields: FormField[], fallback?: string) => {
  const byKey = (k: string) =>
    fields.find((f) => f.key.toLowerCase() === k)?.value as string | undefined;
  return (
    byKey('name') ||
    byKey('full_name') ||
    byKey('email') ||
    fallback ||
    'New submission'
  );
};

/**
 * Dynamic, brand-friendly email template for all inbound form submissions.
 * - Purple is used only for the heading (to match your site rules)
 * - Everything else is neutral/slate for high readability across clients
 */
export default function FormSubmissionEmail({
  formName,
  pageUrl,
  submittedAt = new Date().toISOString(),
  replyToEmail,
  phone,
  fields,
  ipAddress,
  userAgent,
  attachmentsCount,
  brandName = 'MD Pabel',
  dashboardUrl,
  accentColor = '#a78bfa', // Tailwind purple-400
}: FormSubmissionEmailProps) {
  // Separate "notes/message" if present, to highlight it as a big block
  const notesKey = ['notes', 'message', 'details', 'description'].find((k) =>
    fields.some((f) => f.key.toLowerCase() === k && f.value),
  );
  const notesField = notesKey
    ? fields.find((f) => f.key.toLowerCase() === notesKey)
    : undefined;

  const rest = fields.filter((f) => f !== notesField && f.value);

  const previewLine = `${formName}: ${whoFrom(fields, replyToEmail)}`;

  return (
    <Html>
      <Head />
      <Preview>{previewLine}</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={{ paddingTop: px(8), paddingBottom: px(4) }}>
            <EHeading style={{ ...styles.h1, color: accentColor }}>
              {formName}
            </EHeading>
            <Text style={styles.muted}>
              New form submission{' '}
              {submittedAt
                ? `on ${new Date(submittedAt).toLocaleString()}`
                : ''}
              {pageUrl ? (
                <>
                  {' '}
                  from{' '}
                  <a href={pageUrl} style={styles.link}>
                    {pageUrl}
                  </a>
                </>
              ) : null}
            </Text>
          </Section>

          <Hr style={styles.hr} />

          {/* Optional highlighted message/notes */}
          {notesField?.value ? (
            <Section style={styles.card}>
              <EHeading as='h2' style={styles.h2}>
                Message
              </EHeading>
              <Text style={styles.textBlock}>
                {String(notesField.value)
                  .split('\n')
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </Text>
            </Section>
          ) : null}

          {/* Other fields */}
          {rest.length > 0 && (
            <Section style={styles.card}>
              <EHeading as='h2' style={styles.h2}>
                Details
              </EHeading>

              <table
                width='100%'
                cellPadding={0}
                cellSpacing={0}
                role='presentation'
                style={styles.table}>
                <tbody>
                  {rest.map((f, idx) => (
                    <tr key={`${f.key}-${idx}`}>
                      <td style={styles.cellLabel}>
                        {(f.label || pretty(f.key)) + ':'}
                      </td>
                      <td style={styles.cellValue}>
                        {typeof f.value === 'string' ||
                        typeof f.value === 'number'
                          ? String(f.value)
                          : f.value}
                      </td>
                    </tr>
                  ))}
                  {replyToEmail ? (
                    <tr>
                      <td style={styles.cellLabel}>Reply-to:</td>
                      <td style={styles.cellValue}>
                        <a href={`mailto:${replyToEmail}`} style={styles.link}>
                          {replyToEmail}
                        </a>
                      </td>
                    </tr>
                  ) : null}
                  {phone ? (
                    <tr>
                      <td style={styles.cellLabel}>Phone:</td>
                      <td style={styles.cellValue}>
                        <a href={`tel:${phone}`} style={styles.link}>
                          {phone}
                        </a>
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </Section>
          )}

          {/* Meta */}
          {(ipAddress || userAgent || attachmentsCount != null) && (
            <Section style={styles.metaWrap}>
              <EHeading as='h3' style={styles.h3}>
                Submission meta
              </EHeading>
              <table
                width='100%'
                cellPadding={0}
                cellSpacing={0}
                role='presentation'
                style={styles.metaTable}>
                <tbody>
                  {ipAddress ? (
                    <tr>
                      <td style={styles.metaLabel}>IP</td>
                      <td style={styles.metaValue}>{ipAddress}</td>
                    </tr>
                  ) : null}
                  {userAgent ? (
                    <tr>
                      <td style={styles.metaLabel}>User-Agent</td>
                      <td style={styles.metaValue}>{userAgent}</td>
                    </tr>
                  ) : null}
                  {attachmentsCount != null ? (
                    <tr>
                      <td style={styles.metaLabel}>Attachments</td>
                      <td style={styles.metaValue}>{attachmentsCount}</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </Section>
          )}

          {/* CTA Row */}
          {(replyToEmail || dashboardUrl) && (
            <>
              <Hr style={styles.hr} />
              <Section
                style={{
                  paddingTop: px(8),
                  paddingBottom: px(8),
                  textAlign: 'left',
                }}>
                {replyToEmail && (
                  <Button
                    href={`mailto:${replyToEmail}`}
                    style={{
                      ...styles.btn,
                      backgroundColor: '#e5e7eb',
                      color: '#0f172a',
                    }}>
                    Reply to {replyToEmail}
                  </Button>
                )}
                {dashboardUrl && (
                  <Button
                    href={dashboardUrl}
                    style={{
                      ...styles.btn,
                      marginLeft: replyToEmail ? px(8) : 0,
                    }}>
                    Open in Dashboard
                  </Button>
                )}
              </Section>
            </>
          )}

          {/* Footer */}
          <Section style={{ paddingTop: px(4) }}>
            <Text style={styles.footer}>
              Sent to {brandName}. If this wasn’t expected, you can safely
              ignore this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ===== Styles (email-safe) ===== */
const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#0b1220', // dark slate background (safe solid)
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji"',
    color: '#e5e7eb',
  },
  container: {
    width: '100%',
    maxWidth: px(600),
    margin: '0 auto',
    backgroundColor: '#0f172a',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: px(12),
    padding: px(24),
  },
  h1: {
    margin: 0,
    fontSize: px(24),
    lineHeight: px(28),
    fontWeight: 800,
  },
  h2: {
    margin: 0,
    fontSize: px(16),
    lineHeight: px(20),
    fontWeight: 700,
    color: '#e5e7eb',
  },
  h3: {
    margin: 0,
    fontSize: px(14),
    lineHeight: px(18),
    fontWeight: 700,
    color: '#cbd5e1',
  },
  muted: {
    marginTop: px(4),
    marginBottom: 0,
    fontSize: px(12),
    color: 'rgba(226,232,240,0.75)',
  },
  hr: {
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    margin: `${px(16)} 0`,
  },
  card: {
    backgroundColor: 'rgba(148,163,184,0.06)', // slate-400/10 feel
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: px(12),
    padding: px(16),
  },
  textBlock: {
    marginTop: px(8),
    marginBottom: 0,
    fontSize: px(14),
    lineHeight: px(22),
    whiteSpace: 'pre-wrap' as const,
    color: '#e5e7eb',
  },
  table: {
    width: '100%',
  },
  cellLabel: {
    width: '32%',
    padding: `${px(8)} ${px(8)} ${px(8)} 0`,
    fontSize: px(13),
    color: '#cbd5e1',
    verticalAlign: 'top',
    whiteSpace: 'nowrap' as const,
  },
  cellValue: {
    width: '68%',
    padding: px(8),
    paddingLeft: 0,
    fontSize: px(14),
    color: '#e5e7eb',
  },
  metaWrap: {
    marginTop: px(10),
    backgroundColor: 'transparent',
  },
  metaTable: {
    width: '100%',
    marginTop: px(8),
  },
  metaLabel: {
    width: '28%',
    padding: `${px(6)} ${px(8)} ${px(6)} 0`,
    fontSize: px(12),
    color: '#94a3b8',
    verticalAlign: 'top',
    whiteSpace: 'nowrap' as const,
  },
  metaValue: {
    width: '72%',
    padding: px(6),
    paddingLeft: 0,
    fontSize: px(13),
    color: '#e5e7eb',
  },
  btn: {
    display: 'inline-block',
    padding: `${px(10)} ${px(14)}`,
    backgroundColor: '#334155',
    color: '#e5e7eb',
    textDecoration: 'none',
    borderRadius: px(10),
    fontSize: px(14),
    fontWeight: 600,
  },
  link: {
    color: '#e5e7eb',
    textDecoration: 'underline',
  },
  footer: {
    fontSize: px(11),
    color: 'rgba(226,232,240,0.6)',
  },
};
