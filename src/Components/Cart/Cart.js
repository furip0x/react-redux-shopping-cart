import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  CartWrapper,
  CartItem,
  ImageWrapper,
  Image,
  Details,
  Title,
  Price,
  CartButtons,
  RemoveBtn,
  CartTotalWrapper,
  CartTotal,
  ClearCartBtn,
  ContinueLink,
} from './Cart.styles'
import {
  clearCart,
  deleteCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  getTotals,
} from '../../slices/productsSlice'

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
      <CartWrapper>
        <div className='container'>
          <div className='page-top'>
            <h1 className='page-title'>My Cart</h1>
          </div>
          <div className='cart'>
            {cart.map((item) => {
              return (
                <CartItem key={item.id}>
                  <ImageWrapper>
                    <Image src={item.image} alt={item.name} />
                  </ImageWrapper>
                  <Details>
                    <Title>{item.name}</Title>
                    <Price>${item.price}</Price>
                  </Details>
                  <div className='cart-quantity'>
                    <div className='cart-item-count'>
                      <button
                        className='cart-item-count-btn'
                        type='button'
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <div className='cart-item-amount'>{item.quantity}</div>
                      <button
                        className='cart-item-count-btn'
                        type='button'
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <CartButtons>
                    <RemoveBtn
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
                    </RemoveBtn>
                  </CartButtons>
                </CartItem>
              )
            })}
          </div>
          <CartTotalWrapper>
            <CartTotal>${cartTotalPrice}</CartTotal>
            <ClearCartBtn type='button' onClick={() => removeAllCartItems()}>
              Clear Cart
            </ClearCartBtn>
          </CartTotalWrapper>
        </div>
      </CartWrapper>
    )
  } else {
    return (
      <CartWrapper>
        <div className='container'>
          <div className='page-top'>
            <h1 className='page-title'>Your cart is empty</h1>
          </div>
          <ContinueLink>
            <Link to='/' className='continue-link'>
              Continue Shopping
            </Link>
          </ContinueLink>
        </div>
      </CartWrapper>
    )
  }
}

export default Cart
