import React from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
                <input type="text" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Ph no." required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select service</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="reception">Reception Makeup</option>
                  <option value="engagement">Engagement Makeup</option>
                  <option value="airbrush">AirBrush Makeup</option>
                  <option value="academy">Academy Courses</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Type your message" rows="4" required></textarea>
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
