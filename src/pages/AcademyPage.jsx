import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import AcademyPopup from '../components/AcademyPopup';
import PromoBannerCourses from '../components/PromoBannerCourses';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './AcademyPage.css';

const AcademyPage = () => {
  const [openCourseIndex, setOpenCourseIndex] = useState(null);

  const toggleCourse = (index) => {
    setOpenCourseIndex(openCourseIndex === index ? null : index);
  };

  const handleVerify = (e) => {
    e.preventDefault();
  };

  const handleEnroll = (e) => {
    e.preventDefault();
  };

  const academyCourses = [
    {
      title: "Ear Lobe & Piercing Course",
      duration: "One Day",
      theory: "30%",
      practical: "70%",
      fees: [
        { type: "Group Class", price: "₹999" },
        { type: "1-to-1 Personal Training", price: "₹1999" },
        { type: "Professional Starter Kit", price: "₹11000" }
      ],
      features: ["Professional Certificate"]
    },
    {
      title: "Professional Threading Course",
      duration: "2 Days",
      theory: "30%",
      practical: "70%",
      fees: [
        { type: "Group Class", price: "₹1,999" },
        { type: "1-to-1 Personal Training", price: "₹4,999" }
      ],
      features: ["Professional Threading Certificate"]
    },
    {
      title: "Professional Nail Extension & Nail Art Course",
      duration: "15 Days",
      theory: "",
      practical: "",
      fees: [
        { type: "Group Class", price: "₹4,999" },
        { type: "1-to-1 Personal Training", price: "₹20,000" },
        { type: "Professional + Starter Kit", price: "₹14,999-₹17,999" }
      ],
      features: ["Professional Training"]
    },
    {
      title: "Beautician Foundation Program",
      duration: "4 Weeks",
      theory: "40%",
      practical: "60%",
      fees: [
        { type: "Only fee", price: "₹15000" },
        { type: "With Fee product & goodies", price: "₹20000" }
      ],
      features: ["Beginner → Salon Professional", "1 Months"]
    },
    {
      title: "Basic + Advanced Professional Skin Course",
      duration: "3 Months",
      theory: "40%",
      practical: "60%",
      fees: [
        { type: "Only fee", price: "₹25000" },
        { type: "With fee, product & goodies", price: "₹40000" }
      ],
      features: ["Beginner → Professional", "Live Model Practice Included", "Certificate Included", "100% Practical Training"]
    },
    {
      title: "Basic + Advanced Professional Makeup Course",
      duration: "3 Months",
      theory: "40%",
      practical: "60%",
      fees: [
        { type: "Only fee", price: "₹35000" },
        { type: "With fee, product & goodies", price: "₹50000" }
      ],
      features: ["Beginner → Professional Makeup Artist", "Live Model Practice Included", "Certificate Included"]
    },
    {
      title: "Professional Hydra Facial & Machine Training",
      duration: "3 Days",
      theory: "40%",
      practical: "60%",
      fees: [
        { type: "Group Training Fee", price: "₹2,499" },
        { type: "1-to-1 Personal Training", price: "₹4,999" }
      ],
      features: []
    },
    {
      title: "Professional Mehndi Artist Course",
      duration: "3 Months",
      theory: "30%",
      practical: "70%",
      fees: [
        { type: "Group Class", price: "₹4,999" },
        { type: "1-to-1 Personal Training", price: "₹25,000" },
        { type: "Professional + Mehndi Starter Kit", price: "₹7,999" }
      ],
      features: ["Professional Mehndi Artist Certificate"]
    },
    {
      title: "Basic + Advanced Professional Hair Course",
      duration: "3 Months",
      theory: "40%",
      practical: "60%",
      fees: [
        { type: "Only fee", price: "₹25000" },
        { type: "With fee, product & goodies", price: "₹40000" }
      ],
      features: ["Beginner → Professional", "Live Model Practice Included", "Certificate Included"]
    },
    {
      title: "Complete Professional Cosmetology Course",
      duration: "6 Months",
      theory: "40%",
      practical: "60%",
      fees: [
        { type: "Only FEE", price: "₹70,000" },
        { type: "With fee, product & goodies", price: "₹1,00,000" }
      ],
      features: ["Skin + Hair + Makeup", "Beginner to Professional Cosmetologist", "Live Model Practice Included", "Final Practical Assessment Included", "Professional Certificate Included"]
    }
  ];

  return (
    <>
      <PageHeader title="Academy" breadcrumbs={[{ label: 'Academy' }]} />
      <AcademyPopup />

      {/* Master the Art of Makeup - Intro Section */}
      <section className="master-art-section">
        <div className="container">
          <div className="master-grid">
            <div className="master-image">
              <img src="/images/drive_photos/owner%20images/03.jpg" alt="Master the Art" />
            </div>
            <div className="master-content">
              <h2 className="main-heading">Master the Art of Makeup with Q'riflame Salon & Academy</h2>
              <div className="divider"></div>
              <p>Ready to turn your passion for beauty into a rewarding career? Q'riflame Salon & Academy offers professional beauty education designed to help aspiring artists develop confidence, creativity, and industry-ready skills. From bridal makeup and professional hairstyling to advanced beauty techniques and personal grooming, our courses are designed to provide practical knowledge alongside expert guidance.</p>
              <p>Learn from experienced professionals and gain hands-on experience in a supportive learning environment where every technique is demonstrated, practiced, and refined. Our academy focuses on helping students understand the fundamentals of beauty artistry while developing the precision, creativity, and professionalism required to succeed in the industry.</p>
              <p>Whether you are beginning your beauty journey or looking to enhance your existing skills, Q'riflame Salon & Academy provides the knowledge and guidance to help you move forward with confidence. Take the first step toward transforming your passion into your profession and building a future in the world of beauty.</p>
              
              <div className="stats-container">
                <div className="stat-box">
                  <h4>Small Batches</h4>
                  <p>Personalized attention</p>
                </div>
                <div className="stat-box">
                  <h4>100% Practical</h4>
                  <p>Live model practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoBannerCourses />

      {/* Our Courses - Accordion Style */}
      <section className="courses-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="main-heading">Professional Courses</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          <div className="courses-accordion-container">
            {academyCourses.map((course, index) => (
              <div key={index} className={`course-accordion ${openCourseIndex === index ? 'active' : ''}`}>
                <div className="accordion-header" onClick={() => toggleCourse(index)}>
                  <h3>{course.title} <span className="course-duration-badge">{course.duration}</span></h3>
                  <div className="accordion-icon">
                    {openCourseIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                
                <div className="accordion-content" style={{ maxHeight: openCourseIndex === index ? '1000px' : '0' }}>
                  <div className="accordion-content-inner">
                    <div className="course-details-grid">
                      <div className="course-fees-section">
                        <h4>Fee Structure</h4>
                        <ul className="fees-list">
                          {course.fees.map((fee, i) => (
                            <li key={i}>
                              <span className="fee-type">{fee.type}</span>
                              <span className="fee-price">{fee.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="course-info-section">
                        <h4>Course Information</h4>
                        <div className="info-meta">
                          {course.theory && <p><strong>Theory:</strong> {course.theory}</p>}
                          {course.practical && <p><strong>Practical:</strong> {course.practical}</p>}
                        </div>
                        {course.features.length > 0 && (
                          <div className="course-features">
                            <h4>Highlights</h4>
                            <ul className="features-list">
                              {course.features.map((feature, i) => (
                                <li key={i}>✓ {feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <button className="btn-solid-primary enroll-btn mt-3">Book Your Seat Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Gallery */}
      <section className="academy-gallery-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="main-heading">Academy Gallery</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="gallery-grid">
            {[
              '/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/1.jpg',
              '/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/2.jpg',
              '/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/3.jpg',
              '/images/drive_photos/owner%20images/meet%20the%20founder%20bride%20pics/20250616_165106.jpg'
            ].map((imgSrc, index) => (
              <div key={index} className="gallery-item">
                <img src={imgSrc} alt={`Gallery ${index}`} />
                <div className="gallery-overlay">
                  <span>View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="main-heading">Student Testimonials</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          <div className="testimonials-grid">
            {[1, 2, 3].map((review) => (
              <div key={review} className="testimonial-card">
                <div className="stars mb-3">
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                </div>
                <p className="review-text">"The practical training at Q'riflame Academy is unmatched. I learned so much and felt confident taking on real clients immediately after graduation!"</p>
                <h5 className="student-name">- Priya Sharma</h5>
                <span className="course-tag">Professional Makeup Course</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Enrollment Forms Section */}
      <section className="forms-section">
        <div className="container">
          <div className="forms-grid">
            <div className="enrollment-box">
              <h3>Book Your Seats Now</h3>
              <p>Start your journey to becoming a professional beauty artist.</p>
              <form onSubmit={handleEnroll} className="enroll-form">
                <input type="text" placeholder="Full name" required />
                <input type="tel" placeholder="Phone number" required />
                <select required>
                  <option value="">Select course</option>
                  {academyCourses.map((c, i) => (
                    <option key={i} value={c.title}>{c.title}</option>
                  ))}
                </select>
                <button type="submit" className="btn-solid-primary w-100 mt-2">Enroll Now</button>
              </form>
            </div>

            <div className="verification-box">
              <h3>Certificate Verification</h3>
              <p>Verify the authenticity of your Q'riflame Academy certificate.</p>
              <form onSubmit={handleVerify} className="verify-form">
                <input type="text" placeholder="Enrollment no." required />
                <input type="text" placeholder="Captcha" required />
                <button type="submit" className="btn-outline-primary w-100 mt-2">Verify Certificate</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademyPage;

