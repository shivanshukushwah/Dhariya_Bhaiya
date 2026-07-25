import React from 'react';
import PageHeader from '../components/PageHeader';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: 'Contact Us' }]} />
      
      <div className="container" style={{ padding: '60px 15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
          
          {/* Contact Info Sidebar */}
          <div style={{ background: 'var(--bg-darker)', color: 'var(--text-light)', padding: '40px', borderRadius: '10px' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '30px' }}>Get In Touch</h3>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <FaMapMarkerAlt style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
              <div>
                <h4 style={{ marginBottom: '5px' }}>Head Office</h4>
                <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>123 Fashion Street, Beauty District, Cityville</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <FaPhone style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
              <div>
                <h4 style={{ marginBottom: '5px' }}>Phone</h4>
                <a href="tel:+918181898181" style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>+91 81818 98181</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <FaEnvelope style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
              <div>
                <h4 style={{ marginBottom: '5px' }}>Email</h4>
                <a href="mailto:info@premiumsalon.com" style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>info@premiumsalon.com</a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '10px' }}>
            <h2 style={{ color: 'var(--bg-dark)', marginBottom: '10px' }}>Send Us A Message</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>Have a question about our services or academy? Fill out the form below.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="text" placeholder="Your Name" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }} />
                <input type="email" placeholder="Your Email" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="tel" placeholder="Phone Number" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }} />
                <input type="text" placeholder="Subject" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }} />
              </div>
              <textarea placeholder="Your Message" rows="6" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>
              <button type="button" className="btn-outline-primary" style={{ background: 'var(--primary-color)', color: '#fff', alignSelf: 'flex-start', padding: '12px 30px' }}>Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
