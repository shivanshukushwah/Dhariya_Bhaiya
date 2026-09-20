import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AcademyPage from './pages/AcademyPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import FounderPage from './pages/FounderPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const AdminRoute = () => {
  const isAuthed = sessionStorage.getItem('admin_authenticated');
  return isAuthed ? <AdminDashboard /> : <Navigate to="/admin-login" replace />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/our-gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminRoute />} />
          <Route path="/admin" element={<AdminRoute />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
