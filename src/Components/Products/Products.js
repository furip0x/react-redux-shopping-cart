import React from 'react'
import ProductItem from './ProductItem'
import styles from './products.module.css'

const Products = () => {
  return (
    <div className='container'>
      <div className='page-top'>
        <h1 className='page-title'>Products</h1>
      </div>
      <section className={styles.productList}>
        <ProductItem />
      </section>
    </div>
  )
}

export default Products
