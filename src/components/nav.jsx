import { useEffect, useState } from "react"
import {
  NavLink
} from "react-router-dom"

const Nav = ({ cart }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (cart) setCount(() => (
      cart.reduce((sum, item) => sum + item.count, 0)
    ))
  }, [cart])

  return (
    <div className="flex items-center mx-[5vw] justify-between my-[0.5vw] py-5">
      <NavLink to="/"><h2 className="md:text-[5rem] lg:text-[6rem] font-bold">Crafted Kiln</h2></NavLink>
      <div className="flex items-center w-fit space-x-[1rem]">
        <ul className="flex space-x-[2rem]">
          <p>Our Story</p>
          <NavLink to="/shop" className="hover:cursor-pointer">Shop</NavLink>
          <p>Log in</p>
        </ul>
        <div className="p-[1rem] text-[1.8] relative">
          <NavLink to="cart/">
            <i className="fa-solid fa-bag-shopping">
              <p className="absolute bottom-0 right-0 text-[1em] font-bold">{count}</p>
            </i>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Nav 
