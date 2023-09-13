import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import LandingPage from './pages/landing-page'
import ShoppingCart from './pages/shopping-cart'
import ProductList from './pages/product-list'

import Nav from './components/nav'

import { useCart } from './hooks/useCart'

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
  const { cart, count, add, remove } = useCart()

  return (
    <>
      <ShoppingBanner setDone={setDone} />
      { done && <Nav count={count} /> }
      <Outlet context={{ cart, add, remove }} />
    </>
  )
}

export default App;
