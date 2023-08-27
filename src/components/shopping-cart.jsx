import { useState, useEffect } from 'react'
import { images } from '../utils/images.js'

const ShoppingCart = ({ cart, count, add, remove }) => {
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((sum, product) => sum + parseFloat(product.price), 0)
    setSubtotal(total)
  }, [cart])

  return (
    <div className='shopping-cart'>
      <h3>Order Summary</h3>
      <hr />
      <div className="shopping-list">
        {cart.map((item, i) => {
          const img = `${item['name']}.jpeg`
          return (
          <div key={i}>
            <div className="cart-item">
              <div className="img-container">
                <img src={images[img]} alt={item.description} />
                <div className="details">
                  <p>{item.name}</p>
                  <p className="quantity">Quantity: { item.count }</p>
                </div>
              </div>
              <p>${item.price}</p>
              <div className="add-to-cart-btn">
                <i className="fa-solid fa-minus" onClick={() => remove(item)} />
                <i className="fa-solid fa-plus" onClick={() => add(item)} />
              </div>
            </div>
              <hr />
            </div>
          )
        })}
          
      </div>
      <div className="totals-container">
            <p>Subtotal:</p>
            <p>{subtotal ? `$${subtotal}` : '$0.00'}</p>
          </div>
        <div className="totals-container">
            <p>Shipping:</p>
            <p>$0.00</p>
        </div>
        <div className="totals-container">
            <p>Taxes:</p>
            <p>$0.00</p>
          </div>
      <hr />
      <div className="totals-container order-total">
        <p>Order Total:</p>
        <p>${subtotal}</p>
      </div>
    </div>
  )
}

export default ShoppingCart
