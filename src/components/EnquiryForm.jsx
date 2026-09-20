import React, { useState } from 'react';
import { addEnquiry } from '../utils/adminStore';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEnquiry({
      name,
      phone,
      service,
      message,
      source: 'Home Enquiry Form'
    });
    alert(`Thank you, ${name}! Your enquiry has been received. Our team will contact you shortly on ${phone}.`);
    setName('');
    setPhone('');
    setService('');
    setMessage('');
  };

  return (
    <section className="enquiry-section">
      <div className="container">
        <div className="enquiry-wrapper">
          <div className="enquiry-content">
            <h4 className="sub-heading">Get in Touch</h4>
            <h2 className="main-heading">Enquire Now</h2>
            <p>
              We'd love to hear from you. Fill out the form below and our team will get back to you shortly to assist with your beauty needs.
            </p>
          </div>
          
          <div className="enquiry-form-container">
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Ph no." 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Select service</option>
                  <option value="skin">Skin Services</option>
                  <option value="hair">Hair Styling & Spa</option>
                  <option value="makeup">Bridal & Party Makeup</option>
                  <option value="manipedi">Mani-Pedi</option>
                  <option value="nail">Nail Extensions & Art</option>
                  <option value="mehendi">Mehendi Art</option>
                  <option value="academy">Academy & Courses</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Type your message" 
                  rows="4" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-solid-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
