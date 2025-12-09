"use client"
import React, { useState } from 'react'
import Filter from './Filter';
import Card from './Card';

const ProductList = ({products}) => {
  const [minRating , setMinRating] = useState(0);
  const [searchText , setSearchText] = useState("");

  const filtered = products
    .filter((p)=>p.rating>=minRating)
    .filter((p)=>p.title.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div>
      <div className='flex gap-5 items-center'>
        <Filter onChangeAction={setMinRating} />
        <div>
          <input type="text" placeholder='Search Product' onChange={(e)=>setSearchText(e.target.value)} value={searchText} className='w-80 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' />
        </div>
      </div>
      <div className='mx-auto mt-5 px-1'>
        <div className='flex flex-wrap justify-center'>
          {filtered.map((item) => {
            return (
              <div key={item.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
                <Card items={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductList
