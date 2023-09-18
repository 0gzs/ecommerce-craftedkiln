import { useCart } from '../context/cart-context'

const Product = ({ product, view, imageURL, desc=false }) => {
  const { addProductToCart } = useCart()

  return (
    <div 
      className="relative">
      {desc && <i className="fa-solid fa-arrow-left  border-2 border-white text-[4rem] rounded-lg  block px-12 py-4 relative float-right mb-5 hover:cursor-pointer hover:border-black" onClick={() => view(false)}></i>}
      <div className="image-container w-full overflow-hidden" onClick={() => view(product)}>
        <img src={imageURL} alt={product.description} 
          className="w-full object-cover object-center 
            hover:scale-[1.05] hover:cursor-pointer" />
      </div>
      <span>
        <div className="flex justify-between">
          <p className="py-[1.2rem]">{product.name}</p>
          <p className="py-[1.2rem] font-bold">${product.price}</p>
        </div>
        {desc && <p className="py-[1.2rem]">{product.description}</p>}

        <button 
          className=" px-[4rem] py-[1.5rem]
            font-bold w-full transition-all 
            border-[4px] rounded-md border-[#11111199] text-black 
            hover:pointer left-0 hover:bg-[#111111] hover:text-white"
          onClick={() => addProductToCart(product)}>
          Add To Cart
        </button>
      </span>
    </div>
  )
}

export default Product
