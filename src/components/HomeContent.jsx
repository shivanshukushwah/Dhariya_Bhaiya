import React from 'react';
import { Link } from 'react-router-dom';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <section className="home-content-section">
      {/* Hero Section - Layered Owner Image (Bhaavya Kapur Style) */}
      <div className="hero-section-custom layered-hero">
        {/* Background Large Outline Text in Motion */}
        <div className="layered-bg-marquee">
          <div className="layered-bg-text-track">
            <span>Q'RIFLAME</span>
            <span>Q'RIFLAME</span>
            <span>Q'RIFLAME</span>
            <span>Q'RIFLAME</span>
          </div>
        </div>
        
        <div className="layered-content-container">
          {/* Foreground Text that sits behind the owner */}
          <h1 className="layered-main-heading">
            BE A Q'RIFLAME BRIDE
          </h1>
          
          {/* Owner Image Cutout */}
          <img src="/images/drive_photos/owner%20images/01_20_54_AM_cutout_trimmed.png" alt="Founder" className="layered-owner-img" />
        </div>
      </div>

      <div className="container pt-4">
        {/* Feature Grid - Luxury Overlay Style */}
        <div className="feature-grid">
          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/amish-thakkar-lAY2TAhN06k-unsplash.jpg" alt="Skin Services" className="feature-card-img" />
            <div className="feature-card-overlay">
              <h3>Skin Services</h3>
              <span className="feature-link">Read More &rarr;</span>
            </div>
          </Link>

          <Link to="/academy" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/arto-suraj-AmKDdf_ErUA-unsplash.jpg" alt="Academy" className="feature-card-img" />
            <div className="feature-card-overlay">
              <h3>Academy</h3>
              <span className="feature-link">Explore Courses &rarr;</span>
            </div>
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/skg-photography-3nYzHXMUV7k-unsplash.jpg" alt="Hair Service" className="feature-card-img" />
            <div className="feature-card-overlay">
              <h3>Hair Service</h3>
              <span className="feature-link">View Treatments &rarr;</span>
            </div>
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/skg-photography-nFR6mRpn8kc-unsplash.jpg" alt="Manicure & Pedicure" className="feature-card-img" />
            <div className="feature-card-overlay">
              <h3>Manicure & Pedicure</h3>
              <span className="feature-link">Read More &rarr;</span>
            </div>
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/skg-photography-z-iEOGOd_kg-unsplash.jpg" alt="Makeup" className="feature-card-img" />
            <div className="feature-card-overlay">
              <h3>Makeup</h3>
              <span className="feature-link">Read More &rarr;</span>
            </div>
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/the-artist-studio-oeKiBmplBtU-unsplash.jpg" alt="Unisex" className="feature-card-img" />
            <div className="feature-card-overlay">
              <h3>Bridal Packages</h3>
              <span className="feature-link">Read More &rarr;</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Call To Action - Full Width Gold/Dark */}
      <div className="cta-banner">
        <div className="container cta-container">
          <div className="cta-text">
            <h2>Transform Your Look Today</h2>
            <p>Join thousands of satisfied clients who have discovered their true beauty with our exclusive salon services.</p>
          </div>
          <div className="cta-action">
            <Link to="/contact-us" className="btn-solid-primary">Book Your Session</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
