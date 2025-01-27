import React from "react";
import { motion } from "framer-motion";
import "./styles.css"; // Global CSS file import

export default function OnePageAsphaltStripingSite() {
  return (
    <div className="container">
      {/* Floating "Request a Quote" Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="#quote"
        className="quote-button"
      >
        Request a Quote
      </motion.a>

      {/* Hero / Landing Section */}
      <section id="hero" className="hero-section">
        <div className="overlay" />
        <div className="hero-content">
          <h1>Arrow Asphalt Striping</h1>
          <p>Professional Pavement Marking &amp; Line Striping Services</p>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>Our Line Striping Services</h2>
          <p>
            We specialize in bright, durable, and highly visible pavement
            markings.
          </p>
        </div>
        <div className="carousel-placeholder">
          <span>Photo Carousel Placeholder</span>
        </div>
      </section>

      {/* Reviews & Work Showcase Section */}
      <section id="reviews" className="reviews-section">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>We let our work and our customers' words speak for themselves.</p>
        </div>
        <div className="carousel-placeholder">
          <span>Review Carousel Placeholder</span>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="quote-section">
        <div className="quote-container">
          <h2>Request a Quote</h2>
          <p>
            Fill out the form below to request a quote and we’ll get back to you
            shortly.
          </p>
          <form className="quote-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="(123) 456-7890" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <div className="form-submit">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="submit-button"
              >
                Send Request
              </motion.button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>
          © {new Date().getFullYear()} Arrow Asphalt Striping. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
