import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="page_header">
      <div className="container-fluid">
        {/* Top Bar for Desktop */}
        <div className="top-bar">
          <div className="top-bar-right">
            <a href="/book-appointment" className="top-btn">Book Appointment</a>
            <a href="/locate-salon" className="top-btn">Salon Finder <FaMapMarkerAlt /></a>
            <a href="mailto:info@premiumsalon.com" className="social-link" aria-label="Email"><FaEnvelope /></a>
            <a href="#" className="social-link" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="social-link" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Main Header */}
        <div className="main-header">
          <div className="logo-container">
            <Link to="/" className="logo" aria-label="Salon homepage">
              <img src="/dummy-logo.png" alt="Dummy Salon Logo" style={{ borderRadius: '50%' }} />
            </Link>
          </div>

          <div className="nav-container">
            <nav className="top-nav">
              <ul className="nav sf-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/academy">Academy</Link></li>
                <li><Link to="/our-gallery">Gallery</Link></li>
                <li><Link to="/blog">Blogs</Link></li>
                <li><Link to="/founder">Meet The Founder</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
