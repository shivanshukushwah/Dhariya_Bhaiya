import React from 'react';
import './PromoBanners.css';

const PromoBannerBooking = () => {
  return (
    <section className="makeup-banner-section" style={{ padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <img 
          src="/images/drive_photos/makeup_bookings_poster.png" 
          alt="Makeup Bookings Open Till Dec 2026" 
          style={{ width: '100%', maxWidth: '1200px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', display: 'block' }}
        />
      </div>
    </section>
  );
};

export default PromoBannerBooking;
