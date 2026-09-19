import React from 'react';
import './AcademyTopBanner.css';

const AcademyTopBanner = () => {
  return (
    <section className="academy-top-banner">
      <div className="container">
        {/* Updated banner image from downloaded assets */}
        <img 
          src="/images/website/services/Makeup/Bridal packages available at Q'riflame/the-artist-studio-oeKiBmplBtU-unsplash.jpg" 
          alt="Academy Courses Banner" 
          className="top-banner-img"
        />
      </div>
    </section>
  );
};

export default AcademyTopBanner;
