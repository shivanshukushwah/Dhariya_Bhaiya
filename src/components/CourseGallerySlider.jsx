import React from 'react';
import './CourseGallerySlider.css';

const CourseGallerySlider = () => {
  const images = [
    "/images/website/services/Makeup/Types of makeup available at Q'riflame/ajoy-das-s67IGorOgFM-unsplash.jpg",
    "/images/website/services/Makeup/Types of makeup available at Q'riflame/chalo-garcia-4gK1Vy2sdJ0-unsplash.jpg",
    "/images/website/services/Makeup/Types of makeup available at Q'riflame/ikshana-productions-PO97e-4VdKg-unsplash.jpg",
    "/images/website/services/Makeup/Types of makeup available at Q'riflame/jaffar-sathick-G8_D3WdG-Zc-unsplash.jpg",
    "/images/website/services/Salon Services/Hair/kareya-saleh-tLKOj6cNwe0-unsplash.jpg",
    "/images/website/services/Salon Services/Hair/lindsay-cash-Md_DhaFsnCQ-unsplash.jpg"
  ];

  return (
    <div className="course-gallery-slider-container">
      <div className="course-gallery-track">
        {/* Render twice for continuous loop effect */}
        {[...images, ...images].map((imgSrc, index) => (
          <div key={index} className="course-gallery-item">
            <img src={imgSrc} alt={`Course detail ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGallerySlider;
