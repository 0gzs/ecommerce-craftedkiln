class CartService {
  add(cart, product) {
    let updatedCart = []
    const foundIndex = cart.findIndex(p => p.name === product.name)

    if (foundIndex !== -1) {
      updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count + 1 } : p)
    } else updatedCart = [...cart, { ...product, count: 1 }]

    this.saveCart(cart)
    return updatedCart
  }

  remove(cart, product) {
    let updatedCart = []
    const foundIndex = cart.findIndex(p => p.name === product.name)

    if (cart[foundIndex].count === 1) updatedCart = cart.filter(p => p.name !== product.name)
    else if (foundIndex !== -1) updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count - 1 } : p)

    this.saveCart(cart)
    return updatedCart
  }

  saveCart(cart) {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  getSubtotal(cart) {
    const total = cart.reduce(
      (sum, product) =>
        product.count > 1
          ? sum + parseFloat(product.price) * product.count
          : sum + parseFloat(product.price),
      0
    )

    return parseFloat(total).toFixed(2)
  }

  getTotalPerItem(cart, product) {
    const total = cart.reduce(
      (sum, p) => 
        p.name === product.name 
          ? sum + parseFloat(product.price) * product.count
          : sum + parseFloat(product.price),
      0
    )
    return parseFloat(total).toFixed(2)
  }

  getCart() {
    const localCart = window.localStorage.getItem('cart');
    if (localCart) {
      try {
        return JSON.parse(localCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        return [];
      }
    }
    return [];
  }

}

export default CartService
