"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Footer from "../../components/footer";
import { 
  Search, MessageCircle, ShoppingCart, X, Minus, Plus, Trash2,
  Phone, Mail, MapPin, Menu, FlaskConical, Scissors, Baby, Scan, Bed, Bone, Package, ChevronDown
} from "lucide-react";

type CartItem = { name: string; category: string; qty: number };

export default function Departments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedSubcats, setExpandedSubcats] = useState<Record<string, boolean>>({});
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const initialSearch = params.get('search') || "";
      setSearchQuery(initialSearch);
      
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

  const clearCart = () => { 
    setCartItems([]); 
    if (typeof window !== 'undefined') localStorage.removeItem('seda_cart'); 
  };

  const generateWhatsAppLink = () => {
    if (cartItems.length === 0) return "#";
    const text = cartItems.map((i, idx) => `${idx + 1}. *${i.name}* (${i.category}) - Qty: ${i.qty}`).join('\n');
    return `https://wa.me/254792415615?text=${encodeURIComponent(`Hello Seda Healthcare, I would like to request a formal quotation for:\n\n${text}`)}`;
  };

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const categories = [
    { 
      id: "rapids-consumables", 
      title: "Rapids & Consumables", 
      description: "High-quality diagnostic supplies, rapid test kits, and essential laboratory consumables.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790691981/69836cf89fd35f0996609462_65a7c0e583a403879a96fdca_disposable-medical-supplies-min_1_1_anlvfl.webp", 
      icon: Package, 
      subcategories: [ 
        { title: "Blood Grouping", items: ["Blood grouping kit (A, B, D)", "Bovine Albumin", "Anti-Human Globulin"] },
        { title: "Latex Tests", items: ["Widal Reagent Kit", "ASOT Reagent Kit", "Rheumatoid Factor (RF)", "Brucella Abortus & Melitensis"] },
        { title: "Rapid Test Kits", items: ["Salmonella Ag / AB", "H. pylori Ag / AB", "PDT/HCG Urine & Blood", "Rota/Adeno Virus", "Dengue Combo NS1/IgG/IgM", "Cholera Ag", "Syphilis/VDRL", "Gonorrhea Strips", "Malaria pf Ag / pf/Pan Ag", "Fecal Occult Blood (FOB)", "Brucellosis", "PSA Ag", "Hepatitis A / B / C", "Urinalysis Strips (P10 / Mission)", "Hb Strips (201 / Hemo Control)"] },
        { title: "Malaria & Gram Stains", items: ["Field Stain A & B Solution", "Oil Immersion", "Crystal Violet", "Lugol's Iodine", "Giemsa Stain Solution & Powder", "Acetone", "Neutral Red"] },
        { title: "Sample Collection", items: ["Vacutainers (Purple/EDTA, Red, Plain, Yellow, Blue/Citrate, Grey/Fluoride, Green)", "Microtainers (Purple & Plain)", "Sterile HVS Swabs & Applicator Sticks", "Vacutainer Needles & Blood Lancets", "Plain & Frosted Microscope Slides, Cover Slips", "Polypots (3ml), Urine (50ml) & Stool Containers", "Hemo Control & 201 Hemoque Microcuvettes", "Acetic Acid (1L / 2.5L)", "ESR Tubes (Disposable/Glass) & Stands", "Lab, Room & Fridge Thermometers", "Test Tubes (Glass) & Stainless Racks", "Centrifuge Brushes, Tubes & Buckets", "Staining Rack & Blood Grouping Tile", "Biohazard Bins (20L / 30L) & Liners"] },
        { title: "Hematology Reagents", items: ["Mindray Reagents (BC 28, 30, 33 Series)", "Diluent (20L)", "Rinse (5L)", "Lyse-BC", "E-Z Cleanser", "Probe Cleanser", "Mindray Printing Paper"] },
        { title: "Semi-Automated Biosystems", items: ["ALT/GPT, AST/GOT", "Bilirubin (Direct/Total)", "Total Protein & Albumin", "ALP (DEA), g-GT", "Cholesterol (Total/HDL/LDL)", "Triglycerides", "Creatinine, Urea/BUN-UV, Uric Acid", "Calcium-MTB", "Biochemistry Control Serums (Level 1 & 2)", "Biochemistry Calibrators Human", "Reactions Rotor for A15", "Concentrated Washing Solution & Systems Liquid", "Sample Wells"] },
        { title: "Automated Clinical Chemistry", items: ["ALT/GPT, AST/GOT", "Bilirubin (Direct/Total)", "Protein (Total/Urine), Albumin", "ALP (AMP/DEA), g-GT", "Cholesterol (Total/HDL/LDL), Triglycerides", "Creatinine, Urea/BUN-UV, Uric Acid, Glucose", "Calcium-Arsenazo, Magnesium, Phosphorous", "Iron-Ferozine, Lipase, Amylase Direct", "LDH, Ferritin, Transferrin", "ASO, CRP, CRP STD, RF", "Biochemistry & Protein Control Serums (Level 1 & 2)", "Biochemistry & Protein Calibrators", "Reactions Rotor for A15", "Concentrated Washing Solution & Systems Liquid", "Sample Wells"] }
      ] 
    },
    { 
      id: "laboratory", 
      title: "Laboratory & Diagnostics", 
      description: "Where precision meets care. Complete diagnostic laboratory equipment and analyzers.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", 
      icon: FlaskConical, 
      subcategories: [ 
        { title: "Analyzers & Diagnostics", items: ["Haematology Analyzer (3-Part & 5-Part)", "Electrolyte Analyzer", "Finecare Immunoassay Analyser", "Semi & Fully Automated Biochemistry Machines", "Coagulation Machine"] }, 
        { title: "Lab Equipment", items: ["Microscopes (X107, CX23)", "Centrifuges (6-Tube)", "Blood Roller Mixer", "Water Bath (15L)", "Laboratory Incubator & Oven", "Micropipettes (5-50, 10-1000, 20-200, 100-1000 µL)", "Pipette Tips (Yellow/Blue)"] } 
      ] 
    },
    { 
      id: "theatre", 
      title: "Theatre & Surgical", 
      description: "The heart of the hospital. Comprehensive surgical theatre equipment and instruments.", 
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
      title: "Maternity & Nursery", 
      description: "Specialized, gentle care for mothers and newborns. From delivery beds to incubators.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", 
      icon: Baby, 
      subcategories: [ 
        { title: "Maternity & Delivery", items: ["Delivery Beds (Stainless Steel)", "Single & Double Crank ABS Beds", "Fetal Dopplers", "MVA Kits & Vacuum Extractors", "Major & Minor Delivery Sets"] }, 
        { title: "Nursery & Neonatal", items: ["Infant Incubators", "Phototherapy Lights", "Infant Resuscitaires", "Infant CPAP Machines (Pumani)", "Baby Weighing Scales", "Bilirubinometers"] } 
      ] 
    },
    { 
      id: "imaging", 
      title: "Radiology & Imaging", 
      description: "High-capacity radiographic and ultrasound systems. Clear, reliable diagnostics.", 
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
      description: "The foundation of in-patient care. Ergonomic ward furniture and triage diagnostics.", 
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
      description: "Restoring mobility and independence. Comprehensive mobility aids and supports.", 
      image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625228/wheelchair-walking-frame-and-crutches-isolated-on-white-background_vjz0wn.webp", 
      icon: Bone, 
      subcategories: [ 
        { title: "Mobility Aids", items: ["Standard, Detachable & Electric Wheelchairs", "Inclining Wheelchairs (with/without Commode)", "Armpit & Elbow Crutches", "Foldable, Blind & Tripod Walking Sticks"] }, 
        { title: "Therapeutic Support", items: ["Plaster Cutters (Mechanical & Electric)", "TENS Machines & Massage Beds", "Sacro-Lumbar, Knee & Ankle Supports", "Hinged Knee Braces & Cervical Collars"] } 
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

  const totalItemsFound = useMemo(() => 
    filteredCategories.reduce((acc, cat) => acc + cat.subcategories.reduce((subAcc, sub) => subAcc + sub.items.length, 0), 0), 
  [filteredCategories]);

  const toggleSubcat = (catId: string, subIndex: number) => {
    const key = `${catId}-${subIndex}`;
    setExpandedSubcats(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const visibleCategories = activeCategory 
    ? filteredCategories.filter(cat => cat.id === activeCategory) 
    : filteredCategories;

  return (
    <main className="bg-gradient-to-br from-neutral-50 via-white to-[#3FA89A]/5 text-neutral-900 antialiased font-['Montserrat',sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
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
            <Link href="/about" className="text-neutral-700 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">About Us</Link>
            <Link href="/departments" className="text-[#3FA89A] text-sm font-semibold tracking-wide relative">
              Catalog
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3FA89A] rounded-full" />
            </Link>
            <a href="/#partner-with-us" className="text-neutral-700 hover:text-[#3FA89A] transition-colors text-sm font-semibold tracking-wide">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:bg-[#3FA89A]/10 rounded-full transition-colors" aria-label="View Cart">
              <ShoppingCart size={20} className="text-[#3FA89A]" />
              {totalCartItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#0B3D35] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>

          <button className="lg:hidden p-2 text-neutral-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white absolute w-full shadow-xl border-t-2 border-[#3FA89A]">
            <nav className="flex flex-col px-6 py-6 gap-2">
              <Link href="/" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/departments" className="text-[#3FA89A] text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Catalog</Link>
              <a href="/#partner-with-us" className="text-neutral-800 hover:text-[#3FA89A] transition-colors text-base font-semibold py-3 border-b border-neutral-100" onClick={() => setMenuOpen(false)}>Contact</a>
              <button onClick={() => { setIsCartOpen(true); setMenuOpen(false); }} className="mt-4 flex items-center justify-center gap-2 bg-[#3FA89A] text-white py-3.5 text-sm font-semibold tracking-wide rounded-lg">
                <ShoppingCart size={16} /> View Quote List ({totalCartItems})
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Global Search & Intro */}
      <section className="relative bg-fixed bg-cover bg-center border-b-2 border-[#3FA89A] py-16 sm:py-24" style={{ backgroundImage: "url('https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D35]/90 via-[#0B3D35]/80 to-[#3FA89A]/80"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mb-6 backdrop-blur-sm border border-white/30 rounded-full">
            Equipment Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
            Explore Our <span className="italic text-[#3FA89A]">Departments</span>
          </h1>
          <p className="text-white/90 text-sm sm:text-base mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Browse our comprehensively sub-categorized medical supplies. Find exactly what your facility needs.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
            <input 
              type="text" 
              placeholder="Search equipment (e.g., 'Vacutainer', 'Autoclave')..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full pl-12 pr-12 py-4 bg-white/10 border-2 border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-[#3FA89A] focus:bg-white/20 transition-colors shadow-lg backdrop-blur-sm rounded-xl text-sm sm:text-base" 
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            )}
          </div>
          {searchQuery.trim() && (
            <div className="mt-4 text-sm font-medium text-white/80">
              Found <span className="text-[#3FA89A] font-bold">{totalItemsFound}</span> items.
            </div>
          )}
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-[80px] z-30 bg-white/95 backdrop-blur border-b-2 border-[#3FA89A] py-4 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 snap-x">
            <button 
              onClick={() => setActiveCategory(null)} 
              className={`snap-start px-5 py-2.5 text-[11px] uppercase tracking-wider font-bold rounded-full transition-all whitespace-nowrap border-2 ${
                !activeCategory 
                  ? 'bg-[#3FA89A] text-white border-[#3FA89A] shadow-lg' 
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-[#3FA89A] hover:text-[#3FA89A]'
              }`}
            >
              All Departments
            </button>
            {categories.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)} 
                className={`snap-start px-5 py-2.5 text-[11px] uppercase tracking-wider font-bold rounded-full transition-all whitespace-nowrap border-2 ${
                  activeCategory === cat.id 
                    ? 'bg-[#3FA89A] text-white border-[#3FA89A] shadow-lg' 
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-[#3FA89A] hover:text-[#3FA89A]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories with Parallax Banners */}
      <div className="space-y-8 pb-20">
        {visibleCategories.map((cat) => {
          const CategoryIcon = cat.icon;
          return (
            <div key={cat.id} className="group scroll-mt-32">
              {/* Parallax Image Banner */}
              <div className="relative h-[30vh] sm:h-[40vh] min-h-[250px] bg-fixed bg-cover bg-center flex items-center" style={{ backgroundImage: `url('${cat.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D35]/95 via-[#0B3D35]/80 to-[#3FA89A]/70"></div>
                
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
                  <div className="flex items-center gap-4 sm:gap-6 max-w-3xl">
                    <div className="flex p-3 sm:p-4 bg-[#3FA89A] text-white rounded-xl shadow-2xl shrink-0 border-4 border-white/20">
                      <CategoryIcon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">{cat.title}</h2>
                      <p className="text-white/85 text-sm sm:text-base font-light max-w-xl leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subcategories Grid - KEY FIX: items-start prevents stretching */}
              <div className="bg-gradient-to-b from-[#3FA89A]/5 to-white py-12 sm:py-20 border-b-2 border-[#3FA89A]/20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto items-start">
                    {cat.subcategories.map((sub, subIdx) => {
                      const key = `${cat.id}-${subIdx}`;
                      const isExpanded = expandedSubcats[key] !== undefined ? expandedSubcats[key] : (subIdx === 0 && !searchQuery);
                      
                      return (
                        <div key={subIdx} className="relative bg-white/80 backdrop-blur-sm border-2 border-[#3FA89A]/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#3FA89A]/10 transition-all duration-300 h-fit">
                          {/* Faded Background Image */}
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: `url('${cat.image}')` }}
                          ></div>
                          
                          <button 
                            onClick={() => toggleSubcat(cat.id, subIdx)} 
                            className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-[#3FA89A]/5 transition-colors text-left relative z-10"
                          >
                            <h3 className="font-bold text-sm sm:text-base text-neutral-800">{sub.title}</h3>
                            <ChevronDown size={18} className={`text-[#3FA89A] transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {isExpanded && (
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-[#3FA89A]/20 relative z-10">
                              <div className="pt-3 space-y-1">
                                {sub.items.map((item, idx) => {
                                  const cartItem = cartItems.find(i => i.name === item);
                                  return (
                                    <div key={idx} className="flex items-center justify-between py-2.5 group/item">
                                      <span className="text-sm text-neutral-700 font-medium pr-4 leading-snug flex-1">{item}</span>
                                      
                                      {!cartItem ? (
                                        <button 
                                          type="button"
                                          onClick={() => addToCart(item, cat.title)}
                                          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3FA89A]/10 text-[#3FA89A] hover:bg-[#3FA89A] hover:text-white transition-all duration-200 shrink-0 border border-[#3FA89A]/30"
                                          aria-label={`Add ${item} to quote`}
                                        >
                                          <Plus size={16} strokeWidth={2} />
                                        </button>
                                      ) : (
                                        <div className="flex items-center bg-[#3FA89A] text-white rounded-full overflow-hidden shrink-0 shadow-md">
                                          <button 
                                            onClick={() => updateQty(item, -1)} 
                                            className="flex items-center justify-center w-8 h-8 hover:bg-[#0B3D35] transition-colors"
                                            aria-label="Decrease quantity"
                                          >
                                            {cartItem.qty === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                                          </button>
                                          <span className="w-6 text-center text-xs font-bold">{cartItem.qty}</span>
                                          <button 
                                            onClick={() => updateQty(item, 1)} 
                                            className="flex items-center justify-center w-8 h-8 hover:bg-[#0B3D35] transition-colors"
                                            aria-label="Increase quantity"
                                          >
                                            <Plus size={14} />
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
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

      {/* Floating Cart Button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#3FA89A] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[#3FA89A]/40 hover:scale-105 transition-all duration-300 border-4 border-white"
        aria-label="View Cart"
      >
        <ShoppingCart size={24} />
        <span className="font-bold text-sm hidden sm:inline">Quote List</span>
        {totalCartItems > 0 && (
          <span className="bg-[#0B3D35] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ml-1">
            {totalCartItems}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l-4 border-[#3FA89A]">
            <div className="p-6 border-b-2 border-[#3FA89A] flex justify-between items-center bg-gradient-to-r from-[#3FA89A]/10 to-white">
              <div>
                <h2 className="font-bold text-xl text-neutral-900">Quote Request</h2>
                <p className="text-xs text-neutral-600 mt-1 font-medium">{totalCartItems} items selected</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-[#3FA89A]/10 rounded-full transition-colors">
                <X size={20} className="text-[#3FA89A]" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gradient-to-b from-neutral-50 to-white">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 text-neutral-400">
                  <ShoppingCart size={48} className="mx-auto mb-4 opacity-20 text-[#3FA89A]" />
                  <p className="font-semibold text-neutral-600">Your quote list is empty.</p>
                  <p className="text-sm mt-2">Browse the catalog to add items.</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start p-4 border-2 border-[#3FA89A]/20 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-neutral-900 text-sm leading-snug">{item.name}</h4>
                      <p className="text-[10px] text-[#3FA89A] mt-1 uppercase tracking-wider font-bold">{item.category}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center bg-[#3FA89A]/10 border-2 border-[#3FA89A]/30 rounded-full overflow-hidden">
                        <button onClick={() => updateQty(item.name, -1)} className="p-2 hover:bg-[#3FA89A]/20 transition-colors text-[#3FA89A]">
                          {item.qty === 1 ? <Trash2 size={14} className="text-red-500" /> : <Minus size={14} />}
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#3FA89A]">{item.qty}</span>
                        <button onClick={() => updateQty(item.name, 1)} className="p-2 hover:bg-[#3FA89A]/20 transition-colors text-[#3FA89A]">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="p-6 border-t-2 border-[#3FA89A] bg-gradient-to-r from-[#3FA89A]/5 to-white space-y-3">
                <a 
                  href={generateWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 text-sm uppercase tracking-wider font-bold hover:bg-[#20BA5A] transition-colors rounded-xl shadow-lg shadow-[#25D366]/30"
                >
                  <MessageCircle size={18} /> Send Quote via WhatsApp
                </a>
                <button onClick={clearCart} className="w-full text-xs text-neutral-500 hover:text-red-600 uppercase tracking-wider font-bold py-3 transition-colors flex items-center justify-center gap-2">
                  <Trash2 size={14} /> Clear List
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}