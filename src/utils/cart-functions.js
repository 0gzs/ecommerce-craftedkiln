export const addToCart = (item, cart, setCart) => {
  let updatedCart
  const foundIndex = cart.findIndex(p => p.name === item.name)

  if (foundIndex !== -1) {
    updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count + 1 } : p)
  } else updatedCart = [...cart, { ...item, count: 1 }]

  setCart(updatedCart)
}

export const removeFromCart = (item, cart, setCart) => {
  let updatedCart
  const foundIndex = cart.findIndex(p => p.name === item.name)

  if (cart[foundIndex].count === 1) updatedCart = cart.filter(p => p.name !== item.name)
  else if (foundIndex !== -1) updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count - 1 } : p)

  setCart(updatedCart)
}
