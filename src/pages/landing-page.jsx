import React from 'react'
import hero from '../assets/chloe_bulton.jpg'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <div className="h-[100vh] relative w-full ">
        <div id="hero" className="w-full h-[60%] relative overflow-hidden flex flex-col justify-center items-center min-h-[62.8rem]">
          <span className="absolute bottom-0 left-0 right-0 top-0 w-full h-full z-10 justify-end bg-black/40"></span>
          <div className="absolute left-0 right-0 h-full">
            <img
              className="w-full h-full object-bottom object-cover "
              src={hero} alt="Ceramic pots" />
          </div>
          <p className='text-white z-20 text-[5vw]'>Bundles Under $32</p>
          <NavLink to="/shop" className="z-20"><button type='button' className='rounded border-none px-8 py-2.5 z-20 accent-gradient-sm text-white'>Shop all</button></NavLink>
        </div>
      </div>
    </>
  )
}

export default LandingPage
