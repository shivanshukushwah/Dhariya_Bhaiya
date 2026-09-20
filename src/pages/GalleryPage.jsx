import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import MakeupBanner from '../components/MakeupBanner';
import { FaExpand, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './GalleryPage.css';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    // --- Certificates from 15 Days Course ---
    { src: '/images/certificates/15_days_class/aditi_paswan_15_DAYS.png', title: 'Aditi Paswan - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/anjani_ydv_15_DAYS.png', title: 'Anjani Yadav - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/arpita_jaiswal_15_DAYS.png', title: 'Arpita Jaiswal - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/bharti_gupta_15_DAYS.png', title: 'Bharti Gupta - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/chandani_15_DAYS.png', title: 'Chandani - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/geeta_devi_15_DAYS.png', title: 'Geeta Devi - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/jyotsana_tripathi_15_DAYS.png', title: 'Jyotsana Tripathi - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/kusumlata_gautam_15_DAYS.png', title: 'Kusumlata Gautam - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/madhu_jyotsna_15_DAYS.png', title: 'Madhu Jyotsna - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/mamta_devi_15_DAYS.png', title: 'Mamta Devi - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/NISHA_CHAUDHARY_15_DAYS.png', title: 'Nisha Chaudhary - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/payal_maurya_15_DAYS.png', title: 'Payal Maurya - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/pinki_chaurasia_15_DAYS.png', title: 'Pinki Chaurasia - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/simran_jaiswal_15_DAYS.png', title: 'Simran Jaiswal - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/suman_15_DAYS.png', title: 'Suman - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/sunanda_sahani_15_DAYS.png', title: 'Sunanda Sahani - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },
    { src: '/images/certificates/15_days_class/vandana_srivastav_15_DAYS.png', title: 'Vandana Srivastav - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert' },

    // --- Certificates from Full Course ---
    { src: '/images/certificates/full_course/archana_sharma.png', title: 'Archana Sharma - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/bharti_gupta_full.png', title: 'Bharti Gupta - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/kiranpandey.png', title: 'Kiran Pandey - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/mohammadarman.png', title: 'Mohammad Arman - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/neha_kumari_full.png', title: 'Neha Kumari - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/nisha_chaudhary_full.png', title: 'Nisha Chaudhary - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/nishapandey.png', title: 'Nisha Pandey - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/payal_maurya_full.png', title: 'Payal Maurya - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/reema_singh_full.png', title: 'Reema Singh - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/rinku_devi_full.png', title: 'Rinku Devi - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/shakuntala.png', title: 'Shakuntala - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },
    { src: '/images/certificates/full_course/vibhajaiswal.png', title: 'Vibha Jaiswal - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert' },

    // --- Bridal Photos ---
    { src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/amish-thakkar-lAY2TAhN06k-unsplash.jpg", title: "Royal Bridal Transformation", category: "bridal", badge: "Bridal" },
    { src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/arto-suraj-AmKDdf_ErUA-unsplash.jpg", title: "Traditional Bridal Makeup", category: "bridal", badge: "Bridal" },
    { src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/skg-photography-3nYzHXMUV7k-unsplash.jpg", title: "HD Bridal Artistry", category: "bridal", badge: "Bridal" },
    { src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/skg-photography-nFR6mRpn8kc-unsplash.jpg", title: "Airbrush Bridal Finish", category: "bridal", badge: "Bridal" },
    { src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/skg-photography-z-iEOGOd_kg-unsplash.jpg", title: "Reception Glam Look", category: "bridal", badge: "Bridal" },

    // --- Makeup & Styling Photos ---
    { src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/ajoy-das-s67IGorOgFM-unsplash.jpg", title: "Engagement Glam Look", category: "makeup", badge: "Makeup" },
    { src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/chalo-garcia-4gK1Vy2sdJ0-unsplash.jpg", title: "Party Glam Makeup", category: "makeup", badge: "Makeup" },
    { src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/ikshana-productions-PO97e-4VdKg-unsplash.jpg", title: "Editorial Makeup Artistry", category: "makeup", badge: "Makeup" },
    { src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/jaffar-sathick-G8_D3WdG-Zc-unsplash.jpg", title: "Nude Elegance Styling", category: "makeup", badge: "Makeup" },
    { src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/rejaul-karim-6tOps3-A_18-unsplash.jpg", title: "Smokey Eye Glamour", category: "makeup", badge: "Makeup" },

    // --- Academy & Training Photos ---
    { src: "/images/drive_photos/owner images/01_04_23 AM.png", title: "Live Academy Masterclass", category: "academy", badge: "Academy" },
    { src: "/images/drive_photos/owner images/01_07_52 AM.png", title: "Practical Hands-on Practice", category: "academy", badge: "Academy" },
    { src: "/images/drive_photos/owner images/01_10_46 AM.png", title: "Personalized Student Guidance", category: "academy", badge: "Academy" },
    { src: "/images/drive_photos/owner images/01_14_33 AM.png", title: "Hairstyling Technique Session", category: "academy", badge: "Academy" },
    { src: "/images/drive_photos/owner images/_DSC2177.JPG.jpeg", title: "Academy Founder - Pratibha Shukla", category: "academy", badge: "Academy" },
    { src: "/images/drive_photos/owner images/01_23_54 AM.png", title: "Academy Training Studio", category: "academy", badge: "Academy" }
  ];

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
              All Photos ({galleryItems.length})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'certificates' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('certificates')}
            >
              Student Certificates (29)
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'bridal' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('bridal')}
            >
              Bridal Makeover (5)
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'makeup' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('makeup')}
            >
              Party & Glam Makeup (5)
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'academy' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('academy')}
            >
              Academy Classes (6)
            </button>
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`gallery-card ${item.category === 'certificates' ? 'cert-card' : ''}`}
                onClick={() => openLightbox(idx)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <span className="gallery-card-badge">{item.badge}</span>
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
      {lightboxIndex !== null && (
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
