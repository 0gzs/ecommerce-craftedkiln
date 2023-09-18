import Product from '../components/product'

import { useState } from 'react'
import ProductModel from '../models/product'
import data from '../data.json'
import hero from '../assets/Emerald Ceramic Bowl Collection.jpeg'
import useScrollEffect from '../hooks/useScrollEffect'

const products = data.map(product => new ProductModel(product))

const ProductList = () => {
  const { scrolled } = useScrollEffect(775, 775)
  const [selected, setSelected] = useState()

  let classes = ''
  if (scrolled) {
    classes = 'sticky-products'
  }

  const viewSelected = () => {
    const image = selected.getImage()
    return <Product product={selected} view={setSelected} imageURL={image} desc={true} />
  }

  return (
    <div id="product-page" className='flex flex-col h-full overflow-scroll'>
      <div id="hero" className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative flex flex-col justify-center items-center">
        <span className="absolute bottom-0 left-0 right-0 top-0 w-full h-full z-10 justify-end bg-black/10"></span>
        <div className="absolute left-0 right-0 h-full">
          <img
            className="w-full h-full object-center object-cover "
            src={hero} alt="Ceramic pots" />
        </div>
      </div>
      <div>
        <h2 className='text-center py-[5vw] text-[5rem]'>All handmade pieces</h2>
          <div id="container" className={`${classes} flex flex-col md:flex-row w-full space-y-10 md:space-y-0 p-[5vw] py-[2.5vw] md:space-x-20`}>

          <section className='w-full h-fit p-10 md:w-[75%] md:min-w-[32rem] md:max-w-[45rem] border-[5px] border-black'>
            { selected ? viewSelected() : 'Nothing'}
          </section>
          <div
            className="grid-container w-full">
            {products.map((product, i) => {
              return <Product product={product} view={setSelected} imageURL={product.getImage()} key={i} />
          })}
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductList
