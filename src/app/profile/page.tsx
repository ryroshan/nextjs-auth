"use client"

import React, { useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
interface IUserDetails {
  id: string,
  username: string,
  email: string
}

export default function ProfilePage() {
  const [userDetails, setUserDetails]  = useState<any>("");
  const router = useRouter();
  
  async function logOut() {
    try {
      await axios.get('/api/users/logout');
      router.push('/login')
    } catch (error) {
      console.log(error);
    }
  }

  async function getDetails(){
    try {
      const res = await axios.get('/api/users/me');
      setUserDetails(res?.data.data)
      console.log(userDetails);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='text-white flex justify-center items-center h-screen flex-col gap-4'>
      <h1 className=''>Profile Page</h1>
      <Link className='p-2 rounded-md bg-green-800' href={`profile/${userDetails._id}`}>{userDetails ?  userDetails._id : <span>nothing to show</span>  }</Link>
      <button onClick={logOut} className='p-3 rounded-md text-center bg-slate-500 hover:bg-slate-300 text-red-400'>LogOut</button>
      <button onClick={getDetails} className='p-3 rounded-md text-center bg-slate-500 hover:bg-slate-300 text-red-400'>Get User Details</button>
    </div>
  )
}
