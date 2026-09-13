import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="page_header">
      <div className="container" style={{ maxWidth: '100%', margin: '0 auto', padding: '10px 40px' }}>
        <div className="header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo on the Left */}
          <div className="logo-container">
            <Link to="/" className="logo" aria-label="Salon homepage">
              <img src="/images/drive_photos/owner%20images/logo_trimmed.png" alt="Q'riflame Salon Logo" />
            </Link>
          </div>

          {/* Right Column for Top Bar & Main Nav */}
          <div className="header-right-side">
            
            {/* Top Row: Mini links and Socials */}
            <div className="top-mini-bar">
              <div className="mini-links">
                <Link to="/book-appointment" className="mini-btn">Book Appointment</Link>
                <Link to="/salon-finder" className="mini-btn">Salon Finder <FaMapMarkerAlt size={12} /></Link>
              </div>
              <div className="social-icons">
                <a href="#"><FaEnvelope /></a>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>

            {/* Bottom Row: Main Menu */}
            <nav className="nav-container">
              <ul className="main-menu">
                <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink></li>
                <li><NavLink to="/academy" className={({isActive}) => isActive ? 'active' : ''}>Academy</NavLink></li>
                <li><NavLink to="/our-gallery" className={({isActive}) => isActive ? 'active' : ''}>Gallery</NavLink></li>
                <li><NavLink to="/contact-us" className={({isActive}) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
