// LocalStorage Keys
const GALLERY_STORAGE_KEY = 'qriflame_gallery_items';
const ENQUIRIES_STORAGE_KEY = 'qriflame_enquiries';

// Default initial gallery items
const defaultGalleryItems = [
  // --- Certificates from 15 Days Course ---
  { id: 'cert-1', src: '/images/certificates/15_days_class/aditi_paswan_15_DAYS.png', title: 'Aditi Paswan - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-2', src: '/images/certificates/15_days_class/anjani_ydv_15_DAYS.png', title: 'Anjani Yadav - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-3', src: '/images/certificates/15_days_class/arpita_jaiswal_15_DAYS.png', title: 'Arpita Jaiswal - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-4', src: '/images/certificates/15_days_class/bharti_gupta_15_DAYS.png', title: 'Bharti Gupta - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-5', src: '/images/certificates/15_days_class/chandani_15_DAYS.png', title: 'Chandani - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-6', src: '/images/certificates/15_days_class/geeta_devi_15_DAYS.png', title: 'Geeta Devi - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-7', src: '/images/certificates/15_days_class/jyotsana_tripathi_15_DAYS.png', title: 'Jyotsana Tripathi - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-8', src: '/images/certificates/15_days_class/kusumlata_gautam_15_DAYS.png', title: 'Kusumlata Gautam - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-9', src: '/images/certificates/15_days_class/madhu_jyotsna_15_DAYS.png', title: 'Madhu Jyotsna - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-10', src: '/images/certificates/15_days_class/mamta_devi_15_DAYS.png', title: 'Mamta Devi - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-11', src: '/images/certificates/15_days_class/NISHA_CHAUDHARY_15_DAYS.png', title: 'Nisha Chaudhary - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-12', src: '/images/certificates/15_days_class/payal_maurya_15_DAYS.png', title: 'Payal Maurya - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-13', src: '/images/certificates/15_days_class/pinki_chaurasia_15_DAYS.png', title: 'Pinki Chaurasia - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-14', src: '/images/certificates/15_days_class/simran_jaiswal_15_DAYS.png', title: 'Simran Jaiswal - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-15', src: '/images/certificates/15_days_class/suman_15_DAYS.png', title: 'Suman - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-16', src: '/images/certificates/15_days_class/sunanda_sahani_15_DAYS.png', title: 'Sunanda Sahani - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },
  { id: 'cert-17', src: '/images/certificates/15_days_class/vandana_srivastav_15_DAYS.png', title: 'Vandana Srivastav - 15 Days Course Certificate', category: 'certificates', badge: '15 Days Cert', isDefault: true },

  // --- Certificates from Full Course ---
  { id: 'cert-18', src: '/images/certificates/full_course/archana_sharma.png', title: 'Archana Sharma - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-19', src: '/images/certificates/full_course/bharti_gupta_full.png', title: 'Bharti Gupta - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-20', src: '/images/certificates/full_course/kiranpandey.png', title: 'Kiran Pandey - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-21', src: '/images/certificates/full_course/mohammadarman.png', title: 'Mohammad Arman - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-22', src: '/images/certificates/full_course/neha_kumari_full.png', title: 'Neha Kumari - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-23', src: '/images/certificates/full_course/nisha_chaudhary_full.png', title: 'Nisha Chaudhary - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-24', src: '/images/certificates/full_course/nishapandey.png', title: 'Nisha Pandey - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-25', src: '/images/certificates/full_course/payal_maurya_full.png', title: 'Payal Maurya - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-26', src: '/images/certificates/full_course/reema_singh_full.png', title: 'Reema Singh - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-27', src: '/images/certificates/full_course/rinku_devi_full.png', title: 'Rinku Devi - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-28', src: '/images/certificates/full_course/shakuntala.png', title: 'Shakuntala - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },
  { id: 'cert-29', src: '/images/certificates/full_course/vibhajaiswal.png', title: 'Vibha Jaiswal - Full Cosmetology Certificate', category: 'certificates', badge: 'Full Course Cert', isDefault: true },

  // --- Bridal Photos ---
  { id: 'work-1', src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/amish-thakkar-lAY2TAhN06k-unsplash.jpg", title: "Royal Bridal Transformation", category: "bridal", badge: "Bridal", isDefault: true },
  { id: 'work-2', src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/arto-suraj-AmKDdf_ErUA-unsplash.jpg", title: "Traditional Bridal Makeup", category: "bridal", badge: "Bridal", isDefault: true },
  { id: 'work-3', src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/skg-photography-3nYzHXMUV7k-unsplash.jpg", title: "HD Bridal Artistry", category: "bridal", badge: "Bridal", isDefault: true },
  { id: 'work-4', src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/skg-photography-nFR6mRpn8kc-unsplash.jpg", title: "Airbrush Bridal Finish", category: "bridal", badge: "Bridal", isDefault: true },
  { id: 'work-5', src: "/images/website/services/Makeup/Bridal packages available at Q'riflame/skg-photography-z-iEOGOd_kg-unsplash.jpg", title: "Reception Glam Look", category: "bridal", badge: "Bridal", isDefault: true },

  // --- Makeup Photos ---
  { id: 'work-6', src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/ajoy-das-s67IGorOgFM-unsplash.jpg", title: "Engagement Glam Look", category: "makeup", badge: "Makeup", isDefault: true },
  { id: 'work-7', src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/chalo-garcia-4gK1Vy2sdJ0-unsplash.jpg", title: "Party Glam Makeup", category: "makeup", badge: "Makeup", isDefault: true },
  { id: 'work-8', src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/ikshana-productions-PO97e-4VdKg-unsplash.jpg", title: "Editorial Makeup Artistry", category: "makeup", badge: "Makeup", isDefault: true },
  { id: 'work-9', src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/jaffar-sathick-G8_D3WdG-Zc-unsplash.jpg", title: "Nude Elegance Styling", category: "makeup", badge: "Makeup", isDefault: true },
  { id: 'work-10', src: "/images/website/services/Makeup/Types of makeup available at Q'riflame/rejaul-karim-6tOps3-A_18-unsplash.jpg", title: "Smokey Eye Glamour", category: "makeup", badge: "Makeup", isDefault: true },

  // --- Academy Photos ---
  { id: 'work-11', src: "/images/drive_photos/owner images/01_04_23 AM.png", title: "Live Academy Masterclass", category: "academy", badge: "Academy", isDefault: true },
  { id: 'work-12', src: "/images/drive_photos/owner images/01_07_52 AM.png", title: "Practical Hands-on Practice", category: "academy", badge: "Academy", isDefault: true },
  { id: 'work-13', src: "/images/drive_photos/owner images/01_10_46 AM.png", title: "Personalized Student Guidance", category: "academy", badge: "Academy", isDefault: true },
  { id: 'work-14', src: "/images/drive_photos/owner images/01_14_33 AM.png", title: "Hairstyling Technique Session", category: "academy", badge: "Academy", isDefault: true },
  { id: 'work-15', src: "/images/drive_photos/owner images/_DSC2177.JPG.jpeg", title: "Academy Founder - Pratibha Shukla", category: "academy", badge: "Academy", isDefault: true },
  { id: 'work-16', src: "/images/drive_photos/owner images/01_23_54 AM.png", title: "Academy Training Studio", category: "academy", badge: "Academy", isDefault: true }
];

// --- GALLERY STORE FUNCTIONS ---

export const getGalleryItems = () => {
  try {
    const data = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(defaultGalleryItems));
      return defaultGalleryItems;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading gallery items:', err);
    return defaultGalleryItems;
  }
};

export const addGalleryItem = (item) => {
  const current = getGalleryItems();
  const newItem = {
    id: 'upload-' + Date.now(),
    src: item.src,
    title: item.title,
    category: item.category || 'all',
    badge: item.badge || item.category.toUpperCase(),
    dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  };
  const updated = [newItem, ...current];
  localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteGalleryItem = (id) => {
  const current = getGalleryItems();
  const updated = current.filter(item => item.id !== id);
  localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};


// --- ENQUIRIES & MESSAGES STORE FUNCTIONS ---

const defaultEnquiries = [
  {
    id: 'enq-101',
    name: 'Pooja Sharma',
    phone: '+91 98765 43210',
    email: 'pooja.sharma@example.com',
    service: 'Bridal HD Makeup',
    message: 'Hi, I need bridal HD makeup booking details for December 15th wedding event.',
    source: 'Contact Us Page',
    timestamp: new Date(Date.now() - 3600000 * 2).toLocaleString(),
    status: 'new'
  },
  {
    id: 'enq-102',
    name: 'Ritu Jaiswal',
    phone: '+91 91234 56789',
    email: 'ritu.jaiswal@example.com',
    service: 'Cosmetology Course',
    message: 'Interested in 3-month cosmetology course fees and weekend batch timings.',
    source: 'Academy Seat Booking',
    timestamp: new Date(Date.now() - 3600000 * 18).toLocaleString(),
    status: 'read'
  }
];

export const getEnquiries = () => {
  try {
    const data = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(defaultEnquiries));
      return defaultEnquiries;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading enquiries:', err);
    return defaultEnquiries;
  }
};

export const addEnquiry = (enquiryData) => {
  const current = getEnquiries();
  const newEnquiry = {
    id: 'msg-' + Date.now(),
    name: enquiryData.name || 'Anonymous',
    phone: enquiryData.phone || 'N/A',
    email: enquiryData.email || '',
    service: enquiryData.service || enquiryData.course || 'General Enquiry',
    subject: enquiryData.subject || '',
    message: enquiryData.message || enquiryData.details || 'Interested in booking services.',
    source: enquiryData.source || 'Website Form',
    timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    status: 'new'
  };
  const updated = [newEnquiry, ...current];
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  return newEnquiry;
};

export const updateEnquiryStatus = (id, newStatus) => {
  const current = getEnquiries();
  const updated = current.map(enq => enq.id === id ? { ...enq, status: newStatus } : enq);
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteEnquiry = (id) => {
  const current = getEnquiries();
  const updated = current.filter(enq => enq.id !== id);
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
