class ProductModel {
  constructor(product) {
    this.id = Math.random() * Math.random()
    this.name = product.name
    this.description = product.description
    this.price = product.price
    this.count = 0
  }
}

export default ProductModel
