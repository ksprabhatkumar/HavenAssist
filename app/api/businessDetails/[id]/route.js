// File: app/api/businessDetails/[id]/route.js

import { NextResponse } from 'next/server';

// Sample data (mock data for demonstration)
const businesses = [
  {
    id: '1',
    about: 'A local bakery with the best cakes in town.',
    address: '123 Cake Street, Sweet City',
    category: { name: 'Food' },
    contactPerson: 'John Doe',
    email: 'contact@bakery.com',
    name: 'Sweet Cakes Bakery',
    images: [
      { url: 'https://example.com/images/cake.jpg' },
      { url: 'https://example.com/images/legal.jpg' }

    ],

  },
  {
    id: '2',
    about: 'A professional legal consultancy firm.',
    address: '456 Law Avenue, Legal City',
    category: { name: 'Legal' },
    contactPerson: 'Jane Smith',
    email: 'contact@legalfirm.com',
    name: 'Legal Experts Co.',
    images: [
      { url: 'https://example.com/images/legal.jpg' },
      { url: 'https://example.com/images/legal.jpg' },
      { url: 'https://example.com/images/legal.jpg' }
    ],
  },
];

export async function GET(req, { params }) {
  const { id } = params;
 console.log(id + "   dfdf" )
  // Find the business by id
  const business = businesses.find((b) => b.id === id);
  console.log(business);
  if (business) {
    return NextResponse.json(business);
  } else {
    return NextResponse.json({ message: 'Business not found' }, { status: 404 });
  }
}
