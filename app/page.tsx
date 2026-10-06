"use client";

import { useState, useEffect } from "react";
import Footer from "../components/footer";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Search,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  Star,
  Plus,
  Minus,
  Mail,
  Building2,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const slides = [
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", title: "Laboratory & Diagnostics", desc: "Reliable equipment for accurate clinical testing." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", title: "Theatre & Surgical", desc: "Equipment for modern surgical environments." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", title: "Maternity & Nursery", desc: "Equipment supporting mothers and newborns." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg", title: "Dental Practice", desc: "Complete solutions for modern dental clinics." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790689281/xray_facility_owz1d1.png", title: "Radiology & Imaging", desc: "Imaging solutions for clinical diagnosis." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg", title: "Medical Wards", desc: "Essential equipment for patient care." },
  ];

  const partners = [
    { name: "Partner 1", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229703/Screenshot_from_2026-10-05_22-42-47-removebg-preview_kd3pkx.png" },
    { name: "Partner 2", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229703/Screenshot_from_2026-10-05_22-42-05-removebg-preview_eddrbz.png" },
    { name: "Partner 3", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-42-13-removebg-preview_lzw9ix.png" },
    { name: "Partner 4", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-41-49-removebg-preview_d8jjdy.png" },
    { name: "Partner 5", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229705/4-WhatsApp_Image_2026-10-05_at_2.35.20_PM-removebg-preview_ksecmv.png" },
    { name: "Partner 6", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-41-39-removebg-preview_jatp1g.png" },
    { name: "Partner 7", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229705/1-WhatsApp_Image_2026-10-05_at_11.00.47_AM-removebg-preview_br990t.png" },
    { name: "Partner 8", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229706/Screenshot_from_2026-10-05_22-42-34-removebg-preview_gm94c5.png" },
    { name: "Partner 9", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229705/Screenshot_from_2026-10-05_22-42-28-removebg-preview_vqdpis.png" },
    { name: "Partner 10", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229706/2-WhatsApp_Image_2026-10-05_at_11.01.41_AM-removebg-preview_mgxfam.png" },
  ];

  const departments = [
    { title: "Laboratory & Diagnostics", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp" },
    { title: "Theatre & Surgical", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp" },
    { title: "Maternity & Nursery", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg" },
    { title: "Dental Practice", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg" },
    { title: "Radiology & Imaging", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790689281/xray_facility_owz1d1.png" },
    { title: "Medical Wards", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg" },
  ];

  const faqs = [
    { q: "Do you deliver and install equipment outside Nairobi?", a: "Yes. We deliver, install, and commission equipment across Kenya and the wider East African region." },
    { q: "Do you provide equipment training?", a: "Yes. Major equipment installations include dedicated on-site training for your clinical and technical staff." },
    { q: "Are your products covered by warranty?", a: "Yes. Equipment comes with applicable manufacturer warranties and local after-sales support." },
    { q: "How do I request a quotation?", a: "Call us, send a WhatsApp message, or email our sales team. We will help you identify the right equipment and prepare a quotation." },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setIsSearchOpen(false); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className="bg-white text-neutral-900 antialiased font-sans overflow-x-hidden">
      <style>{`
        @keyframes slowZoom { 0% { transform: scale(1.05); } 50% { transform: scale(1.1); } 100% { transform: scale(1.05); } }
        .hero-image { animation: slowZoom 15s ease-in-out infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>

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

      {/* ========================================================= HEADER ========================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            {/* Prominent, stable logo size across devices */}
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-35 md:h-45 w-auto" />
          </a>
          
                  {/* Refined, premium navbar content */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-12">
            {["Home", "About Us", "Catalog", "Contact"].map((item) => (
              <a 
                key={item} 
                href={item === "Catalog" ? "/departments" : item === "About Us" ? "/about" : item === "Contact" ? "#partner-with-us" : "#home"} 
                className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="https://wa.me/254792415615" target="_blank" rel="noopener noreferrer" className="bg-[#3FA89A] text-[#1a1a1ad5] px-6 py-3 text-sm uppercase tracking-wider font-bold hover:bg-[#3FA89A] transition-colors rounded-md">
              Get a Quote
            </a>
          </div> */}

          <button className="lg:hidden p-2 text-neutral-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

               {menuOpen && (
          <div className="lg:hidden bg-white absolute w-full shadow-xl border-t border-neutral-100">
            <nav className="flex flex-col px-6 py-6 gap-2">
              {["Home", "About Us", "Catalog", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={item === "Catalog" ? "/departments" : item === "About Us" ? "/about" : item === "Contact" ? "#partner-with-us" : "#home"} 
                  className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" 
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
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

      {/* ========================================================= HERO ========================================================== */}
      <section id="home" className="relative h-[70vh] sm:h-[75vh] min-h-[500px] w-full overflow-hidden bg-neutral-950">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img src={slide.img} alt={slide.title} className="hero-image w-full h-full object-cover" />
            <div className="absolute inset-0 bg-neutral-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          </div>
        ))}
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-end pb-16 sm:pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
              <span className="h-px w-8 bg-[#3FA89A]" />
              <span className="text-white/80 text-[10px] sm:text-xs uppercase tracking-[0.22em] font-bold">Adding Perfection to Diagnosis</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-4 sm:mb-5">{slides[currentSlide].title}</h1>
            <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-lg mb-6 sm:mb-7 leading-relaxed">{slides[currentSlide].desc}</p>
            <div className="flex flex-wrap gap-3">
              <a href="/departments" className="bg-[#3FA89A] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-neutral-950 transition-all rounded-md">Explore Department</a>
              <a href="tel:+254792415615" className="flex items-center gap-2 border border-white/40 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-neutral-950 transition-all rounded-md"><Phone size={14} /> Talk to Us</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-7 left-4 sm:left-12 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 sm:w-10 bg-[#3FA89A]" : "w-3 sm:w-4 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      </section>

      {/* ========================================================= YIN-YANG SPLIT: WHY CHOOSE US ========================================================== */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a1a1a_50%,#3FA89A_50%)]" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold block mb-3">Our Promise</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-white leading-tight">
              Built around <span className="italic font-serif">excellence.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: ShieldCheck, title: "Quality Equipment", desc: "Reliable products from established global manufacturers." },
              { icon: Truck, title: "End-to-End Setup", desc: "Seamless delivery, installation, and commissioning." },
              { icon: Wrench, title: "After-Sales Support", desc: "Dedicated local maintenance, parts, and technical support." },
              { icon: Star, title: "Straightforward Service", desc: "Clear quotations and practical, honest guidance." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-lg shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#3FA89A]/10 text-[#3FA89A] rounded-full mb-5 sm:mb-6 group-hover:bg-[#3FA89A] group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-neutral-900 mb-2 sm:mb-3 font-bold">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= DEPARTMENTS ========================================================== */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-neutral-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp')] bg-cover bg-center opacity-[0.03]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-10 sm:mb-12">
            <div>
              <span className="text-[#3FA89A] text-[10px] uppercase tracking-[0.2em] font-bold mb-3 block">Explore</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-neutral-900">Our <span className="italic text-[#3FA89A]">Departments</span></h2>
            </div>
            <a href="/departments" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-900 hover:text-[#3FA89A] transition-colors">
              View Full Catalog <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {departments.map((dept, i) => (
              <a href="/departments" key={i} className="group relative overflow-hidden bg-neutral-200 aspect-[4/3] rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <img src={dept.img} alt={dept.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-7 w-full">
                  <h3 className="font-display text-lg sm:text-2xl text-white leading-tight mb-2">{dept.title}</h3>
                  <div className="flex items-center gap-2 text-[#3FA89A] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= PARTNER LOGO MARQUEE ========================================================== */}
      <section className="py-12 sm:py-16 bg-white border-y border-neutral-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-8 sm:mb-10">
          <span className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold block text-center sm:text-left">Trusted Global Partners</span>
        </div>
        <div className="relative w-full">
          <div className="flex animate-marquee w-max">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center justify-center w-32 sm:w-48 h-20 sm:h-24 px-4 sm:px-6">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 sm:max-h-16 max-w-[120px] sm:max-w-[140px] w-auto hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= COMPANY PROFILE / MISSION CTA ========================================================== */}
      <section id="partner-with-us" className="relative py-16 sm:py-24 lg:py-32 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-[#3FA89A]/30" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#3FA89A] text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">About Seda Labs Solutions</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-6">
                Adding Perfection to <span className="italic text-[#3FA89A]">Diagnosis.</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                We are specialists in medical equipment for hospitals, clinics, and research institutions. Our business is built on medical expertise, excellent client service, and the pursuit of clinical innovation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <Building2 size={20} className="text-[#3FA89A] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Our Vision</h4>
                    <p className="text-xs text-white/60 leading-relaxed">To be the unmatched provider of medical equipment by maintaining utmost quality and after-sales support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star size={20} className="text-[#3FA89A] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Our Mission</h4>
                    <p className="text-xs text-white/60 leading-relaxed">To provide cost-effective quality medical equipment through excellent service and integrity.</p>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20request%20a%20facility%20assessment." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#3FA89A] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-neutral-900 transition-all rounded-md shadow-lg">
                Request a Facility Assessment <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-lg text-center">
                <p className="font-display text-3xl sm:text-4xl text-[#3FA89A] font-bold mb-2">19+</p>
                <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest">Clinical Disciplines</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-lg text-center">
                <p className="font-display text-3xl sm:text-4xl text-[#3FA89A] font-bold mb-2">100%</p>
                <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest">KEBS Compliant</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-lg text-center col-span-2">
                <p className="font-display text-lg sm:text-xl text-white font-bold mb-2">Dedicated Technical Team</p>
                <p className="text-xs sm:text-sm text-white/60">Installation, commissioning, and maintenance handled in-house across Kenya.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= GOOGLE REVIEWS ========================================================== */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <span className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold block mb-3">Client Reviews</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-neutral-900">Trusted by <span className="italic text-[#3FA89A]">facilities.</span></h2>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-900 hover:text-[#3FA89A] transition-colors">
              Read All Google Reviews <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Dr. James M.", facility: "Nairobi West Clinic", text: "Professional installation and excellent equipment support. The team was thorough and efficient." },
              { name: "Sarah K.", facility: "Eldoret Regional Hospital", text: "Responsive after-sales support and reliable service. They had replacement parts delivered within 48 hours." },
              { name: "Dr. David O.", facility: "Mombasa Maternity Center", text: "Highly knowledgeable. They helped us equip our new 50-bed wing exactly to our requirements and budget." }
            ].map((review, i) => (
              <div key={i} className="bg-neutral-50 p-6 sm:p-8 border border-neutral-100 rounded-lg">
                <div className="flex gap-1 text-[#FBBF24] mb-4 sm:mb-5">
                  {[...Array(5)].map((_, star) => <Star key={star} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-7 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-neutral-900 text-sm">{review.name}</p>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">{review.facility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* =========================================================
    FAQ SECTION
========================================================= */}
<section className="relative overflow-hidden bg-[#3FA89A] py-16 sm:py-24 lg:py-28">

  {/* Subtle background detail */}
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

  <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">

    {/* HEADER */}
    <div className="text-center mb-10 sm:mb-14">

      <span className="inline-flex items-center gap-3 text-white/70 text-[10px] uppercase tracking-[0.25em] font-bold mb-4">
        <span className="h-px w-8 bg-white/40" />
        FAQs
        <span className="h-px w-8 bg-white/40" />
      </span>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
        Questions?
        <br className="sm:hidden" />
        <span className="italic text-white/80"> We have answers.</span>
      </h2>

      <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-white/70 leading-relaxed">
        Quick answers to the questions we hear most often.
      </p>

    </div>


    {/* FAQ CARD */}
    <div className="bg-[#faf9f6] rounded-xl shadow-2xl shadow-black/10 overflow-hidden border border-white/20">

      {faqs.map((faq, i) => (

        <div
          key={i}
          className={`border-b border-neutral-200 last:border-b-0 transition-colors duration-300 ${
            openFaq === i ? "bg-white" : ""
          }`}
        >

          {/* QUESTION */}
          <button
            onClick={() =>
              setOpenFaq(openFaq === i ? null : i)
            }
            className="w-full flex items-center justify-between gap-6 text-left px-5 sm:px-7 md:px-9 py-5 sm:py-6 group"
            aria-expanded={openFaq === i}
          >

            <div className="flex items-center gap-4 sm:gap-5">

              {/* NUMBER */}
              <span
                className={`hidden sm:flex shrink-0 w-8 h-8 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 ${
                  openFaq === i
                    ? "bg-[#3FA89A] text-white"
                    : "bg-neutral-100 text-neutral-400 group-hover:bg-[#3FA89A]/10 group-hover:text-[#3FA89A]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                className={`font-display text-base sm:text-lg md:text-xl leading-snug transition-colors duration-300 ${
                  openFaq === i
                    ? "text-[#3FA89A]"
                    : "text-neutral-900 group-hover:text-[#3FA89A]"
                }`}
              >
                {faq.q}
              </span>

            </div>


            {/* ICON */}
            <span
              className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                openFaq === i
                  ? "bg-[#3FA89A] text-white rotate-0"
                  : "bg-neutral-100 text-neutral-400 group-hover:bg-[#3FA89A]/10 group-hover:text-[#3FA89A]"
              }`}
            >
              {openFaq === i ? (
                <Minus size={17} strokeWidth={2} />
              ) : (
                <Plus size={17} strokeWidth={2} />
              )}
            </span>

          </button>


          {/* ANSWER */}
          <div
            className={`grid transition-all duration-300 ease-out ${
              openFaq === i
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >

            <div className="overflow-hidden">

              <div className="px-5 sm:px-7 md:px-[84px] pb-6 sm:pb-7">

                <p className="max-w-2xl text-neutral-500 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>


    {/* BOTTOM CONTACT PROMPT */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-8 text-center">

      <span className="text-white/60 text-xs sm:text-sm">
        Still have a question?
      </span>

      <a
        href="https://wa.me/254792415615"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold border-b border-white/40 pb-1 hover:border-white transition-colors"
      >
        Talk to us
        <ArrowRight size={13} />
      </a>

    </div>

  </div>
</section>

      {/* ========================================================= FLOATING ACTION BUTTONS (Search, WhatsApp, Call) ========================================================== */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <button 
          onClick={() => setIsSearchOpen(true)} 
          className="w-14 h-14 flex items-center justify-center bg-neutral-800 text-white rounded-full shadow-lg hover:bg-[#3FA89A] hover:scale-105 transition-all" 
          aria-label="Search Catalog"
        >
          <Search size={22} />
        </button>
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

      {/* ========================================================= SEARCH MODAL ========================================================== */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl p-6 sm:p-8 relative rounded-lg shadow-2xl">
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition-colors" aria-label="Close search">
              <X size={20} className="text-neutral-500" />
            </button>
            <h3 className="font-display text-xl sm:text-2xl text-neutral-900 mb-6">Search Catalog</h3>
            <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) { window.location.href = `/departments?search=${encodeURIComponent(searchQuery.trim())}`; } }} className="relative">
              <input 
                type="text" 
                autoFocus 
                placeholder="Search equipment..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full pl-4 pr-28 py-4 bg-neutral-50 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3FA89A] transition-colors rounded-md" 
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-900 text-white px-4 sm:px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-[#3FA89A] transition-colors rounded-md">
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}