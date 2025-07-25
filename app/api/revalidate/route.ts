import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const secret = process.env.REVALIDATE_SECRET;

  if (body.secret !== secret) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    // Revalidate the 'wordpress' tag used in the fetches
    revalidateTag('wordpress');
    // revalidatePath('/blog');
    // revalidatePath('/malware-log');
    // revalidatePath('/snippets');

    return NextResponse.json(
      { message: 'Revalidation successful' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Revalidation failed' },
      { status: 500 },
    );
  }
}
