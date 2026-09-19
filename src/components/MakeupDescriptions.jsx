import React from 'react';
import './MakeupDescriptions.css';

const MakeupDescriptions = () => {
  const makeupTypes = [
    {
      title: "Bridal Makeup",
      description: "Our bridal makeup service is tailored to enhance your natural beauty, ensuring you look stunning and radiant on your special day.",
      image: "/images/drive_photos/services/Makeup/Bridal packages available at Q'riflame/amish-thakkar-lAY2TAhN06k-unsplash.jpg"
    },
    {
      title: "AirBrush Makeup",
      description: "Experience flawless, long-lasting coverage with our professional airbrush makeup, perfect for high-definition photography and all-day events.",
      image: "/images/drive_photos/services/Makeup/Types of makeup available at Q'riflame/sofia-inductgroup-RW3zjCKHek4-unsplash.jpg"
    },
    {
      title: "Engagement Makeup",
      description: "Get the perfect look for your engagement ceremony. We create elegant and sophisticated styles that complement your outfit perfectly.",
      image: "/images/drive_photos/services/Makeup/Types of makeup available at Q'riflame/ajoy-das-s67IGorOgFM-unsplash.jpg"
    },
    {
      title: "Reception Makeup",
      description: "Shine brightly at your reception with our specialized makeup techniques designed for evening lighting and grand celebrations.",
      image: "/images/drive_photos/services/Makeup/Types of makeup available at Q'riflame/chalo-garcia-4gK1Vy2sdJ0-unsplash.jpg"
    }
  ];

  return (
    <section className="makeup-descriptions-section">
      <div className="container">
        <h2 className="section-title">FIRST BEAUTY SALON AND MAKEUP STUDIO IN LUCKNOW</h2>
        <p className="section-subtitle">
          Discover refreshing spa experiences at Q'riflame Makeup Studio & Academy, the ultimate makeup studio in Lucknow. We offer everything from haircuts and makeup to waxing and threading for silky-smooth skin. As the Best Salon in Lucknow, our professional makeup artists are here to enhance your natural beauty and give you a flawless look.
        </p>

        <div className="makeup-grid">
          {makeupTypes.map((type, index) => (
            <div className={`makeup-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
              <div className="makeup-image">
                <img src={type.image} alt={type.title} />
              </div>
              <div className="makeup-info">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeupDescriptions;
