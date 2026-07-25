import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Bridal Makeup', image: 'https://via.placeholder.com/600x400?text=Bridal+Makeup' },
    { title: 'Hair Styling', image: 'https://via.placeholder.com/600x400?text=Hair+Styling' },
    { title: 'Skin Care', image: 'https://via.placeholder.com/600x400?text=Skin+Care' },
    { title: 'Nail Art', image: 'https://via.placeholder.com/600x400?text=Nail+Art' }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Discover our range of premium beauty services</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image-container">
                {/* Fallback image logic if the url fails since we can't be 100% sure the assets exist like this */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image" 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=' + service.title }}
                />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <a href="/book-appointment" className="services-button">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
