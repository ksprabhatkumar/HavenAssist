"use client";
import React, { useEffect, useState } from 'react';
import BusinessInfo from '../_components/BuisnessInfo';
import BusinessDescription from '../_components/BuisnessDecsription';

function BusinessDetail({ params }) {
  const [business, setBusiness] = useState(null);

  // Access the 'businessId' from the params object instead of 'id'
  const { businessId } = params;
  console.log('Business ID:', businessId);

  useEffect(() => {
    console.log('useEffect triggered with ID:', businessId);
    if (businessId) {
      getBusinessById(businessId); // Fetch the business details using the businessId
    }
  }, [businessId]);

  const getBusinessById = async (id) => {
    try {
      console.log('Fetching business details for ID:', id);
      const response = await fetch(`http://localhost:3000/api/businessDetails/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch business details');
      }

      const data = await response.json();
      console.log('Fetched business details:', data);
      setBusiness(data);
    } catch (error) {
      console.error('Error fetching business details:', error);
    }
  };

  return (
    business && (
      <div className='py-8 md:py-20 px-10 md:px-36'>
        <BusinessInfo business={business} />

        <div className='grid grid-cols-3 mt-16'>
          <div className='col-span-3 md:col-span-2 order-last md:order-first'>
            <BusinessDescription business={business} />
          </div>
          <div className=''>
            Reviews section goes here
            {/* <SuggestedBusinessList business={business}/> */}
          </div>
        </div>
      </div>
    )
  );
}

export default BusinessDetail;
