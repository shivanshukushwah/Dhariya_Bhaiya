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
            <img src="/images/drive_photos/owner%20images/10_39_01%20PM.png" alt="Pratibha Shukla Action 1" className="media-img" />
          </div>
          <div className="media-video-item">
            {/* Please download a video from the drive, drop it in public/images/drive_photos/, and name it founder_video.mp4 */}
            <video 
              src="/images/drive_photos/founder_video.mp4" 
              autoPlay 
              loop 
              muted 
              controls 
              className="founder-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="media-item">
            <img src="/images/drive_photos/owner%20images/01_10_46%20AM.png" alt="Pratibha Shukla Action 4" className="media-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounderSection;
