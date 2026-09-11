import React from 'react';
import './MeetFounderSection.css';

const MeetFounderSection = () => {
  return (
    <section className="meet-founder-section">
      <div className="container">
        <div className="section-title text-center">
          <h4 className="sub-heading">The Visionary</h4>
          <h2 className="main-heading">Meet Pratibha Shukla</h2>
          <div className="divider mx-auto"></div>
        </div>
        
        <div className="founder-media-grid">
          {/* Images */}
          <div className="media-item">
            <img src="/images/drive_photos/owner%20images/03.jpg" alt="Pratibha Shukla 1" className="media-img" />
          </div>
          <div className="founder-media-item">
            <img src="/images/drive_photos/owner%20images/01_23_54%20AM.png" alt="Pratibha Shukla 2" className="media-img" />
          </div>
          
          <div className="media-item">
            <img src="/images/drive_photos/owner%20images/name.png" alt="Pratibha Shukla Signature" className="media-img" />
          </div>
          <div className="media-item video-placeholder">
            <div className="play-icon">▶</div>
            <span>Founder Video</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounderSection;
