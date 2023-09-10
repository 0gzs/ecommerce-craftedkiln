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

function Layout() {
  const { cart, count, add, remove } = useCart()

  return (
    <>
      <span id="shipping-banner" className="text-white border border-black w-full h-[5vh] min-h-[3.5rem] accent-gradient flex items-center justify-center font-bold ">
        FREE SHIPPING ON ORDER 85+
      </span>
      <Nav count={count} />
      <Outlet context={{ cart, add, remove }} />
    </>
  )
}

export default App;
