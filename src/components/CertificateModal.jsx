import React from 'react';
import { FaDownload, FaTimes } from 'react-icons/fa';
import './CertificateModal.css';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div className="cert-modal-overlay">
      <div className="cert-modal-content">
        <button className="cert-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="cert-modal-header">
          <h3>Verified Certificate</h3>
          <p>Enrollment: {certificate.enrollmentNo}</p>
        </div>
        <div className="cert-image-container">
          <img src={certificate.imageUrl} alt="Verified Certificate" className="verified-cert-img" />
        </div>
        <div className="cert-modal-footer">
          <a href={certificate.imageUrl} download={`Certificate_${certificate.enrollmentNo}.jpg`} className="btn-solid-primary w-100 text-center">
            <FaDownload className="mr-2" /> Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
