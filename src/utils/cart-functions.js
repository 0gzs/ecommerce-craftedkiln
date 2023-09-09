export const getCount = () => {
  const cart = JSON.stringify(window.localStorage.getItem('cart'))
  return cart.length
}

export const addToCart = item => {
  let updatedCart
  let cart = JSON.stringify(window.localStorage.getItem('cart'))

  const foundIndex = cart.findIndex(p => p.name === item.name)

  if (foundIndex !== -1) {
    updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count + 1 } : p)
  } else updatedCart = [...cart, { ...item, count: 1 }]

  window.localStorage.setItem('cart', JSON.stringy(updatedCart))
  return updatedCart
}

export const removeFromCart = item => {
  let updatedCart
  let cart = JSON.stringify(window.localStorage.getItem('cart'))

  const foundIndex = cart.findIndex(p => p.name === item.name)

  if (!cart) return []

  if (cart[foundIndex].count === 1) updatedCart = cart.filter(p => p.name !== item.name)
  else if (foundIndex !== -1) updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count - 1 } : p)

  window.localStorage.setItem('cart', JSON.stringify(updatedCart))
  return updatedCart
}
