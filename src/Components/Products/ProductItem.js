import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem } from '../../slices/productsSlice'
import { getTotals } from '../../slices/productsSlice'

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
      <div className='product-list-item' key={product.id}>
        <div className='product-list-item-img'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='product-list-item-detail'>
          <h2 className='product-list-item-title'>{product.name}</h2>
          <div className='product-list-item-price'>${product.price}</div>
          <button
            className='product-list-item-btn'
            type='button'
            onClick={() => addToCart({ ...product })}
          >
            Add to cart
          </button>
        </div>
      </div>
    )
  })
}

export default ProductItem
