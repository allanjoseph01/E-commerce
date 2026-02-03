import ProductList from '@/components/ProductList';
import React from 'react'

const Product = async () => {
  const response = await fetch("https://dummyjson.com/products",{cache:"no-store"});
  const data = await response.json();

  return <ProductList products={data.products} />
}

export default Product
