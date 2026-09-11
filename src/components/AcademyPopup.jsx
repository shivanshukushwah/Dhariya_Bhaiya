import React, { useState, useEffect } from 'react';
import './PopupModal.css';

const AcademyPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open popup automatically after 2 seconds
    const timer = setTimeout(() => {
      // Use a different key so it triggers independently from the Home page popup
      const hasSeenAcademyPopup = sessionStorage.getItem('hasSeenAcademyPopup');
      if (!hasSeenAcademyPopup) {
        setIsModalOpen(true);
        sessionStorage.setItem('hasSeenAcademyPopup', 'true');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsModalOpen(false); // Close modal on submit
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
        <div className="booking-card popup-booking-card">
          <h2>Become a Certified Artist</h2>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Full name" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone number" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select course</option>
                <option value="cosmetology">Complete Professional Cosmetology</option>
                <option value="makeup">Professional Makeup Course</option>
                <option value="hair">Professional Hair Course</option>
                <option value="skin">Professional Skin Course</option>
                <option value="nail">Nail Extension & Art Course</option>
                <option value="mehndi">Professional Mehndi Artist Course</option>
              </select>
            </div>
            <button type="submit" className="btn-solid-primary">Enroll Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AcademyPopup;
