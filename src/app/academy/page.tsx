"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

export default function AcademyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'professional-makeup',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const isAlreadySubmitted = localStorage.getItem('academy_inquiry_submitted');
      if (!isAlreadySubmitted) {
        setIsModalOpen(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('academy_inquiry_submitted', 'true');
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  const courses = [
    {
      id: 'professional-makeup',
      title: "Professional Makeup Artistry",
      duration: "3 Months (Intensive)",
      description: "Master bridal makeup, airbrush techniques, editorial styling, and facial anatomy. Designed for aspiring pro makeup artists.",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 'hair-styling',
      title: "Advanced Hair Sculpting & Design",
      duration: "2 Months",
      description: "Learn precision haircuts, advanced balayage/coloring techniques, keratin architecture, and high-fashion styling.",
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 'nail-artistry',
      title: "Nail Artistry & Extensions",
      duration: "1 Month",
      description: "Master acrylic/gel extensions, chrome finishes, creative 3D nail art, and luxury manicure treatments.",
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#03110e] text-[#faf8f5] selection:bg-gold selection:text-[#03110e] relative">
      {/* Background layer for immersion */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop" 
          alt="Academy Background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#03110e] via-[#03110e]/90 to-[#03110e]"></div>
      </div>

      <Header />

      {/* Hero Header - Alternating Cream Layout */}
      <section className="relative py-28 px-4 text-center overflow-hidden border-b border-[#e4be7b]/30 bg-[#f5ede1] text-[#1a2e26] z-10">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[#0a3c2e] uppercase tracking-[0.4em] text-xs font-black mb-4 block">Aura Salon Academy</span>
          <h1 className="text-4xl md:text-7xl font-sans font-black tracking-widest mb-6 uppercase text-[#0a3c2e]">
            BECOME A CERTIFIED <br/>
            <span className="text-gold-dark font-serif italic lowercase font-light">makeup artist</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#0a3c2e]/40 mx-auto my-6"></div>
          <p className="text-gray-700 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Learn directly from Aura's certified master styling architects. Hands-on training, premium kits included, and 100% placement assurance.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-[#0a3c2e] text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-gold hover:text-[#03110e] transition-all shadow-lg"
          >
            Enroll / Enquire Now
          </button>
        </div>
      </section>

      {/* Courses List (Deep Emerald Slate Theme) */}
      <section className="py-32 px-8 max-w-7xl mx-auto w-full relative z-10 bg-[#03110e]">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Curriculum</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-widest mb-6 uppercase">OUR SYLLABUS</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group relative overflow-hidden rounded-3xl border border-[#133c30]/20 bg-[#061c17] flex flex-col h-full hover:border-[#133c30]/40 transition-all duration-300 shadow-lg">
              <div className="relative h-64 w-full bg-[#03110e] overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90" 
                />
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-[#03110e]/90 border border-[#133c30]/30 rounded-full text-gold text-xs font-bold">
                  {course.duration}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-[#faf8f5] mb-4 group-hover:text-gold transition-colors">{course.title}</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6 flex-grow">{course.description}</p>
                
                <div className="flex justify-between items-center mt-auto border-t border-[#133c30]/10 pt-6">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Course Fee</span>
                    <span className="text-xl font-bold text-[#faf8f5]">{course.price}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, course: course.id }));
                      setIsModalOpen(true);
                    }}
                    className="px-4 py-2 bg-gold/10 hover:bg-gold hover:text-[#03110e] text-gold uppercase tracking-widest text-[10px] font-bold rounded-lg border border-gold/20 transition-all"
                  >
                    Get Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academy Perks Section (Cream Light Theme) */}
      <section className="py-32 px-8 bg-[#f5ede1] text-[#1a2e26] border-t border-[#e4be7b]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Personal Kits Included", desc: "Every student receives a professional makeup and hair styling kit worth ₹10,000 with high-end tools." },
              { title: "Live Client Practice", desc: "Work directly on models and clients during real salon hours under professional supervision." },
              { title: "International Certification", desc: "Get an ISO-certified academy completion degree to boost your credentials globally." }
            ].map((perk, i) => (
              <div key={i} className="p-8 border border-[#e4be7b]/30 rounded-3xl bg-white hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-[#0a3c2e]/10 border border-[#0a3c2e]/30 flex items-center justify-center text-[#0a3c2e] mx-auto mb-6 font-serif italic font-bold">
                  0{i+1}
                </div>
                <h4 className="text-lg font-serif font-bold text-[#0a3c2e] mb-3">{perk.title}</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Cream Light Theme) */}
      <footer className="py-16 text-center border-t border-[#e4be7b]/30 bg-[#f5ede1] text-gray-500 relative z-10">
        <div className="text-3xl font-serif font-black tracking-[0.15em] text-[#0a3c2e] mb-6 italic">
          AURA<span className="text-gold-dark font-sans not-italic font-black">ACADEMY</span>
        </div>
        <p className="tracking-wider text-xs">&copy; {new Date().getFullYear()} Aura Academy. All rights reserved.</p>
      </footer>

      {/* LEAD MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#03110e]/90 backdrop-blur-md cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-lg bg-[#061c17] border border-[#133c30]/30 rounded-3xl p-8 sm:p-10 shadow-2xl z-10 transform scale-100 transition-transform duration-300 animate-fade-up">
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-gold/10 border border-gold/40 rounded-full flex items-center justify-center text-gold text-2xl mx-auto mb-6 animate-pulse">✓</div>
                <h3 className="text-2xl font-serif font-bold text-[#faf8f5] mb-3">Enquiry Registered!</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">Our academy coordinator will call you back within 24 hours.</p>
              </div>
            ) : (
              <div>
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold block mb-2 text-center">Fast Track Your Career</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-center text-[#faf8f5] mb-8 italic">ACADEMY ADMISSION ENQUIRY</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Select Master Course</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData(p => ({ ...p, course: e.target.value }))}
                      className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="professional-makeup">Professional Makeup Artistry (3 Months)</option>
                      <option value="hair-styling">Advanced Hair Sculpting (2 Months)</option>
                      <option value="nail-artistry">Nail Artistry & Extensions (1 Month)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Any questions or special requests?"
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-gold transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-gold text-[#03110e] uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-[#faf8f5] transition-all shadow-[0_0_20px_rgba(228,190,123,0.3)] mt-2"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
