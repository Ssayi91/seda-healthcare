"use client";

import Link from "next/link";
import Footer from "../../components/footer";
import { ArrowLeft, ShieldCheck, Heart, Users, TrendingUp, Target, Award, Phone, Mail, MapPin, Menu, X, Search, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-neutral-900 antialiased font-sans overflow-x-hidden">
      
       {/* ========================================================= TOP CONTACT BAR ========================================================== */}
      <div className="bg-[#3FA89A] text-[#1a1a1ad5] py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm font-semibold tracking-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            <a href="tel:+254792415615" className="flex items-center gap-2 hover:text-white/80 transition-colors"><Phone size={14} /> +254 792 415 615</a>
            <a href="tel:+254721209699" className="flex items-center gap-2 hover:text-white/80 transition-colors"><Phone size={14} /> +254 721 209 699</a>
            <a href="mailto:sales@sedahealthcare.co.ke" className="hidden md:flex items-center gap-2 hover:text-white/80 transition-colors"><Mail size={14} /> sales@sedahealthcare.co.ke</a>
            <span className="hidden lg:flex items-center gap-2 text-[#1a1a1ad5]"><MapPin size={14} /> Springfield Green Court, Kibiku Road, Utawala-Eastern Bypass.</span>
          </div>
          {/* <div className="hidden sm:block text-[#1a1a1ad5] text-xs font-bold">Mon – Fri · 08:00 – 17:00 EAT</div> */}
        </div>
      </div>

      {/* ========================================================= HEADER (Same as Homepage) ========================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" 
              alt="Seda Healthcare" 
              className="h-35 md:h-45 w-auto" 
            />
          </Link>
          
          {/* Same navbar as homepage */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-12">
            <Link href="/" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold tracking-wide">Home</Link>
            <Link href="/about" className="text-[#3FA89A] text-base font-semibold tracking-wide">About Us</Link>
            <Link href="/departments" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold tracking-wide">Catalog</Link>
            <a href="/#partner-with-us" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold tracking-wide">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="https://wa.me/254792415615" target="_blank" rel="noopener noreferrer" className="bg-[#3FA89A] text-[#1a1a1ad5] px-6 py-3 text-sm uppercase tracking-wider font-bold hover:bg-[#3FA89A]/80 transition-colors rounded-md">
              Get a Quote
            </a>
          </div>

          <button className="lg:hidden p-2 text-neutral-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white absolute w-full shadow-xl border-t border-neutral-100">
            <nav className="flex flex-col px-6 py-6 gap-2">
              <Link href="/" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-[#3FA89A] text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/departments" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Catalog</Link>
              <a href="/#partner-with-us" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="tel:+254792415615" className="mt-4 flex items-center justify-center gap-2 bg-neutral-900 text-white py-4 text-sm font-semibold tracking-wide rounded-md">
                <Phone size={16} /> Call Seda
              </a>
              <a href="https://wa.me/254792415615" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#3FA89A] text-white py-4 text-sm font-semibold tracking-wide rounded-md">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ========================================================= HERO SECTION (Full Background Image) ========================================================== */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp" 
            alt="Medical Equipment" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-neutral-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#3FA89A]" />
              <span className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.22em] font-bold">About Seda Labs Solutions</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-5">
              Adding Perfection to <span className="italic text-[#3FA89A]">Diagnosis.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Specialists in medical equipment for hospitals, clinics, and research institutions. Built on medical expertise, excellent client service, and the pursuit of clinical innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= OUR STORY ========================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Story</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-neutral-900 leading-tight mb-8">
              A Kenyan Company Built on <span className="italic text-[#3FA89A]">Expertise.</span>
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-neutral-600 leading-relaxed">
              <p>
                Seda Labs Solutions is a Kenyan-based company specializing in the distribution of a wide range of medical equipment and consumables. We are experts in hospital laboratory setups and medical consumables, serving hospitals, clinics, and research institutions across the region.
              </p>
              <p>
                Our business was built on a foundation of medical expertise, excellent client service, and a relentless pursuit of medical and clinical innovation. Today, this desire to constantly improve and grow remains an integral part of the Seda Labs Solutions culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= VISION & MISSION ========================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            
            {/* Vision */}
            <div className="bg-neutral-50 p-6 sm:p-8 lg:p-12 rounded-xl border border-neutral-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3FA89A]/10 text-[#3FA89A] flex items-center justify-center rounded-lg mb-6">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-neutral-900 mb-4">Our Vision</h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                To be the unmatched provider of medical equipment and consumables by maintaining the utmost quality, professionalism, and after-sales support in the healthcare industry.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-neutral-50 p-6 sm:p-8 lg:p-12 rounded-xl border border-neutral-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3FA89A]/10 text-[#3FA89A] flex items-center justify-center rounded-lg mb-6">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-neutral-900 mb-4">Our Mission</h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                To provide cost-effective, quality medical equipment through excellent service, integrity, and dedicated technical support to every facility we partner with.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= OUR VALUES ========================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">What Drives Us</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Award, title: "Professionalism", desc: "Maintaining the highest standards in every interaction and installation." },
              { icon: ShieldCheck, title: "Integrity", desc: "Transparent, honest, and ethical business practices at all times." },
              { icon: Users, title: "Partnership", desc: "Building long-term, collaborative relationships with our clients." },
              { icon: Heart, title: "Value for Money", desc: "Delivering premium quality equipment at competitive, fair prices." }
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3FA89A]/20 text-[#3FA89A] flex items-center justify-center rounded-lg mb-5 sm:mb-6">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-white mb-2 sm:mb-3 font-bold">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= OUR COMMITMENT ========================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Commitment</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-neutral-900 leading-tight mb-4 sm:mb-6">
                Dedicated to Your Facility's <span className="italic text-[#3FA89A]">Success.</span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Seda Labs Solutions has a dedicated team of highly trained technical staff to carry out installation, commissioning, and maintenance work in hospitals. We pride ourselves on servicing the majority of medical equipment we supply, ensuring minimal downtime and maximum reliability for your clinical operations.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Comprehensive equipment installation & commissioning",
                  "Routine maintenance and calibration services",
                  "Rapid response technical support across Kenya",
                  "Staff training on new medical equipment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#3FA89A]/10 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#3FA89A]" />
                    </div>
                    <span className="text-neutral-700 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <a 
                  href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3FA89A] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#2d7d73] transition-colors rounded-md shadow-lg"
                >
                  Partner With Us <ArrowLeft className="rotate-180" size={16} />
                </a>
              </div>
            </div>

            {/* Visual Element / Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-neutral-50 border border-neutral-100 p-6 sm:p-8 rounded-xl text-center">
                <p className="font-display text-3xl sm:text-4xl text-[#3FA89A] font-bold mb-2">19+</p>
                <p className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest font-semibold">Clinical Disciplines</p>
              </div>
              <div className="bg-neutral-50 border border-neutral-100 p-6 sm:p-8 rounded-xl text-center">
                <p className="font-display text-3xl sm:text-4xl text-[#3FA89A] font-bold mb-2">100%</p>
                <p className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest font-semibold">KEBS Compliant</p>
              </div>
              <div className="bg-neutral-900 p-6 sm:p-8 rounded-xl text-center col-span-2">
                <p className="font-display text-lg sm:text-xl text-white font-bold mb-2">Nationwide Coverage</p>
                <p className="text-xs sm:text-sm text-white/70">Supplying hospitals, clinics, and research organizations across Kenya and East Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= FLOATING ACTION BUTTONS (Same as Homepage) ========================================================== */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/254792415615" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-14 h-14 flex items-center justify-center bg-[#3FA89A] text-white rounded-full shadow-lg hover:scale-105 transition-transform" 
          aria-label="WhatsApp Seda Healthcare"
        >
          <MessageCircle size={22} />
        </a>
        <a 
          href="tel:+254792415615" 
          className="w-14 h-14 flex items-center justify-center bg-neutral-900 text-white rounded-full shadow-lg hover:scale-105 transition-transform" 
          aria-label="Call Seda Healthcare"
        >
          <Phone size={20} />
        </a>
      </div>

      <Footer />
    </main>
  );
}