import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/dummy-logo.png" alt="Logo" className="footer-logo" style={{ borderRadius: '50%' }} />
            <p className="footer-about">
              Experience top-notch care at the best premium beauty salon. Our expert makeup artists and premium hair & skincare treatments ensure you always look your best.
            </p>
            <div className="footer-social">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
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
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-contact">
              <li><FaMapMarkerAlt className="contact-icon" /> 123 Fashion Street, Beauty District, Cityville</li>
              <li><FaPhone className="contact-icon" /> <a href="tel:+15551234567">+1 (555) 123-4567</a></li>
              <li><FaEnvelope className="contact-icon" /> <a href="mailto:info@premiumsalon.com">info@premiumsalon.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Premium Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
