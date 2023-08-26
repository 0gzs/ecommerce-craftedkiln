const Product = ({ product, imageURL }) => {
  const { name, description, price } = product

  return (
    <div id="product">
      <div className="image-container">
        <img src={imageURL} alt={description} className="img" />
      </div>
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <p className="price">{price}</p>

      <button type="button" className="add-to-cart-btn">
        Add To Cart
      </button>
    </div>
  )
}

export default Product
