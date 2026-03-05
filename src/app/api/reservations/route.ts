import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate the data
    if (!data.name || !data.email || !data.date || !data.time || !data.partySize) {
      return NextResponse.json(
        { error: 'Missing required reservation fields' },
        { status: 400 }
      );
    }

    // Validate partySize is a number
    const partySize = parseInt(data.partySize);
    if (isNaN(partySize) || partySize < 1 || partySize > 20) {
      return NextResponse.json(
        { error: 'Party size must be between 1 and 20' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store in a database
    // 2. Send a confirmation email
    // 3. Integrate with a reservation management system like OpenTable
    // 4. Check availability

    console.log('Reservation submission:', data);

    // Generate a reservation reference
    const reference = `RES-${Date.now()}`;

    return NextResponse.json(
      {
        message: 'Reservation received successfully',
        reference,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing reservation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
