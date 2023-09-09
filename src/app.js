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
  const { cart, add, remove } = useCart()

  return (
    <>
      <Nav cart={cart} />
      <Outlet context={{ cart, add, remove }} />
    </>
  )
}

export default App;
