import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem, getTotals } from '../../slices/productsSlice'

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
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <div className='image-overlay'>see details</div>
          </Link>
        </div>
        <div className='product-list-item-detail'>
          <Link to={`/product/${product.id}`}>
            <h2 className='product-list-item-title'>{product.name}</h2>
            <div className='product-list-item-price'>${product.price}</div>
          </Link>
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
