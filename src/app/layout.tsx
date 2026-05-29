import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import ChatBot from "./components/ChatBot";
import AmbientParticles from "./components/AmbientParticles";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aura Salon - Premium Makeup & Grooming",
  description: "Experience the pinnacle of hair, makeup and beauty care at Aura Salon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#03110e] text-[#faf8f5] relative">
        {/* Global Fixed Background for Immersion */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop" 
            alt="Background Texture" 
            fill 
            className="object-cover animate-slow-zoom contrast-125 saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#03110e] via-transparent to-[#03110e]"></div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
          <AmbientParticles />
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
