import { useState, useEffect } from 'react'

const useCart = () => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  const addToCart = item => {
    let updatedCart
    const foundIndex = cart.findIndex(p => p.name === item.name)

    if (foundIndex !== -1) {
      updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count + 1 } : p)
    } else updatedCart = [...cart, { ...item, count: 1 }]

    setCart(updatedCart)
  }

  const removeFromCart = item => {
    let updatedCart
    const foundIndex = cart.findIndex(p => p.name === item.name)

    if (cart[foundIndex].count === 1) updatedCart = cart.filter(p => p.name !== item.name)
    else if (foundIndex !== -1) updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count - 1 } : p )

    setCart(updatedCart)
  }

  useEffect(() => {
    const totalCount = cart.reduce((sum, product) => sum + product.count, 0)
    setCount(totalCount)
  }, [cart])

  return { cart, count, addToCart, removeFromCart }
}

export default useCart
