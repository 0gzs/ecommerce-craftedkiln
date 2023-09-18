import React, { useMemo } from "react"
import {
  NavLink,
} from "react-router-dom"
import useScrollEffect from "../hooks/useScrollEffect"
import { useCart } from '../context/cart-context'


const Nav = () => {
  const { scrolled } = useScrollEffect(40, 50)
  const { getQuantity } = useCart()

  let navSmall = ''
  if (scrolled) navSmall = 'nav-sm'

  const cartLink = useMemo(() => (
    <NavLink to="cart/">
      <i className="fa-solid fa-bag-shopping">
        <p className="absolute bottom-0 right-0 text-[1em] font-bold">{getQuantity()}</p>
      </i>
    </NavLink>
  ), [getQuantity])

  const homeLink = useMemo(() => (
    <NavLink to="/"><h2 className='font-bold'>Crafted Kiln</h2></NavLink>
  ), [])

  const shopLink = useMemo(() => (
    <NavLink to="shop/" className="hover:cursor-pointer">Shop</NavLink>
  ), [])

  return (
    <div id="nav" className={`bg-[#FAF8ED] flex items-center px-[5vw] justify-between z-30 navbar
      ${navSmall}`}>
      {homeLink}
      <div className="flex items-center w-fit space-x-[1rem]">
        <ul className="flex space-x-[2rem]">
          <p>Our Story</p>
          {shopLink}
          <p>Log in</p>
        </ul>
        <div className="p-[1rem] text-[1.8] relative">
          {cartLink}
        </div>
      </div>
    </div>
  )
}

export default Nav 
