import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of services do you offer at Q'riflame Salon & Academy?",
      answer: "We offer a complete range of beauty and salon services including Bridal HD & Airbrush Makeup, Party Makeup, Hair Care & Smoothening, Skincare & Facials, Manicure-Pedicure, Nail Extensions, Mehendi, Ear & Nose Piercing, as well as professional academy certification courses."
    },
    {
      question: "How far in advance should I book my Bridal Makeup?",
      answer: "We recommend booking your Bridal Makeup 1 to 3 months in advance to reserve your preferred date, time slot, and senior artist consultation."
    },
    {
      question: "Do you provide on-location / doorstep bridal & party makeup services?",
      answer: "Yes! We offer professional on-location and home services for weddings, pre-bridal grooming, outstation weddings, and group party makeup upon prior request."
    },
    {
      question: "What brands of makeup and skincare products do you use?",
      answer: "We use only premium, international, and dermatologically tested brands such as MAC, Huda Beauty, NARS, Anastasia Beverly Hills, Kryolan, O3+, and L'Oreal Professional to ensure flawless results."
    },
    {
      question: "What is the difference between HD Makeup and Airbrush Makeup?",
      answer: "HD (High Definition) makeup uses ultra-fine pigments applied with brushes/sponges to create a natural, photo-ready finish. Airbrush makeup uses a specialized spray gun for an ultra-lightweight, 18+ hour water-resistant finish perfect for brides."
    },
    {
      question: "Can I get a pre-wedding consultation and trial session?",
      answer: "Yes, we offer one-on-one pre-bridal consultation sessions where our senior makeup artists analyze your skin type, outfit colors, and hair preferences to create a customized bridal look."
    },
    {
      question: "Are your beauty academy courses certified?",
      answer: "Yes! All Q'riflame Academy courses include professional certification upon completion, along with practical hands-on training and starter kits depending on the selected tier."
    },
    {
      question: "What payment modes are accepted?",
      answer: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, and Net Banking."
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
