import React from 'react';
import './PromoBanners.css';

const PromoBannerCourses = () => {
  return (
    <section className="promo-banner courses-promo">
      <div className="container">
        <div className="courses-promo-grid">
          
          <div className="promo-left">
            <h2 className="title-script">Professional Courses</h2>
            <div className="subtitle-box">
              <p>From <strong>beginner</strong> to a <strong>leading expert</strong> in the beauty industry</p>
            </div>
            <p className="topics-list">SKIN | HAIR | MAKEUP | NAIL | HAIRSTYLING | PERSONALITY DEVELOPMENT</p>
            
            <div className="emi-badge">
              EMI OPTION AVAILABLE
            </div>
            
            <div className="contact-box mt-4">
              <a href="tel:+919838615944" className="phone-number">📞 +91 98386 15944</a>
            </div>
          </div>

          <div className="promo-right">
            <div className="certified-badge">
              <h3>BECOME A</h3>
              <h2>Q'riflame</h2>
              <p>CERTIFIED MAKEUP ARTIST</p>
            </div>
            
            <div className="free-kit-badge mt-4">
              ENROLL NOW TO CLAIM<br/>
              YOUR MAKEUP KIT FOR<br/>
              <strong>FREE!!</strong>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PromoBannerCourses;
