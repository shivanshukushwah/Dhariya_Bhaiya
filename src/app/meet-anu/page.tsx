import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

export default function MeetAnuPage() {
  const timeline = [
    {
      year: "2016",
      title: "Founding Vision",
      desc: "Anu starts her journey by graduating from a premium international makeup school, bringing top-tier bridal makeup practices back to Rajasthan."
    },
    {
      year: "2018",
      title: "Aura Salon Launch",
      desc: "Founded the first Aura luxury unisex studio in Bikaner, blending state-of-the-art hair styling with exclusive bridal makeover suites."
    },
    {
      year: "2021",
      title: "Best Makeup Artist Award",
      desc: "Honored with the Rajasthan Style Excellence Award for premium bridal transformations and high-fashion editorial portfolios."
    },
    {
      year: "2024",
      title: "Academy Foundation",
      desc: "Launched Aura Salon Academy to mentor next-gen stylists, grooming students with ISO-certified professional masterclasses."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#03110e] text-[#faf8f5] selection:bg-gold selection:text-[#03110e] relative">
      {/* Background layer for immersion */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop" 
          alt="Anu Studio Backdrop" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#03110e] via-[#03110e]/90 to-[#03110e]"></div>
      </div>

      <Header />

      {/* Main Showcase Section */}
      <section className="relative py-24 md:py-32 px-4 max-w-7xl mx-auto w-full z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden border border-[#133c30]/30 shadow-2xl bg-[#061c17]">
          <Image 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" 
            alt="Anu - Master Makeup Artist" 
            fill 
            className="object-cover" 
            priority
          />
        </div>

        <div className="flex-1 max-w-2xl">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Creative Force</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-6 text-[#faf8f5]">ANU</h1>
          <p className="text-gold font-serif italic text-lg mb-6">Founder, Master Makeup Artist & Educator</p>
          
          <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base sm:text-lg">
            <p>
              With over a decade of dedication to the craft of beauty and transformation, Anu has redefined the luxury grooming landscape in Bikaner. Her signature styling blends classic Indian bridal royalty with modern, luminous airbrush techniques.
            </p>
            <p>
              As the lead makeup artist and educator at Aura Salon, Anu believes that makeup is not about masking, but about illuminating an individual's natural character and confidence. Her work has graced prominent fashion runways, luxury bridal shoots, and magazines.
            </p>
          </div>

          <div className="mt-10 flex gap-6">
            <Link href="/book" className="px-8 py-4 bg-gold text-[#03110e] uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-[#faf8f5] hover:scale-105 transition-all shadow-[0_0_20px_rgba(228,190,123,0.3)]">
              Book Anu for Bridal Makeover
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-8 bg-[#061c17]/30 border-t border-b border-[#133c30]/10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-4 italic uppercase">Her Professional <span className="text-gold">Journey</span></h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-[#133c30]/30 before:pointer-events-none">
            {timeline.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} w-full`}>
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-[6px] w-3.5 h-3.5 rounded-full bg-gold border-2 border-[#03110e] z-10"></div>
                
                {/* Content Box */}
                <div className={`ml-10 sm:ml-0 w-full sm:w-[45%] bg-[#061c17] border border-[#133c30]/20 rounded-2xl p-8 hover:border-[#133c30]/40 transition-colors shadow-lg ${idx % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                  <span className="text-gold font-bold tracking-widest block mb-2">{step.year}</span>
                  <h4 className="text-lg font-serif font-bold text-[#faf8f5] mb-3">{step.title}</h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm bg-[#03110e] relative z-10 mt-auto">
        <div className="text-2xl font-serif font-black tracking-[0.1em] text-[#faf8f5]/40 mb-6 italic">
          AURA<span className="text-gold/40">SALON</span>
        </div>
        <p className="tracking-wider">&copy; {new Date().getFullYear()} Aura Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}
