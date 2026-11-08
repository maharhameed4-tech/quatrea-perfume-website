
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SeasonSection from '../components/SeasonSection'

function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <section className="hero-section">

        {/* Background decoration */}
        <div className="hero-circle"></div>

        {/* Left content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <span className="eyebrow-line"></span>
            THE ART OF FOUR SEASONS
          </span>

          <h1>
            A fragrance
            <br />
            for every
            <br />
            <span>feeling.</span>
          </h1>

          <p className="hero-description">
            Four seasons. Four emotions. Four extraordinary
            fragrances crafted to make every moment unforgettable.
          </p>

          <div className="hero-buttons">
            <Link to="/collections" className="primary-button">
              EXPLORE COLLECTION
              <ArrowRight size={17} />
            </Link>

            <Link to="/our-story" className="text-button">
              Discover our story
            </Link>
          </div>

          <div className="hero-bottom-note">
            <span>01 — 04</span>
            <span>SCENT IS A JOURNEY</span>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury perfume bottle"
            />

            <div className="image-overlay"></div>

            <div className="image-caption">
              <span>THE SIGNATURE COLLECTION</span>
              <span>EST. MMXXIV</span>
            </div>
          </div>

          <div className="floating-label">
            <span className="floating-number">04</span>
            <span>SCENTS</span>
            <span>ONE UNIVERSE</span>
          </div>

          <div className="vertical-caption">
            DISCOVER THE EXTRAORDINARY
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#seasons"
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDownRight size={17} />
          SCROLL TO EXPLORE
        </motion.a>

      </section>

      {/* Next section placeholder */}
      <section className="intro-section" id="seasons">
        <span className="eyebrow">BEYOND THE ORDINARY</span>

        <h2>
          Every season tells
          <br />
          <span>its own story.</span>
        </h2>

        <p>
          Discover four distinctive fragrances inspired by the
          beauty, mystery and emotion of nature's changing seasons.
        </p>
      </section>
      <SeasonSection />
    </main>
  )
}

export default Home
