import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { data } from '../data'

const initialState = {
  productData: data,
  cart: [],
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
        toast.success('Item successfully added')
      } else {
        const newCartItem = { ...action.payload, quantity: 1 }
        state.cart.push(newCartItem)
        toast.success('Item successfully added')
      }
    },
    deleteCartItem: (state, action) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload)

      state.cart = newCart
      toast.error('Item successfully removed')
    },
    clearCart: (state, action) => {
      toast.success('Shopping cart cleared')
      return {
        ...state,
        cart: [],
      }
    },
    increaseItemQuantity: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        }),
      }
    },
    decreaseItemQuantity: (state, action) => {
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          })
          .filter((item) => item.quantity !== 0),
      }
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
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  getTotals,
} = productsSlice.actions
export default productsSlice.reducer
