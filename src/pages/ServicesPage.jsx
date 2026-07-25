import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <PageHeader title="Our Services" breadcrumbs={[{ label: 'Services' }]} />
      
      <div className="container" style={{ padding: '40px 15px' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Premium Salon Experiences</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
          Explore our wide range of services including bridal makeup, party makeup, airbrush makeup, professional hair styling, and rejuvenating skin care treatments. Our experienced professionals ensure you get the perfect look for any occasion.
        </p>
      </div>

      <Services />
    </>
  );
};

export default ServicesPage;
