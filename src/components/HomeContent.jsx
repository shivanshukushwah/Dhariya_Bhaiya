import React from 'react';
import { Link } from 'react-router-dom';
import { FaGem, FaGraduationCap, FaSpa } from 'react-icons/fa';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <section className="home-content-section">
      <div className="container">
        
        {/* About Section - Split Layout */}
        <div className="about-split">
          <div className="about-image-wrapper">
            <img src="/salon_interior.png" alt="Premium Salon Interior" className="about-img" />
            <div className="about-img-overlay"></div>
          </div>
          <div className="about-text-wrapper">
            <h4 className="sub-heading">Discover Elegance</h4>
            <h2 className="main-heading">Experience The Pinnacle Of Luxury Beauty</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="description">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>
            <Link to="/contact-us" className="btn-solid-primary mt-4">Discover More</Link>
          </div>
        </div>

        {/* Feature Grid - Glassmorphism Style */}
        <div className="features-header text-center">
          <h4 className="sub-heading">Our Expertise</h4>
          <h2 className="main-heading">Premium Services Tailored For You</h2>
        </div>
        
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon"><FaGem /></div>
            <h3>Bridal Artistry</h3>
            <p>
              Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.
            </p>
            <Link to="/services" className="feature-link">Read More &rarr;</Link>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon"><FaGraduationCap /></div>
            <h3>Beauty Academy</h3>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.
            </p>
            <Link to="/academy" className="feature-link">Explore Courses &rarr;</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><FaSpa /></div>
            <h3>Luxury Spa & Care</h3>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <Link to="/services" className="feature-link">View Treatments &rarr;</Link>
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
