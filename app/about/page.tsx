"use client";

import Link from "next/link";
import Footer from "../../components/footer";
import { ArrowLeft, Phone, Mail, Building2, ShieldCheck, Wrench, ArrowUpRight, ArrowRight } from "lucide-react";

// === Bulletproof Inline SVGs ===
const MessageCircle = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
const StethoscopeIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M4.8 2.3A.3.3 0 0 0 5 2h14a.3.3 0 0 0 .2.3v3.3a.3.3 0 0 0-.2.3H5a.3.3 0 0 0-.2-.3z"/><path d="M15 13a5 5 0 0 0-10 0"/><path d="M8 13v4a2 2 0 0 0 4 0v-3"/><circle cx="10" cy="19" r="2"/></svg>;
const FlaskIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>;
const ScanIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>;

export default function About() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ═══════════ TOP BANNER ═══════════ */}
      <div className="border-b border-[#1a1a1a]/10 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="small-caps text-[#1a1a1a]/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs uppercase tracking-wider font-semibold">
            <span className="flex items-center gap-1.5 text-[#3FA89A]"><Phone size={14} /> +254 792 415 615</span>
            <span className="flex items-center gap-1.5"><Mail size={14} /> sales@sedahealthcare.co.ke</span>
          </div>
          <div className="small-caps text-[#1a1a1a]/70 text-xs uppercase tracking-wider">
            Mon – Fri · 08:00 – 17:00 EAT
          </div>
        </div>
      </div>

      {/* ═══════════ HEADER ══════════ */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#1a1a1a]/10 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-10 md:h-45 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a] hover:text-[#3FA89A] transition-colors font-bold">
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* ═══════════ FLOATING QUOTE BUTTON ═══════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20request%20a%20quotation." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 shadow-2xl hover:bg-[#20BA5A] hover:scale-105 transition-all duration-300 group rounded-full">
          <MessageCircle size={20} />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Request Quote</span>
        </a>
      </div>

      {/* ═══════════ HERO SECTION (Image Right, Text Left) ═══════════ */}
      <section className="py-24 lg:py-32 bg-white border-b border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="uppercase tracking-[0.2em] text-[#3FA89A] text-xs font-bold mb-6">About The Practice</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mb-8 leading-[1.1]">
                Equipping the foundations of <span className="italic text-[#3FA89A]">modern healthcare</span> in East Africa.
              </h1>
              <p className="text-lg sm:text-xl text-[#6B6F73] leading-relaxed max-w-2xl mb-10 font-serif">
                Seda Healthcare Solutions Ltd is a dedicated medical supply and hospital commissioning firm. We bridge the gap between global medical manufacturers and local clinical needs with precision and care.
              </p>
              <Link href="/departments" className="inline-flex items-center gap-2 bg-[#3FA89A] text-white px-8 py-4 text-xs uppercase tracking-wider font-bold hover:bg-[#2d7d73] transition-colors rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                Explore Our Catalog <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden border border-[#1a1a1a]/10 bg-white shadow-2xl">
                <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625820/operating-room_ejbtm7.webp" alt="Modern surgical theatre equipment" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#3FA89A] text-white p-6 shadow-xl max-w-xs hidden md:block">
                <p className="font-display text-xl italic mb-2">"The instrument precedes the outcome."</p>
                <p className="small-caps text-white/80 text-xs uppercase tracking-wider font-bold">Seda Healthcare Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE PREMISE / STORY (Parallax + Collage) ═══════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp')" }}></div>
        {/* Gradient Overlay for perfect text readability while letting the image shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8] via-[#F5F1E8]/90 to-[#F5F1E8]/40"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Story Text */}
            <div className="md:col-span-5">
              <div className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold mb-4">Our Premise</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                The instrument <span className="italic text-[#3FA89A]">precedes</span> the outcome.
              </h2>
              <div className="w-20 h-1 bg-[#3FA89A] mb-8"></div>
              <div className="space-y-6 text-[#1a1a1a]/80 leading-relaxed text-lg font-serif">
                <p className="text-xl text-[#1a1a1a] font-medium">
                  The procurement of clinical equipment is rarely a simple commercial transaction. A hospital bed is not merely furniture; its joints, motors, and mattress density influence patient recovery, nursing efficiency, and infection control.
                </p>
                <p>
                  Our practice begins from this premise. Before a ward can treat, before a laboratory can conclude, and before a theatre can operate, the right piece of equipment must be in the room—correctly specified, correctly installed, and correctly supported.
                </p>
              </div>
            </div>
            
            {/* Visual Collage */}
            <div className="md:col-span-7 relative h-[400px] md:h-[500px] hidden md:block">
              {/* Collage Image 1 */}
              <div className="absolute top-0 right-0 w-3/4 h-4/5 overflow-hidden border-4 border-white shadow-2xl z-10">
                <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg" alt="Dental Equipment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Collage Image 2 */}
              <div className="absolute bottom-0 left-0 w-3/5 h-3/5 overflow-hidden border-4 border-white shadow-2xl z-20">
                <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp" alt="Surgical Theatre" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Decorative Storytelling Badge */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 bg-white p-6 shadow-xl border border-[#1a1a1a]/10 z-30 max-w-[220px]">
                <p className="font-display text-2xl italic text-[#3FA89A] mb-1">19+</p>
                <p className="text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-bold">Clinical Disciplines Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CORE CAPABILITIES ═══════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold mb-4">Core Capabilities</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a]">How we deliver excellence.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Facility Commissioning", desc: "From blueprint to fully equipped ward. We provide end-to-end setup for new hospitals, clinics, and specialized diagnostic centers, ensuring seamless integration of all medical systems." },
              { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Every item in our catalogue holds the regulatory markings of its country of origin. We ensure all documentation, KEBS standards, and safety protocols precede delivery." },
              { icon: Wrench, title: "After-Sales Support", desc: "Medical equipment requires continuous calibration and maintenance. We facilitate local and regional service infrastructure for part replacement and preventive care." }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="group bg-[#F5F1E8]/30 border border-[#1a1a1a]/5 p-10 hover:border-[#3FA89A]/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#3FA89A]/10 text-[#3FA89A] flex items-center justify-center mb-8 group-hover:bg-[#3FA89A] group-hover:text-white transition-colors duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-[#1a1a1a] mb-4">{cap.title}</h3>
                  <p className="text-[#6B6F73] leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ SCOPE OF SUPPLY (With Vibrant Parallax) ═══════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1a1a1a]/92"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
            <div className="md:col-span-4">
              <div className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold mb-4">Scope of Supply</div>
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-6">Comprehensive clinical coverage.</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                We do not just supply isolated items; we provide complete departmental setups tailored to the bed capacity and specialty focus of your facility.
              </p>
              <Link href="/departments" className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-wider text-[#3FA89A] hover:text-white transition-colors font-bold group">
                View Full Equipment Catalog
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: StethoscopeIcon, name: "Triage & Emergency" },
                  { icon: ScanIcon, name: "Radiology & Imaging" },
                  { icon: Building2, name: "Maternity & Nursery" },
                  { icon: Wrench, name: "Surgical Theatre" },
                  { icon: FlaskIcon, name: "Laboratory & Reagents" },
                  { icon: ShieldCheck, name: "Dental & Optical" },
                  { icon: Building2, name: "Medical Wards" },
                  { icon: Wrench, name: "Orthopedic & Rehab" },
                  { icon: FlaskIcon, name: "Consumables & PPE" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="group flex items-center gap-4 p-5 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#3FA89A]/50 hover:bg-[#3FA89A]/10 transition-all duration-300 cursor-default">
                      <div className="text-[#3FA89A] group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-base font-medium text-white group-hover:text-[#3FA89A] transition-colors">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SHARED FOOTER ═══════════ */}
      <Footer />
      
    </main>
  );
}