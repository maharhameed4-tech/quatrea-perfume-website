
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const seasons = [
  {
    id: 'spring',
    number: '01',
    name: 'Spring',
    perfume: 'Fleur de Vie',
    subtitle: 'Where life begins again.',
    notes: 'ROSE · PEONY · WHITE MUSK',
    color: '#e9c8c7',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'summer',
    number: '02',
    name: 'Summer',
    perfume: 'Soléa',
    subtitle: 'Chase the warmth of life.',
    notes: 'CITRUS · BERGAMOT · AMBER',
    color: '#dfc28e',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'autumn',
    number: '03',
    name: 'Autumn',
    perfume: 'Ambre Noir',
    subtitle: 'A beautiful kind of nostalgia.',
    notes: 'SANDALWOOD · VANILLA · OUD',
    color: '#b77d5e',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'winter',
    number: '04',
    name: 'Winter',
    perfume: 'Nuit Blanche',
    subtitle: 'The elegance of silence.',
    notes: 'MUSK · IRIS · CEDARWOOD',
    color: '#b9c9d6',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85',
  },
]

function SeasonSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      const heading = section.querySelector('.season-heading')
      const grid = section.querySelector('.season-grid')
      const cards = section.querySelectorAll('.season-card')

      if (heading) {
        gsap.from(heading, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 75%',
            once: true,
          },
        })
      }

      if (grid && cards.length > 0) {
        gsap.from(cards, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            once: true,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="seasons-section"
      ref={sectionRef}
      id="collections"
    >
      <div className="seasons-container">
        <div className="season-heading">
          <div className="season-topline">
            <span>THE QUATRÉA COLLECTION</span>
            <span>FOUR UNIQUE EXPERIENCES</span>
          </div>

          <h2>
            Four seasons.
            <br />
            <span>Four identities.</span>
          </h2>

          <p>
            Nature changes its colors. We capture its emotions.
            Discover the fragrance that speaks to your season.
          </p>
        </div>

        <div className="season-grid">
          {seasons.map((season) => (
            <article
              className="season-card"
              key={season.id}
              style={{ '--season-color': season.color }}
            >
              <div className="season-image">
                <img
                  src={season.image}
                  alt={`${season.name} inspired fragrance`}
                  loading="lazy"
                />

                <div className="season-image-overlay"></div>

                <span className="season-number">
                  {season.number} / 04
                </span>

                <span className="season-name">
                  {season.name}
                </span>

                <Link
                  to={`/product/${season.id}`}
                  className="season-explore"
                  aria-label={`Explore ${season.perfume}`}
                >
                  <ArrowUpRight size={21} />
                </Link>
              </div>

              <div className="season-info">
                <div>
                  <span className="season-label">
                    THE {season.name.toUpperCase()} EDITION
                  </span>
                  <h3>{season.perfume}</h3>
                  <p>{season.subtitle}</p>
                </div>

                <span className="season-notes">
                  {season.notes}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="season-footer">
          <span>01 — 04</span>
          <span>FIND YOUR SEASON. FIND YOUR SCENT.</span>
          <Link to="/collections">
            VIEW ALL COLLECTIONS <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SeasonSection
