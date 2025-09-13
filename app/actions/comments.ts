'use server';

import { revalidateTag } from 'next/cache';

const WP_BASE = process.env.NEXT_PUBLIC_BLOG_API_URL!;

export type CommentActionState = {
  ok?: boolean;
  pending?: boolean;
  message?: string;
  errors?: Record<string, string>;
  wpCode?: string; // surface WP error code
};

export async function submitComment(
  _prev: CommentActionState,
  formData: FormData,
): Promise<CommentActionState> {
  try {
    const postId = Number(formData.get('postId'));
    const parent = Number(formData.get('parent') || 0);
    const authorName = String(formData.get('authorName') || '').trim();
    const authorEmail = String(formData.get('authorEmail') || '').trim();
    const content = String(formData.get('content') || '').trim();
    const authorUrl = String(formData.get('authorUrl') || '').trim();
    const website = String(formData.get('website') || '').trim(); // honeypot

    if (website)
      return {
        ok: true,
        pending: true,
        message: 'Thanks! Your comment is queued.',
      };

    const errors: Record<string, string> = {};
    if (!postId) errors.postId = 'Missing post id.';
    if (!authorName) errors.authorName = 'Please enter your name.';
    if (!authorEmail || !/^\S+@\S+\.\S+$/.test(authorEmail))
      errors.authorEmail = 'Please enter a valid email.';
    if (!content) errors.content = 'Please write a comment.';
    if (Object.keys(errors).length)
      return { ok: false, message: 'Please fix the errors.', errors };

    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        post: postId,
        parent: parent || 0,
        content,
        author_name: authorName,
        author_email: authorEmail,
        author_url: authorUrl,
      }),
      cache: 'no-store',
    });

    const data = await res.json().catch(() => ({} as any));

    if (!res.ok) {
      // Surface WP error code to make it obvious
      // Common: code === 'rest_comment_login_required'
      return {
        ok: false,
        pending: false,
        message: data?.message || 'Failed to submit comment.',
        wpCode: data?.code,
      };
    }

    const status = String(data?.status || '').toLowerCase();
    const pending = status !== 'approved';

    if (!pending) revalidateTag(`comments:${postId}`);

    return {
      ok: true,
      pending,
      message: pending
        ? 'Thanks! Your comment is awaiting moderation.'
        : 'Posted!',
    };
  } catch (e: any) {
    return {
      ok: false,
      pending: false,
      message: e?.message || 'Unexpected error.',
    };
  }
}
