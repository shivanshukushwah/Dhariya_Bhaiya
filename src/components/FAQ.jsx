import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of services do you offer?",
      answer: "We offer a wide range of services including bridal makeup, party makeup, airbrush makeup, professional hair styling, and rejuvenating skin care treatments."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can easily book an appointment by clicking the 'Book Appointment' button in the top right corner of our website or by contacting us directly."
    },
    {
      question: "Do you provide on-location or home services?",
      answer: "Currently, our regular services are provided at our salon. However, for bridal bookings and special events, we can arrange on-location services upon prior request."
    },
    {
      question: "What brands or products do you use?",
      answer: "We use only high-end, premium, and dermatologically tested products for all our makeup and skin treatments to ensure the best results without compromising your skin's health."
    },
    {
      question: "Is a consultation required before a treatment?",
      answer: "For specialized skin treatments and bridal makeup, we highly recommend scheduling a consultation. This allows our experts to understand your requirements, skin type, and customize the perfect look for you."
    }
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ 
            color: 'var(--primary-color)', 
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            position: 'relative',
            paddingBottom: '15px',
            display: 'inline-block'
          }}>
            Frequently Asked Questions
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
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div 
                className="faq-answer-wrapper" 
                style={{ 
                  maxHeight: activeIndex === index ? '200px' : '0px'
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
