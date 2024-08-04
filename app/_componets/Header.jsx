import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div className='p-5 shadow-md '>

      <div className='flex item-center gap-8'>
      <Image src='/logo.svg' alt='logo' width={180} height={100} />
          <div className='flex items-center gap-6'>
                <h2> Home</h2>
                <h2> Services</h2>
                <h2> About Us</h2>
          </div>
      
      
      </div>
    </div>
  )
}

export default Header