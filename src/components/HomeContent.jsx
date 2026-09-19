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
            BE A Q'UTIE BRIDE
          </h1>
          
          {/* Owner Image Cutout - Use old image until new red suit image is added */}
          <img src="/images/drive_photos/owner%20images/01_20_54_AM_cutout_trimmed.png" alt="Founder" className="layered-owner-img main-hero-img" />
        </div>
      </div>

      <div className="container pt-4">
        {/* Feature Grid - Luxury Overlay Style */}
        <div className="feature-grid">
          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/amish-thakkar-lAY2TAhN06k-unsplash.jpg" alt="Skin Services" className="feature-card-img" />
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Salon Services/Hair/adam-winger-FkAZqQJTbXM-unsplash.jpg" alt="Hair Services" className="feature-card-img" />
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Types of makeup available at Q'riflame/sofia-inductgroup-RW3zjCKHek4-unsplash.jpg" alt="Makeup Services" className="feature-card-img" />
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Salon Services/Mani-Pedi/anna-keibalo-QMgwloa7nQs-unsplash.jpg" alt="Mani-Pedi Services" className="feature-card-img" />
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Salon Services/Mani-Pedi/anna-keibalo-QMgwloa7nQs-unsplash.jpg" alt="Nail Services" className="feature-card-img" />
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Other/ikshana-productions-L-_tcsP-wZc-unsplash.jpg" alt="Mehendi Services" className="feature-card-img" />
          </Link>

          <Link to="/services" className="feature-card">
            <img src="/images/drive_photos/services/Other/rune-enstad-cowLgyb63c4-unsplash.jpg" alt="Other Services" className="feature-card-img" />
          </Link>

          <Link to="/academy" className="feature-card">
            <img src="/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q'riflame/arto-suraj-AmKDdf_ErUA-unsplash.jpg" alt="Academy" className="feature-card-img" />
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
