import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import CourseGallerySlider from '../components/CourseGallerySlider';
import CertificateModal from '../components/CertificateModal';
import AcademyPopup from '../components/AcademyPopup';
import AcademyTopBanner from '../components/AcademyTopBanner';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { addEnquiry } from '../utils/adminStore';
import './AcademyPage.css';

const AcademyPage = () => {
  const [openCourseIndex, setOpenCourseIndex] = useState(null);
  
  // Enrollment Form State
  const [enrollName, setEnrollName] = useState('');
  const [enrollCourse, setEnrollCourse] = useState('');
  
  // Verification Form State
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [verifiedCert, setVerifiedCert] = useState(null);

  // Generate a random captcha
  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(result);
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  // Certificate database with downloaded Google Drive student certificates
  const mockCertificates = {
    'QRI-1001': { enrollmentNo: 'QRI-1001', imageUrl: '/images/certificates/15_days_class/aditi_paswan_15_DAYS.png', name: 'Aditi Paswan' },
    'QRI-1002': { enrollmentNo: 'QRI-1002', imageUrl: '/images/certificates/15_days_class/anjani_ydv_15_DAYS.png', name: 'Anjani Yadav' },
    'QRI-1003': { enrollmentNo: 'QRI-1003', imageUrl: '/images/certificates/15_days_class/simran_jaiswal_15_DAYS.png', name: 'Simran Jaiswal' },
    'QRI-1004': { enrollmentNo: 'QRI-1004', imageUrl: '/images/certificates/full_course/archana_sharma.png', name: 'Archana Sharma' },
    'QRI-1005': { enrollmentNo: 'QRI-1005', imageUrl: '/images/certificates/full_course/bharti_gupta_full.png', name: 'Bharti Gupta' },
    'QRI-1006': { enrollmentNo: 'QRI-1006', imageUrl: '/images/certificates/full_course/reema_singh_full.png', name: 'Reema Singh' },
  };

  const toggleCourse = (index) => {
    setOpenCourseIndex(openCourseIndex === index ? null : index);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (captchaInput !== generatedCaptcha) {
      alert("Invalid Captcha. Please try again.");
      refreshCaptcha();
      setCaptchaInput('');
      return;
    }
    
    if (mockCertificates[enrollmentNo]) {
      setVerifiedCert(mockCertificates[enrollmentNo]);
      setIsCertModalOpen(true);
      // Reset form
      setEnrollmentNo('');
      setCaptchaInput('');
      refreshCaptcha();
    } else {
      alert("Certificate not found for this enrollment number.");
      refreshCaptcha();
      setCaptchaInput('');
    }
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!enrollName || !enrollCourse) return;
    
    addEnquiry({
      name: enrollName,
      service: enrollCourse,
      message: `Course Enrollment Request for ${enrollCourse}`,
      source: 'Academy Seat Booking'
    });

    const message = `Hey I want to get some more details on your ${enrollCourse} course. My name is ${enrollName}.`;
    window.open(`https://wa.me/919838615944?text=${encodeURIComponent(message)}`, '_blank');
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
      <AcademyTopBanner />
      <AcademyPopup />

      {/* Master the Art of Makeup - Intro Section */}
      <section className="master-art-section">
        <div className="container">
          <div className="master-grid">
            <div className="master-image">
              <img src="/images/website/owner images/_DSC2177.JPG.jpeg" alt="Master the Art" />
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

      {/* Our Courses - Accordion Style */}
      <section className="courses-section">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="main-heading">Professional Courses</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          <CourseGallerySlider />
          
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
                        <a 
                          href={`https://wa.me/919838615944?text=${encodeURIComponent(`Hey I want to get some more details on your ${course.title} course`)}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-solid-primary enroll-btn mt-3 d-inline-block"
                        >
                          Book Your Seat Now
                        </a>
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
            <h2 className="main-heading">Academy & Certificate Gallery</h2>
            <p className="text-muted mt-2">Certified Students & Classroom Achievements</p>
            <div className="divider mx-auto"></div>
          </div>
          <div className="gallery-grid">
            {[
              { src: "/images/certificates/15_days_class/aditi_paswan_15_DAYS.png", title: "Certificate - Aditi Paswan" },
              { src: "/images/certificates/full_course/archana_sharma.png", title: "Certificate - Archana Sharma" },
              { src: "/images/certificates/15_days_class/simran_jaiswal_15_DAYS.png", title: "Certificate - Simran Jaiswal" },
              { src: "/images/certificates/full_course/bharti_gupta_full.png", title: "Certificate - Bharti Gupta" },
              { src: "/images/drive_photos/owner images/01_04_23 AM.png", title: "Live Demo Class" },
              { src: "/images/drive_photos/owner images/01_07_52 AM.png", title: "Practical Hands-on Session" },
              { src: "/images/drive_photos/owner images/01_10_46 AM.png", title: "Student Guidance" },
              { src: "/images/certificates/15_days_class/kusumlata_gautam_15_DAYS.png", title: "Certificate - Kusumlata Gautam" }
            ].map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.src} alt={item.title} />
                <div className="gallery-overlay">
                  <span>{item.title}</span>
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
            {[
              {
                text: "Mujhe Q'riflame Academy ki practical training sabse best lagi. Maine Professional Makeup Course kiya tha aur ab main clients ko confidently attend kar leti hu! Trainers bahut hi supportive hain.",
                name: "- Priya Sharma",
                course: "Professional Makeup Course"
              },
              {
                text: "Ear Lobe & Piercing course ka experience bahut hi shandar tha. Ek din me hi sab kuch basic se leke advance tak samajh aa gaya. Hands-on practice se saare doubts clear ho gaye.",
                name: "- Anjali Verma",
                course: "Ear Lobe & Piercing Course"
              },
              {
                text: "Yaha se Nail Art ka course karne ke baad maine apna setup start kiya. Jo starter kit mili uski quality bahut premium hai aur unhone har ek technique bahut detail me sikhai. Highly recommended!",
                name: "- Riya Singh",
                course: "Nail Extension & Nail Art Course"
              }
            ].map((review, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars mb-3">
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                  <FaStar className="star-icon text-warning" />
                </div>
                <p className="review-text">"{review.text}"</p>
                <h5 className="student-name">{review.name}</h5>
                <span className="course-tag">{review.course}</span>
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
                <input type="text" placeholder="Full name" value={enrollName} onChange={(e) => setEnrollName(e.target.value)} required />
                <input type="tel" placeholder="Phone number" required />
                <select value={enrollCourse} onChange={(e) => setEnrollCourse(e.target.value)} required>
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
                <input type="text" placeholder="Enrollment no. (e.g. QRI-1001)" value={enrollmentNo} onChange={(e) => setEnrollmentNo(e.target.value)} required />
                
                <div className="captcha-container">
                  <div className="captcha-box">{generatedCaptcha}</div>
                  <button type="button" className="captcha-refresh" onClick={refreshCaptcha}>↻</button>
                </div>
                
                <input type="text" placeholder="Enter Captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required />
                <button type="submit" className="btn-outline-primary w-100 mt-2">Verify Certificate</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CertificateModal 
        isOpen={isCertModalOpen} 
        onClose={() => setIsCertModalOpen(false)} 
        certificate={verifiedCert} 
      />
    </>
  );
};

export default AcademyPage;

