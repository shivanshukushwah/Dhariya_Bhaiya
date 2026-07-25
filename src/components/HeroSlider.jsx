import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <div className="slider-container">
        {/* We use a static image from their slider as an example */}
        <img
          src="/hero-image.webp"
          alt="Salon Hero Slider"
          className="slider-image"
        />
        <div className="slider-overlay">
          <h2>Your Ultimate Beauty Destination</h2>
          <p>Premium Hair, Skin, and Makeup Services</p>
          <Link to="/contact-us" className="btn-outline-primary">Book Now</Link>
        </div>
      </div>

      {/* Floating Book Now Button */}
      <a href="https://wa.me/+918881888797" className="btns book-now desktop" target="_blank" rel="noreferrer" title="Book Now">
        WhatsApp
      </a>

      {/* Mobile Bottom Fixed Buttons */}
      <div className="mobile-fixed">
        <div className="appoint">
          <a href="tel:+918181898181">
            <span>Call Now</span>
          </a>
        </div>
        <div className="call">
          <Link to="/contact-us">
            <span>Book Appointment</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
