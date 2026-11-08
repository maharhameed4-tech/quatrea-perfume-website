import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = JSON.parse(
        localStorage.getItem('quatrea-cart') || '[]'
      )

      const totalItems = savedCart.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
      )

      setCartCount(totalItems)
    }

    updateCartCount()

    window.addEventListener('cartUpdated', updateCartCount)
    window.addEventListener('storage', updateCartCount)

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount)
      window.removeEventListener('storage', updateCartCount)
    }
  }, [])

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="navbar">
      <Link to="/" className="brand-logo">
        QUATRÉA<span>.</span>
        <small>THE ART OF FOUR SEASONS</small>
      </Link>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <Link to="/cart" className="bag-link">
          <ShoppingBag size={19} />
          <span>Bag ({cartCount})</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Navbar