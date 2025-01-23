// src/app/api/submitComment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Adjust this import path

export async function POST(req: NextRequest) {
  try {
    const { carSlug, name, comment } = await req.json();

    if (!carSlug || !name || !comment) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const result = await client.create({
      _type: 'comment',
      carSlug,
      name,
      comment,
    });

    return NextResponse.json({ message: 'Comment submitted successfully', result }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error submitting comment:', error);

    if (error instanceof Error) {
      return NextResponse.json({ message: 'Failed to submit comment', error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
    }
  }
}