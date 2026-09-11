import React, { useState } from 'react';
import { servicesData } from './ServicesData';
import './Services.css';

const categoryImages = {
  "Makeup_Types": [
    "/images/drive_photos/services/Makeup/Types%20of%20makeup%20available%20at%20Q%27riflame/ajoy-das-s67IGorOgFM-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Types%20of%20makeup%20available%20at%20Q%27riflame/chalo-garcia-4gK1Vy2sdJ0-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Types%20of%20makeup%20available%20at%20Q%27riflame/ikshana-productions-PO97e-4VdKg-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Types%20of%20makeup%20available%20at%20Q%27riflame/jaffar-sathick-G8_D3WdG-Zc-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Types%20of%20makeup%20available%20at%20Q%27riflame/rejaul-karim-6tOps3-A_18-unsplash.jpg"
  ],
  "Makeup_Bridal packages": [
    "/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q%27riflame/amish-thakkar-lAY2TAhN06k-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q%27riflame/arto-suraj-AmKDdf_ErUA-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q%27riflame/skg-photography-3nYzHXMUV7k-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q%27riflame/skg-photography-nFR6mRpn8kc-unsplash.jpg",
    "/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q%27riflame/skg-photography-z-iEOGOd_kg-unsplash.jpg"
  ],
  "Salon Services_Hair": [
    "/images/drive_photos/services/Salon%20Services/Hair/adam-winger-FkAZqQJTbXM-unsplash.jpg",
    "/images/drive_photos/services/Other/shankar-mridha-PfNPSVa7OE0-unsplash.jpg"
  ],
  "Salon Services_Skin": [
    "/images/drive_photos/services/Other/kimia-zarifi-AVJ321HJFl4-unsplash.jpg",
    "/images/drive_photos/services/Other/ikshana-productions-L-_tcsP-wZc-unsplash.jpg"
  ],
  "Salon Services_Mani-Pedi": [
    "/images/drive_photos/services/Salon%20Services/Mani-Pedi/anna-keibalo-QMgwloa7nQs-unsplash.jpg",
    "/images/drive_photos/services/Other/samantha-peralta-6udzUgtewa0-unsplash.jpg"
  ],
  "Salon Services_Mehendi": [
    "/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/1.jpg",
    "/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/2.jpg",
    "/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/3.jpg"
  ],
  "Other_Other Services": [
    "/images/drive_photos/services/Other/rune-enstad-cowLgyb63c4-unsplash.jpg",
    "/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/20250616_165106.jpg"
  ]
};

const getServiceImage = (mainTab, subTab, index) => {
  const key = `${mainTab}_${subTab}`;
  const images = categoryImages[key] || categoryImages["Other_Other Services"];
  return images[index % images.length];
};

const Services = () => {
  const [activeMainTab, setActiveMainTab] = useState('Makeup');
  const [activeSubTabs, setActiveSubTabs] = useState({
    'Makeup': 'Types',
    'Salon Services': 'Hair',
    'Other': 'Other Services'
  });

  const handleMainTabClick = (tab) => {
    setActiveMainTab(tab);
  };

  const handleSubTabClick = (subTab) => {
    setActiveSubTabs({
      ...activeSubTabs,
      [activeMainTab]: subTab
    });
  };

  const currentSubTabs = Object.keys(servicesData[activeMainTab]);
  const activeSubTab = activeSubTabs[activeMainTab];
  const activeContent = servicesData[activeMainTab][activeSubTab];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="main-heading">Our Services</h2>
          <div className="divider mx-auto"></div>
        </div>
        
        {/* Main Categories Tabs */}
        <div className="services-main-tabs">
          {Object.keys(servicesData).map((mainTab) => (
            <button
              key={mainTab}
              className={`main-tab-btn ${activeMainTab === mainTab ? 'active' : ''}`}
              onClick={() => handleMainTabClick(mainTab)}
            >
              {mainTab}
            </button>
          ))}
        </div>

        {/* Sub Categories Tabs */}
        {currentSubTabs.length > 1 && (
          <div className="services-sub-tabs">
            {currentSubTabs.map((subTab) => (
              <button
                key={subTab}
                className={`sub-tab-btn ${activeSubTab === subTab ? 'active' : ''}`}
                onClick={() => handleSubTabClick(subTab)}
              >
                {subTab}
              </button>
            ))}
          </div>
        )}

        {/* Content Grid */}
        <div className="services-grid">
          {activeContent.map((category, index) => (
            <div className="service-category-card" key={index}>
              <div className="service-card-img-wrapper">
                <img src={getServiceImage(activeMainTab, activeSubTab, index)} alt={category.subCategory} className="service-card-img" />
              </div>
              <div className="service-category-header">
                <h3>{category.subCategory}</h3>
              </div>
              <ul className="service-items-list">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-point"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

