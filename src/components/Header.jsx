import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="page_header">
      <div className="header-container">
        <div className="header-inner">
          
          {/* Logo on the Left */}
          <div className="logo-container">
            <Link to="/" className="logo" aria-label="Salon homepage" onClick={closeMenu}>
              <img src="/images/drive_photos/owner%20images/logo_trimmed.png" alt="Q'riflame Salon Logo" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Right Column for Main Nav */}
          <div className={`header-right-side ${isMenuOpen ? 'mobile-open' : ''}`}>
            
            {/* Main Menu Navigation */}
            <nav className="nav-container">
              <ul className="main-menu">
                <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Services</NavLink></li>
                <li><NavLink to="/academy" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Academy</NavLink></li>
                <li><NavLink to="/our-gallery" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Gallery</NavLink></li>
                <li><NavLink to="/faq" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>FAQ</NavLink></li>
                <li><NavLink to="/contact-us" className={({isActive}) => isActive ? 'active' : ''} onClick={closeMenu}>Contact Us</NavLink></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

