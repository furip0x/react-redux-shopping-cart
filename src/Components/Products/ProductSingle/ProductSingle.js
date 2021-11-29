import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import {
  addCartItem,
  setItemQuantity,
  getTotals,
} from '../../../slices/productsSlice'
import {
  PageWrapper,
  ProductDetail,
  ProductDetailInfo,
} from './ProductSingle.styles'

const ProductSingle = () => {
  const dispatch = useDispatch()

  const { id: productID } = useParams()

  const cart = useSelector((state) => state.products.cart)
  const cartItem = useSelector((state) =>
    state.products.cart.find((item) => item.id == productID)
  )

  const products = useSelector((state) => state.products.productData)
  const singleProduct = products.find((item) => item.id == productID)

  const addToCart = (product) => {
    dispatch(addCartItem(product))
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  return (
    <PageWrapper>
      <div className='container'>
        <div className='page-top'>
          <h1 className='page-title'>{singleProduct.name}</h1>
          <ProductDetail>
            <img src={singleProduct.image} alt={singleProduct.name} />
            <ProductDetailInfo>
              <div className='product-detail-count'>
                <h2>${singleProduct.price}</h2>
                {cartItem ? (
                  <div className='cart-item-count'>
                    <button
                      className='cart-item-count-btn'
                      type='button'
                      onClick={() =>
                        dispatch(
                          setItemQuantity({ id: cartItem.id, type: 'dec' })
                        )
                      }
                    >
                      -
                    </button>
                    <div className='cart-item-amount'>{cartItem.quantity}</div>
                    <button
                      className='cart-item-count-btn'
                      type='button'
                      onClick={() =>
                        dispatch(
                          setItemQuantity({ id: cartItem.id, type: 'inc' })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    type='button'
                    className='product-detail-add'
                    onClick={() => addToCart({ ...singleProduct })}
                  >
                    Add to cart
                  </button>
                )}
              </div>
              <p>{singleProduct.desc}</p>
            </ProductDetailInfo>
          </ProductDetail>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ProductSingle
