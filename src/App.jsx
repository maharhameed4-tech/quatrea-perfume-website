
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Collections from './pages/Collections'
import Product from './pages/Product'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
