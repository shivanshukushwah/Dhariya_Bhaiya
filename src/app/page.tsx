import Link from 'next/link';
import Image from 'next/image';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { getActiveOffer } from '@/app/actions/offers';
import { getPublishedReviews } from '@/app/actions/reviews';
import Header from './components/Header';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activeOffer = await getActiveOffer();
  const publishedReviews = await getPublishedReviews();

  const displayReviews = publishedReviews.length > 0 
    ? publishedReviews 
    : [
        { customer_name: "Sarah L.", comment: "Absolutely phenomenal experience. Anu understood exactly what I wanted with my balayage. The luxury spa treatment felt like heaven.", rating: 5 },
        { customer_name: "David K.", comment: "Best fade and beard trim I've ever had. Sandeep is a true artist. The hot towel shave is a must-try for any guy.", rating: 5 },
        { customer_name: "Priya M.", comment: "The ambiance is incredibly premium. It really feels like a VIP experience from the moment you walk in. Will definitely be returning.", rating: 5 }
      ];

  const services = [
    { title: "COUTURE HAIR", url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop", link: "/services" },
    { title: "BRIDAL MAKEUP", url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop", link: "/services" },
    { title: "SKIN ESSENTIALS", url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop", link: "/services" },
    { title: "ROYAL ACADEMY", url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop", link: "/academy" },
    { title: "NAIL ARTISTRY", url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop", link: "/services" },
    { title: "PARTNERSHIPS", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop", link: "/franchise" },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-gold selection:text-[#03110e] bg-[#03110e]">
      {/* Promotional Banner */}
      {activeOffer && (
        <div className="bg-gold text-[#03110e] px-4 py-3 text-center relative z-50 overflow-hidden shadow-[0_0_20px_rgba(228,190,123,0.3)]">
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span className="font-serif italic font-bold uppercase tracking-widest text-sm md:text-base animate-pulse">
              🎉 {activeOffer.title} 🎉
            </span>
            <span className="hidden md:inline font-bold opacity-50">|</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">
              {activeOffer.description}
            </span>
            <span className="hidden md:inline font-bold opacity-50">|</span>
            <Link href="/book" className="ml-2 px-4 py-1 bg-[#03110e] text-gold rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#faf8f5] hover:text-[#03110e] transition-colors">
              Book Now &rarr;
            </Link>
          </div>
        </div>
      )}
      <Header />

      {/* Hero Section (Dark Slate Emerald Theme) */}
      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop" 
            alt="Aura Salon Premium Interior" 
            fill 
            className="object-cover object-center opacity-30 contrast-110 animate-ken-burns scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#03110e]/90 via-transparent to-[#03110e]"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center max-w-4xl mt-10 animate-fade-up">
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
            Luxury Grooming & Bridal Artistry
          </p>
          <h1 className="text-5xl md:text-8xl font-sans font-black tracking-widest mb-8 leading-[1.1] text-white">
            BE AN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">AURA BRIDE</span>
          </h1>
          <div className="w-24 h-px bg-gold/50 my-4"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
            Experience the pinnacle of hair, beauty, and bespoke bridal care. Our leading experts deliver customized treatments in an atmosphere of pure royal luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/book" className="px-10 py-4 bg-gold text-[#03110e] uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(228,190,123,0.4)]">
              Reserve a Chair
            </Link>
            <Link href="/services" className="px-10 py-4 bg-[#03110e]/50 backdrop-blur-xl border border-[#133c30] text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:border-gold hover:text-gold transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </main>

      {/* Services Grid Section (Dark Theme) */}
      <section className="py-32 px-6 relative z-10 border-t border-[#133c30]/20 bg-[#03110e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Crafted for Excellence</span>
            <h2 className="text-4xl md:text-6xl font-sans font-black tracking-widest mb-6 uppercase text-white">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((item, i) => (
              <Link href={item.link} key={i} className="group relative h-96 overflow-hidden rounded-2xl border border-[#133c30]/20 bg-[#061c17] transition-all duration-500 hover:border-gold/50 shadow-lg">
                <Image 
                  src={item.url} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] opacity-60 group-hover:opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03110e] via-[#03110e]/30 to-transparent group-hover:via-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
                  <h3 className="text-white text-2xl font-sans font-black tracking-[0.2em] group-hover:text-gold group-hover:scale-105 transition-all duration-300 uppercase text-center drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome & Philosophy Section (Cream Light Theme) */}
      <section className="py-32 px-8 bg-[#f5ede1] text-[#1a2e26] relative z-10 border-t border-b border-[#e4be7b]/30">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Portrait of Founder */}
          <div className="relative w-full lg:w-1/2 h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <Image 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" 
              alt="Anu - Aura Salon Master Artist" 
              fill 
              className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#03110e]/95 backdrop-blur rounded-2xl border border-gold/20 text-white">
              <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-black block mb-1">Founder & Art Director</span>
              <h4 className="text-xl font-serif font-bold italic tracking-wide">Anu Kapoor</h4>
            </div>
          </div>

          {/* Philosophy details */}
          <div className="w-full lg:w-1/2">
            <span className="text-emerald-light uppercase tracking-[0.4em] text-xs font-black mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-8 leading-[1.1] italic text-emerald-deep">
              WHERE LUXURY <br />
              MEETS ARTISTRY.
            </h2>
            <div className="w-16 h-0.5 bg-gold-dark mb-8"></div>
            <p className="text-gray-700 text-lg font-light leading-relaxed mb-8">
              At Aura Salon & Makeup Studio, we believe styling is an intimate form of self-expression. We don't just groom; we architect customized beauty frameworks that elevate your natural features.
            </p>
            <p className="text-gray-700 text-lg font-light leading-relaxed mb-10">
              Each bridal makeover, precision skin spa or color transformation is meticulously planned and styled using high-end international cosmetics, giving you the VIP Aura level status treatment in Bikaner.
            </p>
            <Link href="/meet-anu" className="inline-block px-8 py-4 bg-[#0a3c2e] text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-gold hover:text-[#03110e] transition-all shadow-lg">
              Explore Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Academy & Franchise Promo Banner */}
      <section className="py-24 px-8 relative z-10 bg-[#061c17]/60 border-t border-b border-[#133c30]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Expand & Learn</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-6 text-[#faf8f5]">AURA SALON ACADEMY & FRANCHISE</h2>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              Join Bikaner's premier makeup and grooming academy to launch your career, or partner with us to bring Aura's luxury beauty brand to your city.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <Link href="/academy" className="px-8 py-4 bg-gold text-[#03110e] text-center uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-[#faf8f5] hover:scale-105 transition-all shadow-[0_0_20px_rgba(228,190,123,0.3)]">
              Explore Academy Courses
            </Link>
            <Link href="/franchise" className="px-8 py-4 border border-[#133c30] text-[#faf8f5] text-center uppercase tracking-widest text-xs font-bold rounded-xl hover:border-gold hover:text-gold transition-all">
              Franchise Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Bridal / Couture Showcase Timeline (Dark Theme) */}
      <section className="py-32 px-8 bg-[#03110e] text-white relative z-10 border-b border-[#133c30]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Bespoke Masterpieces</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black tracking-widest mb-6">THE BRIDAL ARTISTRY</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="space-y-24 max-w-5xl mx-auto">
            {/* Bridal Look 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 group">
              <div className="relative w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden border border-[#133c30]/20">
                <Image 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" 
                  alt="Traditional Royal Bridal Look" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-gold font-sans uppercase tracking-widest text-xs font-bold block">Look 01</span>
                <h3 className="text-3xl font-serif font-bold tracking-wide">Traditional Royal Bride</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Rich heritage styling with heavy gold jewelry matching, glowing crimson makeup contouring, and customized high-definition traditional red-lip palettes.
                </p>
                <Link href="/book" className="inline-block text-gold font-bold uppercase tracking-widest text-[10px] border-b border-gold pb-1 hover:text-white hover:border-white transition-all">
                  Request This Makeover
                </Link>
              </div>
            </div>

            {/* Bridal Look 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 group">
              <div className="relative w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden border border-[#133c30]/20">
                <Image 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop" 
                  alt="Modern Minimalist Bride" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-gold font-sans uppercase tracking-widest text-xs font-bold block">Look 02</span>
                <h3 className="text-3xl font-serif font-bold tracking-wide">Modern Pastel Glow</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Soft airbrush finishes, pastel eye styling, elegant floral braided locks, and dew-fresh contouring tailored for modern premium receptions.
                </p>
                <Link href="/book" className="inline-block text-gold font-bold uppercase tracking-widest text-[10px] border-b border-gold pb-1 hover:text-white hover:border-white transition-all">
                  Request This Makeover
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section (Cream Light Theme) */}
      <section className="py-32 px-8 bg-[#f5ede1] text-[#1a2e26] relative z-10 border-b border-[#e4be7b]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-emerald-light uppercase tracking-[0.4em] text-xs font-black mb-4 block">Client Love</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-emerald-deep italic">REVIEWS FROM ROYALS</h2>
            <div className="w-24 h-0.5 bg-emerald-light mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayReviews.map((r: any, i: number) => (
              <div key={i} className="p-8 border border-[#e4be7b]/30 rounded-3xl bg-white shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6 text-gold">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-8 leading-relaxed font-light">"{r.comment}"</p>
                </div>
                <p className="font-serif font-bold tracking-wide uppercase text-sm text-[#0a3c2e] border-t border-gray-100 pt-4">{r.customer_name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact Section (Dark Theme) */}
      <section className="py-32 px-8 bg-[#03110e] text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12">
            {/* Map */}
            <div className="h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-[#133c30]/20 relative shadow-2xl bg-[#061c17]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.0013008821056!2d73.3316263!3d27.993856599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe70d3f2019f1%3A0x518dcc936495b120!2sEirene%20unisex%20salon!5e0!3m2!1sen!2sin!4v1778702787305!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale opacity-80 contrast-125"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details (alternating cream panel) */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10 bg-[#f5ede1] text-[#1a2e26] p-8 sm:p-12 rounded-3xl border border-[#e4be7b]/30 shadow-2xl">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight mb-4 text-[#0a3c2e]">CONTACT US</h2>
                <div className="w-16 h-1 bg-gold-dark rounded-full mb-8"></div>
                
                <div className="flex flex-wrap gap-10 text-gray-700">
                  <div>
                    <h4 className="text-[#0a3c2e] font-black uppercase tracking-widest text-[10px] mb-2">Location</h4>
                    <p className="text-lg font-light">Aura Salon<br/>Bikaner, Rajasthan</p>
                  </div>
                  <div>
                    <h4 className="text-[#0a3c2e] font-black uppercase tracking-widest text-[10px] mb-2">Hours</h4>
                    <p className="text-lg font-light">Monday - Sunday<br/>10:00 AM - 08:30 PM</p>
                  </div>
                  <div>
                    <h4 className="text-[#0a3c2e] font-black uppercase tracking-widest text-[10px] mb-2">Get in Touch</h4>
                    <p className="text-lg font-light">📞 7087726684<br/>📞 7986098228</p>
                  </div>
                  <div>
                    <h4 className="text-[#0a3c2e] font-black uppercase tracking-widest text-[10px] mb-2">Follow Us</h4>
                    <div className="flex gap-4 mt-2">
                      <a href="https://instagram.com/eirene_unisex_salon" target="_blank" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gold hover:text-gold transition-colors bg-white">
                        <svg className="w-5 h-5 text-gray-600 hover:text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 xl:mt-0 w-full xl:w-auto text-center xl:text-left">
                <Link href="/book" className="inline-block w-full xl:w-auto px-10 py-5 bg-[#0a3c2e] text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-gold hover:text-[#03110e] transition-all shadow-xl whitespace-nowrap">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Cream Light Theme) */}
      <footer className="py-16 border-t border-[#e4be7b]/30 text-center text-gray-500 text-sm bg-[#f5ede1] relative z-10">
        <div className="text-3xl font-serif font-black tracking-[0.15em] text-[#0a3c2e] mb-6 italic">
          AURA<span className="text-gold-dark font-sans not-italic font-black">SALON</span>
        </div>
        <p className="tracking-wider text-xs">&copy; {new Date().getFullYear()} Aura Salon. All rights reserved.</p>
        <div className="mt-8">
          <Link href="/admin" className="text-xs text-gray-500 hover:text-gold-dark transition-colors tracking-widest uppercase font-bold">
            Owner / Admin Login
          </Link>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 left-6 z-50 animate-bounce">
        <a 
          href="https://wa.me/917087726684" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
          title="Chat with Aura Salon"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
