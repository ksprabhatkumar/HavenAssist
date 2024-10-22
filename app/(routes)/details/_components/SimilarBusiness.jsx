import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function SuggestedBusinessList({ initialBusiness }) {
  const [businessList, setBusinessList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/BuisnessList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setBusinessList(data);
    } catch (error) {
      console.error('Error fetching business list:', error);
      setError('Failed to load business list. Please try again later.');
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className='md:pl-10'>
      <div className='hidden md:block'>
        <h2 className='font-bold text-lg mt-3 mb-3'>Similar Business</h2>
        <div className=''>
          {businessList.map((business) => (
            <Link href={`/details/${business.id}`} key={business.id} className="flex gap-2 mb-4 hover:border rounded-lg p-2 cursor-pointer hover:shadow-md border-primary">
              <Image 
                src={business.images?.[0]?.url || '/placeholder-image.jpg'}
                alt={business.name}
                width={80}
                height={80}
                className='rounded-lg object-cover h-[100px]'
              />
              <div className=''>
                <h2 className='font-bold'>{business.name}</h2>
                <h2 className='text-primary'>{business.contactPerson}</h2>
                <h2 className='text-gray-400'>{business.address}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestedBusinessList;