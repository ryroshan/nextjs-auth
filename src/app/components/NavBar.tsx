"use client"

import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='flex justify-between text-white'>
      <Link href='/'>Home</Link>
      <Link href='/login'>Login</Link>
      <Link href='/signup'>Sign Up</Link>
      <Link href='/profile'>Profile</Link>
    </div>
  )
}

export default NavBar
