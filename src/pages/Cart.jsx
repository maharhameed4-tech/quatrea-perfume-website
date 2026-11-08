import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import perfumes from '../data/perfumes.js'

function Cart() {
  const [cartItems, setCartItems] = useState(() =>
    JSON.parse(localStorage.getItem('quatrea-cart') || '[]')
  )

  // Always get the latest product image from Perfumes.js
  const getProductImage = (item) => {
    const perfume = perfumes.find((p) => p.id === item.id)
    return perfume?.image || item.image
  }

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart)

    localStorage.setItem(
      'quatrea-cart',
      JSON.stringify(updatedCart)
    )

    window.dispatchEvent(new Event('cartUpdated'))
  }

  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, Number(item.quantity || 1) + change),
            image: getProductImage(item),
          }
        : item
    )

    saveCart(updatedCart)
  }

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    )

    saveCart(updatedCart)
  }

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity || 1),
    0
  )

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="cart-container">

          <div className="cart-heading">
            <span className="cart-eyebrow">
              YOUR SELECTION
            </span>

            <h1>Your Shopping Bag</h1>

            <p>
              Every fragrance tells a story. Choose yours.
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={42} strokeWidth={1} />

              <h2>Your bag is waiting.</h2>

              <p>
                Discover a fragrance that speaks to your season.
              </p>

              <Link
                to="/collections"
                className="continue-btn"
              >
                EXPLORE COLLECTION <ArrowLeft size={16} />
              </Link>
            </div>
          ) : (
            <div className="cart-layout">

              <div className="cart-items">

                <div className="cart-items-top">
                  <span>PRODUCT</span>
                  <span>QUANTITY</span>
                  <span>SUBTOTAL</span>
                </div>

                {cartItems.map((item) => {
                  const productImage = getProductImage(item)

                  return (
                    <article
                      className="cart-item"
                      key={item.id}
                    >

                      <div className="cart-product">

                        <img
                          src={productImage}
                          alt={item.name}
                          onError={() => {
                            console.error(
                              'Cart image failed:',
                              productImage
                            )
                          }}
                        />

                        <div>
                          <span className="cart-product-label">
                            QUATRÉA FRAGRANCE
                          </span>

                          <h3>{item.name}</h3>

                          <p>100ml Eau de Parfum</p>

                          <strong>
                            {formatPrice(item.price)}
                          </strong>
                        </div>

                      </div>

                      <div className="cart-quantity">

                        <button
                          onClick={() =>
                            updateQuantity(item.id, -1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>

                      </div>

                      <div className="cart-item-total">

                        <strong>
                          {formatPrice(
                            item.price * item.quantity
                          )}
                        </strong>

                        <button
                          className="remove-item"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={16} />
                          <span>Remove</span>
                        </button>

                      </div>

                    </article>
                  )
                })}

                <Link
                  to="/collections"
                  className="back-to-shopping"
                >
                  <ArrowLeft size={16} />
                  CONTINUE SHOPPING
                </Link>

              </div>

              <aside className="cart-summary">

                <span className="cart-product-label">
                  ORDER SUMMARY
                </span>

                <h2>Your order</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="summary-divider" />

                <div className="summary-total">
                  <span>Total</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>

                <button
                  className="checkout-btn"
                  onClick={() =>
                    alert('Checkout will be available soon.')
                  }
                >
                  PROCEED TO CHECKOUT
                </button>

                <p className="secure-note">
                  A thoughtful fragrance experience, from our
                  hands to yours.
                </p>

              </aside>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}

export default Cart