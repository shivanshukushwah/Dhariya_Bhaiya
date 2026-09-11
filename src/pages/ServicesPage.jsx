import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import FAQ from '../components/FAQ';

const ServicesPage = () => {
  return (
    <>
      <PageHeader title="Our Services" breadcrumbs={[{ label: 'Services' }]} />
      
      <div className="container" style={{ 
        padding: '80px 15px', 
        textAlign: 'center', 
        maxWidth: '900px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ 
          color: 'var(--primary-color)', 
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          position: 'relative',
          paddingBottom: '15px'
        }}>
          Premium Salon Experiences
          <span style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            backgroundColor: 'var(--primary-color)',
            borderRadius: '2px'
          }}></span>
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          color: '#555',
          marginTop: '20px',
          marginBottom: '20px' 
        }}>
          Explore our wide range of services including bridal makeup, party makeup, airbrush makeup, professional hair styling, and rejuvenating skin care treatments. Our experienced professionals ensure you get the perfect look for any occasion.
        </p>
      </div>

      <Services />
      
      <FAQ />
    </>
  );
};

export default ServicesPage;
