import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../app/card.module.css"

const Card = ({ items }) => {
  return (
    <Link href={`/product/${items.id}`}>
      <div className="
        group bg-white rounded-2xl shadow-md border border-gray-200 
        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
        cursor-pointer p-4 max-w-80
      ">
        
        <div className="relative w-full h-52 overflow-hidden rounded-xl">
          <Image
            src={items.images[0]}
            alt={items.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-900 line-clamp-2">
          {items.title}
        </h3>

        <p className={styles['card__price']}>
          ${items.price}
        </p>

        <div className="flex items-center justify-between mt-4 text-sm">

          <span className="
            flex items-center gap-1 bg-emerald-100 text-emerald-700 
            px-3 py-1 rounded-full font-medium
          ">
            ⭐ {items?.rating}
          </span>

          <span className="
            bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium
          ">
            {items?.stock} left
          </span>

        </div>
      </div>
    </Link>
  )
}

export default Card