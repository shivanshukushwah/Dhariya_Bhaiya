import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo-link">
              <img src="/images/drive_photos/owner%20images/logo.png" alt="Q'riflame Salon Logo" className="footer-logo" />
            </Link>
            <p className="footer-about">
              Experience top-notch care at the best premium beauty salon. Our expert makeup artists and premium hair & skincare treatments ensure you always look your best.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/founder">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/our-gallery">Gallery</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><Link to="/admin" style={{ opacity: 0.7, fontSize: '0.85rem' }}>🔐 Admin Panel</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-contact">
              <li><FaPhone className="contact-icon" /> <a href="tel:+919838615944">Academy: +91 9838615944</a></li>
              <li><FaPhone className="contact-icon" /> <a href="tel:+919838615944">Salon: +91 9838615944</a></li>
              <li><FaMapMarkerAlt className="contact-icon" /> <span>123 Premium Salon Street,<br />New York, NY 10001</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content" style={{ justifyContent: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Q'riflame Salon & Academy. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
