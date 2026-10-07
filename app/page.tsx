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
  Quote,
  ExternalLink,
  Heart,
  Award,
  Users,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const slides = [
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", title: "Laboratory & Diagnostics", desc: "Precision equipment for accurate clinical testing and diagnosis." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", title: "Theatre & Surgical", desc: "Advanced surgical instruments for modern operating rooms." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", title: "Maternity & Nursery", desc: "Compassionate care solutions for mothers and newborns." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg", title: "Dental Practice", desc: "Complete ergonomic solutions for modern dental clinics." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790689281/xray_facility_owz1d1.png", title: "Radiology & Imaging", desc: "High-resolution imaging for precise clinical diagnosis." },
    { img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg", title: "Medical Wards", desc: "Essential equipment for optimal patient care and comfort." },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const partners = [
    { name: "Mindray", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229703/Screenshot_from_2026-10-05_22-42-47-removebg-preview_kd3pkx.png" },
    { name: "Biosystems", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229703/Screenshot_from_2026-10-05_22-42-05-removebg-preview_eddrbz.png" },
    { name: "Floatex", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-42-13-removebg-preview_lzw9ix.png" },
    { name: "Standex", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-41-49-removebg-preview_d8jjdy.png" },
    { name: "Partner 5", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229705/4-WhatsApp_Image_2026-10-05_at_2.35.20_PM-removebg-preview_ksecmv.png" },
    { name: "Partner 6", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-41-39-removebg-preview_jatp1g.png" },
  ];

  const departments = [
    { title: "Laboratory & Diagnostics", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", desc: "Complete diagnostic solutions" },
    { title: "Theatre & Surgical", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", desc: "Surgical excellence" },
    { title: "Maternity & Nursery", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", desc: "Care for new life" },
    { title: "Dental Practice", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg", desc: "Modern dental care" },
    { title: "Radiology & Imaging", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790689281/xray_facility_owz1d1.png", desc: "Advanced imaging" },
    { title: "Medical Wards", img: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg", desc: "Patient comfort" },
  ];

  const reviews = [
    { name: "Racheal Sarota.",text: "Amazing customer service. I received my items in great condition but would highly recommend to improve on delivery time. I appreciated the user training they gave me after purchasing a BP machine for my dad. Thank you.", rating: 5 },
    { name: "francis munyua.", text: "Best after sale services I have experienced so far. Thank you Seda.", rating: 5 },
    { name: "Fredrick Kariuki.", text: "Customer care-check,Reasonable prices-check,Quality products-check,Reliability-check.", rating: 5 },
  ];

  const scrapbookImages = [
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", caption: "Lab Setup", rotation: "-rotate-2" },
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", caption: "Surgical Suite", rotation: "rotate-3" },
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", caption: "Maternity Care", rotation: "-rotate-1" },
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790689281/xray_facility_owz1d1.png", caption: "Imaging Center", rotation: "rotate-2" },
  ];

  const faqs = [
    { q: "Do you deliver and install equipment outside Nairobi?", a: "Yes. We deliver, install, and commission equipment across Kenya and the wider East African region." },
    { q: "Do you provide equipment training?", a: "Yes. Major equipment installations include dedicated on-site training for your clinical and technical staff." },
    { q: "Are your products covered by warranty?", a: "Yes. Equipment comes with applicable manufacturer warranties and local after-sales support." },
    { q: "How do I request a quotation?", a: "Call us, send a WhatsApp message, or email our sales team. We will help you identify the right equipment and prepare a quotation." },
  ];

  return (
    <main className="bg-white text-neutral-900 antialiased font-['Montserrat',sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        @keyframes slowZoom { 0% { transform: scale(1.05); } 50% { transform: scale(1.1); } 100% { transform: scale(1.05); } }
        .hero-image { animation: slowZoom 15s ease-in-out infinite; }
        .parallax { background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; }
        @media (max-width: 768px) { .parallax { background-attachment: scroll; } }
        .scrapbook-shadow { box-shadow: 3px 3px 15px rgba(0,0,0,0.15); }
      `}</style>

      {/* SEO Meta Content - Hidden but indexed */}
      <div className="sr-only">
        <h1>Seda Healthcare - Leading Medical Equipment Supplier in Kenya | Laboratory, Surgical & Diagnostic Equipment</h1>
        <p>Kenya's trusted provider of medical equipment, laboratory diagnostics, surgical instruments, and healthcare solutions. KEBS certified with nationwide delivery and installation.</p>
      </div>

         {/* Top Contact Bar */}
      <div className={`bg-[#0B3D35] text-white py-2.5 text-xs sm:text-sm transition-all duration-300 ${scrolled ? 'py-2' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 font-medium tracking-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            {/* Primary Phone - Clickable Dialer */}
            <a href="tel:+254792415615" className="flex items-center gap-2 hover:text-[#3FA89A] transition-colors">
              <Phone size={14} /> <span>+254 792 415 615</span>
            </a>
            
            {/* Secondary Phone - Clickable Dialer */}
            <a href="tel:+254721209699" className="flex items-center gap-2 hover:text-[#3FA89A] transition-colors">
              <Phone size={14} /> <span>+254 721 209 699</span>
            </a>
            
            {/* Email - Clickable Mail Client */}
            <a href="mailto:sales@sedahealthcare.co.ke" className="hidden md:flex items-center gap-2 hover:text-[#3FA89A] transition-colors">
              <Mail size={14} /> sales@sedahealthcare.co.ke
            </a>
          </div>
          
          {/* Location */}
          <div className="hidden sm:flex items-center gap-2 text-white/80">
            <MapPin size={14} /> Springfield Green Court, Kibiku Road, Utawala-Eastern Bypass
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 transition-all duration-300 ${scrolled ? 'border-[#3FA89A] shadow-lg' : 'border-neutral-100'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare - Medical Equipment Supplier Kenya" className="h-35 md:h-45 w-auto" />
          </a>
          
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "/about" },
              { name: "Catalog", href: "/departments" },
              { name: "Contact", href: "#partner-with-us" }
            ].map((item) => {
              const isActive = item.name === "Home";
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`relative text-sm font-semibold tracking-wide transition-colors py-2 ${
                    isActive ? "text-[#3FA89A]" : "text-neutral-700 hover:text-[#3FA89A]"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3FA89A] rounded-full" />}
                </a>
              );
            })}
          </nav>

          <button className="lg:hidden p-2 text-neutral-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white absolute w-full shadow-xl border-t-2 border-[#3FA89A]">
            <nav className="flex flex-col px-6 py-6 gap-2">
              {["Home", "About Us", "Catalog", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={item === "Catalog" ? "/departments" : item === "About Us" ? "/about" : item === "Contact" ? "#partner-with-us" : "#home"} 
                  className={`text-base font-semibold py-3 border-b border-neutral-100 ${item === "Home" ? "text-[#3FA89A]" : "text-neutral-800"}`} 
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a href="tel:+254792415615" className="flex items-center justify-center gap-2 bg-neutral-900 text-white py-3.5 text-sm font-semibold tracking-wide rounded-lg">
                  <Phone size={16} /> Call Seda
                </a>
                <a href="https://wa.me/254792415615" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#3FA89A] text-white py-3.5 text-sm font-semibold tracking-wide rounded-lg">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Parallax */}
      <section id="home" className="relative h-[70vh] sm:h-[85vh] min-h-[500px] parallax" style={{ backgroundImage: `url('${slides[0].img}')` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img src={slide.img} alt={slide.title} className="hero-image w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D35]/95 via-[#0B3D35]/70 to-transparent" />
          </div>
        ))}
        
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#3FA89A]" />
              <span className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold">Seda Healthcare Kenya</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-md mb-8 leading-relaxed font-light">
              {slides[currentSlide].desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/departments" className="bg-[#3FA89A] text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-neutral-950 transition-all rounded-xl shadow-lg shadow-[#3FA89A]/30">
                Explore Catalog
              </a>
              <a href="tel:+254792415615" className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-neutral-950 transition-all rounded-xl backdrop-blur-sm">
                <Phone size={16} /> Call Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-12 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)} 
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 sm:w-10 bg-[#3FA89A]" : "w-3 sm:w-4 bg-white/40 hover:bg-white/70"}`} 
            />
          ))}
        </div>
      </section>

      {/* Floating Search Pill */}
      <button 
        onClick={() => setIsSearchOpen(true)} 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-white text-neutral-800 px-6 py-3.5 rounded-full shadow-2xl border-2 border-[#3FA89A]/30 hover:scale-105 hover:shadow-[#3FA89A]/30 transition-all group md:bottom-8" 
        aria-label="Search Catalog"
      >
        <Search size={20} className="text-[#3FA89A] group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-sm">Search medical equipment...</span>
        <span className="bg-neutral-100 text-neutral-500 text-[10px] font-bold px-2 py-1 rounded hidden sm:inline-block">CTRL K</span>
      </button>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 md:bottom-8">
        <a href="https://wa.me/254792415615" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform" aria-label="WhatsApp">
          <MessageCircle size={20} />
        </a>
        <a href="tel:+254792415615" className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#3FA89A] text-white rounded-full shadow-lg hover:scale-110 transition-transform" aria-label="Call">
          <Phone size={20} />
        </a>
      </div>

      {/* Why Choose Us - Parallax Background */}
      <section className="relative py-20 sm:py-28 parallax overflow-hidden" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#3FA89A]/10" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold block mb-3">Why Choose Seda</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              Built for <span className="italic text-[#3FA89A]">Healthcare Excellence</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Certified Quality", desc: "KEBS compliant, global standards." },
              { icon: Truck, title: "Full Installation", desc: "Delivery, setup, and commissioning." },
              { icon: Wrench, title: "Local Support", desc: "Dedicated maintenance and spare parts." },
              { icon: Star, title: "Expert Guidance", desc: "Practical, honest clinical advice." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-[#3FA89A]/20 hover:border-[#3FA89A] hover:shadow-xl hover:shadow-[#3FA89A]/10 transition-all duration-300 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#3FA89A]/10 text-[#3FA89A] rounded-full mb-6 group-hover:bg-[#3FA89A] group-hover:text-white transition-colors duration-300">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scrapbook Gallery Section */}
      <section className="py-20 sm:py-28 bg-neutral-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold mb-3 block">Our Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Moments in Healthcare</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {scrapbookImages.map((img, idx) => (
              <div key={idx} className={`bg-white p-3 pb-8 scrapbook-shadow hover:shadow-2xl hover:rotate-0 transition-all duration-500 ease-out cursor-default ${img.rotation}`}>
                <div className="relative overflow-hidden">
                  <img src={img.src} alt={img.caption} className="w-40 h-40 sm:w-56 sm:h-56 object-cover" />
                </div>
                <p className="text-center text-neutral-500 text-xs mt-4 font-medium tracking-wide uppercase">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold mb-3 block">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              Clinical <span className="text-[#3FA89A]">Departments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <a href="/departments" key={i} className="group relative overflow-hidden bg-neutral-200 aspect-[4/3] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={dept.img} alt={dept.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D35]/90 via-[#0B3D35]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-bold text-white leading-tight mb-1">{dept.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{dept.desc}</p>
                  <div className="flex items-center gap-2 text-[#3FA89A] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-xs uppercase tracking-widest font-bold">View Equipment</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-8">
          <span className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold block text-center">Trusted Global Partners</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {partners.map((partner, i) => (
            <div key={i} className="bg-white border border-neutral-100 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
              <img src={partner.logo} alt={partner.name} className="max-h-16 w-auto" />
            </div>
          ))}
        </div>
      </section>

     
      {/* About / Mission CTA */}
      <section id="partner-with-us" className="relative py-24 sm:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3FA89A]/5 to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#3FA89A] text-xs uppercase tracking-[0.25em] font-bold block mb-4">About Seda Healthcare</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Adding Perfection to <span className="italic text-[#3FA89A]">Diagnosis.</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Specialists in medical equipment for hospitals, clinics, and research institutions across Kenya and East Africa. Built on medical expertise, excellent client service, and clinical innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Award className="text-[#3FA89A] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-neutral-900 text-sm">19+ Disciplines</p>
                    <p className="text-xs text-neutral-500">Clinical expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-[#3FA89A] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-neutral-900 text-sm">100% KEBS</p>
                    <p className="text-xs text-neutral-500">Certified quality</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20request%20a%20facility%20assessment." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#3FA89A] text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#0B3D35] transition-all rounded-xl shadow-lg shadow-[#3FA89A]/30">
                Request Facility Assessment <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[#3FA89A] rounded-2xl rotate-3 opacity-20" />
              <img 
                src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp" 
                alt="Medical Equipment Installation" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

           {/* Reviews Section with Google Integration */}
      <section className="relative py-20 sm:py-28 parallax" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D35]/95 via-[#0B3D35]/90 to-[#3FA89A]/90" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#3FA89A] text-xs uppercase tracking-[0.2em] font-bold mb-3 block inline-block bg-white/10 px-4 py-2 rounded-full">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">Trusted by Healthcare Facilities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-6 sm:p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 text-[#3FA89A]/30" size={32} />
                <div className="flex gap-1 text-[#FBBF24] mb-4">
                  {[...Array(review.rating)].map((_, star) => <Star key={star} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider mt-1">{review.facility}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="bg-white/10 backdrop-blur-md border-2 border-[#3FA89A]/50 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="text-[#FBBF24]" size={32} fill="currentColor" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Share Your Experience</h3>
            </div>
            <p className="text-white/85 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Help us serve you better! Leave a review on Google and share your experience with Seda Healthcare. Your feedback helps us improve and helps others make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* UPDATED: Actual Google Review Link */}
              <a 
                href="https://g.page/r/CapJSTdZRAu1EBM/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#3FA89A] px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-neutral-100 transition-colors rounded-xl shadow-lg"
              >
                <Star size={18} fill="currentColor" /> Leave a Google Review
              </a>
              
              {/* Permanent Google Maps Link for Reading Reviews */}
              <a 
                href="https://www.google.com/maps/search/Seda+Healthcare+Solutions+Ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-colors rounded-xl"
              >
                Read All Reviews <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-[#3FA89A] py-20 sm:py-28">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-3 text-white/70 text-[10px] uppercase tracking-[0.25em] font-bold mb-4">
              <span className="h-px w-8 bg-white/40" /> FAQs <span className="h-px w-8 bg-white/40" />
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Questions? <span className="italic text-white/80 font-light">We have answers.</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-b border-neutral-200 last:border-b-0 transition-colors duration-300 ${openFaq === i ? "bg-[#3FA89A]/5" : ""}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-5 sm:px-7 py-5 sm:py-6 group"
                  aria-expanded={openFaq === i}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${openFaq === i ? "text-[#3FA89A]" : "text-neutral-900 group-hover:text-[#3FA89A]"}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-[#3FA89A] text-white" : "bg-neutral-100 text-neutral-400 group-hover:bg-[#3FA89A]/10 group-hover:text-[#3FA89A]"}`}>
                    {openFaq === i ? <Minus size={17} strokeWidth={2} /> : <Plus size={17} strokeWidth={2} />}
                  </span>
                </button>

                {openFaq === i && (
                  <div className="px-5 sm:px-7 pb-6 sm:pb-7">
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-8 text-center">
            <span className="text-white/70 text-sm">Still have a question?</span>
            <a href="https://wa.me/254792415615" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white text-sm font-semibold border-b-2 border-white/40 pb-1 hover:border-white transition-colors">
              Talk to us <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-neutral-950/80 backdrop-blur-sm p-4 pt-24 sm:pt-32" onClick={() => setIsSearchOpen(false)}>
          <div className="bg-white w-full max-w-3xl p-2 rounded-2xl shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) { window.location.href = `/departments?search=${encodeURIComponent(searchQuery.trim())}`; } }} className="relative flex items-center">
              <Search size={24} className="absolute left-6 text-neutral-400" />
              <input 
                type="text" 
                autoFocus 
                placeholder="Search for medical equipment, e.g., 'X-Ray', 'Dental Chair'..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full pl-14 pr-32 py-6 bg-transparent text-lg placeholder:text-neutral-400 focus:outline-none rounded-2xl" 
              />
              <button type="submit" className="absolute right-3 bg-[#3FA89A] text-white px-6 py-3 text-sm uppercase tracking-widest font-bold hover:bg-[#0B3D35] transition-colors rounded-xl">
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