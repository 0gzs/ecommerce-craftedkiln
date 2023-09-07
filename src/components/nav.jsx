import {
  Link
} from "react-router-dom"

const Nav = ({ count }) => {
  return (
    <div className="flex items-center mx-[5vw] my-[1vw] justify-end space-x-[5rem]">
      <ul className="flex space-x-[2rem]">
        <a href="#out-story" className="hover:cursor-pointer">Our Story</a>
        <Link to="/shop" className="hover:cursor-pointer">Dining Area</Link>
        <p>Storage</p>
      </ul>
      <div className="p-[1rem] text-[1.8] relative">
        <Link path="/cart">
        <i className="fa-solid fa-bag-shopping">
          <p className="absolute bottom-0 right-0 text-[1em] font-bold">{count}</p>
        </i>
        </Link>
      </div>
    </div>
  )
}

export default Nav 
