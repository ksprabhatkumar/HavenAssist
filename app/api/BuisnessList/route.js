// app/api/categories/route.js
import { NextResponse } from 'next/server';

export async function GET() {
    const sampleBuisnessList = [
        {
          id: "1",
          name: "HealthCare Clinic",
          images: [
            {
              url: "/images/healthcare-clinic.jpg"
            }
          ],
          category: {
            name: "Medical"
          },
          contactPerson: "Dr. John Doe",
          price:500,
          rating:4,
          address: "123 Health St, Wellness City"
        },
        {
          id: "2",
          name: "Legal Advisors Inc.",
          images: [
            {
              url: "/images/legal-advisors.jpg"
            }
          ],
          category: {
            name: "Legal"
          },
          contactPerson: "Jane Smith",
          price:500,
          rating:3,
          address: "456 Justice Ave, Lawtown"
        },
        {
          id: "3",
          name: "FinServ Solutions",
          images: [
            {
              url: "/images/finserv-solutions.jpg"
            }
          ],
          category: {
            name: "Financial"
          },
          contactPerson: "Alice Johnson",
          price:500,
          rating:5,
          address: "789 Finance Blvd, MoneyCity"
        },
        {
          id: "4",
          name: "Career Counseling Center",
          images: [
            {
              url: "/images/career-counseling.jpg"
            }
          ],
          category: {
            name: "Counseling"
          },
          contactPerson: "Robert Brown",
          price:500,
          rating:3,
          address: "101 Advice St, Guidance Town"
        },
        {
          id: "5",
          name: "EduPro Academy",
          images: [
            {
              url: "/images/edupro-academy.jpg"
            }
          ],
          category: {
            name: "Education"
          },
          contactPerson: "Michael Green",
          price:500,
          rating:4,
          address: "202 Learning Rd, Knowledge City"
        },
        {
          id: "6",
          name: "JobLink Employment Agency",
          images: [
            {
              url: "/images/joblink-agency.jpg"
            }
          ],
          category: {
            name: "Employment"
          },
          contactPerson: "Emily White",
          price:500,
          rating:5,
          address: "303 Opportunity St, Career City"
        },
        {
          id: "7",
          name: "Safe Haven Housing",
          images: [
            {
              url: "/images/safe-haven-housing.jpg"
            }
          ],
          category: {
            name: "Housing"
          },
          contactPerson: "Chris Black",
          price:500,
          rating:3,
          address: "404 Shelter Ln, HomeTown"
        },
        {
          id: "8",
          name: "TranspoPro Services",
          images: [
            {
              url: "/images/transpopro-services.jpg"
            }
          ],
          category: {
            name: "Transportation"
          },
          contactPerson: "Sarah Blue",
          price:500,
          rating:2,
          address: "505 Mobility Ave, Transit City"
        }
      ];
      

  return NextResponse.json(sampleBuisnessList);
}
