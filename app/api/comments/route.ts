import { NextRequest, NextResponse } from 'next/server';

const WP_URL = process.env.WP_URL!;
const WP_USER = process.env.WP_APP_USER!;
const WP_PASS = process.env.WP_APP_PASSWORD!;

function wpAuthHeader() {
  const basic = Buffer.from(`${WP_USER}:${WP_PASS}`).toString('base64');
  return `Basic ${basic}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('postId');
  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 });
  }

  // Only approved comments; include nesting via parent field
  const url = `${WP_URL}/wp-json/wp/v2/comments?post=${encodeURIComponent(
    postId,
  )}&per_page=100&orderby=date&order=asc&status=approve`;

  const res = await fetch(url, {
    next: { revalidate: 60, tags: [`comments:${postId}`] },
  });
  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: `WP error: ${text}` }, { status: 502 });
  }
  const comments = await res.json();
  return NextResponse.json({ comments });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { postId, content, authorName, authorEmail, parent } = body || {};

    if (!postId || !content || !authorName || !authorEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // (Optional) verify captcha token here before forwarding

    const wpRes = await fetch(`${WP_URL}/wp-json/wp/v2/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: wpAuthHeader(),
      },
      body: JSON.stringify({
        post: Number(postId),
        content,
        author_name: authorName,
        author_email: authorEmail,
        parent: parent ? Number(parent) : 0,
      }),
    });

    const data = await wpRes.json();

    if (!wpRes.ok) {
      // WP returns errors like { code, message }
      return NextResponse.json(
        { error: data?.message || 'Failed to create comment' },
        { status: 400 },
      );
    }

    const pending =
      data.status && String(data.status).toLowerCase() !== 'approved';
    return NextResponse.json({ ok: true, comment: data, pending });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || 'Unexpected error' },
      { status: 500 },
    );
  }
}
