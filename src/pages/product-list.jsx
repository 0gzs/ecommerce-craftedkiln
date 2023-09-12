import Product from '../components/product'
import products from '../data.json'
import { images } from '../utils/images.js'
import hero from '../assets/Emerald Ceramic Bowl Collection.jpeg'

const ProductList = () => {
  return (
    <div id="product-page" className='flex flex-col h-full overflow-scroll'>
      <div id="hero" className="w-full h-[30rem] md:min-h-[40rem] lg:min-h-[50rem] relative flex flex-col justify-center items-center">
        <span className="absolute bottom-0 left-0 right-0 top-0 w-full h-full z-10 justify-end bg-black/10"></span>
        <div className="absolute left-0 right-0 h-full">
          <img
            className="w-full h-full object-center object-cover "
            src={hero} alt="Ceramic pots" />
        </div>
      </div>
      <h2 className='text-center pt-[4vw] text-[6rem]'>All handmade piece</h2>
      <div className='flex flex-col md:flex-row w-full space-y-10 md:space-y-0 p-[5vw] py-[2.5vw] md:space-x-20'>

        <section className='w-full p-10 md:w-[75%] md:min-w-[32rem] md:max-w-[35rem] border-[5px] border-black'>
        </section>
        <div
          className="grid-container w-full">
          {products.map((product, i) => {
            const img = `${product['name']}.jpeg`
            return <Product product={product} imageURL={images[img]} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductList
