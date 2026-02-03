"use client"
import { setQuery } from '@/features/search';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search?.query || "");

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Search Product (query change)'
        onChange={handleChange}
        value={query}
        className='w-80 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
    </div>
  )
}

export default SearchBar
