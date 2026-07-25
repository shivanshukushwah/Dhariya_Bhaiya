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
      
      <div className="container" style={{ padding: '60px 15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Our Masterpieces</h2>
          <p style={{ maxWidth: '600px', margin: '15px auto', fontSize: '1.1rem' }}>
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
