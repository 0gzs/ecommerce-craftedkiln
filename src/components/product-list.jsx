import Product from './product'
import products from '../data.json'

function importAll(r) {
 const images = {};
  r.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
 return images
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const ProductList = () => {
  return (
    <div className="grid-container">
      {products.map((product, i) => {
        const img = `${product['name']}.jpeg`
        return <Product product={product} imageURL={images[img]} key={i} />
      })}
    </div>
  )
}

export default ProductList
