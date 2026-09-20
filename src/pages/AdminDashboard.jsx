import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  getGalleryItems, 
  addGalleryItem, 
  deleteGalleryItem, 
  getEnquiries, 
  updateEnquiryStatus, 
  deleteEnquiry 
} from '../utils/adminStore';
import { 
  FaImages, 
  FaEnvelope, 
  FaSignOutAlt, 
  FaPlus, 
  FaTrash, 
  FaPhone, 
  FaWhatsapp, 
  FaCheck, 
  FaSearch,
  FaFileImage
} from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or 'enquiries'

  // Gallery state
  const [galleryItems, setGalleryItems] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('certificates');
  const [newBadge, setNewBadge] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [previewSrc, setPreviewSrc] = useState('');

  // Enquiries state
  const [enquiries, setEnquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    // Check Authentication
    const isAuthed = sessionStorage.getItem('admin_authenticated');
    if (!isAuthed) {
      navigate('/admin-login');
      return;
    }

    // Load Data
    setGalleryItems(getGalleryItems());
    setEnquiries(getEnquiries());
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    navigate('/admin-login');
  };

  // --- GALLERY HANDLERS ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddGallery = (e) => {
    e.preventDefault();
    if (!imageUrl || !newTitle) {
      alert("Please provide an image and title!");
      return;
    }

    const updated = addGalleryItem({
      src: imageUrl,
      title: newTitle,
      category: newCategory,
      badge: newBadge || newCategory.toUpperCase()
    });

    setGalleryItems(updated);
    alert("Image uploaded successfully to the dynamic gallery!");
    
    // Reset Form
    setNewTitle('');
    setNewCategory('certificates');
    setNewBadge('');
    setImageUrl('');
    setPreviewSrc('');
  };

  const handleDeleteGallery = (id) => {
    if (window.confirm("Are you sure you want to delete this photo from the gallery?")) {
      const updated = deleteGalleryItem(id);
      setGalleryItems(updated);
    }
  };


  // --- ENQUIRIES HANDLERS ---
  const handleStatusChange = (id, newStatus) => {
    const updated = updateEnquiryStatus(id, newStatus);
    setEnquiries(updated);
  };

  const handleDeleteEnquiry = (id) => {
    if (window.confirm("Delete this message permanently?")) {
      const updated = deleteEnquiry(id);
      setEnquiries(updated);
    }
  };

  const filteredEnquiries = enquiries.filter(item => {
    const matchesSearch = 
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone?.includes(searchTerm) ||
      item.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.source?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' ? true : item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const newCount = enquiries.filter(i => i.status === 'new').length;
  const contactedCount = enquiries.filter(i => i.status === 'contacted').length;

  return (
    <div className="admin-dashboard-container">
      {/* Top Navbar */}
      <header className="admin-header">
        <div className="admin-header-logo">
          <h2>Q'riflame Admin Dashboard</h2>
          <span>LIVE MANAGER</span>
        </div>
        <div className="admin-header-right">
          <span className="admin-user-info">Logged in as: <strong>Admin</strong></span>
          <button className="admin-logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="admin-body">
        
        {/* Navigation Tabs */}
        <div className="admin-tabs">
          <button 
            className={`admin-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <FaImages /> Dynamic Gallery Manager ({galleryItems.length})
          </button>
          <button 
            className={`admin-tab-btn ${activeTab === 'enquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('enquiries')}
          >
            <FaEnvelope /> Contact Messages & Enquiries 
            {newCount > 0 && <span className="tab-badge">{newCount} New</span>}
          </button>
        </div>

        {/* --- TAB 1: DYNAMIC GALLERY MANAGER --- */}
        {activeTab === 'gallery' && (
          <div>
            {/* Upload New Photo Card */}
            <div className="admin-card">
              <h3 className="admin-card-title">
                <FaPlus style={{ color: 'var(--primary-color)' }} /> Upload New Photo to Public Gallery
              </h3>
              
              <form onSubmit={handleAddGallery}>
                <div className="upload-form-grid">
                  <div className="form-field">
                    <label>Photo Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Student Certificate - Riya Sharma" 
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-field">
                    <label>Category</label>
                    <select 
                      value={newCategory} 
                      onChange={(e) => setNewCategory(e.target.value)}
                    >
                      <option value="certificates">Student Certificates</option>
                      <option value="bridal">Bridal Makeover</option>
                      <option value="makeup">Party & Glam Makeup</option>
                      <option value="academy">Academy Classes & Studio</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Badge Tag (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 15 Days Cert / HD Bridal" 
                      value={newBadge}
                      onChange={(e) => setNewBadge(e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <label>Upload Image File</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* Alternatively Image URL */}
                <div className="form-field mb-3" style={{ marginBottom: '15px' }}>
                  <label>Or Paste Image URL</label>
                  <input 
                    type="text" 
                    placeholder="https://example.com/photo.jpg" 
                    value={imageUrl.startsWith('data:') ? '' : imageUrl}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                      setPreviewSrc(e.target.value);
                    }}
                  />
                </div>

                {/* Preview Box */}
                {previewSrc && (
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>Selected Image Preview:</label>
                    <div className="upload-preview-container">
                      <img src={previewSrc} alt="Preview" />
                    </div>
                  </div>
                )}

                <button type="submit" className="btn-solid-primary" style={{ cursor: 'pointer' }}>
                  Upload Photo to Gallery
                </button>
              </form>
            </div>

            {/* Current Gallery Items List */}
            <div className="admin-card">
              <h3 className="admin-card-title">
                <FaFileImage /> Existing Gallery Photos ({galleryItems.length})
              </h3>

              <div className="admin-gallery-grid">
                {galleryItems.map((item) => (
                  <div key={item.id} className="admin-gallery-item">
                    <img src={item.src} alt={item.title} className="admin-gallery-thumb" loading="lazy" />
                    <div className="admin-gallery-info">
                      <h4 className="admin-gallery-title">{item.title}</h4>
                      <div className="admin-gallery-meta">
                        <span className="cat-badge">{item.badge || item.category}</span>
                        <button 
                          className="btn-delete-sm" 
                          onClick={() => handleDeleteGallery(item.id)}
                          title="Delete photo"
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: CONTACT MESSAGES & ENQUIRIES MANAGER --- */}
        {activeTab === 'enquiries' && (
          <div>
            {/* Stats Overview */}
            <div className="stats-cards-grid">
              <div className="stat-card" style={{ borderLeftColor: '#2563eb' }}>
                <div className="stat-card-info">
                  <h3>{enquiries.length}</h3>
                  <p>Total Enquiries Received</p>
                </div>
              </div>
              <div className="stat-card" style={{ borderLeftColor: '#ed2f59' }}>
                <div className="stat-card-info">
                  <h3 style={{ color: '#ed2f59' }}>{newCount}</h3>
                  <p>New / Unread Messages</p>
                </div>
              </div>
              <div className="stat-card" style={{ borderLeftColor: '#16a34a' }}>
                <div className="stat-card-info">
                  <h3 style={{ color: '#16a34a' }}>{contactedCount}</h3>
                  <p>Contacted Clients</p>
                </div>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="admin-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1, minWidth: '250px' }}>
                  <FaSearch style={{ color: '#888' }} />
                  <input 
                    type="text" 
                    placeholder="Search by client name, phone, or service..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <label style={{ fontSize: '13px', fontWeight: '600' }}>Filter Status:</label>
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    style={{ padding: '8px 14px', border: '1px solid #ddd', borderRadius: '8px' }}
                  >
                    <option value="all">All ({enquiries.length})</option>
                    <option value="new">New ({newCount})</option>
                    <option value="read">Read</option>
                    <option value="contacted">Contacted ({contactedCount})</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Messages List */}
            <div className="enquiry-list">
              {filteredEnquiries.length === 0 ? (
                <div className="admin-card text-center" style={{ padding: '50px', color: '#666' }}>
                  No messages found matching your criteria.
                </div>
              ) : (
                filteredEnquiries.map((item) => (
                  <div key={item.id} className={`enquiry-item-card status-${item.status}`}>
                    
                    <div className="enquiry-card-header">
                      <div className="enquiry-user-details">
                        <h4>{item.name}</h4>
                        <div className="enquiry-user-meta">
                          <span>📞 <strong>{item.phone || 'N/A'}</strong></span>
                          {item.email && <span>✉️ {item.email}</span>}
                          <span>📌 <strong>Service:</strong> {item.service}</span>
                          <span>🕒 {item.timestamp}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="enquiry-source-tag">Source: {item.source}</span>
                        <select 
                          className="status-select"
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        >
                          <option value="new">🔴 New</option>
                          <option value="read">🟡 Read</option>
                          <option value="contacted">🟢 Contacted</option>
                        </select>
                      </div>
                    </div>

                    <div className="enquiry-message-box">
                      <strong>Message / Details:</strong> {item.message}
                    </div>

                    <div className="enquiry-actions">
                      <div className="action-buttons-group">
                        {item.phone && (
                          <>
                            <a 
                              href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${item.name}, thank you for contacting Q'riflame Salon & Academy regarding ${item.service}.`)}`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn-action-wh"
                            >
                              <FaWhatsapp /> Chat on WhatsApp
                            </a>
                            <a 
                              href={`tel:${item.phone}`}
                              className="btn-action-call"
                            >
                              <FaPhone /> Call Client
                            </a>
                          </>
                        )}
                      </div>

                      <button 
                        className="btn-delete-sm" 
                        onClick={() => handleDeleteEnquiry(item.id)}
                      >
                        <FaTrash /> Delete Message
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
