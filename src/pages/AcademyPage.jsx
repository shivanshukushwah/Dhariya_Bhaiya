import React from 'react';
import PageHeader from '../components/PageHeader';

const AcademyPage = () => {
  return (
    <>
      <PageHeader title="Makeup Academy" breadcrumbs={[{ label: 'Academy' }]} />
      
      <div className="container" style={{ padding: '60px 15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Professional Makeup Courses</h2>
            <p style={{ marginBottom: '15px' }}>
              Welcome to the Premium Salon Makeup Academy. Start your beauty career with expert guidance from the best in the industry.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
              <li>Professional Bridal Makeup Course</li>
              <li>Advanced Hair Styling Course</li>
              <li>Personal Grooming & Self Makeup</li>
              <li>Airbrush Makeup Masterclass</li>
            </ul>
            <a href="#enroll" className="btn-outline-primary">Enroll Now</a>
          </div>
          <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '10px' }}>
            <h3 style={{ marginBottom: '20px', borderBottom: '2px solid var(--primary-color)', display: 'inline-block' }}>Inquiry Form</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }} />
              <input type="email" placeholder="Email Address" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }} />
              <input type="tel" placeholder="Phone Number" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }} />
              <select style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <option>Select Course</option>
                <option>Bridal Makeup</option>
                <option>Hair Styling</option>
              </select>
              <button type="button" className="btn-outline-primary" style={{ background: 'var(--primary-color)', color: '#fff' }}>Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyPage;
