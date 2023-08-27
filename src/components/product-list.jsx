import Product from './product'
import products from '../data.json'
import { images } from '../utils/images.js'

const ProductList = ({ add }) => {
  return (
    <div className="grid-container">
      {products.map((product, i) => {
        const img = `${product['name']}.jpeg`
        return <Product product={product} imageURL={images[img]} add={add} key={i} />
      })}
    </div>
  )
}

export default ProductList
