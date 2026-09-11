import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-grid">
          <div className="welcome-text-content">
            <h4 className="sub-heading">Welcome</h4>
            <h2 className="main-heading">“Where Beauty Becomes Art, Confidence & Possibility.”</h2>
            <p>
              Welcome to Q'riflame Salon & Academy, a destination created for those who believe beauty is an expression of individuality, confidence, and creativity.
            </p>
            <p>
              At Q'riflame, we bring together the world of professional beauty services and purposeful education, creating an environment where every visit can inspire something new. Whether you are looking for a refined transformation, a moment of relaxation, or the opportunity to develop your skills in the beauty industry, we are here to make your journey memorable.
            </p>
            <p>
              Our salon is dedicated to creating personalized experiences that celebrate your unique style, while our academy is designed to nurture aspiring beauty professionals with knowledge, creativity, and practical expertise. We believe that exceptional beauty is not simply created—it is thoughtfully crafted through passion, precision, and continuous learning.
            </p>
            <p>
              From enhancing your personal style to helping you pursue your dreams, Q'riflame is where artistry meets ambition.
            </p>
            <p className="highlight-text">
              Step into Q'riflame Salon & Academy and discover a place where you can look beautiful, feel confident, learn passionately, and grow beyond expectations.
            </p>
          </div>
          <div className="welcome-image-wrapper">
            <img 
              src="/images/drive_photos/owner%20images/01_20_54%20AM.png" 
              alt="Owner" 
              className="welcome-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
