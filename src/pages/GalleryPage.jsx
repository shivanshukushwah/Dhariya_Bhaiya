import React from 'react';
import PageHeader from '../components/PageHeader';

const GalleryPage = () => {
  const images = [
    'https://via.placeholder.com/600x800?text=Bridal',
    'https://via.placeholder.com/600x600?text=Hair',
    'https://via.placeholder.com/600x900?text=Skin',
    'https://via.placeholder.com/600x600?text=Nails',
    'https://via.placeholder.com/400x500?text=Gallery+5',
    'https://via.placeholder.com/400x400?text=Gallery+6',
  ];

  return (
    <>
      <PageHeader title="Our Gallery" breadcrumbs={[{ label: 'Gallery' }]} />
      
      <div className="container" style={{ padding: '80px 15px' }}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center', 
          marginBottom: '60px',
          maxWidth: '900px',
          margin: '0 auto 60px auto'
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
            Our Masterpieces
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
            A glimpse into our exquisite makeup and styling sessions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          gridAutoFlow: 'dense'
        }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ 
              overflow: 'hidden', 
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
            }}>
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  transition: 'transform 0.3s ease' 
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Gallery+Image' }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
