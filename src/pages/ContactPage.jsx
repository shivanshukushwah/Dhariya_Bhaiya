import React from 'react';
import PageHeader from '../components/PageHeader';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: 'Contact Us' }]} />
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info Sidebar */}
            <div className="contact-info-box">
              <h3 className="sub-heading">Get In Touch</h3>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>123 Fashion Street, Beauty District, Cityville</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <h4>Contact</h4>
                  <a href="tel:+919838615944">Academy: +91 9838615944</a><br/>
                  <a href="tel:+919838615944">Salon: +91 9838615944</a>
                </div>
              </div>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@qriflamesalon.com">info@qriflamesalon.com</a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-box">
              <h2>Send Us A Message</h2>
              <p>Have a question about our services or academy? Fill out the form below.</p>
              
              <form className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone Number" required />
                  <input type="text" placeholder="Subject" required />
                </div>
                <textarea placeholder="Your Message" rows="6" required></textarea>
                <button type="submit" className="btn-solid-primary">Send Message</button>
              </form>
            </div>

          </div>

          <div className="legal-content">
            <div className="legal-box">
              <h3>Terms & Conditions</h3>
              <p>Welcome to Q'riflame Salon & Academy. By booking an appointment or enrolling in our academy, you agree to our terms of service...</p>
              <a href="/terms-and-conditions" className="btn-outline-primary btn-sm mt-3">Read More</a>
            </div>
            <div className="legal-box">
              <h3>Privacy Policy</h3>
              <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information...</p>
              <a href="/privacy-policy" className="btn-outline-primary btn-sm mt-3">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
