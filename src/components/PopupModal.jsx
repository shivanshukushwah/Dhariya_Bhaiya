import React, { useState, useEffect } from 'react';
import { addEnquiry } from '../utils/adminStore';
import './PopupModal.css';

const PopupModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  useEffect(() => {
    // Open popup automatically after 2 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEnquiry({
      name,
      phone,
      service,
      message: `Popup session booking request for ${service || 'General Service'}`,
      source: 'Popup Modal Booking'
    });
    alert(`Thank you, ${name}! Your booking request for ${service || 'session'} has been submitted.`);
    setName('');
    setPhone('');
    setService('');
    setIsModalOpen(false);
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
              <input 
                type="text" 
                placeholder="Full name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                placeholder="Ph no." 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <select 
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Select service</option>
                <option value="Skin Care">Skin</option>
                <option value="Hair Styling">Hair</option>
                <option value="Bridal & Party Makeup">Makeup</option>
                <option value="Mani-Pedi">Mani-pedi</option>
                <option value="Nail Art & Extensions">Nail</option>
                <option value="Mehendi">Mehendi</option>
                <option value="Academy Courses">Academy</option>
                <option value="Other Services">Others</option>
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
