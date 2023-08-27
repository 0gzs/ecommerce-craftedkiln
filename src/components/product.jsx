const Product = ({ product, imageURL, add }) => {
  const { name, description, price } = product

  return (
    <div id="product">
      <div className="image-container">
        <img src={imageURL} alt={description} className="img" />
      </div>
      <div className="product-info-container">
        <div className="details">
          <p className="name">{name}</p>
          <p className="price">${price}</p>
        </div>
        <p className="description">{description}</p>

        <button type="button" className="add-to-cart-btn" onClick={() => add(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product
