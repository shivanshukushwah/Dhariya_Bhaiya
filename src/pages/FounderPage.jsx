import React from 'react';
import PageHeader from '../components/PageHeader';

const FounderPage = () => {
  return (
    <>
      <PageHeader title="Meet The Founder" breadcrumbs={[{ label: 'Meet The Founder' }]} />
      
      <div className="container" style={{ padding: '60px 15px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img 
            src="https://via.placeholder.com/250?text=Founder" 
            alt="Founder" 
            style={{ width: '250px', borderRadius: '50%', border: '5px solid var(--primary-color)', marginBottom: '20px' }}
          />
          <h2 style={{ color: 'var(--primary-color)' }}>The Inspiring Journey</h2>
        </div>
        
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' }}>
          Our founder is a leading makeup artist and beauty expert based in Cityville. With years of experience in the beauty industry, she has established herself as a trusted name for bridal makeup, celebrity styling, and professional beauty training.
        </p>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
          Her journey began with a simple passion for makeup and aesthetics, which quickly grew into a thriving business. Today, our academy trains hundreds of aspiring makeup artists, and our studios are the go-to destination for brides looking for that perfect, flawless look on their special day.
        </p>

        <div style={{ background: 'var(--bg-darker)', color: 'var(--text-light)', padding: '30px', borderRadius: '10px' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Awards & Recognition</h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px', lineHeight: '2' }}>
            <li>Best Bridal Makeup Artist in Cityville</li>
            <li>Excellence in Beauty Training</li>
            <li>Featured in Top Beauty Magazines</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FounderPage;
