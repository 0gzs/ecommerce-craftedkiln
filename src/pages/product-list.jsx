import Product from '../components/product'
import products from '../data.json'
import { images } from '../utils/images.js'

const ProductList = () => {

  return (
    <div className='flex flex-col md:flex-row w-full space-y-10 md:space-y-0 p-[5vw] md:space-x-20'>
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
  )
}

export default ProductList
