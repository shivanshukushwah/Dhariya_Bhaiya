import React from 'react';
import './MakeupBanner.css';

const MakeupBanner = () => {
  return (
    <section className="makeup-banner-section">
      <div className="container">
        {/* Please drop your poster image in public/images/drive_photos/ and name it makeup_poster.png */}
        <img 
          src="/images/drive_photos/makeup_bookings_poster.png" 
          alt="Makeup Bookings Open Till Dec 2026" 
          className="makeup-poster-img"
        />
      </div>
    </section>
  );
};

export default MakeupBanner;
