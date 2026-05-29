"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Academy', href: '/academy' },
    { name: 'Franchise', href: '/franchise' },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 w-full py-5 px-6 md:px-8 flex justify-between items-center z-50 transition-all duration-300 bg-[#03110e]/80 backdrop-blur-xl border-b border-[#133c30]/20">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-[0.1em] text-[#faf8f5] italic z-50">
          AURA<span className="text-gold">SALON</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className={`${pathname === link.href ? 'text-gold' : 'hover:text-gold transition-colors'}`}>
              {link.name}
            </Link>
          ))}
          {user ? (
            <Link href="/profile" className="text-white hover:text-gold transition-colors border border-gold/30 px-4 py-2 rounded-lg bg-gold/5">PROFILE</Link>
          ) : (
            <Link href="/login" className="hover:text-gold transition-colors">Login</Link>
          )}
        </nav>
        
        <div className="hidden xl:block">
          <Link href="/book" className="px-7 py-3 bg-gold text-black uppercase tracking-[0.2em] text-[10px] font-black rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(228,190,123,0.3)]">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-[#faf8f5] z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#03110e]/95 backdrop-blur-2xl flex flex-col items-center justify-center pt-20 xl:hidden">
          <nav className="flex flex-col items-center gap-6 text-sm uppercase tracking-[0.3em] font-black text-gray-400 w-full px-8 overflow-y-auto max-h-[80vh]">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className={`w-full text-center py-3 border-b border-[#133c30]/10 ${pathname === link.href ? 'text-gold' : 'hover:text-gold'}`}>
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <Link href="/profile" className="w-full text-center py-3 text-white hover:text-gold border-b border-[#133c30]/10">PROFILE</Link>
            ) : (
              <Link href="/login" className="w-full text-center py-3 hover:text-gold border-b border-[#133c30]/10">Login / Sign Up</Link>
            )}
            
            <Link href="/book" className="mt-4 w-full py-4 text-center bg-gold text-black uppercase tracking-[0.2em] text-[10px] font-black rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(228,190,123,0.3)]">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
