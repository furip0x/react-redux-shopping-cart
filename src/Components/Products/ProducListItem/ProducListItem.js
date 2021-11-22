import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem, getTotals } from '../../../slices/productsSlice'
import {
  Wrapper,
  Item,
  ImageWrapper,
  ImageOverlay,
  Details,
  Title,
  Price,
  AddToCartBtn,
} from './ProductListItem.styles'

const ProductItem = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.productData)
  const cart = useSelector((state) => state.products.cart)

  const addToCart = (product) => {
    dispatch(addCartItem(product))
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  return products.map((product) => {
    return (
      <Item key={product.id}>
        <ImageWrapper>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <ImageOverlay>see details</ImageOverlay>
          </Link>
        </ImageWrapper>
        <Details>
          <Link to={`/product/${product.id}`}>
            <Title>{product.name}</Title>
            <Price>${product.price}</Price>
          </Link>
          <AddToCartBtn type='button' onClick={() => addToCart({ ...product })}>
            Add to cart
          </AddToCartBtn>
        </Details>
      </Item>
    )
  })
}

export default ProductItem
