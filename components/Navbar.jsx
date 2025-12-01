import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='grid grid-cols-3 justify-between px-10 pt-3 pb-2 border-b'>
      <div className='cursor-pointer flex items-center'>
        Home
      </div>
      <div className='flex justify-around items-center'>
        <Link href="/product">
          <div className='cursor-pointer hover:text-blue-900'>
            Products
          </div>
        </Link>
        <div className='cursor-pointer hover:text-blue-900'>
          Fashion
        </div>
        <div className='cursor-pointer hover:text-blue-900'>
          About
        </div>
      </div>
      <div className='flex justify-end'>
        <Link href="/register">
          <button className='bg-blue-600 text-white text-sm p-2 rounded-xl cursor-pointer hover:border hover:border-black'>
            Register
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
