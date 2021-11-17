import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  clearCart,
  deleteCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  getTotals,
} from '../../slices/productsSlice'
import styles from './cart.module.css'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.products.cart)
  const { cartTotalPrice } = useSelector((state) => state.products)

  const removeAllCartItems = () => {
    dispatch(clearCart())
  }

  const removeItemFromCart = (id) => {
    dispatch(deleteCartItem(id))
  }

  const increaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id))
  }

  const decreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id))
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  if (cart.length > 0) {
    return (
      <div className='container'>
        <div className='page-top'>
          <h1 className='page-title'>My Cart</h1>
        </div>
        <div className='cart'>
          {cart.map((item) => {
            return (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemImg}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.cartItemDetail}>
                  <h2 className={styles.cartItemTitle}>{item.name}</h2>
                  <div className={styles.cartItemPrice}>${item.price}</div>
                </div>
                <div className={styles.cartItemAmount}>
                  <div className={styles.cartItemCount}>
                    <button
                      className={styles.cartItemCountBtn}
                      type='button'
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <div className={styles.cartItemAmount}>{item.quantity}</div>
                    <button
                      className={styles.cartItemCountBtn}
                      type='button'
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.cartItemInfo}>
                  <button
                    className={styles.cartItemRemove}
                    type='button'
                    onClick={() => {
                      removeItemFromCart(item.id)
                    }}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 448 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z'></path>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.cartTotal}>
          <div className={styles.cartTotalPrice}>${cartTotalPrice}</div>
          <button
            className={styles.cartTotalClear}
            type='button'
            onClick={() => removeAllCartItems()}
          >
            Clear Cart
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className='page-top'>
          <h1 className='page-title'>Your cart is empty</h1>
        </div>
        <Link to='/' className={styles.continueLink}>
          Continue Shopping
        </Link>
      </div>
    )
  }
}

export default Cart
