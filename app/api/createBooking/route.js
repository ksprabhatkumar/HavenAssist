// pages/api/createBooking.ts
import { NextResponse } from 'next/server';

// Sample data (mocked data)
let bookings = []; // This will store booking data temporarily

export async function POST(req) {
  try {
    const { businessId, date, time, userEmail, userName } = await req.json();

    // Input validation
    if (!businessId || !date || !time || !userEmail || !userName) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create new booking object
    const newBooking = {
      id: bookings.length + 1, // Simple ID generation (consider using a better approach in production)
      bookingStatus: 'Booked',
      businessId,
      date,
      time,
      userEmail,
      userName,
    };

    // Save the new booking
    bookings.push(newBooking);

    // Response for successfully created booking
    return NextResponse.json({ id: newBooking.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
