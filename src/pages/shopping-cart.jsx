import { useCart } from '../context/cart-context'
import { images } from '../utils/images.js'

const ShoppingCart = () => {
  const { cart, getSubtotal, removeProductFromCart, addProductToCart, getTotalPerItem } = useCart()

  return (
    <div 
      className='max-w-full h-full p-[4rem] mx-[5vw] flex flex-col 
        border-[2px] border-[rgba(180, 180, 150, 1)] 
        rounded gap-[1.5rem] my-10'>
      <h3>Order Summary</h3>
      <hr className='border-[2px] border-[rgba(180, 180, 180, .3)]' />
      <div className="bg-white w-full">
        {cart.map((item, i) => {
          const img = `${item['name']}.jpeg`
          return (
          <div key={i}>
            <div className="relative flex justify-between items-center w-full my-[2rem]">
              <div className="gap-[1rem] max-w-[20%] lg:max-w-[15%] w-full overflow-hidden border">
                <img className="w-full object-cover object-center hover:cursor-pointer" src={images[img]} alt={item.description} />
              </div>
              <div className="flex justify-between w-full items-start p-[2rem]">
              <div className="details">
                  <p>{item.name}</p>
                  <p className="font-bold">Quantity: { item.count }</p>
                </div>
                <p>${getTotalPerItem(item)}</p>
              </div>
              <div className="add-to-cart-btn">
                <i className="fa-solid fa-minus px-[1.2rem] py-[1rem] 
                    text-black border border-[rgba(180, 180, 180, .3)]
                    hover:bg-[#000000] hover:text-white hover:cursor-pointer" onClick={() => removeProductFromCart(item)} />
                <i className="fa-solid fa-plus px-[1.2rem] py-[1rem] 
                    text-black border border-[rgba(180, 180, 180, .3)]
                    hover:bg-[#000000] hover:text-white hover:cursor-pointer" onClick={() => addProductToCart(item)} />
              </div>
            </div>
              <hr />
            </div>
          )
        })}
          
      </div>
      <div className="w-full flex justify-between font-bold">
            <p>Subtotal:</p>
            <p>{getSubtotal()}</p>
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
        <p>${getSubtotal()}</p>
      </div>
    </div>
  )
}

export default ShoppingCart
