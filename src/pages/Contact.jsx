import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Frontend demo: no email is sent yet.
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: 'General Enquiry',
      message: '',
    })
  }

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-image">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=85"
              alt="Quatréa fragrance"
            />
          </div>
          <div className="contact-hero-overlay" />

          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>WE WOULD LOVE TO HEAR FROM YOU</span>
            <h1>Let's start a <em>conversation.</em></h1>
            <p>
              Questions, thoughts or simply a love for fragrance.
              Our world is always open to you.
            </p>
          </motion.div>
        </section>

        <section className="contact-main">
          <div className="contact-details">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2>A little note can begin something beautiful.</h2>
            <p className="contact-description">
              Whether you need help choosing your fragrance or have a
              question about Quatréa, send us a message.
            </p>

            <div className="contact-detail-item">
              <Mail size={19} />
              <div>
                <span>EMAIL</span>
                <p>hello@quatrea.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <MapPin size={19} />
              <div>
                <span>OUR WORLD</span>
                <p>Inspired by nature, created for everywhere.</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
             <Mail size={18} />
              FOLLOW OUR JOURNEY
              <ArrowUpRight size={15} />
            </a>
          </div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="contact-success">
                <span>THANK YOU</span>
                <h2>Your message is ready.</h2>
                <p>
                  This is a frontend demo. No message has been sent,
                  but the form interaction is working.
                </p>
                <button onClick={() => setSubmitted(false)}>
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <>
                <span className="contact-eyebrow">WRITE TO US</span>
                <h2>Send us a message.</h2>

                <form onSubmit={handleSubmit}>
                  <div className="contact-field">
                    <label htmlFor="contact-name">YOUR NAME</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">EMAIL ADDRESS</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject">SUBJECT</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option>General Enquiry</option>
                      <option>Fragrance Information</option>
                      <option>Order Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message">YOUR MESSAGE</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="contact-submit">
                    SEND MESSAGE <ArrowUpRight size={17} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contact