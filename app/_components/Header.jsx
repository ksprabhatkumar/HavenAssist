"use client";
import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import { signIn, signOut } from "next-auth/react"
import Link from 'next/link'
function Header() {
  return (
    <div className='p-5 shadow-md flex justify-between'>

      <div className='flex item-center gap-8'>
      <Image src='/logo.svg' alt='logo' width={180} height={100} />
          <div className='flex items-center gap-6'>
          <Link href={'/'} className='hover:scale-105 hover:text-primary
                cursor-pointer'>Home</Link>
                <h2 className='hover:scale-105 hover:text-primary hover:cursor-pointer'> Services</h2>

                <h2 className='hover:scale-105 hover:text-primary hover:cursor-pointer'> About Us</h2>

          </div>
      
      </div>
      <div>

            <Button onClick={() => signIn()} className='hover:scale-105'>Get Started</Button>
      </div>
    </div>
  )
}

export default Header