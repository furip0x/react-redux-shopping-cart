import React from 'react'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className='container'>
      <div className='page-top'>
        <h1 className='page-title'>Products</h1>
      </div>
      <section className='product-list'>
        <ProductItem />
      </section>
    </div>
  )
}

export default Products
