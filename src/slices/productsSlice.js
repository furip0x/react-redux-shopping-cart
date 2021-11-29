import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { data } from '../data'

const initialState = {
  productData: data,
  cart: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1
        toast.success(`${state.cart[itemIndex].name} added to cart`)
      } else {
        const newCartItem = { ...action.payload, quantity: 1 }
        state.cart.push(newCartItem)
        toast.success(`${action.payload.name} added to cart`)
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cart))
    },
    deleteCartItem: (state, action) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload)

      state.cart = newCart
      toast.error('Item successfully removed')

      localStorage.setItem('cartItems', JSON.stringify(state.cart))
    },
    clearCart: (state, action) => {
      toast.success('Shopping cart cleared')
      localStorage.setItem('cartItems', JSON.stringify([]))

      return {
        ...state,
        cart: [],
      }
    },
    setItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )

      if (action.payload.type === 'dec') {
        if (state.cart[itemIndex].quantity === 1) {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          }
        }
        state.cart[itemIndex].quantity -= 1
      } else {
        state.cart[itemIndex].quantity += 1
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cart))

      // return { Keeping this an an example
      //   ...state,
      //   cart: state.cart.map((item) => {
      //     if (item.id === itemIndex) {
      //       return { ...item, quantity: item.quantity + 1 }
      //     }
      //     return item
      //   }),
      // }
    },
    getTotals: (state, action) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem
          const itemTotal = price * quantity

          cartTotal.totalPrice += itemTotal
          cartTotal.totalQuantity += quantity

          return cartTotal
        },
        { totalPrice: 0, totalQuantity: 0 }
      )
      totalPrice = parseFloat(totalPrice.toFixed(2))
      state.cartTotalQuantity = totalQuantity
      state.cartTotalPrice = totalPrice
    },
  },
})

export const {
  addCartItem,
  deleteCartItem,
  setItemQuantity,
  clearCart,
  getTotals,
} = productsSlice.actions
export default productsSlice.reducer
