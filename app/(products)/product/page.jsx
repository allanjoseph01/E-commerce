import Card from '@/components/Card';
import Link from 'next/link';
import React from 'react'

const Product = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return (
    <div className='mx-auto px-1'>
      <div className='flex flex-wrap justify-center'>
        {data.products.map((item) => {
          return (
            <div key={item.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
              <Card items={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product
