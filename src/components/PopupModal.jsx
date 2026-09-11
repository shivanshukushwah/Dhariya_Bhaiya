import React, { useState, useEffect } from 'react';
import './PopupModal.css';

const PopupModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open popup automatically after 2 seconds
    const timer = setTimeout(() => {
      // Check if it has been opened in this session to avoid annoying the user on every navigation
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsModalOpen(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
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
          <h2>Book your beauty session</h2>
          <form className="booking-form" onSubmit={handleSubmit}>
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
              </select>
            </div>
            <button type="submit" className="btn-solid-primary">Book now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
