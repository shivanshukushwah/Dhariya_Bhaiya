import React from 'react';
import PageHeader from '../components/PageHeader';
import PromoBannerBooking from '../components/PromoBannerBooking';
import Services from '../components/Services';
import { FaStar } from 'react-icons/fa';

const clientTestimonials = [
  {
    name: "Shweta Srivastava",
    role: "Bridal HD Makeup Client",
    text: "Q'riflame Salon is my go-to place in Lucknow for bridal makeup! Dhariya ma'am and her team made me look like an absolute dream on my wedding day. Everyone complimented my HD bridal makeup.",
    stars: 5
  },
  {
    name: "Kavita Pandey",
    role: "Airbrush Makeup Client",
    text: "Maine Airbrush Makeup book kiya tha apne sister ki wedding ke liye. Makeup poore function me 12+ hours tak bilkul fresh raha skin pe bina patch hone ke! Extremely satisfied with their service.",
    stars: 5
  },
  {
    name: "Neha Rastogi",
    role: "Hair Spa & Smoothening",
    text: "The hair smoothening and spa treatment transformed my damaged hair. Extremely professional staff, gentle care, and very affordable prices compared to other luxury salons.",
    stars: 5
  },
  {
    name: "Pooja Gupta",
    role: "Party Makeup Client",
    text: "Best party makeup service! Unhone mera look mera outfit aur jewellery ke saath perfect match kiya. Natural finish tha aur heavy look nahi tha bilkul jaisa mujhe chahiye tha.",
    stars: 5
  },
  {
    name: "Simran Ahluwalia",
    role: "Pre-Bridal Skincare Client",
    text: "Very clean and hygienic environment. Unka O3+ facial treatment skin pe instantly glow laya. Highly recommended for pre-bridal skin care sessions in Lucknow.",
    stars: 5
  },
  {
    name: "Aarti Upadhyay",
    role: "Bridal Draping & Grooming",
    text: "Mehendi & Saree Draping service inka lajawab hai. Team bilkul time pe venue pe aayi aur sabhi family members ka draping and makeup flawless handle kiya.",
    stars: 5
  },
  {
    name: "Manju Mishra",
    role: "HD Makeup Client",
    text: "HD Makeup by Junior Artist did total justice to my look! Budget-friendly price me itna high-end finish milna miraculous hai. Will definitely visit again!",
    stars: 5
  },
  {
    name: "Srishti Roy",
    role: "Manicure & Pedicure Client",
    text: "Manicure & Pedicure session was extremely relaxing. Clean tools, polite staff and amazing massage. Total value for money salon service!",
    stars: 5
  },
  {
    name: "Tanya Chawla",
    role: "Nail Extension Client",
    text: "Nail extension service by Q'riflame is top notch. Unhone accurate design banaya jaisa maine Pinterest photo me dikhaya tha. 3 weeks ho gaye nails perfectly intact hain!",
    stars: 5
  },
  {
    name: "Richa Shukla",
    role: "Salon Skincare Client",
    text: "Q'riflame is genuinely the best salon experience. Professional products, zero waiting time if booked in advance, and very polite behavior.",
    stars: 5
  }
];

const ServicesPage = () => {
  return (
    <>
      <PageHeader title="Our Services" breadcrumbs={[{ label: 'Services' }]} />
      
      {/* 1. Top Booking Banner */}
      <div className="container" style={{ marginTop: '20px' }}>
        <PromoBannerBooking />
      </div>
      
      {/* 2. Intro Description Section (Bhaavya Kapoor Style) */}
      <div className="container" style={{ 
        padding: '60px 15px 40px', 
        textAlign: 'center', 
        maxWidth: '960px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ 
          color: 'var(--primary-color)', 
          fontSize: '2.2rem',
          fontWeight: '700',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          position: 'relative',
          paddingBottom: '15px'
        }}>
          BEST MAKEUP SALON IN LUCKNOW & KANPUR
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
          fontSize: '1.1rem', 
          lineHeight: '1.8', 
          color: '#444',
          marginBottom: '15px' 
        }}>
          Welcome to <strong>Q'RIFLAME Salon & Academy</strong>, where beauty, expertise, and affordability come together to create a truly exceptional experience. From elegant bridal makeovers and glamorous party looks to flawless HD and airbrush makeup, our professional team is dedicated to bringing out your best for every special occasion.
        </p>
        <p style={{ 
          fontSize: '1.05rem', 
          lineHeight: '1.8', 
          color: '#555' 
        }}>
          At Q'RIFLAME, we believe that looking beautiful should not come with an unreasonable price tag. That's why we offer <strong>high-quality makeup and beauty services at the best budget-friendly prices</strong>, without compromising on professionalism, products, or finishing. Whether you are a bride-to-be, attending a special event, or simply looking for a beauty transformation, we have services designed to suit your style and budget.
        </p>
      </div>

      {/* 3. Feature Showcase Images Row */}
      <div className="container" style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '25px'
        }}>
          {[
            {
              title: "AIRBRUSH MAKEUP",
              img: "/images/drive_photos/services/Makeup/Types%20of%20makeup%20available%20at%20Q%27riflame/rejaul-karim-6tOps3-A_18-unsplash.jpg"
            },
            {
              title: "MAKEUP BY JUNIOR ARTIST",
              img: "/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q%27riflame/amish-thakkar-lAY2TAhN06k-unsplash.jpg"
            },
            {
              title: "MAKEUP BY SENIOR ARTIST",
              img: "/images/drive_photos/services/Makeup/Bridal%20packages%20available%20at%20Q%27riflame/arto-suraj-AmKDdf_ErUA-unsplash.jpg"
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              background: '#fff',
              border: '1px solid #eee'
            }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '15px 20px', textAlign: 'center', background: '#fafafa' }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: '0.95rem', 
                  color: 'var(--primary-color)', 
                  letterSpacing: '1.5px',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Packages Section with WhatsApp Enquire buttons */}
      <Services />

      {/* 6. Client Testimonials Section (10 Testimonials) */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF8F5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '15px'
            }}>
              OUR CLIENTS TESTIMONIALS
            </h2>
            <p style={{ color: '#777', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 20px' }}>
              Join our happy family of clients who consider us their go-to destination for beauty & salon services.
            </p>
            <div className="divider mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-color)', margin: '0 auto' }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '25px'
          }}>
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: '#ffffff',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(237, 47, 89, 0.1)'
              }}>
                <div>
                  <div style={{ color: '#FFD700', marginBottom: '15px', display: 'flex', gap: '4px' }}>
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', color: '#555', lineHeight: '1.7', fontSize: '0.98rem', marginBottom: '20px' }}>
                    "{testimonial.text}"
                  </p>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#222', fontWeight: '600' }}>
                    {testimonial.name}
                  </h4>
                  <span style={{ fontSize: '0.82rem', color: 'var(--primary-color)', fontWeight: '500' }}>
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

