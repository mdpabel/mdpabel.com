import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { wordpress } from '@/lib/wordpress';

export async function POST(request: Request) {
  try {
    const { postId } = (await request.json()) as { postId?: number };
    if (typeof postId !== 'number') {
      return NextResponse.json({ error: 'Invalid postId' }, { status: 400 });
    }

    const cookieKey = `vc_${postId}`;
    const store = await cookies();
    const cached = store.get(cookieKey)?.value;

    if (cached) {
      // Return the cached value to avoid double-increment for this user.
      const cachedNumber = Number(cached);
      return NextResponse.json(
        { views: Number.isNaN(cachedNumber) ? 0 : cachedNumber },
        {
          headers: { 'Cache-Control': 'no-store' },
        },
      );
    }

    // NOTE: `wordpress.postViewCounter(postId)` is expected to increment and
    // return the latest total, e.g., `{ views: number }`.
    const { views } = await wordpress.postViewCounter(postId);

    const res = NextResponse.json(
      { views },
      { headers: { 'Cache-Control': 'no-store' } },
    );
    // Cache the value in a client-visible cookie for a short period so that
    // we don't increment again from the same browser soon after.
    res.cookies.set({
      name: cookieKey,
      value: String(views),
      httpOnly: false,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60 * 2, // 2 hours
      path: '/',
    });
    return res;
  } catch (err) {
    console.error('ViewCounter API error:', err);
    return NextResponse.json(
      { error: 'Failed to update view count' },
      { status: 500 },
    );
  }
}
