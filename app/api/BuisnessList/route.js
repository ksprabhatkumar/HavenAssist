// app/api/categories/route.js
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; // Adjust the path to the correct location

 async function getsample( ) {
  
  const serviceProviders = await prisma.serviceProvider.findMany({
    select: {
      name: true,
      phone_number: true,
      email: true,
    },
  });
  const getServiceProvider = serviceProviders.map((serviceProvider) => {
    return {
      name: serviceProvider.name,
      phone_number: serviceProvider.phone_number,
      email: serviceProvider.email,
    };
  });
  return getServiceProvider;
 }
 

export async function GET() {
   
  const sample= await getsample();
  console.log(sample);
  
  
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
        }
        
      ];
      

  return NextResponse.json(sample);
}