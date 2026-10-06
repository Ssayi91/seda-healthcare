"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Footer from "../../components/footer";
import { 
  Search, MessageCircle, Stethoscope, Zap, Scissors, 
  ClipboardList, Scan, Monitor, Baby, Bed, Eye, FlaskConical, 
  Bone, Package, ChevronDown, Plus, ShoppingCart, X, Minus, Trash2, Check,
  Phone, Mail, MapPin, Menu
} from "lucide-react";

// Custom inline SVGs for specific icons
const HeartPulseIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/><path d="M5 12h2l2 5 4-10 2 5h4"/></svg>;
const SmilePlusIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M12 2v4"/><path d="M10 4h4"/></svg>;

type CartItem = { name: string; category: string; qty: number };

export default function Departments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const initialSearch = params.get('search') || "";
      setSearchQuery(initialSearch);
    }
  }, []);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedSubcats, setExpandedSubcats] = useState<Record<string, boolean>>({});
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('seda_cart');
      if (savedCart) { 
        try { setCartItems(JSON.parse(savedCart)); } catch (e) {} 
      }
    }
  }, []);

  useEffect(() => { 
    if (typeof window !== 'undefined') {
      localStorage.setItem('seda_cart', JSON.stringify(cartItems)); 
    }
  }, [cartItems]);

  const addToCart = (name: string, category: string) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.name === name);
      if (exists) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name, category, qty: 1 }];
    });
  };

  const updateQty = (name: string, delta: number) => {
    setCartItems(prev => prev.map(i => i.name === name ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));
  };

  const removeFromCart = (name: string) => setCartItems(prev => prev.filter(i => i.name !== name));
  const clearCart = () => { setCartItems([]); if (typeof window !== 'undefined') localStorage.removeItem('seda_cart'); };

  const generateWhatsAppLink = () => {
    if (cartItems.length === 0) return "#";
    const text = cartItems.map((i, idx) => `${idx + 1}. *${i.name}* (${i.category}) - Qty: ${i.qty}`).join('\n');
    return `https://wa.me/254792415615?text=${encodeURIComponent(`Hello Seda Healthcare, I would like to request a formal quotation for:\n\n${text}`)}`;
  };

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // === EXPANDED CATEGORIES DATA ===
  const categories = [
    { 
      id: "laboratory", 
      title: "Laboratory & Diagnostics", 
      description: "Complete diagnostic laboratory equipment, analyzers, reagents, and rapid test ecosystems.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", 
      icon: FlaskConical, 
      subcategories: [ 
        { title: "Analyzers & Diagnostics", items: ["Haematology Analyzer (3-Part & 5-Part)", "Electrolyte Analyzer", "Finecare Immunoassay Analyser", "Semi & Fully Automated Biochemistry Machines", "Coagulation Machine"] }, 
        { title: "Lab Equipment", items: ["Microscopes (X107, CX23)", "Centrifuges (6-Tube)", "Blood Roller Mixer", "Water Bath (15L)", "Laboratory Incubator & Oven", "Micropipettes (5-50, 10-1000, 20-200, 100-1000 µL)", "Pipette Tips (Yellow/Blue)", "Centrifuge Tubes & Buckets", "Staining Rack", "Blood Grouping Tile"] }, 
        { title: "Blood Grouping & Latex Tests", items: ["Blood Grouping Kit (A, B, D)", "Bovine Albumin", "Anti-Human Globulin", "Widal Reagent Kit", "ASOT Reagent Kit", "Rheumatoid Factor (RF)", "Brucella Abortus & Melitensis"] },
        { title: "Rapid Test Kits", items: ["Salmonella Ag / AB", "H. pylori Ag / AB", "PDT/HCG Urine & Blood", "Rota/Adeno Virus", "Dengue Combo NS1/IgG/IgM", "Cholera Ag", "Syphilis/VDRL", "Gonorrhea Strips", "Malaria pf Ag / pf/Pan Ag", "Fecal Occult Blood (FOB)", "Brucellosis", "PSA Ag", "Hepatitis A / B / C", "Urinalysis Strips (P10 / Mission)", "Hb Strips (201 / Hemo Control)"] },
        { title: "Malaria & Gram Stains", items: ["Field Stain A & B Solution", "Oil Immersion", "Crystal Violet", "Lugol's Iodine", "Giemsa Stain Solution & Powder", "Acetone", "Neutral Red"] },
        { title: "Hematology Reagents", items: ["Mindray Reagents (BC 28, 30, 33 Series)", "Diluent (20L)", "Rinse (5L)", "Lyse-BC", "E-Z Cleanser", "Probe Cleanser", "Mindray Printing Paper"] },
        { title: "Clinical Chemistry Reagents", items: ["ALT/GPT, AST/GOT", "Bilirubin (Direct/Total)", "Total Protein & Albumin", "ALP (AMP/DEA), g-GT", "Cholesterol (Total/HDL/LDL)", "Triglycerides", "Creatinine, Urea/BUN-UV, Uric Acid", "Glucose, Calcium, Magnesium, Phosphorous", "Iron-Ferozine, Lipase, Amylase Direct", "LDH, Ferritin, Transferrin", "ASO, CRP, CRP STD, RF", "Biochemistry Control Serums (Level 1 & 2)", "Biochemistry & Protein Calibrators", "Reactions Rotor for A15", "Concentrated Washing Solution & Systems Liquid", "Sample Wells"] } 
      ] 
    },
    { 
      id: "theatre", 
      title: "Theatre & Surgical", 
      description: "Comprehensive surgical theatre equipment, specialized instrument sets, and consumables.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", 
      icon: Scissors, 
      subcategories: [ 
        { title: "Major Theatre Equipment", items: ["Operating Theatre Lights (LED & Halogen)", "Operating Tables (Electric & Hydraulic)", "Anaesthesia Machines", "Electrosurgical Diathermy (300W & 400W)", "Defibrillators", "Patient Monitors (5 & 7 Parameter)", "Autoclaves (50L, 70L, 100L)"] }, 
        { title: "Surgical Instrument Sets", items: ["General Sets (Major & Minor)", "Laparatomy, Craniotomy & Orthopedic Sets", "Tonsillectomy, Thyroidectomy & Lumbar Sets", "Manual & Electric Craniotomy Drills", "Laryngoscopes (Adult & Paediatric)"] }, 
        { title: "Theatre Consumables", items: ["Breathing Bags & Circuits", "Endotracheal & Tracheostomy Tubes", "Surgical Sutures (Monocryl, Nylon, Polyglactin, Catgut)", "Surgical Blades, Gloves, Masks & Aprons", "Diathermy Plates & Suction Catheters"] } 
      ] 
    },
    { 
      id: "maternity-nursery", 
      title: "Maternity, Nursery & Delivery", 
      description: "Specialized, gentle care for mothers and newborns. From stainless steel delivery beds to advanced neonatal incubators.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", 
      icon: Baby, 
      subcategories: [ 
        { title: "Maternity & Delivery", items: ["Delivery Beds (Stainless Steel)", "Single & Double Crank ABS Beds", "Fetal Dopplers", "MVA Kits & Vacuum Extractors", "Major & Minor Delivery Sets"] }, 
        { title: "Nursery & Neonatal", items: ["Infant Incubators", "Phototherapy Lights (with/without Lightometer)", "Infant Resuscitaires", "Infant CPAP Machines (Pumani)", "Baby Weighing Scales", "Bilirubinometers"] } 
      ] 
    },
    { 
      id: "dental", 
      title: "Dental Practice", 
      description: "Complete dental clinic setups. Ergonomic chairs, precise handpieces, and a full spectrum of restorative materials.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg", 
      icon: SmilePlusIcon, 
      subcategories: [ 
        { title: "Major Equipment", items: ["Complete Dental Chairs", "Dental X-Ray Machines (IOPA) & Processors", "Endomotors", "Autoclaving & Sterilization Packs"] }, 
        { title: "Instruments & Handpieces", items: ["High-Speed & Slow-Speed Handpieces", "Forceps, Elevators, Condensers & Excavators", "K-Files, Scalers & Barbed Broaches", "Dental Mirrors, Probes & Tweezers"] }, 
        { title: "Materials & Consumables", items: ["Amalgam Capsules, GIC, Composite & Bonding Agents", "Impression Trays, Paper Points & Gutta Percha", "Dental Bibs, Masks, Gloves & Steranios Disinfectants"] } 
      ] 
    },
    { 
      id: "imaging", 
      title: "Radiology & Imaging", 
      description: "High-capacity radiographic and ultrasound systems. Clear, reliable diagnostics powered by Floatex X-Ray and Mindray.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790689281/xray_facility_owz1d1.png", 
      icon: Scan, 
      subcategories: [ 
        { title: "X-Ray & CT", items: ["Floatex X-Ray Unit 500mA System", "Standex Vertical Bucky Wall Stand", "CT-Scan 16 Slices", "Lead Aprons, Gloves & Protection Screens"] }, 
        { title: "Ultrasound", items: ["Mindray DP10, DCN2, DCN-3 & DCN-3 Pro Machines", "Brand New & Refurbished Ultrasound Printers", "Ultrasound Jelly & Printing Paper"] } 
      ] 
    },
    { 
      id: "wards", 
      title: "Medical Wards & Triage", 
      description: "The foundation of in-patient care. Ergonomic ward furniture, reliable triage diagnostics, and emergency furnishing.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg", 
      icon: Bed, 
      subcategories: [ 
        { title: "Ward Furniture", items: ["Single & Double Crank ABS Beds", "Mattresses, Pillows & Cellular Blankets", "Bedside Lockers, Overbed Tables & Drip Stands", "Examination Couches & Ward Screens"] }, 
        { title: "Triage & Emergency", items: ["Mercurial & Digital Blood Pressure Machines", "Littmann Stethoscopes & Digital Thermometers", "ECG Machines (12 Channel)", "Suction Machines (1 & 2 Bottle)", "Standard & Electric Wheelchairs, Crutches"] } 
      ] 
    },
    { 
      id: "orthopedic", 
      title: "Orthopedic & Rehabilitation", 
      description: "Restoring mobility and independence. A comprehensive range of wheelchairs, crutches, and therapeutic supports.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625228/wheelchair-walking-frame-and-crutches-isolated-on-white-background_vjz0wn.webp", 
      icon: Bone, 
      subcategories: [ 
        { title: "Mobility Aids", items: ["Standard, Detachable & Electric Wheelchairs", "Inclining Wheelchairs (with/without Commode)", "Armpit & Elbow Crutches", "Foldable, Blind & Tripod Walking Sticks"] }, 
        { title: "Therapeutic Support", items: ["Plaster Cutters (Mechanical & Electric)", "TENS Machines & Massage Beds", "Sacro-Lumbar, Knee & Ankle Supports", "Hinged Knee Braces & Cervical Collars"] } 
      ] 
    },
    { 
      id: "consumables", 
      title: "Non-Pharmaceutical Consumables", 
      description: "The essential lifeline of daily operations. High-quality disposable medical supplies, IV fluids, PPE, and sample collection.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790691981/69836cf89fd35f0996609462_65a7c0e583a403879a96fdca_disposable-medical-supplies-min_1_1_anlvfl.webp", 
      icon: Package, 
      subcategories: [ 
        { title: "IV & Injection", items: ["Syringes (2cc to 20cc), Cannulas (G16-G24)", "IV Fluids (Ringer's Lactate, Normal Saline, Dextrose)", "Scalp Vein Sets, Alcohol Pads & Tourniquets"] }, 
        { title: "Wound Care & PPE", items: ["Surgical Masks, Nitrile & Surgical Gloves", "Gauze Rolls, Cotton Wool, Crepe Bandages & Elastoplast", "Disposable Speculums, Urine Bags & Catheters", "P.O.P Rolls (China & Gypsona)"] },
        { title: "Sample Collection & Lab Consumables", items: ["Vacutainers (Purple/EDTA, Red, Plain, Yellow, Blue/Citrate, Grey/Fluoride, Green)", "Microtainers (Purple & Plain)", "Sterile HVS Swabs & Applicator Sticks", "Vacutainer Needles & Blood Lancets", "Plain & Frosted Microscope Slides, Cover Slips", "Polypots (3ml), Urine (50ml) & Stool Containers", "Hemo Control & 201 Hemoque Microcuvettes", "Acetic Acid (1L / 2.5L)", "ESR Tubes (Disposable/Glass) & Stands", "Lab, Room & Fridge Thermometers", "Test Tubes (Glass 10x75 / 12x75 ml) & Stainless Racks", "Centrifuge Brushes", "Biohazard Bins (20L / 30L) & Liners"] } 
      ] 
    }
  ];

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    return categories.map(cat => {
      const filteredSubcats = cat.subcategories.map(sub => ({ ...sub, items: sub.items.filter(item => item.toLowerCase().includes(query)) })).filter(sub => sub.items.length > 0);
      const titleMatch = cat.title.toLowerCase().includes(query);
      if (filteredSubcats.length > 0 || titleMatch) return { ...cat, subcategories: titleMatch ? cat.subcategories : filteredSubcats };
      return null;
    }).filter(Boolean) as typeof categories;
  }, [searchQuery, categories]);

  const totalItemsFound = useMemo(() => filteredCategories.reduce((acc, cat) => acc + cat.subcategories.reduce((subAcc, sub) => subAcc + sub.items.length, 0), 0), [filteredCategories]);
  
  const toggleSubcat = (catId: string, subIndex: number) => {
    const key = `${catId}-${subIndex}`;
    setExpandedSubcats(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  const visibleCategories = activeCategory ? filteredCategories.filter(cat => cat.id === activeCategory) : filteredCategories;

  return (
    <main className="bg-white text-neutral-900 antialiased font-sans overflow-x-hidden">
      
      {/* ========================================================= TOP CONTACT BAR ========================================================== */}
      <div className="bg-[#3FA89A] text-white py-2.5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-semibold tracking-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1">
            <a href="tel:+254792415615" className="flex items-center gap-1.5 hover:text-white/80 transition-colors"><Phone size={12} /> +254 792 415 615</a>
            <a href="tel:+254721209699" className="flex items-center gap-1.5 hover:text-white/80 transition-colors"><Phone size={12} /> +254 721 209 699</a>
            <a href="mailto:sales@sedahealthcare.co.ke" className="hidden md:flex items-center gap-1.5 hover:text-white/80 transition-colors"><Mail size={12} /> sales@sedahealthcare.co.ke</a>
            <span className="hidden lg:flex items-center gap-1.5 text-white/90"><MapPin size={12} /> Springfield Green Court, Kibiku Road, Utawala-Eastern Bypass.</span>
          </div>
          <div className="hidden sm:block text-white/90 text-[11px] font-medium">Mon – Fri · 08:00 – 17:00 EAT</div>
        </div>
      </div>

      {/* ========================================================= HEADER ========================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-16 md:h-20 w-auto" />
          </Link>
          
          {/* Centered Navbar */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-12">
            <Link href="/" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">Home</Link>
            <Link href="/about" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">About Us</Link>
            <Link href="/departments" className="text-[#3FA89A] text-sm font-semibold tracking-wide">Catalog</Link>
            <a href="/#partner-with-us" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">Contact</a>
          </nav>

          {/* Right Side: Cart Only */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 hover:bg-neutral-100 rounded-full transition-colors" aria-label="View Cart">
              <ShoppingCart size={20} className="text-neutral-800" />
              {totalCartItems > 0 && <span className="absolute -top-0.5 -right-0.5 bg-[#3FA89A] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{totalCartItems}</span>}
            </button>
          </div>

          <button className="lg:hidden p-2 text-neutral-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white absolute w-full shadow-xl border-t border-neutral-100">
            <nav className="flex flex-col px-6 py-6 gap-2">
              <Link href="/" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-sm font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-sm font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/departments" className="text-[#3FA89A] text-sm font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Catalog</Link>
              <a href="/#partner-with-us" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-sm font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Contact</a>
              <button onClick={() => { setIsCartOpen(true); setMenuOpen(false); }} className="mt-4 flex items-center justify-center gap-2 bg-neutral-900 text-white py-3.5 text-sm font-semibold tracking-wide rounded-md">
                <ShoppingCart size={16} /> View Cart ({totalCartItems})
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ========================================================= GLOBAL SEARCH & INTRO ========================================================== */}
      <section className="relative bg-fixed bg-cover bg-center border-b border-neutral-100 py-12 sm:py-16" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')" }}>
        <div className="absolute inset-0 bg-neutral-950/85"></div>
        <div className="absolute inset-0 bg-[#3FA89A]/10 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="inline-block bg-[#3FA89A]/20 text-[#3FA89A] px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold mb-4 backdrop-blur-sm border border-[#3FA89A]/30 rounded-sm">
            Equipment Catalog
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-[1.1]">
            Explore Our <span className="italic text-[#3FA89A]">Departments</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed max-w-xl mx-auto">
            Browse our comprehensively sub-categorized medical supplies. Find exactly what your facility needs.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="Search equipment..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#3FA89A] focus:bg-white/20 transition-colors shadow-sm backdrop-blur-sm rounded-md" 
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
                <X size={18} />
              </button>
            )}
          </div>
          {searchQuery.trim() && (
            <div className="mt-3 text-xs font-medium text-white/70">
              Found <span className="text-[#3FA89A] font-bold">{totalItemsFound}</span> items.
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= FILTER TABS ========================================================== */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-neutral-100 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            <button 
              onClick={() => setActiveCategory(null)} 
              className={`px-4 py-1.5 text-[11px] uppercase tracking-wider font-bold rounded-md transition-colors whitespace-nowrap ${!activeCategory ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'}`}
            >
              All Departments
            </button>
            {categories.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)} 
                className={`px-4 py-1.5 text-[11px] uppercase tracking-wider font-bold rounded-md transition-colors whitespace-nowrap ${activeCategory === cat.id ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'}`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= PARALLAX BANNER STRIPS & SUBCATEGORIES ========================================================== */}
      <div className="space-y-0">
        {visibleCategories.map((cat) => {
          const CategoryIcon = cat.icon;
          return (
            <div key={cat.id} className="group">
              {/* === PARALLAX IMAGE BANNER STRIP === */}
              <div className="relative h-[30vh] min-h-[250px] bg-fixed bg-cover bg-center flex items-center" style={{ backgroundImage: `url('${cat.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-neutral-950/30"></div>
                <div className="absolute inset-0 bg-[#3FA89A]/10 mix-blend-overlay"></div>
                
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                  <div className="flex items-center gap-4 max-w-4xl">
                    <div className="hidden md:flex p-3 bg-[#3FA89A] text-white rounded-md shadow-xl shrink-0">
                      <CategoryIcon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-4xl text-white mb-2 leading-tight">{cat.title}</h2>
                      <p className="text-white/80 text-sm md:text-base font-serif max-w-2xl leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* === SUBCATEGORIES (COMPACT & SPACE-EFFICIENT) === */}
              <div className="bg-neutral-50 py-12 sm:py-16 border-b border-neutral-100">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
                    {cat.subcategories.map((sub, subIdx) => {
                      const isExpanded = expandedSubcats[`${cat.id}-${subIdx}`] || !searchQuery;
                      return (
                        <div key={subIdx} className="relative border border-neutral-200 bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group/subcat">
                          
                          {/* Background Image for Hover Effect */}
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-0 md:group-hover/subcat:opacity-100 transition-opacity duration-500 ease-in-out"
                            style={{ backgroundImage: `url('${cat.image}')` }}
                          ></div>
                          
                          {/* Content Wrapper */}
                          <div className="relative z-10 bg-white/95 md:bg-white md:group-hover/subcat:bg-white/60 transition-colors duration-500">
                            <button 
                              onClick={() => toggleSubcat(cat.id, subIdx)} 
                              className="w-full flex items-center justify-between p-3.5 sm:p-4 hover:bg-neutral-50 transition-colors text-left border-b border-neutral-100"
                            >
                              <div className="flex items-center gap-2">
                                <h3 className="font-display text-sm sm:text-base font-bold text-neutral-900">{sub.title}</h3>
                                <span className="text-[10px] font-semibold text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded-full">
                                  {sub.items.length}
                                </span>
                              </div>
                              <ChevronDown size={16} className={`text-[#3FA89A] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isExpanded && (
                              <div className="p-3 sm:p-4 bg-white/40 backdrop-blur-sm">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                  {sub.items.map((item, idx) => {
                                    const inCart = cartItems.find(i => i.name === item);
                                    return (
                                      <div key={idx} className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-[#3FA89A]/5 transition-colors group/item">
                                        <span className="text-[13px] text-neutral-700 font-medium pr-2 leading-snug truncate">{item}</span>
                                        <button 
                                          type="button"
                                          onClick={() => addToCart(item, cat.title)}
                                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 transition-all duration-200 whitespace-nowrap rounded shrink-0 flex items-center gap-1 ${
                                            inCart ? 'bg-[#3FA89A] text-white shadow-sm' : 'bg-neutral-900 text-white hover:bg-[#3FA89A]'
                                          }`}
                                        >
                                          {inCart ? <><Check size={10} /> {inCart.qty}</> : <><Plus size={10} /> Add</>}
                                        </button>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />

      {/* ========================================================= CART DRAWER ========================================================== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            <div className="p-5 border-b border-neutral-100 flex justify-between items-center bg-neutral-50">
              <h2 className="font-display text-lg text-neutral-900 font-bold">Quote Request ({totalCartItems})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-neutral-200 rounded-full transition-colors"><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 text-neutral-500">
                  <ShoppingCart size={40} className="mx-auto mb-4 opacity-20" />
                  <p className="font-serif text-base">Your quote list is empty.</p>
                  <p className="text-xs mt-2">Browse the catalog to add items.</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start p-3 border border-neutral-100 bg-neutral-50 rounded-md">
                    <div className="flex-1 pr-3">
                      <h4 className="font-medium text-neutral-900 text-sm leading-snug">{item.name}</h4>
                      <p className="text-[10px] text-neutral-500 mt-0.5 uppercase tracking-wider">{item.category}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center border border-neutral-200 bg-white rounded-md">
                        <button onClick={() => updateQty(item.name, -1)} className="p-1 hover:bg-neutral-100 transition-colors"><Minus size={10} /></button>
                        <span className="w-6 text-center text-xs font-bold">{item.qty}</span>
                        <button onClick={() => updateQty(item.name, 1)} className="p-1 hover:bg-neutral-100 transition-colors"><Plus size={10} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.name)} className="text-[9px] text-red-500 hover:text-red-700 uppercase font-bold tracking-wider flex items-center gap-1">
                        <Trash2 size={8} /> Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-neutral-100 bg-neutral-50 space-y-2">
                <a 
                  href={generateWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 text-xs uppercase tracking-wider font-bold hover:bg-[#20BA5A] transition-colors rounded-md"
                >
                  <MessageCircle size={16} /> Send Quote via WhatsApp
                </a>
                <button onClick={clearCart} className="w-full text-[10px] text-neutral-500 hover:text-neutral-900 uppercase tracking-wider font-bold py-2 transition-colors">
                  Clear List
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}