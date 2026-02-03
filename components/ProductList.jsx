"use client"
import React, { useState } from 'react'
import Filter from './Filter';
import Card from './Card';
import SearchBar from './SearchBar';
import { Provider, useSelector } from 'react-redux';
import { store } from '@/store/store';

const InnerProductList = ({ products }) => {
  const [minRating, setMinRating] = useState(0);
  const query = useSelector((state) => state.search?.query || "");

  const filtered = products
    .filter((p) => p.rating >= minRating)
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className='flex gap-5 items-center'>
        <Filter onChangeAction={setMinRating} />
        <SearchBar />
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

const ProductList = ({ products }) => {
  return (
    <Provider store={store}>
      <InnerProductList products={products} />
    </Provider>
  )
}

export default ProductList
