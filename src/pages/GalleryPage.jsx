import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import MakeupBanner from '../components/MakeupBanner';
import { FaExpand, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { getGalleryItems } from '../utils/adminStore';
import './GalleryPage.css';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    // Load dynamic gallery items from admin store
    setGalleryItems(getGalleryItems());
  }, []);

  const countForCategory = (cat) => {
    if (cat === 'all') return galleryItems.length;
    return galleryItems.filter(item => item.category === cat).length;
  };

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <>
      <PageHeader title="Our Gallery" breadcrumbs={[{ label: 'Gallery' }]} />
      
      <div style={{ marginTop: '30px' }}>
        <MakeupBanner />
      </div>

      <div className="gallery-page-container">
        <div className="container">
          
          <div className="gallery-header">
            <h2 className="main-heading">Our Portfolio & Certificates</h2>
            <div className="divider mx-auto mb-3"></div>
            <p>
              Explore our academy's certified student achievements, bridal makeovers, studio sessions, and hands-on practical training classes at Q'riflame Salon & Academy.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="gallery-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('all')}
            >
              All Photos ({countForCategory('all')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'certificates' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('certificates')}
            >
              Student Certificates ({countForCategory('certificates')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'bridal' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('bridal')}
            >
              Bridal Makeover ({countForCategory('bridal')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'makeup' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('makeup')}
            >
              Party & Glam Makeup ({countForCategory('makeup')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'academy' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('academy')}
            >
              Academy Classes ({countForCategory('academy')})
            </button>
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id || idx} 
                className={`gallery-card ${item.category === 'certificates' ? 'cert-card' : ''}`}
                onClick={() => openLightbox(idx)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <span className="gallery-card-badge">{item.badge || item.category}</span>
                <div className="gallery-card-overlay">
                  <h4 className="gallery-card-title">{item.title}</h4>
                  <div className="gallery-card-action">
                    <FaExpand /> View Full Size
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <button className="lightbox-nav-btn lightbox-prev" onClick={prevLightbox}>
              <FaChevronLeft />
            </button>
            
            <img 
              src={filteredItems[lightboxIndex].src} 
              alt={filteredItems[lightboxIndex].title} 
              className="lightbox-image" 
            />
            
            <div className="lightbox-caption">
              {filteredItems[lightboxIndex].title}
            </div>

            <button className="lightbox-nav-btn lightbox-next" onClick={nextLightbox}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
