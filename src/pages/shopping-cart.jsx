import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { images } from '../utils/images.js'

const ShoppingCart = () => {
  const { cart, add, remove } = useOutletContext()
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((sum, product) => product.count > 1 ? (sum + parseFloat(product.price) * product.count) : sum + parseFloat(product.price), 0)
    setSubtotal(parseFloat(total).toFixed(2))
  }, [cart])

  return (
    <div 
      className='max-w-full h-full p-[4rem] mx-[5vw] flex flex-col 
        border-[2px] border-[rgba(180, 180, 150, 1)] 
        rounded gap-[1.5rem]'>
      <h3>Order Summary</h3>
      <hr className='border-[2px] border-[rgba(180, 180, 180, .3)]' />
      <div className="bg-white w-full">
        {cart.map((item, i) => {
          const img = `${item['name']}.jpeg`
          return (
          <div key={Math.floor(Math.random() * i)}>
            <div className="relative flex justify-between items-center w-full my-[2rem]">
              <div className="gap-[1rem] max-w-[20%] lg:max-w-[15%] w-full overflow-hidden border">
                <img className="w-full object-cover object-center hover:cursor-pointer" src={images[img]} alt={item.description} />
              </div>
              <div className="flex justify-between w-full items-start p-[2rem]">
              <div className="details">
                  <p>{item.name}</p>
                  <p className="font-bold">Quantity: { item.count }</p>
                </div>
                <p>${item.price}</p>
              </div>
              <div className="add-to-cart-btn">
                <i className="fa-solid fa-minus px-[1.2rem] py-[1rem] 
                    text-black border border-[rgba(180, 180, 180, .3)]
                    hover:bg-[#000000] hover:text-white hover:cursor-pointer" onClick={() => remove(item)} />
                <i className="fa-solid fa-plus px-[1.2rem] py-[1rem] 
                    text-black border border-[rgba(180, 180, 180, .3)]
                    hover:bg-[#000000] hover:text-white hover:cursor-pointer" onClick={() => add(item)} />
              </div>
            </div>
              <hr />
            </div>
          )
        })}
          
      </div>
      <div className="w-full flex justify-between font-bold">
            <p>Subtotal:</p>
            <p>{subtotal ? `$${subtotal}` : '$0.00'}</p>
          </div>
        <div className="w-full flex justify-between font-bold">
            <p>Shipping:</p>
            <p>$0.00</p>
        </div>
        <div className="w-full flex justify-between font-bold">
            <p>Taxes:</p>
            <p>$0.00</p>
          </div>
      <hr />
      <div className="w-full flex justify-between font-bold text-[2rem]">
        <p>Order Total:</p>
        <p>${subtotal}</p>
      </div>
    </div>
  )
}

export default ShoppingCart
