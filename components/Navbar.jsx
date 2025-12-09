import Link from 'next/link'
import React from 'react'
import styles from '../app/register.module.css'

const Navbar = () => {

  return (
    <nav className='grid grid-cols-3 justify-between px-10 pt-3 pb-2 border-b border-black/30 sticky top-0 backdrop-blur-xl bg-white/20 z-50'>
      <Link href="/">
        <div className='cursor-pointer flex items-center'>
          Home
        </div>
      </Link>
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
          <button className={`${styles.Button} ${styles['Button-2']}`}>
            Register
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
