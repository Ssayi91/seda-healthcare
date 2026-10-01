"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Footer from "../../components/footer";
import { 
  ArrowLeft, Search, MessageCircle, Stethoscope, Zap, Scissors, 
  ClipboardList, Scan, Monitor, Baby, Bed, Eye, FlaskConical, 
  Bone, Package, ChevronDown
} from "lucide-react";

// Custom inline SVGs
const HeartPulseIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/><path d="M5 12h2l2 5 4-10 2 5h4"/></svg>;
const SmilePlusIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M12 2v4"/><path d="M10 4h4"/></svg>;

export default function Departments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedSubcats, setExpandedSubcats] = useState<Record<string, boolean>>({});

  // SUB-CATEGORIZED DATA STRUCTURE
  const categories = [
    { 
      id: "laboratory", title: "Laboratory & Diagnostics", description: "Where precision meets care. Complete diagnostic laboratory equipment, analyzers, and reagent ecosystems for accurate clinical conclusions.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", icon: FlaskConical, 
      subcategories: [
        { title: "Analyzers & Diagnostics", items: ["Haematology Analyzer (3-Part & 5-Part)", "Electrolyte Analyzer", "Finecare Immunoassay Analyser", "Semi & Fully Automated Biochemistry Machines", "Coagulation Machine"] },
        { title: "Lab Equipment", items: ["Microscopes (X107, CX23)", "Centrifuges (6-Tube)", "Blood Roller Mixer", "Water Bath (15L)", "Laboratory Incubator & Oven", "Micropipettes (10-100, 100-1000)", "VDRL & Orbital Shakers"] },
        { title: "Reagents & Consumables", items: ["Haematology Reagents (Lyse, Diluent, Controls)", "Chemistry Reagents (HDL, Cholesterol, GT, ALAT, etc.)", "Immunoassay Reagents (CRP, PCT, D-Dimer, Hormones)", "Test Tubes, Vacutainers, Tips, Staining Solutions", "Rapid Test Kits (HIV, Hepatitis, Malaria, H. Pylori)"] }
      ]
    },
    { 
      id: "theatre", title: "Theatre & Surgical", description: "The heart of the hospital. Comprehensive surgical theatre equipment, specialized instrument sets, and high-turnover consumables for flawless procedures.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", icon: Scissors, 
      subcategories: [
        { title: "Major Theatre Equipment", items: ["Operating Theatre Lights (LED & Halogen)", "Operating Tables (Electric & Hydraulic)", "Anaesthesia Machines", "Electrosurgical Diathermy (300W & 400W)", "Defibrillators", "Patient Monitors (5 & 7 Parameter)", "Autoclaves (50L, 70L, 100L)"] },
        { title: "Surgical Instrument Sets", items: ["General Sets (Major & Minor)", "Laparatomy, Craniotomy & Orthopedic Sets", "Tonsillectomy, Thyroidectomy & Lumbar Sets", "Manual & Electric Craniotomy Drills", "Laryngoscopes (Adult & Paediatric)"] },
        { title: "Theatre Consumables", items: ["Breathing Bags & Circuits", "Endotracheal & Tracheostomy Tubes", "Surgical Sutures (Monocryl, Nylon, Polyglactin, Catgut)", "Surgical Blades, Gloves, Masks & Aprons", "Diathermy Plates & Suction Catheters"] }
      ]
    },
    { 
      id: "maternity-nursery", title: "Maternity, Nursery & Delivery", description: "Specialized, gentle care for mothers and newborns. From stainless steel delivery beds to advanced neonatal incubators and phototherapy.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", icon: Baby, 
      subcategories: [
        { title: "Maternity & Delivery", items: ["Delivery Beds (Stainless Steel)", "Single & Double Crank ABS Beds", "Fetal Dopplers", "MVA Kits & Vacuum Extractors", "Major & Minor Delivery Sets"] },
        { title: "Nursery & Neonatal", items: ["Infant Incubators", "Phototherapy Lights (with/without Lightometer)", "Infant Resuscitaires", "Infant CPAP Machines (Pumani)", "Baby Weighing Scales", "Bilirubinometers"] }
      ]
    },
    { 
      id: "dental", title: "Dental Practice", description: "Complete dental clinic setups. Ergonomic chairs, precise handpieces, and a full spectrum of restorative materials and sterilization packs.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg", icon: SmilePlusIcon, 
      subcategories: [
        { title: "Major Equipment", items: ["Complete Dental Chairs", "Dental X-Ray Machines (IOPA) & Processors", "Endomotors", "Autoclaving & Sterilization Packs"] },
        { title: "Instruments & Handpieces", items: ["High-Speed & Slow-Speed Handpieces", "Forceps, Elevators, Condensers & Excavators", "K-Files, Scalers & Barbed Broaches", "Dental Mirrors, Probes & Tweezers"] },
        { title: "Materials & Consumables", items: ["Amalgam Capsules, GIC, Composite & Bonding Agents", "Impression Trays, Paper Points & Gutta Percha", "Dental Bibs, Masks, Gloves & Steranios Disinfectants"] }
      ]
    },
    { 
      id: "imaging", title: "Radiology & Imaging", description: "High-capacity radiographic and ultrasound systems. Clear, reliable diagnostics powered by Floatex X-Ray units and advanced Mindray ultrasound machines.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/xray-room.jpg", icon: Scan, 
      subcategories: [
        { title: "X-Ray & CT", items: ["Floatex X-Ray Unit 500mA System", "Standex Vertical Bucky Wall Stand", "CT-Scan 16 Slices", "Lead Aprons, Gloves & Protection Screens"] },
        { title: "Ultrasound", items: ["Mindray DP10, DCN2, DCN-3 & DCN-3 Pro Machines", "Brand New & Refurbished Ultrasound Printers", "Ultrasound Jelly & Printing Paper"] }
      ]
    },
    { 
      id: "wards", title: "Medical Wards & Triage", description: "The foundation of in-patient care. Ergonomic ward furniture, reliable triage diagnostics, and emergency furnishing for efficient patient flow.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg", icon: Bed, 
      subcategories: [
        { title: "Ward Furniture", items: ["Single & Double Crank ABS Beds", "Mattresses, Pillows & Cellular Blankets", "Bedside Lockers, Overbed Tables & Drip Stands", "Examination Couches & Ward Screens"] },
        { title: "Triage & Emergency", items: ["Mercurial & Digital Blood Pressure Machines", "Littmann Stethoscopes & Digital Thermometers", "ECG Machines (12 Channel)", "Suction Machines (1 & 2 Bottle)", "Standard & Electric Wheelchairs, Crutches"] }
      ]
    },
    { 
      id: "orthopedic", title: "Orthopedic & Rehabilitation", description: "Restoring mobility and independence. A comprehensive range of wheelchairs, crutches, therapeutic supports, and rehabilitation equipment.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625228/wheelchair-walking-frame-and-crutches-isolated-on-white-background_vjz0wn.webp", icon: Bone, 
      subcategories: [
        { title: "Mobility Aids", items: ["Standard, Detachable & Electric Wheelchairs", "Inclining Wheelchairs (with/without Commode)", "Armpit & Elbow Crutches", "Foldable, Blind & Tripod Walking Sticks"] },
        { title: "Therapeutic Support", items: ["Plaster Cutters (Mechanical & Electric)", "TENS Machines & Massage Beds", "Sacro-Lumbar, Knee & Ankle Supports", "Hinged Knee Braces & Cervical Collars", "Medical Compression Stockings"] }
      ]
    },
    { 
      id: "consumables", title: "Non-Pharmaceutical Consumables", description: "The essential lifeline of daily operations. High-quality, reliable disposable medical supplies, IV fluids, and PPE to keep your facility running smoothly.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/consumables.jpg", icon: Package, 
      subcategories: [
        { title: "IV & Injection", items: ["Syringes (2cc to 20cc), Cannulas (G16-G24)", "IV Fluids (Ringer's Lactate, Normal Saline, Dextrose)", "Scalp Vein Sets, Alcohol Pads & Tourniquets"] },
        { title: "Wound Care & PPE", items: ["Surgical Masks, Nitrile & Surgical Gloves", "Gauze Rolls, Cotton Wool, Crepe Bandages & Elastoplast", "Disposable Speculums, Urine Bags & Catheters", "P.O.P Rolls (China & Gypsona)"] }
      ]
    }
  ];

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    
    return categories.map(cat => {
      const filteredSubcats = cat.subcategories.map(sub => ({
        ...sub,
        items: sub.items.filter(item => item.toLowerCase().includes(query))
      })).filter(sub => sub.items.length > 0);

      const titleMatch = cat.title.toLowerCase().includes(query);
      
      if (filteredSubcats.length > 0 || titleMatch) {
        return { ...cat, subcategories: titleMatch ? cat.subcategories : filteredSubcats };
      }
      return null;
    }).filter(Boolean) as typeof categories;
  }, [searchQuery, categories]);

  const totalItemsFound = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => 
      acc + cat.subcategories.reduce((subAcc, sub) => subAcc + sub.items.length, 0), 0
    );
  }, [filteredCategories]);

  const toggleSubcat = (catId: string, subIndex: number) => {
    const key = `${catId}-${subIndex}`;
    setExpandedSubcats(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const generateItemWhatsAppLink = (item: string, category: string) => {
    const message = `Hello Seda Healthcare, I would like to order/inquire about:\n\n*${item}*\nCategory: ${category}\n\nPlease provide pricing and availability.`;
    return `https://wa.me/254792415615?text=${encodeURIComponent(message)}`;
  };

  const visibleCategories = activeCategory 
    ? filteredCategories.filter(cat => cat.id === activeCategory)
    : filteredCategories;

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Top Banner */}
      <div className="border-b border-[#1a1a1a]/10 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a]/60">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-1.5 font-semibold text-[#3FA89A]">+254 792 415 615</span>
              <span className="flex items-center gap-1.5">sales@sedahealthcare.co.ke</span>
            </div>
            <div>Mon – Fri · 08:00 – 17:00 EAT</div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#1a1a1a]/10 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-sm">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-8 md:h-45 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a] hover:text-[#3FA89A] transition-colors font-semibold">
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Global Header Section */}
        <div className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#3FA89A]/10 text-[#3FA89A] px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-bold mb-6">
            Equipment Catalog
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-[1.1]">
            Explore Our <span className="text-[#3FA89A] italic">Departments</span>
          </h1>
          <p className="text-[#6B6F73] text-lg mb-10 leading-relaxed">
            Browse our comprehensively sub-categorized medical supplies. Find exactly what your facility needs, quickly and efficiently.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a1a1a]/30" size={20} />
            <input
              type="text"
              placeholder="Search for equipment, e.g., 'Autoclave' or 'Wheelchair'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white border-2 border-[#1a1a1a]/10 text-base placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#3FA89A] transition-colors shadow-sm"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            )}
          </div>

          {searchQuery.trim() && (
            <div className="mt-4 text-sm font-medium text-[#6B6F73]">
              Found <span className="text-[#3FA89A] font-bold">{totalItemsFound}</span> items across <span className="text-[#3FA89A] font-bold">{filteredCategories.length}</span> categories.
            </div>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-16 border-b border-[#1a1a1a]/10 sticky top-16 z-30 bg-white/95 backdrop-blur py-4 -mx-4 sm:-mx-6 lg:-mx-0 px-4 sm:px-6 lg:px-0">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider whitespace-nowrap transition-all font-bold rounded-sm ${
                !activeCategory ? 'bg-[#1a1a1a] text-white' : 'bg-[#F5F1E8] text-[#1a1a1a] hover:bg-[#1a1a1a]/10'
              }`}
            >
              All Departments
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider whitespace-nowrap transition-all font-bold rounded-sm ${
                  activeCategory === cat.id ? 'bg-[#1a1a1a] text-white' : 'bg-[#F5F1E8] text-[#1a1a1a] hover:bg-[#1a1a1a]/10'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories "Chapters" */}
        <div className="space-y-24">
          {visibleCategories.map((cat, index) => {
            const CategoryIcon = cat.icon;
            // Alternate subtle background for visual rhythm
            const isEven = index % 2 === 0;
            
            return (
              <div key={cat.id} className={`group relative ${isEven ? 'bg-white' : 'bg-[#FAFAF8]'} -mx-4 sm:-mx-6 lg:-mx-0 px-4 sm:px-6 lg:px-0 py-16 first:pt-0`}>
                
                {/* VIBRANT BACKGROUND IMAGE HEADER */}
                <div className="relative rounded-sm overflow-hidden mb-10 shadow-xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url('${cat.image}')` }}
                  />
                  {/* Vibrant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-[#3FA89A]/60" />
                  
                  <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-sm border border-white/20 text-white shrink-0">
                      <CategoryIcon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-display text-3xl md:text-4xl text-white mb-3">{cat.title}</h2>
                      <p className="text-white/85 text-lg md:text-xl font-serif max-w-3xl leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* MINIMALISTIC SUBCATEGORIES */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  {cat.subcategories.map((sub, subIdx) => {
                    const isExpanded = expandedSubcats[`${cat.id}-${subIdx}`] || !searchQuery;
                    return (
                      <div key={subIdx} className="border border-[#1a1a1a]/5 bg-white hover:border-[#3FA89A]/30 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden">
                        <button 
                          onClick={() => toggleSubcat(cat.id, subIdx)}
                          className="w-full flex items-center justify-between p-6 bg-[#F5F1E8]/40 hover:bg-[#F5F1E8] transition-colors text-left"
                        >
                          <h3 className="font-display text-lg font-semibold text-[#1a1a1a]">{sub.title}</h3>
                          <div className={`transition-transform duration-300 text-[#3FA89A] ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown size={20} />
                          </div>
                        </button>
                        
                        {isExpanded && (
                          <div className="p-6 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {sub.items.map((item, idx) => (
                              <a
                                key={idx}
                                href={generateItemWhatsAppLink(item, cat.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-3 border border-transparent hover:border-[#3FA89A]/30 hover:bg-[#3FA89A]/5 rounded-sm transition-all group/item"
                              >
                                <MessageCircle size={14} className="text-[#3FA89A] mt-1 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                                <span className="text-sm text-[#1a1a1a]/80 leading-snug">{item}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-[#1a1a1a] text-white p-8 sm:p-16 text-center relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3FA89A]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3FA89A]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="font-display text-3xl sm:text-4xl mb-4">Need a custom hospital setup quotation?</h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto text-lg">
              We compile tailored pricelists based on your facility's bed capacity, specialty focus, and budget parameters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:sales@sedahealthcare.co.ke" className="inline-block bg-[#3FA89A] text-white px-8 py-4 text-sm uppercase tracking-wider font-bold hover:bg-white hover:text-[#3FA89A] transition-colors rounded-sm">
                Email Sales Team
              </a>
              <a href="https://wa.me/254792415615?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20discuss%20a%20complete%20hospital%20setup%20quotation." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 text-sm uppercase tracking-wider font-bold hover:bg-white hover:text-[#25D366] transition-colors rounded-sm">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </main>
  );
}