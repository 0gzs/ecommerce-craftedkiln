import { images } from '../utils/images.js'

class ProductModel {
  constructor(product) {
    this.id = Math.random() * Math.random()
    this.name = product.name
    this.description = product.description
    this.price = product.price
    this.count = 0
  }

  getImage() {
    const img = `${this.name}.jpeg`
    return images[img]
  }
}

export default ProductModel
