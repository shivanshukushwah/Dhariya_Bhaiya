"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

export default function FranchisePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    investment: '10-20-lakhs',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const isAlreadySubmitted = localStorage.getItem('franchise_inquiry_submitted');
      if (!isAlreadySubmitted) {
        setIsModalOpen(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('franchise_inquiry_submitted', 'true');
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  const benefits = [
    { title: "Turnkey Operations", desc: "Full interior layout design assistance, contractor guidelines, and operational workflow setup." },
    { title: "Staff Training & Hiring", desc: "Hiring support with expert academy training in Aura's signature styles." },
    { title: "Local & Digital Marketing", desc: "Coordinated social media branding, Google Maps local SEO, and influencer launch management." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#03110e] text-[#faf8f5] selection:bg-gold selection:text-[#03110e] relative">
      {/* Background layer for immersion */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
          alt="Franchise Background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#03110e] via-[#03110e]/90 to-[#03110e]"></div>
      </div>

      <Header />

      {/* Hero Header - Alternating Cream Layout */}
      <section className="relative py-28 px-4 text-center overflow-hidden border-b border-[#e4be7b]/30 bg-[#f5ede1] text-[#1a2e26] z-10">
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#0a3c2e] uppercase tracking-[0.4em] text-xs font-black mb-4 block">Aura Salon Franchise</span>
          <h1 className="text-4xl md:text-7xl font-sans font-black tracking-widest mb-6 uppercase text-[#0a3c2e]">
            PARTNER WITH LUCK & <br/>
            <span className="text-gold-dark font-serif italic lowercase font-light">premium growth</span>
          </h1>
          <div className="w-24 h-0.5 bg-[#0a3c2e]/40 mx-auto my-6"></div>
          <p className="text-gray-700 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Aura is Bikaner's most loved luxury hair & beauty brand. Launch our highly profitable, royalty-free franchise model in your city.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-[#0a3c2e] text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-gold hover:text-[#03110e] transition-all shadow-lg"
          >
            Apply for Franchise
          </button>
        </div>
      </section>

      {/* Benefits Grid (Cream Light Theme) */}
      <section className="py-32 px-8 bg-[#f5ede1] text-[#1a2e26] border-b border-[#e4be7b]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#0a3c2e] uppercase tracking-[0.4em] text-xs font-black mb-4 block">Why Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-[#0a3c2e] italic">WHY CHOOSE AURA SALON</h2>
            <div className="w-24 h-0.5 bg-[#0a3c2e]/40 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 border border-[#e4be7b]/30 rounded-3xl bg-white hover:scale-105 transition-transform duration-300 shadow-xl">
                <h4 className="text-xl font-serif font-bold text-[#0a3c2e] mb-4">{benefit.title}</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Models (Deep Emerald Slate Theme) */}
      <section className="py-32 px-8 bg-[#03110e] relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Investment Profile</span>
            <h2 className="text-3xl font-sans font-black tracking-widest text-[#faf8f5]">FRANCHISE METRICS</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-[#061c17] border border-[#133c30]/20 rounded-2xl">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-2">Space Required</span>
              <span className="text-2xl font-black text-[#faf8f5]">1000 - 1500 Sq Ft</span>
            </div>
            <div className="p-8 bg-[#061c17] border border-[#133c30]/20 rounded-2xl">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-2">Estimated Investment</span>
              <span className="text-2xl font-black text-gold">₹15L - ₹25 Lakhs</span>
            </div>
            <div className="p-8 bg-[#061c17] border border-[#133c30]/20 rounded-2xl">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-2">Royalty Model</span>
              <span className="text-2xl font-black text-[#faf8f5]">0% (Royalty Free)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Cream Light Theme) */}
      <footer className="py-16 text-center border-t border-[#e4be7b]/30 bg-[#f5ede1] text-gray-500 relative z-10">
        <div className="text-3xl font-serif font-black tracking-[0.15em] text-[#0a3c2e] mb-6 italic">
          AURA<span className="text-gold-dark font-sans not-italic font-black">FRANCHISE</span>
        </div>
        <p className="tracking-wider text-xs">&copy; {new Date().getFullYear()} Aura Salon Franchise. All rights reserved.</p>
      </footer>

      {/* FRANCHISE LEAD MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#03110e]/90 backdrop-blur-md cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-lg bg-[#061c17] border border-[#133c30]/30 rounded-3xl p-8 sm:p-10 shadow-2xl z-10 animate-fade-up">
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
                <h3 className="text-2xl font-serif font-bold text-[#faf8f5] mb-3">Application Received!</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">Our Business Development head will call you to share the franchise brochure.</p>
              </div>
            ) : (
              <div>
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold block mb-2 text-center">Profitable Partnership</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-center text-[#faf8f5] mb-8 italic">FRANCHISE PARTNERSHIP INQUIRY</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Contact Person Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Amit Kapoor"
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
                        placeholder="e.g. business@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Target City / State</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Jaipur, Rajasthan"
                        value={formData.city}
                        onChange={(e) => setFormData(p => ({ ...p, city: e.target.value }))}
                        className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Investment Budget</label>
                      <select
                        value={formData.investment}
                        onChange={(e) => setFormData(p => ({ ...p, investment: e.target.value }))}
                        className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="10-20-lakhs">₹10L - ₹20 Lakhs</option>
                        <option value="20-30-lakhs">₹20L - ₹30 Lakhs</option>
                        <option value="30-50-lakhs">₹30L - ₹50 Lakhs</option>
                        <option value="50-lakhs+">₹50 Lakhs+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider block mb-2 font-bold">Partnership Details</label>
                    <textarea 
                      rows={3}
                      placeholder="Briefly describe your business background..."
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-[#03110e] border border-[#133c30]/30 rounded-xl px-4 py-3 text-sm text-[#faf8f5] focus:outline-none focus:border-gold transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-gold text-[#03110e] uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-[#faf8f5] transition-all shadow-[0_0_20px_rgba(228,190,123,0.3)] mt-2"
                  >
                    Submit Franchise Request
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
