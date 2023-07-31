"use client"

import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='p-5 bg-purple-600 text-xl font-bold flex justify-between text-white'>
      <Link className=' hover:text-gray-500' href='/'>Home</Link>
      <Link className=' hover:text-gray-500' href='/login'>Login</Link>
      <Link className=' hover:text-gray-500' href='/signup'>Sign Up</Link>
      <Link className=' hover:text-gray-500' href='/profile'>Profile</Link>
    </div>
  )
}

export default NavBar
