import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function OurStory() {
  return (
    <>
      <Navbar />

      <main className="story-page">

        {/* HERO SECTION */}
        <section className="story-hero">
          <div className="story-hero-image">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1800&q=90"
              alt="Luxury perfume bottle"
            />
          </div>

          <div className="story-hero-overlay" />

          <motion.div
            className="story-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span>THE STORY BEHIND QUATRÉA</span>
            <h1>
              A fragrance for
              <br />
              <em>every chapter.</em>
            </h1>
            <p>
              Inspired by nature. Created with intention.
              <br />
              Designed to become part of your story.
            </p>

            <a href="#our-philosophy" className="story-discover">
              DISCOVER OUR WORLD <ArrowDown size={16} />
            </a>
          </motion.div>

          <span className="story-hero-number">01 — THE BEGINNING</span>
        </section>

        {/* BRAND INTRODUCTION */}
        <section className="story-intro" id="our-philosophy">
          <motion.div
            className="story-intro-left"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="story-eyebrow">OUR PHILOSOPHY</span>
            <h2>
              More than a scent.
              <br />
              <em>A feeling that stays.</em>
            </h2>
          </motion.div>

          <motion.div
            className="story-intro-right"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              At Quatréa, we believe fragrance is more than something
              you wear. It is a memory, an emotion, and a quiet expression
              of who you are.
            </p>

            <p>
              Our world is inspired by the rhythm of nature and the
              beauty of its changing seasons. Each fragrance captures
              a different atmosphere, creating an experience that feels
              personal and timeless.
            </p>

            <span className="story-signature">The Quatréa Philosophy</span>
          </motion.div>
        </section>

        {/* VISUAL STORY */}
        <section className="story-visual">
          <div className="story-visual-image">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85"
              alt="Soft spring flowers"
              loading="lazy"
            />
          </div>

          <div className="story-visual-text">
            <span className="story-eyebrow">INSPIRED BY NATURE</span>
            <h2>Nature has its own language.</h2>
            <p>
              In every bloom, every golden afternoon, every falling leaf
              and every quiet snowfall, there is a story waiting to be felt.
            </p>
            <p>
              We translate these moments into fragrances that celebrate
              the beauty of life's changing seasons.
            </p>
          </div>
        </section>

        {/* FOUR SEASONS */}
        <section className="story-seasons">
          <div className="story-seasons-heading">
            <span className="story-eyebrow">FOUR SEASONS. ONE IDENTITY.</span>
            <h2>Every season has a soul.</h2>
            <p>
              Four expressions of nature. Four ways to tell your story.
            </p>
          </div>

          <div className="story-season-grid">
            <article className="story-season-card">
              <img
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85"
                alt="Spring flowers"
                loading="lazy"
              />
              <div>
                <span>01 / SPRING</span>
                <h3>New Beginnings</h3>
                <p>Freshness, flowers and the beauty of renewal.</p>
              </div>
            </article>

            <article className="story-season-card">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85"
                alt="Summer sunshine and ocean"
                loading="lazy"
              />
              <div>
                <span>02 / SUMMER</span>
                <h3>Golden Moments</h3>
                <p>Warmth, freedom and the joy of living.</p>
              </div>
            </article>

            <article className="story-season-card">
              <img
                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=700&q=85"
                alt="Autumn landscape"
                loading="lazy"
              />
              <div>
                <span>03 / AUTUMN</span>
                <h3>Quiet Elegance</h3>
                <p>Depth, warmth and beautiful nostalgia.</p>
              </div>
            </article>

            <article className="story-season-card">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=85"
                alt="Winter forest"
                loading="lazy"
              />
              <div>
                <span>04 / WINTER</span>
                <h3>Silent Beauty</h3>
                <p>Stillness, softness and timeless elegance.</p>
              </div>
            </article>
          </div>
        </section>

        {/* BRAND PROMISE */}
        <section className="story-promise">
          <span className="story-eyebrow">THE QUATRÉA PROMISE</span>
          <h2>
            Wear the moment.
            <br />
            <em>Keep the memory.</em>
          </h2>
          <p>
            Find the fragrance that feels like you.
          </p>
          <Link to="/collections" className="story-collection-link">
            EXPLORE OUR COLLECTION <ArrowUpRight size={17} />
          </Link>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default OurStory