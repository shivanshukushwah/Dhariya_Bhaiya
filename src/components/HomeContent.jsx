import React from 'react';
import { Link } from 'react-router-dom';
import { FaGem, FaGraduationCap, FaSpa } from 'react-icons/fa';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <section className="home-content-section">
      {/* Hero Section - Full Width */}
      <div className="hero-section-custom" style={{ backgroundImage: "url('/hero-image.webp')" }}>
        <div className="hero-overlay-dark"></div>
        <div className="container hero-container-relative">
          <div className="hero-text-content text-center">
            <h4 className="hero-sub-heading">Q'RIFLAME SALON & ACADEMY</h4>
            <h1 className="hero-main-heading">DISCOVER YOUR TRUE BEAUTY</h1>
            <p className="hero-description mx-auto">
              Experience the pinnacle of luxury beauty. We offer premium makeup, bridal, and salon services tailored to make you look and feel your absolute best.
            </p>
            <Link to="/book-appointment" className="btn-solid-primary mt-4">Book Appointment</Link>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Feature Grid - Glassmorphism Style */}
        <div className="features-header text-center pt-5">
          <h4 className="sub-heading">Our Expertise</h4>
          <h2 className="main-heading">Premium Services Tailored For You</h2>
        </div>
        
        <div className="feature-grid">
          <div className="feature-card">
            <img src="/images/drive_photos/services/Other/kimia-zarifi-AVJ321HJFl4-unsplash.jpg" alt="Skin Services" className="feature-card-img" />
            <h3>Skin Services</h3>
            <Link to="/services" className="feature-link">Read More &rarr;</Link>
          </div>
          <div className="feature-card">
            <img src="/images/drive_photos/services/Other/rune-enstad-cowLgyb63c4-unsplash.jpg" alt="Academy" className="feature-card-img" />
            <h3>Academy</h3>
            <Link to="/academy" className="feature-link">Explore Courses &rarr;</Link>
          </div>
          <div className="feature-card">
            <img src="/images/drive_photos/services/Other/shankar-mridha-PfNPSVa7OE0-unsplash.jpg" alt="Hair Service" className="feature-card-img" />
            <h3>Hair Service</h3>
            <Link to="/services" className="feature-link">View Treatments &rarr;</Link>
          </div>
          <div className="feature-card">
            <img src="/images/drive_photos/services/Other/samantha-peralta-6udzUgtewa0-unsplash.jpg" alt="Manicure & Pedicure" className="feature-card-img" />
            <h3>Manicure & Pedicure</h3>
            <Link to="/services" className="feature-link">Read More &rarr;</Link>
          </div>
          <div className="feature-card">
            <img src="/images/drive_photos/services/Other/ikshana-productions-L-_tcsP-wZc-unsplash.jpg" alt="Makeup" className="feature-card-img" />
            <h3>Makeup</h3>
            <Link to="/services" className="feature-link">Read More &rarr;</Link>
          </div>
          <div className="feature-card">
            <img src="/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/1.jpg" alt="Unisex" className="feature-card-img" />
            <h3>Unisex</h3>
            <Link to="/services" className="feature-link">Read More &rarr;</Link>
          </div>
        </div>

      </div>

      {/* Call To Action - Full Width Gradient */}
      <div className="cta-banner">
        <div className="container cta-container">
          <div className="cta-text">
            <h2>Transform Your Look Today</h2>
            <p>Join thousands of satisfied clients who have discovered their true beauty with our exclusive salon services.</p>
          </div>
          <div className="cta-action">
            <Link to="/contact-us" className="btn-cta-white">Book Appointment</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
