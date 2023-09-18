import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import { CartProvider } from './context/cart-context'
import LandingPage from './pages/landing-page'
import ShoppingCart from './pages/shopping-cart'
import ProductList from './pages/product-list'

import Nav from './components/nav'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path={`/cart`} element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  );
}

const ShoppingBanner = ({ setDone }) => {

  useEffect(() => {
    setDone(true)
  }, [setDone])

  return (
    <div id="shipping-banner" className="text-white border border-black w-full py-[1.3rem] text-[1.4rem] accent-gradient flex items-center justify-center font-bold ">
      FREE SHIPPING ON ORDER 85+
    </div>
  )
}

function Layout() {
  const [done, setDone] = useState(false)
  return (
    <CartProvider>
      <ShoppingBanner setDone={setDone} />
      { done && <Nav /> }
      <Outlet />
    </CartProvider>
  )
}

export default App;
