import { useMemo } from "react"
import {
  NavLink,
} from "react-router-dom"
import useScrollEffect from "../hooks/useScrollEffect"

const Nav = ({ count }) => {
  const { scrolled } = useScrollEffect(40)

  let navSmall = 'py-[2rem]'

  if (scrolled) {
    navSmall = 'py-[.5rem]'
  }

  const cartLink = useMemo(() => (
    <NavLink to="cart/">
      <i className="fa-solid fa-bag-shopping">
        <p className="absolute bottom-0 right-0 text-[1em] font-bold">{count}</p>
      </i>
    </NavLink>
  ), [count])

  const homeLink = useMemo(() => (
    <NavLink to="/"><h2 className={`font-bold ${navSmall === 'py-[2rem]' ? 'md:text-[5rem]' : 'text-[2rem]'}`}>Crafted Kiln</h2></NavLink>
  ), [navSmall])

  const shopLink = useMemo(() => (
    <NavLink to="/shop" className="hover:cursor-pointer">Shop</NavLink>
  ), [])

  return (
    <div id="nav" className={`bg-[#FAF8ED] flex items-center px-[5vw] justify-between sticky top-0 z-30
      ${navSmall} navbar`}>
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
