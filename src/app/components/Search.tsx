"use client"

import React, { useState } from 'react'

interface IProps {
        data: any
}

export default function Search({data}:IProps) {
    const [query, setQuery] = useState('');

    const filterUserDetails = data.data.filter((item:any)=>(
      item.username.toLowerCase().includes(query.toLowerCase())
    ))


    function onChangeHandle(e:any){
        const {value} = e.target;
        setQuery(value)
      }

      function handleClear(){
        setQuery('')
      }
    
  return (
    <div>
      <input value={query} type='text' placeholder='search user name...' onChange={onChangeHandle}/>
      <span className='cursor-pointer text-white text-xl ml-2' onClick={handleClear}>X</span>
    </div>
  )
  }
