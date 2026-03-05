import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate the data
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store in a database
    // 2. Send an email
    // 3. Integrate with a third-party service

    console.log('Contact form submission:', data);

    // For now, just return success
    return NextResponse.json(
      { message: 'Message received successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
