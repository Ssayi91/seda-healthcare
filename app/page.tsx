"use client";

import { useState } from "react";
import Footer from "../components/footer"; // Import the shared footer

// === Bulletproof Inline SVGs ===
const Menu = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
const X = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>;
const Phone = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const Mail = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const ArrowRight = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
const MessageCircle = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#F5F1E8] text-[#1a1a1a] overflow-x-hidden">
      {/* ═══════════ TOP BANNER ═══════════ */}
      <div className="border-b border-[#1a1a1a]/10 bg-[#EDE7D7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="small-caps text-[#1a1a1a]/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><Phone /> +254 792 415 615</span>
            <span className="flex items-center gap-1.5"><Phone /> +254 721 209 699</span>
            <span className="flex items-center gap-1.5"><Mail /> sales@sedahealthcare.co.ke</span>
          </div>
          <div className="small-caps text-[#1a1a1a]/70 text-xs uppercase tracking-wider">
            Mon – Fri · 08:00 – 17:00 EAT
          </div>
        </div>
      </div>

      {/* ═══════════ HEADER ═══════════ */}
      <header className="sticky top-0 z-50 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 px-3 py-2 rounded-sm">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-10 md:h-45 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {["Home", "About Us", "Catalog", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Catalog" ? "/departments" : item === "About Us" ? "/about" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="small-caps text-[#1a1a1a] hover:text-[#3FA89A] transition-colors text-xs uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[#1a1a1a]/10 bg-[#F5F1E8]">
            <nav className="flex flex-col px-6 py-6">
              {["Home", "About Us", "Catalog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Catalog" ? "/departments" : item === "About Us" ? "/about" : `#${item.toLowerCase().replace(" ", "-")}`}
                  className="small-caps text-[#1a1a1a] py-3 border-b border-[#1a1a1a]/10 last:border-0 text-xs uppercase tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ═══════════ FLOATING QUOTE BUTTONS ═══════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20request%20a%20quotation." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-sm shadow-lg hover:bg-[#20BA5A] transition-colors group">
          <MessageCircle size={18} />
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:block">Request Quote</span>
        </a>
      </div>

      {/* ═══════════ HERO SECTION (REMAINS EXACTLY THE SAME) ═══════════ */}
      <section id="home" className="border-b border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="small-caps text-[#3FA89A] mb-6 block text-xs uppercase tracking-wider">Medical Equipment & Supply</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-[#1a1a1a]">
                Equipping the wards, theatres, and laboratories of <span className="italic text-[#3FA89A]">East Africa.</span>
              </h1>
              <p className="font-serif text-lg md:text-xl leading-relaxed text-[#6B6F73] max-w-2xl mb-10">
                Seda Healthcare Solutions provides comprehensive clinical instrumentation, ward furnishing, and diagnostic apparatus. We match facility requirements with instruments that genuinely answer them.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/departments" className="bg-[#3FA89A] text-white px-8 py-4 small-caps font-semibold tracking-wide hover:bg-[#2d7d73] transition-colors text-xs uppercase">View Our Catalog</a>
                <a href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20request%20a%20quotation." target="_blank" rel="noopener noreferrer" className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 small-caps font-semibold tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors text-xs uppercase">Request a Quote</a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden ">
                <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790855820/surgical-equipment_cswk5s-removebg-preview_w5v0ht.png" alt="Modern surgical theatre equipment" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 border border-[#1a1a1a]/10 shadow-lg max-w-xs hidden md:block">
                <p className="font-display text-xl italic text-[#3FA89A] mb-2">"The instrument precedes the outcome."</p>
                <p className="small-caps text-[#1a1a1a]/60 text-xs uppercase tracking-wider">Seda Healthcare Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT US (VIBRANT PARALLAX) ═══════════ */}
      <section id="about-us" className="relative border-b border-[#1a1a1a]/10 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')" }}></div>
        {/* Lowered opacity + subtle teal gradient for vibrant pop while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E8]/90 via-[#F5F1E8]/75 to-[#3FA89A]/20"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="small-caps text-[#1a1a1a]/60 block mb-3 text-xs uppercase tracking-wider">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-[#1a1a1a]">A supply practice built on clinical understanding.</h2>
            </div>
            <div className="lg:col-span-7 space-y-6 font-serif text-lg leading-relaxed text-[#1a1a1a]/85">
              <p>The procurement of clinical equipment is rarely a simple commercial transaction. A hospital bed is not merely furniture; its joints, motors, and mattress density influence patient recovery, nursing efficiency, and infection control. A laboratory analyser is not a commodity—its calibration and service infrastructure shape every diagnostic conclusion.</p>
              <p>Our practice begins from this premise. Before a ward can treat, before a laboratory can conclude, and before a theatre can operate, the right piece of equipment must be in the room—correctly specified, correctly installed, and correctly supported.</p>
              <p>We maintain a comprehensive catalogue across multiple clinical disciplines. Our work consists less in selling than in matching: aligning the specific requirement of a facility with the instrument that genuinely answers it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DEPARTMENTS PREVIEW (VIBRANT PARALLAX) ═══════════ */}
      <section id="departments" className="relative border-b border-[#1a1a1a]/10 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp')" }}></div>
        {/* Lowered opacity allows the vibrant lab image to shine through the cards */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/75 to-[#3FA89A]/15"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="small-caps text-[#1a1a1a]/60 block mb-3 text-xs uppercase tracking-wider">Our Disciplines</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a]">Core Supply Categories</h2>
            </div>
            <a href="/departments" className="inline-flex items-center gap-2 small-caps text-[#3FA89A] hover:text-[#1a1a1a] transition-colors group text-xs uppercase tracking-wider">View Full Catalog <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} /></a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Laboratory & Diagnostics", desc: "Haematology analysers, microscopes, centrifuges, and comprehensive reagent ecosystems.", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp" },
              { title: "Theatre & Surgical", desc: "LED theatre lights, electric operating tables, anaesthesia machines, and sterilization apparatus.", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp" },
              { title: "Maternity & Nursery", desc: "Electric maternity beds, infant incubators, phototherapy units, and fetal dopplers.", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg" },
              { title: "Dental Practice", desc: "Complete dental delivery units, X-ray machines, handpieces, and restorative materials.", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg" },
              { title: "Medical & General Wards", desc: "Single and double-crank hospital beds, patient monitors, oxygen concentrators, and ward furniture.", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg" },
              { title: "Orthopedic & Rehabilitation", desc: "Wheelchairs, crutches, TENS machines, plaster cutters, and therapeutic support braces.", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625228/wheelchair-walking-frame-and-crutches-isolated-on-white-background_vjz0wn.webp" },
            ].map((dept, i) => (
              <article key={i} className="group border border-[#1a1a1a]/10 bg-white/90 backdrop-blur-sm hover:border-[#3FA89A] hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={dept.img} alt={dept.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-3 text-[#1a1a1a]">{dept.title}</h3>
                  <p className="font-serif text-[#6B6F73] leading-relaxed mb-6 text-sm">{dept.desc}</p>
                  <a href="/departments" className="inline-flex items-center gap-2 small-caps text-[#3FA89A] group-hover:gap-3 transition-all text-xs uppercase tracking-wider">Explore Supplies <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOURCING PHILOSOPHY (ALREADY VIBRANT, KEPT INTACT) ═══════════ */}
      <section className="relative border-b border-[#1a1a1a]/10 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp')" }}></div>
        <div className="absolute inset-0 bg-[#1a1a1a]/92"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="small-caps text-white/50 block mb-3 text-xs uppercase tracking-wider">Our Standards</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-white">The criteria we apply when procuring an instrument.</h2>
              <p className="font-serif text-white/70 mt-6 leading-relaxed text-sm">Every item in our catalogue has passed through the same set of operational considerations. These are not marketing claims; they are the questions we ask of every manufacturer.</p>
            </div>
            <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/20">
              <ul className="space-y-8">
                {[
                  { title: "Regulatory Certification", desc: "Does the instrument hold the regulatory markings of its country of origin, and of the jurisdictions where it will be used? Documentation must precede delivery." },
                  { title: "Serviceability", desc: "Is there a service infrastructure—locally or regionally—capable of calibration, part replacement, and preventive maintenance?" },
                  { title: "Ecosystem Compatibility", desc: "Does the instrument integrate with the existing reagents, consumables, and power supply of the facility that will receive it?" },
                  { title: "Specification Honesty", desc: "Does the manufacturer's stated performance match independent verification? We distrust the claimed figure until it is measured." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 pb-8 border-b border-white/20 last:border-0 last:pb-0">
                    <span className="font-display italic text-3xl text-[#3FA89A] mt-1">0{i + 1}</span>
                    <div>
                      <h4 className="font-display text-2xl text-white mb-2">{item.title}</h4>
                      <p className="font-serif text-white/70 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT / INQUIRY (VIBRANT PARALLAX) ═══════════ */}
      <section id="contact" className="relative border-b border-[#1a1a1a]/10 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg')" }}></div>
        {/* Vibrant gradient overlay: light top fading to a rich teal tint at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E8]/85 via-[#F5F1E8]/70 to-[#3FA89A]/30"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <span className="small-caps text-[#1a1a1a]/60 block mb-3 text-xs uppercase tracking-wider">Contact Us</span>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mt-8 text-[#1a1a1a]">For procurement<br />enquiries and<br />specification<br /><span className="italic text-[#3FA89A]">consultation.</span></h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-12">
              <p className="font-serif text-lg text-[#1a1a1a]/80 leading-relaxed mb-12">We respond to enquiries with specification sheets, current lead times, and comparative notes between instruments under consideration.</p>
              <dl className="space-y-8">
                <div className="flex items-baseline gap-6 pb-8 border-b border-[#1a1a1a]/20">
                  <dt className="small-caps text-[#1a1a1a]/60 w-32 shrink-0 text-xs uppercase tracking-wider">Telephone</dt>
                  <dd className="font-display text-xl text-[#1a1a1a]">+254 792 415 615<br />+254 721 209 699</dd>
                </div>
                <div className="flex items-baseline gap-6 pb-8 border-b border-[#1a1a1a]/20">
                  <dt className="small-caps text-[#1a1a1a]/60 w-32 shrink-0 text-xs uppercase tracking-wider">Email</dt>
                  <dd className="font-display text-xl text-[#1a1a1a]">sales@sedahealthcare.co.ke</dd>
                </div>
                <div className="flex items-baseline gap-6 pb-8 border-b border-[#1a1a1a]/20">
                  <dt className="small-caps text-[#1a1a1a]/60 w-32 shrink-0 text-xs uppercase tracking-wider">Office</dt>
                  <dd className="font-display text-xl text-[#1a1a1a]">Seda House, Eastern Bypass, Nairobi</dd>
                </div>
              </dl>
              <a href="mailto:sales@sedahealthcare.co.ke" className="inline-flex items-center gap-3 mt-8 group">
                <span className="font-display text-xl italic group-hover:text-[#3FA89A] transition-colors">Compose an inquiry</span>
                <span className="h-px w-12 bg-[#1a1a1a] group-hover:bg-[#3FA89A] group-hover:w-20 transition-all"></span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SHARED FOOTER ═══════════ */}
      <Footer />
      
    </main>
  );
}