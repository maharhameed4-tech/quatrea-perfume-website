
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Minus,
  Plus,
  Check,
} from 'lucide-react'

import Navbar from '../components/Navbar'
import perfumes from '../data/Perfumes'

function Product() {
  const { id } = useParams()

  const perfume = perfumes.find((item) => item.id === id)

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!perfume) {
    return (
      <main className="not-found">
        <h1>Fragrance not found.</h1>
        <Link to="/collections">Explore our collection</Link>
      </main>
    )
  }

  const addToBag = () => {
    const existingBag = JSON.parse(
      localStorage.getItem('quatrea-cart') || '[]'
    )

    const existingProduct = existingBag.find(
      (item) => item.id === perfume.id
    )

    if (existingProduct) {
  existingProduct.quantity += quantity
  existingProduct.image = perfume.image
} else {
  existingBag.push({
    id: perfume.id,
    name: perfume.name,
    price: perfume.price,
    image: perfume.image,
    quantity,
  })
}

    localStorage.setItem(
      'quatrea-cart',
      JSON.stringify(existingBag)
    )
    window.dispatchEvent(new Event('cartUpdated'))

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="product-page">
      <Navbar />

      <div className="product-breadcrumb">
        <Link to="/">
          <ArrowLeft size={15} /> Home
        </Link>
        <span>/</span>
        <Link to="/collections">Collections</Link>
        <span>/</span>
        <span>{perfume.name}</span>
      </div>

      <section className="product-layout">

        {/* Product image */}

        <motion.div
          className="product-image-area"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ '--product-color': perfume.color }}
        >
          <span className="product-image-number">
            {perfume.number} / 04
          </span>

         <img
    src={perfume.image}
    alt={perfume.name}
     />
 {/* 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/508427-800-800/soleil-neige-tom-ford-perfume-masculino-eau-de-parfum--4-.jpg?v=637985835022300000' */}
          <span className="product-image-caption">
            QUATRÉA — {perfume.season.toUpperCase()}
          </span>
        </motion.div>

        {/* Product information */}

        <motion.div
          className="product-details"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="product-edition">
            THE {perfume.season.toUpperCase()} COLLECTION
          </span>

          <h1>{perfume.name}</h1>

          <p className="product-tagline">
            {perfume.tagline}
          </p>

          <div className="product-price">
            ${perfume.price}.00
            <span>USD</span>
          </div>

          <div className="product-divider"></div>

          <p className="product-description">
            {perfume.description}
          </p>

          <div className="product-size">
            <span>SIZE</span>
            <strong>{perfume.size}</strong>
          </div>

          <div className="product-quantity">
            <span>QUANTITY</span>

            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity((previous) =>
                    Math.max(1, previous - 1)
                  )
                }
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity((previous) => previous + 1)
                }
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button
            className={`add-to-bag ${added ? 'added' : ''}`}
            onClick={addToBag}
          >
            {added ? <Check size={18} /> : <ShoppingBag size={18} />}
            {added ? 'ADDED TO BAG' : 'ADD TO BAG'}
            <ArrowRight size={17} />
          </button>

          <div className="fragrance-notes">
            <span className="notes-heading">
              THE FRAGRANCE NOTES
            </span>

            <div className="notes-list">
              {perfume.notes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          </div>

          <div className="note-details">
            <div>
              <span>TOP NOTES</span>
              <p>{perfume.topNotes}</p>
            </div>

            <div>
              <span>HEART NOTES</span>
              <p>{perfume.heartNotes}</p>
            </div>

            <div>
              <span>BASE NOTES</span>
              <p>{perfume.baseNotes}</p>
            </div>
          </div>

        </motion.div>
      </section>

      <div className="product-bottom">
        <Link to="/collections">
          <ArrowLeft size={16} /> BACK TO COLLECTION
        </Link>

        <span>THE ART OF FOUR SEASONS</span>
      </div>

    </main>
  )
}

export default Product
