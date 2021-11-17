import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem } from '../../slices/productsSlice'
import { getTotals } from '../../slices/productsSlice'
import styles from './products.module.css'

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
      <div className={styles.productListItem} key={product.id}>
        <div className={styles.productListItemImg}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.productListItemDetail}>
          <h2 className={styles.productListItemTitle}>{product.name}</h2>
          <div className={styles.productListItemPrice}>${product.price}</div>
          <button
            className={styles.productListItemBtn}
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
