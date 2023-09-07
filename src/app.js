import useCart from './hooks/useCart.js'
import './index.css'

import Nav from './components/nav'
import ProductList from './components/product-list'
import ShoppingCart from './components/shopping-cart'
import LandingPage from './components/landing-page'

function App() {
  const { 
    cart,
    count,
    viewCart,
    setViewCart,
    addToCart,
    removeFromCart
  } = useCart

  return (
    <div>
      <Nav count={count} setViewCart={setViewCart} viewCart={viewCart} />
      {false ?
        <LandingPage /> :
        <>
      {!viewCart ?
        <ProductList add={addToCart} /> :
        <ShoppingCart cart={cart} count={count} add={addToCart} remove={removeFromCart} />}
        </>}
    </div>
  );
}

export default App;
