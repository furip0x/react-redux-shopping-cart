import React from 'react'
import ProductListItem from '../ProducListItem/ProducListItem'
import { GlobalStyle } from '../../../GlobalStyles'
import { Wrapper, ProductList } from './ProductList.styles'

const Products = () => {
  return (
    <Wrapper>
      <GlobalStyle />
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
