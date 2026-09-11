import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="page_header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href="/locate-salon" className="top-link"><FaMapMarkerAlt /> Salon Finder</a>
              <a href="mailto:info@premiumsalon.com" className="top-link"><FaEnvelope /> info@premiumsalon.com</a>
            </div>
            <div className="top-bar-right">
              <span className="follow-text">Follow Us:</span>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div className="header-inner">
            <div className="logo-container">
              <Link to="/" className="logo" aria-label="Salon homepage">
                <img src="/images/drive_photos/owner%20images/logo.png" alt="Q'riflame Salon Logo" />
              </Link>
            </div>

            <nav className="nav-container">
              <ul className="main-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/academy">Academy</Link></li>
                <li><Link to="/our-gallery">Gallery</Link></li>
                <li><Link to="/founder">Meet The Founder</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </nav>

            <div className="header-actions">
              <a href="/book-appointment" className="btn-book">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
