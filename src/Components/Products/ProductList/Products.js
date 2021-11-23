import React from 'react'
import ProductListItem from '../ProducListItem/ProducListItem'
import { Wrapper, ProductList } from './ProductList.styles'

const Products = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='page-top'>
          <h1 className='page-title'>Products</h1>
        </div>
        <ProductList>
          <ProductListItem />
        </ProductList>
      </div>
    </Wrapper>
  )
}

export default Products
