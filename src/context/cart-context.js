import React, { createContext, useState, useContext } from 'react'

import CartService from '../services/cart-service'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const cartService = new CartService()
  const [cart, setCart] = useState(() => cartService.getCart())

  const addProductToCart = product => {
    const updatedCart = cartService.add(cart, product)
    setCart(updatedCart)
  }

  const removeProductFromCart = product => {
    const updatedCart = cartService.remove(cart, product)
    setCart(updatedCart)
  }

  const getSubtotal = () => cartService.getSubtotal(cart)

  const getQuantity = () =>  cart.reduce((acc, item) => acc + item.count, 0)

  const getTotalPerItem = product => cartService.getTotalPerItem(cart, product)

  const value = {
      cart,
      addProductToCart,
      removeProductFromCart,
      getSubtotal,
      getQuantity,
      getTotalPerItem
    }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
