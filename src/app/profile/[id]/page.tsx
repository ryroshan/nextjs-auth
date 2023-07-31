"use client"
import React from 'react'

interface Params {
    params : {
        id : string
    }
}

export default function UserProfile({params} : Params) {
  return (
    <div className='text-white'>
      <h1 className='text-center'>UserProfile <span>{params.id}</span></h1>
    </div>
  )
}
