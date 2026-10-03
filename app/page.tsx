"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/footer"; 

// === Bulletproof Inline SVGs ===
const Menu = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
const X = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>;
const Phone = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const Mail = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const ArrowRight = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
const MessageCircle = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
const Search = (p: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/departments?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <main className="bg-[#F5F1E8] text-[#1a1a1a] overflow-x-hidden">
      {/* ═══════════ TOP BANNER ═══════════ */}
      <div className="border-b border-[#1a1a1a]/10 bg-[#3FA89A]">
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
          <a href="/" className="flex items-center gap-3">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-45 md:h-45 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {["Home", "About Us", "Catalog", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Catalog" ? "/departments" : item === "About Us" ? "/about" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="small-caps text-[#1a1a1a] hover:text-[#3FA89A] transition-colors text-xs uppercase tracking-wider font-bold"
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
                  className="small-caps text-[#1a1a1a] py-3 border-b border-[#1a1a1a]/10 last:border-0 text-xs uppercase tracking-wider font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ═══════════ FLOATING SEARCH & WHATSAPP ═══════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button 
          onClick={() => setIsSearchOpen(true)} 
          className="flex items-center justify-center w-14 h-14 bg-[#1a1a1a] text-white rounded-full shadow-2xl hover:bg-[#3FA89A] transition-all duration-300 hover:scale-110 group"
          aria-label="Search"
        >
          <Search size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
        <a 
          href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20request%20a%20quotation." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110"
          aria-label="Request Quote"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1a1a1a]/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl p-8 relative">
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-[#1a1a1a]/5 rounded-full transition-colors">
              <X size={24} />
            </button>
            <h3 className="font-display text-3xl text-[#1a1a1a] mb-6">Search Our Catalog</h3>
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a1a1a]/30" size={24} />
              <input
                type="text"
                autoFocus
                placeholder="Type equipment name (e.g., 'Autoclave', 'Wheelchair')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-[#F5F1E8] border-2 border-transparent focus:border-[#3FA89A] text-lg placeholder:text-[#1a1a1a]/40 focus:outline-none transition-colors rounded-sm"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3FA89A] text-white px-6 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[#2d7d73] transition-colors rounded-sm">
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ═══════════ HERO SECTION (Refined for Transparent Images) ═══════════ */}
      <section id="home" className="relative overflow-hidden">
        {/* Subtle Parallax Background */}
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')" }}></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="small-caps text-[#3FA89A] mb-6 block text-xs uppercase tracking-[0.2em] font-bold">Comprehensive Hospital Setup Partner</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-[#1a1a1a]">
                Building the future of <span className="italic text-[#3FA89A]">healthcare</span> in East Africa.
              </h1>
              <p className="font-serif text-lg md:text-xl leading-relaxed text-[#6B6F73] max-w-xl mb-10">
                Seda Healthcare Solutions is a premier medical supply and hospital commissioning firm. From single-room diagnostics to full 200-bed hospital setups, we provide the precise instruments that modern clinical care demands.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/departments" className="bg-[#3FA89A] text-white px-8 py-4 small-caps font-bold tracking-wide hover:bg-[#2d7d73] transition-all duration-300 text-xs uppercase shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Browse Full Catalog
                </a>
                <a href="/about" className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 small-caps font-bold tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 text-xs uppercase">
                  Our Philosophy
                </a>
              </div>
            </div>
            
            {/* Right: Clean Collage for Transparent Images (No hard background boxes) */}
            <div className="lg:col-span-6 relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Transparent Image floating with drop shadow */}
                <div className="absolute top-0 right-0 w-4/5 h-4/5 z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <img 
                    src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790855820/surgical-equipment_cswk5s-removebg-preview_w5v0ht.png" 
                    alt="Surgical Equipment" 
                    className="w-full h-full object-contain drop-shadow-2xl" 
                  />
                </div>
                {/* Secondary Image with subtle border/shadow to separate it */}
                <div className="absolute bottom-0 left-0 w-3/5 h-3/5 z-20 animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
                  <img 
                    src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp" 
                    alt="Lab Equipment" 
                    className="w-full h-full object-cover rounded-sm shadow-2xl border-4 border-white" 
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3FA89A] text-white p-6 shadow-2xl z-30 text-center max-w-[200px] animate-in zoom-in duration-500 delay-300">
                  <p className="font-display text-4xl italic mb-1">19+</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Clinical Departments Fully Equipped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT US (VIBRANT PARALLAX) ═══════════ */}
      <section id="about-us" className="relative border-y border-[#1a1a1a]/10 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8] via-[#F5F1E8]/95 to-[#F5F1E8]/80"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="small-caps text-[#3FA89A] block mb-3 text-xs uppercase tracking-[0.2em] font-bold">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-[#1a1a1a]">A supply practice built on <span className="italic text-[#3FA89A]">clinical understanding.</span></h2>
            </div>
            <div className="lg:col-span-7 space-y-6 font-serif text-lg leading-relaxed text-[#1a1a1a]/85">
              <p className="text-xl text-[#1a1a1a] font-medium">The procurement of clinical equipment is rarely a simple commercial transaction. A hospital bed is not merely furniture; its joints, motors, and mattress density influence patient recovery, nursing efficiency, and infection control.</p>
              <p>Our practice begins from this premise. Before a ward can treat, before a laboratory can conclude, and before a theatre can operate, the right piece of equipment must be in the room—correctly specified, correctly installed, and correctly supported.</p>
              <p>We maintain a comprehensive catalogue across multiple clinical disciplines. Our work consists less in selling than in matching: aligning the specific requirement of a facility with the instrument that genuinely answers it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ VISUAL COLLAGE SECTION (Exciting & Refined) ═══════════ */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="small-caps text-[#3FA89A] block mb-3 text-xs uppercase tracking-[0.2em] font-bold">Our Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">Equipping Every Corner of Your Facility</h2>
          </div>
          
          <div className="relative h-[500px] md:h-[600px] w-full">
            {/* Collage Item 1 */}
            <div className="absolute top-0 left-0 md:left-10 w-1/2 md:w-1/3 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl z-10 hover:-translate-y-2 transition-transform duration-500">
              <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg" alt="Dental" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent p-6">
                <p className="text-white font-display text-xl">Dental Practice</p>
              </div>
            </div>
            {/* Collage Item 2 (Center, larger) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-1/2 aspect-video rounded-sm overflow-hidden shadow-2xl z-20 border-4 border-white hover:scale-105 transition-transform duration-500">
              <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp" alt="Laboratory" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent p-6">
                <p className="text-white font-display text-2xl">Laboratory & Diagnostics</p>
              </div>
            </div>
            {/* Collage Item 3 */}
            <div className="absolute bottom-0 right-0 md:right-10 w-1/2 md:w-1/3 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl z-10 hover:-translate-y-2 transition-transform duration-500">
              <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg" alt="Maternity" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent p-6">
                <p className="text-white font-display text-xl">Maternity & Nursery</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/departments" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 small-caps font-bold tracking-wide hover:bg-[#3FA89A] transition-all duration-300 text-xs uppercase shadow-lg hover:shadow-xl hover:-translate-y-1">
              View All Departments <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ DEPARTMENTS PREVIEW (Clean Grid) ═══════════ */}
      <section id="departments" className="py-24 lg:py-32 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="small-caps text-[#3FA89A] block mb-3 text-xs uppercase tracking-[0.2em] font-bold">Our Disciplines</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a]">Core Supply Categories</h2>
            </div>
            <a href="/departments" className="inline-flex items-center gap-2 small-caps text-[#3FA89A] hover:text-[#1a1a1a] transition-colors group text-xs uppercase tracking-wider font-bold">
              View Full Catalog <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
            </a>
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
              <article key={i} className="group bg-white border border-[#1a1a1a]/5 hover:border-[#3FA89A]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-sm">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={dept.img} alt={dept.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-3 text-[#1a1a1a] group-hover:text-[#3FA89A] transition-colors">{dept.title}</h3>
                  <p className="font-serif text-[#6B6F73] leading-relaxed mb-6 text-sm">{dept.desc}</p>
                  <a href="/departments" className="inline-flex items-center gap-2 small-caps text-[#3FA89A] group-hover:gap-3 transition-all text-xs uppercase tracking-wider font-bold">
                    Explore Supplies <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOURCING PHILOSOPHY (Dark Parallax) ═══════════ */}
      <section className="relative border-y border-[#1a1a1a]/10 overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp')" }}></div>
        <div className="absolute inset-0 bg-[#1a1a1a]/95"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="small-caps text-[#3FA89A] block mb-3 text-xs uppercase tracking-[0.2em] font-bold">Our Standards</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-white">The criteria we apply when procuring an instrument.</h2>
              <p className="font-serif text-white/70 mt-6 leading-relaxed text-lg">Every item in our catalogue has passed through the same set of operational considerations. These are not marketing claims; they are the questions we ask of every manufacturer.</p>
            </div>
            <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/20">
              <ul className="space-y-8">
                {[
                  { title: "Regulatory Certification", desc: "Does the instrument hold the regulatory markings of its country of origin, and of the jurisdictions where it will be used? Documentation must precede delivery." },
                  { title: "Serviceability", desc: "Is there a service infrastructure—locally or regionally—capable of calibration, part replacement, and preventive maintenance?" },
                  { title: "Ecosystem Compatibility", desc: "Does the instrument integrate with the existing reagents, consumables, and power supply of the facility that will receive it?" },
                  { title: "Specification Honesty", desc: "Does the manufacturer's stated performance match independent verification? We distrust the claimed figure until it is measured." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 pb-8 border-b border-white/10 last:border-0 last:pb-0 group">
                    <span className="font-display italic text-4xl text-[#3FA89A] mt-1 group-hover:text-white transition-colors duration-300">0{i + 1}</span>
                    <div>
                      <h4 className="font-display text-2xl text-white mb-2">{item.title}</h4>
                      <p className="font-serif text-white/70 leading-relaxed text-base">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT / INQUIRY (Vibrant Parallax) ═══════════ */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E8] via-[#F5F1E8]/90 to-[#3FA89A]/20"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <span className="small-caps text-[#3FA89A] block mb-3 text-xs uppercase tracking-[0.2em] font-bold">Contact Us</span>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mt-8 text-[#1a1a1a]">For procurement<br />enquiries and<br />specification<br /><span className="italic text-[#3FA89A]">consultation.</span></h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-12">
              <p className="font-serif text-lg text-[#1a1a1a]/80 leading-relaxed mb-12">We respond to enquiries with specification sheets, current lead times, and comparative notes between instruments under consideration.</p>
              <dl className="space-y-8">
                <div className="flex items-baseline gap-6 pb-8 border-b border-[#1a1a1a]/20">
                  <dt className="small-caps text-[#1a1a1a]/60 w-32 shrink-0 text-xs uppercase tracking-wider font-bold">Telephone</dt>
                  <dd className="font-display text-xl text-[#1a1a1a]">+254 792 415 615<br />+254 721 209 699</dd>
                </div>
                <div className="flex items-baseline gap-6 pb-8 border-b border-[#1a1a1a]/20">
                  <dt className="small-caps text-[#1a1a1a]/60 w-32 shrink-0 text-xs uppercase tracking-wider font-bold">Email</dt>
                  <dd className="font-display text-xl text-[#1a1a1a]">sales@sedahealthcare.co.ke</dd>
                </div>
                <div className="flex items-baseline gap-6 pb-8 border-b border-[#1a1a1a]/20">
                  <dt className="small-caps text-[#1a1a1a]/60 w-32 shrink-0 text-xs uppercase tracking-wider font-bold">Office</dt>
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