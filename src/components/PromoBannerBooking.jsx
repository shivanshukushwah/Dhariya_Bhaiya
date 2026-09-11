import React from 'react';
import './PromoBanners.css';

const PromoBannerBooking = () => {
  return (
    <section className="promo-banner booking-promo">
      <div className="container">
        <div className="promo-content text-center">
          <h2>Makeup Bookings Open</h2>
          <h4 className="sub-text">Till Dec. 2026</h4>
          <p className="services-list">Bridal | Engagement | Reception | Haldi | Mehendi | Party</p>
          
          <div className="highlight-box">
            <p>We provide Wedding services all around U.P.</p>
          </div>
          
          <div className="contact-info">
            <a href="tel:+919838615944" className="phone-number">📞 +91 98386 15944</a>
            <p className="offers-text">Book Now For Exciting Offers & Discounts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBannerBooking;
