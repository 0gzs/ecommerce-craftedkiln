import { useState, useEffect } from 'react'
import ProductList from './components/product-list'
import ShoppingCart from './components/shopping-cart'

function App() {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [viewCart, setViewCart] = useState(false)

  const addToCart = item => {
    let updatedCart
    let foundIndex = cart.findIndex(p => p.name === item.name)

    if (foundIndex !== -1) {
      updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count + 1 } : p)
    } else updatedCart = [...cart, { ...item, count: 1 }]

    setCart(updatedCart)
  }

  const removeFromCart = item => {
    let updatedCart
    let foundIndex = cart.findIndex(p => p.name === item.name)

    if (cart[foundIndex].count === 1) updatedCart = cart.filter(p => p.name !== item.name)
    else if (foundIndex !== -1) updatedCart = cart.map((p, i) => i === foundIndex ? { ...p, count: p.count - 1 } : p )

    setCart(updatedCart)
  }

  useEffect(() => {
    let totalCount = cart.reduce((sum, product) => sum + product.count, 0);
    setCount(totalCount);
  }, [cart]);


  return (
    <div className="app">
      <header>
        <div className={'cart-icon'}>
          <i className="fa-solid fa-bag-shopping" onClick={() => setViewCart(!viewCart)}>
            <p>{count}</p>
          </i>
        </div>
      </header>
      {!viewCart ?
        <ProductList add={addToCart} /> :
        <ShoppingCart cart={cart} count={count} add={addToCart} remove={removeFromCart} />}
    </div>
  );
}

export default App;
