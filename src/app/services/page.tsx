'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { getActiveOffer } from '@/app/actions/offers';
import Header from '../components/Header';

const getServiceImage = (name: string, category: string) => {
  const n = name.toLowerCase();
  const c = category.toLowerCase();
  
  // A simple hash function to guarantee same name gets same index, but different names get different indexes!
  const hash = n.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  let pool = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop"
  ];
  
  if (n.includes("eyebrow") || n.includes("threading") || n.includes("face threading")) {
    pool = [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400&auto=format&fit=crop"
    ];
  } else if (c.includes("wax") || n.includes("wax")) {
    pool = [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop"
    ];
  } else if (n.includes("makeup") || n.includes("bridal") || n.includes("party") || c.includes("package") || n.includes("package")) {
    pool = [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597517812497-27a4a88f72c0?q=80&w=400&auto=format&fit=crop"
    ];
  } else if (n.includes("facial") || n.includes("cleanup") || c.includes("facial") || c.includes("skincare") || n.includes("skincare")) {
    pool = [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop"
    ];
  } else if (n.includes("massage") || n.includes("oil massage") || c.includes("massage")) {
    pool = [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop"
    ];
  } else if (n.includes("pedicure") || n.includes("manicure") || n.includes("pedi") || n.includes("mani")) {
    pool = [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop"
    ];
  } else if (c.includes("hair") || n.includes("cut") || n.includes("styling") || n.includes("haircut") || n.includes("spa") || n.includes("colour") || n.includes("color") || n.includes("balayage") || n.includes("highlight") || n.includes("straight") || n.includes("smooth") || n.includes("botox") || n.includes("keratin") || n.includes("wash") || n.includes("conditioning")) {
    pool = [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop"
    ];
  } else {
    pool = [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop"
    ];
  }
  
  const selectedIndex = hash % pool.length;
  return pool[selectedIndex];
};

const getServiceDescription = (name: string, category: string) => {
  const n = name.toLowerCase();
  const c = category.toLowerCase();
  
  if (n.includes("eyebrow") || n.includes("threading") || n.includes("face threading")) {
    return "Precision arches mapped to your facial structure using premium organic thread for a smooth, high-fashion structural lift.";
  }
  if (c.includes("wax") || n.includes("wax")) {
    return "Flawless, ultra-smooth finish using elite organic bean and milk waxes, minimizing redness and maximizing luxury skin comfort.";
  }
  if (n.includes("makeup") || n.includes("bridal") || n.includes("party")) {
    return "Red-carpet-ready couture makeup crafted with the finest luxury brands (Chanel, Dior, Estée Lauder) by our master artists.";
  }
  if (n.includes("facial") || n.includes("cleanup")) {
    return "Advanced skincare architecture involving deep biological cleansing and serum infusion for a radiant, royal dew-glow.";
  }
  if (n.includes("massage") || n.includes("oil massage")) {
    return "Restorative royal wellness therapy utilizing warm essential oils to release tension, detoxify, and align deep muscle energy.";
  }
  if (n.includes("pedicure") || n.includes("manicure") || n.includes("pedi") || n.includes("mani")) {
    return "Bespoke cuticle restoration, professional skin exfoliation, and premium high-shine couture gold lacquers.";
  }
  if (n.includes("cut") || n.includes("styling") || n.includes("haircut")) {
    return "Custom structural cut and professional styling mapped perfectly to your head shape, completed with a premium designer blow-dry.";
  }
  if (n.includes("spa") || n.includes("dandruff") || n.includes("hairfall")) {
    return "Intense scalp detoxifying wash followed by a deep botanical clay conditioning treatment to revitalize hair roots.";
  }
  if (n.includes("colour") || n.includes("color") || n.includes("balayage") || n.includes("highlight")) {
    return "Expert couture hair coloring featuring customized highlighting shades to add multidimensional royal luxury shine.";
  }
  if (n.includes("straight") || n.includes("smooth") || n.includes("botox") || n.includes("keratin") || n.includes("nanoplastia") || n.includes("wash") || n.includes("conditioning")) {
    return "Advanced bond-reconstructing therapy designed to eliminate frizz and infuse intense silk proteins for luminous straight hair.";
  }
  return "A premium bespoke beauty treatment crafted meticulously to pamper your senses and elevate your natural regal aura.";
};

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeOffer, setActiveOffer] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const offer = await getActiveOffer();
      setActiveOffer(offer);

      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('price', { ascending: true });
      
      if (!error && data) {
        setServices(data);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // Filter out Men's services (ONLY women's services, just like Bhaavya Kapur)
  const filteredMenu = useMemo(() => {
    const womenMenu = services.filter(s => {
      const nameLower = s.name.toLowerCase();
      const catLower = (s.category || '').toLowerCase();
      
      const isMen = catLower === 'men' || nameLower.includes('(men)') || nameLower.includes(' - men') || nameLower.endsWith(' men');
      return !isMen;
    });

    const grouped: Record<string, any[]> = {};
    womenMenu.forEach(s => {
      const cleanName = s.name.replace(/\s*\((Men|Women)\)/g, '');
      let category = s.category;

      if (category === 'Women') {
        const nameLower = s.name.toLowerCase();
        if (nameLower.includes('cut')) {
          category = 'Hair Styling & Cut';
        } else if (nameLower.includes('makeup') || nameLower.includes('bridal') || nameLower.includes('party')) {
          category = 'Makeup & Styling';
        } else if (nameLower.includes('massage') || nameLower.includes('pedi') || nameLower.includes('mani') || nameLower.includes('coconut')) {
          category = 'Mani / Pedi & Wellness';
        } else if (nameLower.includes('wax') || nameLower.includes('arms') || nameLower.includes('legs')) {
          category = 'Waxing Services';
        } else if (nameLower.includes('threading') || nameLower.includes('lips') || nameLower.includes('vlcc') || nameLower.includes('facial') || nameLower.includes('lotus') || nameLower.includes('o3') || nameLower.includes('ragga')) {
          category = 'Facial & Skincare';
        } else if (nameLower.includes('dandruff') || nameLower.includes('hairfall') || nameLower.includes('spa')) {
          category = 'Hair Spa & Care';
        } else if (nameLower.includes('straightening') || nameLower.includes('curl') || nameLower.includes('keratin') || nameLower.includes('botox') || nameLower.includes('smoothning') || nameLower.includes('smoothing') || nameLower.includes('nanoplastia')) {
          category = 'Hair Treatments';
        } else if (nameLower.includes('wash') || nameLower.includes('streax') || nameLower.includes('loreal') || s.name === 'Normal') {
          category = 'Hair Wash & Conditioning';
        } else {
          category = 'Premium Beauty Care';
        }
      }

      if (!grouped[category]) grouped[category] = [];
      grouped[category].push({ ...s, cleanName });
    });

    return grouped;
  }, [services]);

  const categories = Object.keys(filteredMenu);

  // Balanced Column Layout
  const leftCategories: string[] = [];
  const rightCategories: string[] = [];
  let leftHeight = 0;
  let rightHeight = 0;

  categories.forEach((cat) => {
    const catHeight = filteredMenu[cat].length * 80 + 150;
    if (leftHeight <= rightHeight) {
      leftCategories.push(cat);
      leftHeight += catHeight;
    } else {
      rightCategories.push(cat);
      rightHeight += catHeight;
    }
  });

  const isLeftShorter = leftHeight < rightHeight;

  const getCategoryIcon = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes("hair")) {
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19m0-14l4.121 4.121" /></svg>;
    } else if (c.includes("wax")) {
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    } else if (c.includes("spa") || c.includes("massage") || c.includes("pedi") || c.includes("mani")) {
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" /></svg>;
    } else if (c.includes("facial") || c.includes("skin")) {
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    } else if (c.includes("makeup")) {
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    } else {
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
    }
  };

  return (
    <div className="min-h-screen text-[#faf8f5] bg-[#03110e] selection:bg-gold selection:text-[#03110e] font-sans relative">
      {/* Background overlay for immersion */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop" 
          alt="Luxury Backdrop" 
          fill 
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-[#03110e] via-[#03110e]/90 to-[#03110e]"></div>
      </div>

      <Header />

      {/* Hero Section (Deep Emerald & Gold Velvet Theme) */}
      <section className="relative py-32 px-4 text-center overflow-hidden border-b border-gold/20 bg-gradient-to-b from-[#03110e] via-[#061c17]/80 to-[#03110e] text-[#faf8f5] z-10">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop" 
            alt="Luxury Salon Interior" 
            fill 
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#03110e_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-4 block drop-shadow-md">Aura Salon & Makeup Studio</span>
          <h1 className="text-4xl md:text-7xl font-sans font-black tracking-widest mb-6 uppercase text-white">
            WOMENS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold font-serif italic not-italic font-black">SERVICES</span>
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6"></div>
          <p className="text-gray-300 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Immerse yourself in absolute indulgence. Meticulously curated with the world's most elite cosmetic formulations and delivered by Bikaner's master styling architects.
          </p>
        </div>
      </section>

      {/* Main Grid Content (Deep Emerald Slate Theme) */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-24 relative z-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-24">
            {/* Elegant Hero image block */}
            <div className="relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden border border-[#133c30]/20 group shadow-2xl bg-[#061c17]">
              <Image 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop" 
                alt="Women's Salon Experience"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03110e] via-[#03110e]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
                <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-widest mb-3">
                  Grace & Elegance
                </h2>
                <p className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
                  Premium Women's Grooming & Bridal Experience
                </p>
              </div>
            </div>

            {categories.length === 0 ? (
              <div className="text-center py-20 bg-[#061c17]/30 rounded-3xl border border-[#133c30]/20">
                <p className="text-gray-500 italic uppercase tracking-widest text-xs">No services found for this selection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                {/* Left Column */}
                <div className="space-y-16">
                  {leftCategories.map((cat) => (
                    <div key={cat} className="space-y-6">
                      <div className="group/cat flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                          {getCategoryIcon(cat)}
                        </div>
                        <h2 className="text-lg font-sans font-black tracking-widest uppercase text-white group-hover/cat:text-gold transition-colors">{cat}</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredMenu[cat].map((service, idx) => (
                          <div 
                            key={service.id || idx}
                            className="group h-56 w-full cursor-pointer"
                            style={{ perspective: '1000px' }}
                          >
                            <div 
                              className="relative w-full h-full duration-700 ease-out transition-transform group-hover:[transform:rotateY(180deg)]"
                              style={{ transformStyle: 'preserve-3d' }}
                            >
                              {/* FRONT SIDE */}
                              <div 
                                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#133c30]/20 bg-[#061c17] flex flex-col justify-between p-6"
                                style={{ position: 'absolute', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                              >
                                <Image 
                                  src={getServiceImage(service.name, cat)} 
                                  alt={service.cleanName} 
                                  fill 
                                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03110e] via-[#03110e]/30 to-transparent z-0"></div>

                                <div className="relative z-10 flex justify-between items-start">
                                  {service.price > 1000 ? (
                                    <span className="px-2 py-0.5 bg-gold/20 border border-gold/40 text-gold text-[7px] font-black uppercase tracking-widest rounded-md">VIP Treatment</span>
                                  ) : (
                                    <span className="px-2 py-0.5 bg-[#03110e]/60 border border-[#133c30]/30 text-white text-[7px] font-black uppercase tracking-widest rounded-md">Classic</span>
                                  )}
                                  <span className="text-[8px] text-gray-300 font-bold tracking-widest bg-[#03110e]/60 px-2 py-0.5 rounded-md uppercase">{service.duration_mins || 60} MIN</span>
                                </div>

                                <div className="relative z-10 mt-auto">
                                  <h3 className="text-base font-black tracking-widest text-white uppercase drop-shadow-md mb-1">{service.cleanName}</h3>
                                  <p className="text-[8px] text-gold/80 font-black uppercase tracking-[0.2em] flex items-center gap-1">
                                    <span>Details</span>
                                    <span className="animate-pulse">&rarr;</span>
                                  </p>
                                </div>
                              </div>

                              {/* BACK SIDE */}
                              <div 
                                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-gold/30 bg-gradient-to-br from-[#06241c] to-[#020d0b] flex flex-col justify-between p-6 [transform:rotateY(180deg)]"
                                style={{ position: 'absolute', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                              >
                                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#e4be7b_1px,transparent_1px)] [background-size:16px_16px]"></div>

                                <div className="relative z-10">
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                                    <h4 className="text-[9px] text-gold font-bold tracking-widest uppercase">{cat}</h4>
                                  </div>
                                  <h3 className="text-xs font-black text-white uppercase tracking-wider mb-1.5">{service.cleanName}</h3>
                                  <p className="text-[10px] text-gray-300 leading-relaxed font-light">
                                    {getServiceDescription(service.name, cat)}
                                  </p>
                                </div>

                                <div className="relative z-10 flex justify-between items-end mt-2 pt-2 border-t border-[#133c30]/40">
                                  <div className="flex flex-col">
                                    <span className="text-[8px] text-gray-400 font-bold tracking-widest uppercase mb-0.5">Price</span>
                                    {activeOffer ? (
                                      <div className="flex items-baseline gap-2">
                                        <span className="text-base font-bold text-gold whitespace-nowrap">
                                          ₹{Math.round(service.price * (1 - activeOffer.discount_percentage / 100))}
                                        </span>
                                        <span className="text-[10px] text-gray-500 line-through">₹{service.price}</span>
                                      </div>
                                    ) : (
                                      <span className="text-base font-bold text-gold whitespace-nowrap">₹{service.price}</span>
                                    )}
                                  </div>

                                  <Link 
                                    href={`/book?service=${encodeURIComponent(service.name)}`}
                                    className="px-4 py-2 bg-gold hover:bg-white text-[#03110e] text-[9px] font-sans font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(228,190,123,0.2)]"
                                  >
                                    Book Chair
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Balancing card */}
                  {isLeftShorter && (
                    <div className="bg-[#061c17] border border-[#133c30]/20 p-8 rounded-3xl relative overflow-hidden group shadow-lg">
                      <span className="text-[10px] text-gold font-sans font-black uppercase tracking-[0.3em] mb-2 block">
                        Couture Indulgence
                      </span>
                      <h3 className="text-2xl font-serif font-bold italic text-white mb-4">
                        THE EMPRESS <span className="text-gold font-sans not-italic font-black">EXPERIENCE</span>
                      </h3>
                      <p className="text-gray-300 text-xs leading-relaxed mb-6 font-light">
                        Immerse yourself in absolute wellness. Our custom bridal styling and advanced hair botanical spa treatments are designed to bring out your luminous, royal glow.
                      </p>
                      <Link 
                        href="/book" 
                        className="inline-block px-8 py-3 bg-gold text-[#03110e] text-xs font-sans font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_15px_rgba(228,190,123,0.3)]"
                      >
                        Reserve Spot
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-16">
                  {rightCategories.map((cat) => (
                    <div key={cat} className="space-y-6">
                      <div className="group/cat flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                          {getCategoryIcon(cat)}
                        </div>
                        <h2 className="text-lg font-sans font-black tracking-widest uppercase text-white group-hover/cat:text-gold transition-colors">{cat}</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent"></div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredMenu[cat].map((service, idx) => (
                          <div 
                            key={service.id || idx}
                            className="group h-56 w-full cursor-pointer"
                            style={{ perspective: '1000px' }}
                          >
                            <div 
                              className="relative w-full h-full duration-700 ease-out transition-transform group-hover:[transform:rotateY(180deg)]"
                              style={{ transformStyle: 'preserve-3d' }}
                            >
                              {/* FRONT SIDE */}
                              <div 
                                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#133c30]/20 bg-[#061c17] flex flex-col justify-between p-6"
                                style={{ position: 'absolute', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                              >
                                <Image 
                                  src={getServiceImage(service.name, cat)} 
                                  alt={service.cleanName} 
                                  fill 
                                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03110e] via-[#03110e]/30 to-transparent z-0"></div>

                                <div className="relative z-10 flex justify-between items-start">
                                  {service.price > 1000 ? (
                                    <span className="px-2 py-0.5 bg-gold/20 border border-gold/40 text-gold text-[7px] font-black uppercase tracking-widest rounded-md">VIP Treatment</span>
                                  ) : (
                                    <span className="px-2 py-0.5 bg-[#03110e]/60 border border-[#133c30]/30 text-white text-[7px] font-black uppercase tracking-widest rounded-md">Classic</span>
                                  )}
                                  <span className="text-[8px] text-gray-300 font-bold tracking-widest bg-[#03110e]/60 px-2 py-0.5 rounded-md uppercase">{service.duration_mins || 60} MIN</span>
                                </div>

                                <div className="relative z-10 mt-auto">
                                  <h3 className="text-base font-black tracking-widest text-white uppercase drop-shadow-md mb-1">{service.cleanName}</h3>
                                  <p className="text-[8px] text-gold/80 font-black uppercase tracking-[0.2em] flex items-center gap-1">
                                    <span>Details</span>
                                    <span className="animate-pulse">&rarr;</span>
                                  </p>
                                </div>
                              </div>

                              {/* BACK SIDE */}
                              <div 
                                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-gold/30 bg-gradient-to-br from-[#06241c] to-[#020d0b] flex flex-col justify-between p-6 [transform:rotateY(180deg)]"
                                style={{ position: 'absolute', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                              >
                                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#e4be7b_1px,transparent_1px)] [background-size:16px_16px]"></div>

                                <div className="relative z-10">
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                                    <h4 className="text-[9px] text-gold font-bold tracking-widest uppercase">{cat}</h4>
                                  </div>
                                  <h3 className="text-xs font-black text-white uppercase tracking-wider mb-1.5">{service.cleanName}</h3>
                                  <p className="text-[10px] text-gray-300 leading-relaxed font-light">
                                    {getServiceDescription(service.name, cat)}
                                  </p>
                                </div>

                                <div className="relative z-10 flex justify-between items-end mt-2 pt-2 border-t border-[#133c30]/40">
                                  <div className="flex flex-col">
                                    <span className="text-[8px] text-gray-400 font-bold tracking-widest uppercase mb-0.5">Price</span>
                                    {activeOffer ? (
                                      <div className="flex items-baseline gap-2">
                                        <span className="text-base font-bold text-gold whitespace-nowrap">
                                          ₹{Math.round(service.price * (1 - activeOffer.discount_percentage / 100))}
                                        </span>
                                        <span className="text-[10px] text-gray-500 line-through">₹{service.price}</span>
                                      </div>
                                    ) : (
                                      <span className="text-base font-bold text-gold whitespace-nowrap">₹{service.price}</span>
                                    )}
                                  </div>

                                  <Link 
                                    href={`/book?service=${encodeURIComponent(service.name)}`}
                                    className="px-4 py-2 bg-gold hover:bg-white text-[#03110e] text-[9px] font-sans font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(228,190,123,0.2)]"
                                  >
                                    Book Chair
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Balancing card right column */}
                  {!isLeftShorter && (
                    <div className="bg-[#061c17] border border-[#133c30]/20 p-8 rounded-3xl relative overflow-hidden group shadow-lg">
                      <span className="text-[10px] text-gold font-sans font-black uppercase tracking-[0.3em] mb-2 block">
                        Couture Indulgence
                      </span>
                      <h3 className="text-2xl font-serif font-bold italic text-white mb-4">
                        THE EMPRESS <span className="text-gold font-sans not-italic font-black">EXPERIENCE</span>
                      </h3>
                      <p className="text-gray-300 text-xs leading-relaxed mb-6 font-light">
                        Immerse yourself in absolute wellness. Our custom bridal styling and advanced hair botanical spa treatments are designed to bring out your luminous, royal glow.
                      </p>
                      <Link 
                        href="/book" 
                        className="inline-block px-8 py-3 bg-gold text-[#03110e] text-xs font-sans font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_15px_rgba(228,190,123,0.3)]"
                      >
                        Reserve Spot
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Call to Action (Deep Emerald Velvet & Gold Theme) */}
      <section className="py-24 px-8 bg-gradient-to-b from-[#03110e] to-[#061c17] text-white text-center border-t border-gold/10 relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-3 block drop-shadow-md">Ready to Transform?</span>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-8 text-white italic">
            BOOK YOUR BEAUTY SESSION
          </h2>
          <Link href="/book" className="px-10 py-4 bg-gold text-[#03110e] uppercase tracking-widest text-xs font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(228,190,123,0.3)]">
            Schedule Appointment &rarr;
          </Link>
        </div>
      </section>

      <footer className="py-16 text-center border-t border-gold/10 bg-[#03110e] text-gray-400 relative z-10">
        <p className="text-[10px] tracking-[0.5em] uppercase">AURA SALON &bull; Excellence in Every Detail</p>
      </footer>
    </div>
  );
}
