"use client";

import Link from "next/link";
import Footer from "../../components/footer";
import { 
  Target, TrendingUp, Award, ShieldCheck, Users, Heart, 
  Phone, Mail, MapPin, Menu, X, MessageCircle, Star, Quote 
} from "lucide-react";
import { useState } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

 const partners = [
    { name: "Mindray", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229703/Screenshot_from_2026-10-05_22-42-47-removebg-preview_kd3pkx.png" },
    { name: "Biosystems", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229703/Screenshot_from_2026-10-05_22-42-05-removebg-preview_eddrbz.png" },
    { name: "Floatex", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-42-13-removebg-preview_lzw9ix.png" },
    { name: "Standex", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-41-49-removebg-preview_d8jjdy.png" },
    { name: "Partner 5", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229705/4-WhatsApp_Image_2026-10-05_at_2.35.20_PM-removebg-preview_ksecmv.png" },
    { name: "Partner 6", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229704/Screenshot_from_2026-10-05_22-41-39-removebg-preview_jatp1g.png" },
    { name: "Partner 7", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229705/1-WhatsApp_Image_2026-10-05_at_11.00.47_AM-removebg-preview_br990t.png" },
    { name: "Partner 8", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229706/Screenshot_from_2026-10-05_22-42-34-removebg-preview_gm94c5.png" },
    { name: "Partner 9", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791229705/Screenshot_from_2026-10-05_22-42-28-removebg-preview_vqdpis.png" },
    { name: "Partner 10", logo: "https://lambtechnologies.com/cdn/shop/files/DRGEM.png?v=1746731558&width=536" },
    { name: "Partner 11", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791446961/Screenshot_from_2026-10-08_11-08-04-removebg-preview_dopxha.png"},
    { name: "Partner 12", logo: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1791447358/Screenshot_from_2026-10-08_11-15-22-removebg-preview_tdeede.png"},
  ];

  const scrapbookImages = [
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", caption: "Lab Setup '23" },
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", caption: "Surgical Suite" },
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", caption: "Maternity Wing" },
    { src: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790689281/xray_facility_owz1d1.png", caption: "Imaging Center" },
  ];

 const reviews = [
    { name: "Racheal Sarota.",text: "Amazing customer service. I received my items in great condition but would highly recommend to improve on delivery time. I appreciated the user training they gave me after purchasing a BP machine for my dad. Thank you.", rating: 5 },
    { name: "francis munyua.", text: "Best after sale services I have experienced so far. Thank you Seda.", rating: 5 },
    { name: "Fredrick Kariuki.", text: "Customer care-check,Reasonable prices-check,Quality products-check,Reliability-check.", rating: 5 },
  ];
  return (
    <main className="bg-white text-neutral-900 antialiased font-['Montserrat',sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        .diagonal-up { clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
        .diagonal-down { clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%); }
        .parallax { background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; }
        @media (max-width: 768px) {
          .diagonal-up, .diagonal-down { clip-path: none; }
          .parallax { background-attachment: scroll; }
        }
      `}</style>

      {/* Top Contact Bar */}
      <div className="bg-[#0B3D35] text-white py-2.5 text-xs sm:text-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center font-medium tracking-wide">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="tel:+254792415615" className="flex items-center gap-2 hover:text-[#3FA89A] transition-colors">
              <Phone size={14} /> <span className="hidden sm:inline">+254 792 415 615</span>
            </a>
            <a href="mailto:sales@sedahealthcare.co.ke" className="hidden md:flex items-center gap-2 hover:text-[#3FA89A] transition-colors">
              <Mail size={14} /> sales@sedahealthcare.co.ke
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/80">
            <MapPin size={14} /> Springfield Green Court, Kibiku Road, Utawala-Eastern Bypass
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#3FA89A] transition-all shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-35 md:h-45 w-auto" />
          </Link>
          
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
            <Link href="/" className="text-neutral-700 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">Home</Link>
            <Link href="/about" className="text-[#3FA89A] text-sm font-semibold tracking-wide relative">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3FA89A] rounded-full" />
            </Link>
            <Link href="/departments" className="text-neutral-700 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">Catalog</Link>
            <a href="/#partner-with-us" className="text-neutral-700 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">Contact</a>
          </nav>

          <button className="lg:hidden p-2 text-neutral-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white absolute w-full shadow-xl border-t-2 border-[#3FA89A]">
            <nav className="flex flex-col px-6 py-6 gap-2">
              <Link href="/" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-[#3FA89A] text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/departments" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Catalog</Link>
              <a href="/#partner-with-us" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[450px] parallax" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D35]/95 via-[#0B3D35]/80 to-[#3FA89A]/85" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10" />
        
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#3FA89A]" />
              <span className="text-[#3FA89A] text-xs sm:text-sm uppercase tracking-[0.22em] font-bold">About Seda Healthcare</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-white mb-5">
              Adding Perfection to <span className="italic text-[#3FA89A]">Diagnosis.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-light">
              Specialists in medical equipment for hospitals, clinics, and research institutions. Built on medical expertise, excellent client service, and the pursuit of clinical innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Diagonal Section */}
      <section className="relative bg-white diagonal-up pb-32 pt-20 sm:pt-28 lg:pt-36">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                A Kenyan Company Built on <span className="italic text-[#3FA89A]">Expertise.</span>
              </h2>
              <div className="space-y-5 text-base text-neutral-600 leading-relaxed">
                <p>
                  Seda Healthcare is a Kenyan-based company specializing in the distribution of a wide range of medical equipment and consumables. We are experts in hospital laboratory setups and medical consumables, serving hospitals, clinics, and research institutions across the region.
                </p>
                <p>
                  Our business was built on a foundation of medical expertise, excellent client service, and a relentless pursuit of medical and clinical innovation. Today, this desire to constantly improve and grow remains an integral part of the Seda Healthcare culture.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-[#3FA89A] rounded-2xl rotate-3 opacity-20" />
              <img 
                src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp" 
                alt="Laboratory Equipment" 
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Refined & Colorful */}
      <section className="relative bg-gradient-to-br from-[#0B3D35] via-[#0B3D35] to-[#3FA89A] diagonal-down pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block inline-block bg-white/10 px-4 py-2 rounded-full">Our Direction</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Vision - Clean White */}
            <div className="bg-white border-2 border-[#3FA89A]/20 p-8 sm:p-10 rounded-2xl shadow-xl">
              <div className="w-12 h-12 bg-[#3FA89A] text-white flex items-center justify-center rounded-xl mb-5">
                <Target size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">Our Vision</h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                To be the unmatched provider of medical equipment and consumables by maintaining the utmost quality, professionalism, and after-sales support in the healthcare industry.
              </p>
            </div>

            {/* Mission - Primary Color */}
            <div className="bg-[#3FA89A] p-8 sm:p-10 rounded-2xl shadow-xl text-white">
              <div className="w-12 h-12 bg-white/20 text-white flex items-center justify-center rounded-xl mb-5">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                To provide cost-effective, quality medical equipment through excellent service, integrity, and dedicated technical support to every facility we partner with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrapbook Collage Section */}
      <section className="py-20 sm:py-28 bg-neutral-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Moments in Healthcare</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {scrapbookImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-3 pb-8 shadow-lg hover:shadow-2xl hover:rotate-0 transition-all duration-500 ease-out cursor-default ${
                  idx % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]'
                } ${idx === 1 || idx === 3 ? 'mt-6 sm:mt-12' : ''}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="w-40 h-40 sm:w-56 sm:h-56 object-cover"
                  />
                </div>
                <p className="text-center text-neutral-500 text-xs mt-4 font-medium tracking-wide uppercase">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-white diagonal-up pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block inline-block bg-[#3FA89A]/10 px-4 py-2 rounded-full">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-4">Our Core Values</h2>
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
                <div key={i} className="bg-gradient-to-br from-neutral-50 to-white border-2 border-[#3FA89A]/20 p-6 sm:p-8 rounded-2xl hover:border-[#3FA89A] hover:shadow-xl hover:shadow-[#3FA89A]/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#3FA89A]/10 text-[#3FA89A] flex items-center justify-center rounded-xl mb-5 group-hover:bg-[#3FA89A] group-hover:text-white transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment - Parallax Background */}
      <section className="relative parallax py-24 sm:py-32" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D35]/95 via-[#0B3D35]/90 to-[#3FA89A]/90" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Commitment</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Dedicated to Your Facility's <span className="italic text-[#3FA89A]">Success.</span>
              </h2>
              <p className="text-white/85 text-base leading-relaxed mb-8 font-light">
                Seda Labs Solutions has a dedicated team of highly trained technical staff to carry out installation, commissioning, and maintenance work in hospitals. We pride ourselves on servicing the majority of medical equipment we supply.
              </p>
              
              <div className="space-y-4">
                {[
                  "Comprehensive equipment installation & commissioning",
                  "Routine maintenance and calibration services",
                  "Rapid response technical support across Kenya",
                  "Staff training on new medical equipment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#3FA89A]/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#3FA89A]" />
                    </div>
                    <span className="text-white font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl text-center hover:bg-white/15 transition-all">
                <p className="text-3xl sm:text-4xl font-bold text-[#3FA89A] mb-2">19+</p>
                <p className="text-[10px] sm:text-xs text-white/80 uppercase tracking-widest font-semibold">Clinical Disciplines</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl text-center hover:bg-white/15 transition-all">
                <p className="text-3xl sm:text-4xl font-bold text-[#3FA89A] mb-2">100%</p>
                <p className="text-[10px] sm:text-xs text-white/80 uppercase tracking-widest font-semibold">KEBS Compliant</p>
              </div>
              <div className="bg-[#3FA89A] p-6 sm:p-8 rounded-2xl text-center col-span-2 hover:scale-105 transition-transform">
                <p className="text-lg sm:text-xl font-bold text-white mb-2">Nationwide Coverage</p>
                <p className="text-xs sm:text-sm text-white/90">Supplying hospitals, clinics, and research organizations across Kenya and East Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Naturally Colorful */}
      <section className="py-20 sm:py-28 bg-neutral-50 diagonal-down pt-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Trusted Collaborations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Our Global Partners</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto text-sm">
              We partner with leading global manufacturers to bring you the best in medical technology.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-neutral-100 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#3FA89A] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Trusted by Facilities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-100 p-6 sm:p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 text-[#3FA89A]/20" size={32} />
                <div className="flex gap-1 text-[#FBBF24] mb-4">
                  {[...Array(5)].map((_, star) => <Star key={star} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-neutral-900 text-sm">{review.name}</p>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">{review.rating}-star review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parting Shot */}
      <section className="py-16 bg-[#0B3D35] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Empowering Healthcare Across East Africa.</h2>
          <p className="text-white/70 text-sm sm:text-base">Your trusted partner in medical excellence, from Nairobi to the region.</p>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/254792415615" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform" 
          aria-label="WhatsApp Seda Healthcare"
        >
          <MessageCircle size={20} />
        </a>
        <a 
          href="tel:+254792415615" 
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#3FA89A] text-white rounded-full shadow-lg hover:scale-110 transition-transform" 
          aria-label="Call Seda Healthcare"
        >
          <Phone size={20} />
        </a>
      </div>

      <Footer />
    </main>
  );
}