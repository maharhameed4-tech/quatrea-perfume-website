
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import perfumes from '../data/perfumes.js'

function Collections() {
  return (
    <>
      <Navbar />

      <main className="collections-page">
        <section className="collections-hero">
          <span>THE WORLD OF QUATRÉA</span>
          <h1>Four seasons. <em>One signature.</em></h1>
          <p>
            Discover four distinctive fragrances, each inspired
            by the beauty and emotion of a different season.
          </p>
        </section>

        <section className="collections-content">
          <div className="collections-heading">
            <span>OUR SIGNATURE FRAGRANCES</span>
            <p>01 — 04</p>
          </div>

          <div className="collections-grid">
            {perfumes.map((perfume, index) => (
              <motion.article
                className="collection-card"
                key={perfume.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <Link to={`/product/${perfume.id}`}>
                  <div className="collection-image">
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src =
                          'https://epocacosmeticos.vteximg.com.br/arquivos/ids/508427-800-800/soleil-neige-tom-ford-perfume-masculino-eau-de-parfum--4-.jpg?v=637985835022300000'
                      }}
                    />
                    <span>{perfume.number} / 04</span>
                    <div className="collection-overlay">
                      <span>DISCOVER FRAGRANCE</span>
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                  <div className="collection-info">
                    <div>
                      <span>THE {perfume.season.toUpperCase()} EDITION</span>
                      <h2>{perfume.name}</h2>
                      <p>{perfume.tagline}</p>
                    </div>
                    <strong>${perfume.price}</strong>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Collections
