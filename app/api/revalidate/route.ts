import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Revalidate the 'wordpress' tag used in the fetches
    revalidateTag('wordpress');

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
