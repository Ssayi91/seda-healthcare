"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Footer from "../../components/footer";
import { 
  ArrowLeft, Search, MessageCircle, Stethoscope, Zap, Scissors, 
  ClipboardList, Scan, Monitor, Baby, Bed, Eye, FlaskConical, 
  Bone, Package, ChevronDown, Plus, ShoppingCart, X, Minus, Trash2, Check
} from "lucide-react";

// Custom inline SVGs for specific icons
const HeartPulseIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/><path d="M5 12h2l2 5 4-10 2 5h4"/></svg>;
const SmilePlusIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M12 2v4"/><path d="M10 4h4"/></svg>;

type CartItem = { name: string; category: string; qty: number };

export default function Departments() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || "";
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedSubcats, setExpandedSubcats] = useState<Record<string, boolean>>({});
  
  // Self-contained Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('seda_cart');
    if (savedCart) { try { setCartItems(JSON.parse(savedCart)); } catch (e) {} }
  }, []);

  useEffect(() => { localStorage.setItem('seda_cart', JSON.stringify(cartItems)); }, [cartItems]);

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
  const clearCart = () => { setCartItems([]); localStorage.removeItem('seda_cart'); };

  const generateWhatsAppLink = () => {
    if (cartItems.length === 0) return "#";
    const text = cartItems.map((i, idx) => `${idx + 1}. *${i.name}* (${i.category}) - Qty: ${i.qty}`).join('\n');
    return `https://wa.me/254792415615?text=${encodeURIComponent(`Hello Seda Healthcare, I would like to request a formal quotation for:\n\n${text}`)}`;
  };

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // === CATEGORIES DATA ===
  const categories = [
    { id: "laboratory", title: "Laboratory & Diagnostics", description: "Where precision meets care. Complete diagnostic laboratory equipment, analyzers, and reagent ecosystems.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790614742/diagnostic-lab-equipment-categories-pathology-clinical-automation-tools_wmmphr.webp", icon: FlaskConical, subcategories: [ { title: "Analyzers & Diagnostics", items: ["Haematology Analyzer (3-Part & 5-Part)", "Electrolyte Analyzer", "Finecare Immunoassay Analyser", "Semi & Fully Automated Biochemistry Machines", "Coagulation Machine"] }, { title: "Lab Equipment", items: ["Microscopes (X107, CX23)", "Centrifuges (6-Tube)", "Blood Roller Mixer", "Water Bath (15L)", "Laboratory Incubator & Oven", "Micropipettes (10-100, 100-1000)"] }, { title: "Reagents & Consumables", items: ["Haematology Reagents (Lyse, Diluent, Controls)", "Chemistry Reagents (HDL, Cholesterol, GT, ALAT)", "Immunoassay Reagents (CRP, PCT, D-Dimer, Hormones)", "Test Tubes, Vacutainers, Tips, Staining Solutions"] } ] },
    { id: "theatre", title: "Theatre & Surgical", description: "The heart of the hospital. Comprehensive surgical theatre equipment, specialized instrument sets, and consumables.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624768/IMG_0203-1024x768_ana2es.webp", icon: Scissors, subcategories: [ { title: "Major Theatre Equipment", items: ["Operating Theatre Lights (LED & Halogen)", "Operating Tables (Electric & Hydraulic)", "Anaesthesia Machines", "Electrosurgical Diathermy (300W & 400W)", "Defibrillators", "Patient Monitors (5 & 7 Parameter)", "Autoclaves (50L, 70L, 100L)"] }, { title: "Surgical Instrument Sets", items: ["General Sets (Major & Minor)", "Laparatomy, Craniotomy & Orthopedic Sets", "Tonsillectomy, Thyroidectomy & Lumbar Sets", "Manual & Electric Craniotomy Drills", "Laryngoscopes"] }, { title: "Theatre Consumables", items: ["Breathing Bags & Circuits", "Endotracheal & Tracheostomy Tubes", "Surgical Sutures (Monocryl, Nylon, Polyglactin, Catgut)", "Surgical Blades, Gloves, Masks & Aprons"] } ] },
    { id: "maternity-nursery", title: "Maternity, Nursery & Delivery", description: "Specialized, gentle care for mothers and newborns. From stainless steel delivery beds to advanced neonatal incubators.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790624938/istockphoto-1755135977-612x612_jtvnbf.jpg", icon: Baby, subcategories: [ { title: "Maternity & Delivery", items: ["Delivery Beds (Stainless Steel)", "Single & Double Crank ABS Beds", "Fetal Dopplers", "MVA Kits & Vacuum Extractors", "Major & Minor Delivery Sets"] }, { title: "Nursery & Neonatal", items: ["Infant Incubators", "Phototherapy Lights (with/without Lightometer)", "Infant Resuscitaires", "Infant CPAP Machines (Pumani)", "Baby Weighing Scales", "Bilirubinometers"] } ] },
    { id: "dental", title: "Dental Practice", description: "Complete dental clinic setups. Ergonomic chairs, precise handpieces, and a full spectrum of restorative materials.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/dental-unit_vlpp5v.jpg", icon: SmilePlusIcon, subcategories: [ { title: "Major Equipment", items: ["Complete Dental Chairs", "Dental X-Ray Machines (IOPA) & Processors", "Endomotors", "Autoclaving & Sterilization Packs"] }, { title: "Instruments & Handpieces", items: ["High-Speed & Slow-Speed Handpieces", "Forceps, Elevators, Condensers & Excavators", "K-Files, Scalers & Barbed Broaches", "Dental Mirrors, Probes & Tweezers"] }, { title: "Materials & Consumables", items: ["Amalgam Capsules, GIC, Composite & Bonding Agents", "Impression Trays, Paper Points & Gutta Percha", "Dental Bibs, Masks, Gloves & Steranios Disinfectants"] } ] },
    { id: "imaging", title: "Radiology & Imaging", description: "High-capacity radiographic and ultrasound systems. Clear, reliable diagnostics powered by Floatex X-Ray and Mindray.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/xray-room.jpg", icon: Scan, subcategories: [ { title: "X-Ray & CT", items: ["Floatex X-Ray Unit 500mA System", "Standex Vertical Bucky Wall Stand", "CT-Scan 16 Slices", "Lead Aprons, Gloves & Protection Screens"] }, { title: "Ultrasound", items: ["Mindray DP10, DCN2, DCN-3 & DCN-3 Pro Machines", "Brand New & Refurbished Ultrasound Printers", "Ultrasound Jelly & Printing Paper"] } ] },
    { id: "wards", title: "Medical Wards & Triage", description: "The foundation of in-patient care. Ergonomic ward furniture, reliable triage diagnostics, and emergency furnishing.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/hospital-bed_yaxees.jpg", icon: Bed, subcategories: [ { title: "Ward Furniture", items: ["Single & Double Crank ABS Beds", "Mattresses, Pillows & Cellular Blankets", "Bedside Lockers, Overbed Tables & Drip Stands", "Examination Couches & Ward Screens"] }, { title: "Triage & Emergency", items: ["Mercurial & Digital Blood Pressure Machines", "Littmann Stethoscopes & Digital Thermometers", "ECG Machines (12 Channel)", "Suction Machines (1 & 2 Bottle)", "Standard & Electric Wheelchairs, Crutches"] } ] },
    { id: "orthopedic", title: "Orthopedic & Rehabilitation", description: "Restoring mobility and independence. A comprehensive range of wheelchairs, crutches, and therapeutic supports.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625228/wheelchair-walking-frame-and-crutches-isolated-on-white-background_vjz0wn.webp", icon: Bone, subcategories: [ { title: "Mobility Aids", items: ["Standard, Detachable & Electric Wheelchairs", "Inclining Wheelchairs (with/without Commode)", "Armpit & Elbow Crutches", "Foldable, Blind & Tripod Walking Sticks"] }, { title: "Therapeutic Support", items: ["Plaster Cutters (Mechanical & Electric)", "TENS Machines & Massage Beds", "Sacro-Lumbar, Knee & Ankle Supports", "Hinged Knee Braces & Cervical Collars"] } ] },
    { id: "consumables", title: "Non-Pharmaceutical Consumables", description: "The essential lifeline of daily operations. High-quality, reliable disposable medical supplies, IV fluids, and PPE.", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/consumables.jpg", icon: Package, subcategories: [ { title: "IV & Injection", items: ["Syringes (2cc to 20cc), Cannulas (G16-G24)", "IV Fluids (Ringer's Lactate, Normal Saline, Dextrose)", "Scalp Vein Sets, Alcohol Pads & Tourniquets"] }, { title: "Wound Care & PPE", items: ["Surgical Masks, Nitrile & Surgical Gloves", "Gauze Rolls, Cotton Wool, Crepe Bandages & Elastoplast", "Disposable Speculums, Urine Bags & Catheters", "P.O.P Rolls (China & Gypsona)"] } ] }
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
  const toggleSubcat = (catId: string, subIndex: number) => setExpandedSubcats(prev => ({ ...prev, [`${catId}-${subIndex}`]: !prev[`${catId}-${subIndex}`] }));
  const visibleCategories = activeCategory ? filteredCategories.filter(cat => cat.id === activeCategory) : filteredCategories;

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1a1a1a]">
      {/* Top Banner */}
      <div className="border-b border-[#1a1a1a]/10 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a]/60">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-[#3FA89A]">+254 792 415 615</span>
            <span className="flex items-center gap-1.5">sales@sedahealthcare.co.ke</span>
          </div>
          <div>Mon – Fri · 08:00 – 17:00 EAT</div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#1a1a1a]/10 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-sm">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-8 md:h-45 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:bg-[#1a1a1a]/5 rounded-sm transition-colors">
              <ShoppingCart size={22} className="text-[#1a1a1a]" />
              {totalCartItems > 0 && <span className="absolute -top-1 -right-1 bg-[#3FA89A] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{totalCartItems}</span>}
            </button>
            <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a] hover:text-[#3FA89A] transition-colors font-semibold">
              <ArrowLeft size={14} /> <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Global Search & Intro */}
      <section className="bg-white border-b border-[#1a1a1a]/10 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
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
            <input type="text" placeholder="Search equipment..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-12 py-4 bg-white border-2 border-[#1a1a1a]/10 text-base focus:outline-none focus:border-[#3FA89A] transition-colors shadow-sm" />
            {searchQuery && <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1a1a1a]/40 hover:text-[#1a1a1a]"><X size={20} /></button>}
          </div>
          {searchQuery.trim() && <div className="mt-4 text-sm font-medium text-[#6B6F73]">Found <span className="text-[#3FA89A] font-bold">{totalItemsFound}</span> items.</div>}
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-[#FAFAF8]/95 backdrop-blur border-b border-[#1a1a1a]/10 py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            <button onClick={() => setActiveCategory(null)} className={`px-5 py-2 text-xs uppercase tracking-wider font-bold rounded-sm transition-colors ${!activeCategory ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#1a1a1a] border border-[#1a1a1a]/10'}`}>All</button>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)} className={`px-5 py-2 text-xs uppercase tracking-wider font-bold rounded-sm transition-colors whitespace-nowrap ${activeCategory === cat.id ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#1a1a1a] border border-[#1a1a1a]/10'}`}>{cat.title}</button>
            ))}
          </div>
        </div>
      </div>

      {/* PARALLAX BANNER STRIPS & SUBCATEGORIES */}
      <div className="space-y-0">
        {visibleCategories.map((cat) => {
          const CategoryIcon = cat.icon;
          return (
            <div key={cat.id} className="group">
              
              {/* === PARALLAX IMAGE BANNER STRIP === */}
              <div className="relative h-[40vh] min-h-[300px] bg-fixed bg-cover bg-center flex items-center" style={{ backgroundImage: `url('${cat.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-[#1a1a1a]/30"></div>
                <div className="absolute inset-0 bg-[#3FA89A]/10 mix-blend-overlay"></div>
                
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="flex items-center gap-6 max-w-4xl">
                    <div className="hidden md:flex p-4 bg-[#3FA89A] text-white rounded-sm shadow-2xl shrink-0">
                      <CategoryIcon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-3 leading-tight">{cat.title}</h2>
                      <p className="text-white/80 text-lg md:text-xl font-serif max-w-2xl leading-relaxed">{cat.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* === SUBCATEGORIES (Clean White Section with Hover Image Background) === */}
              <div className="bg-white py-16 sm:py-24 border-b border-[#1a1a1a]/5">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {cat.subcategories.map((sub, subIdx) => {
                      const isExpanded = expandedSubcats[`${cat.id}-${subIdx}`] || !searchQuery;
                      return (
                        <div key={subIdx} className="relative border border-[#1a1a1a]/5 bg-white rounded-sm overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#3FA89A]/30 group/subcat">
                          
                          {/* HOVER BACKGROUND IMAGE EFFECT */}
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover/subcat:opacity-25 transition-all duration-700 scale-100 group-hover/subcat:scale-110 pointer-events-none"
                            style={{ backgroundImage: `url('${cat.image}')` }}
                          ></div>
                          {/* Gradient overlay to keep text readable */}
                          <div className="absolute inset-0 group-hover transition-all duration-500 pointer-events-none"></div>

                          {/* ACTUAL CONTENT */}
                          <div className="relative z-10">
                            <button onClick={() => toggleSubcat(cat.id, subIdx)} className="w-full flex items-center justify-between p-6 bg-transparent hover:bg-[#3FA89A]/5 transition-colors text-left border-b border-[#1a1a1a]/5">
                              <h3 className="font-display text-lg font-semibold text-[#1a1a1a]">{sub.title}</h3>
                              <ChevronDown size={18} className={`text-[#3FA89A] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isExpanded && (
                              <div className="p-4 bg-white/50 backdrop-blur-sm">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                                  {sub.items.map((item, idx) => {
                                    const inCart = cartItems.find(i => i.name === item);
                                    return (
                                      <div key={idx} className="flex items-center justify-between py-3 border-b border-[#1a1a1a]/5 last:border-0 group/item">
                                        <span className="text-sm text-[#1a1a1a]/80 font-serif pr-4 leading-tight">{item}</span>
                                        <button 
                                          type="button"
                                          onClick={() => addToCart(item, cat.title)}
                                          className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 transition-all duration-200 whitespace-nowrap rounded-sm ${
                                            inCart ? 'bg-[#3FA89A] text-white shadow-sm' : 'bg-[#1a1a1a] text-white hover:bg-[#3FA89A]'
                                          }`}
                                        >
                                          {inCart ? `Added (${inCart.qty})` : 'Add'}
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

      {/* === CART DRAWER === */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-[#1a1a1a]/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            <div className="p-6 border-b border-[#1a1a1a]/10 flex justify-between items-center bg-[#F5F1E8]">
              <h2 className="font-display text-2xl text-[#1a1a1a]">Quote Request ({totalCartItems})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-[#1a1a1a]/10 rounded-sm"><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 text-[#6B6F73]">
                  <ShoppingCart size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="font-serif text-lg">Your quote list is empty.</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start p-4 border border-[#1a1a1a]/10 bg-[#FAFAF8] rounded-sm">
                    <div className="flex-1 pr-4">
                      <h4 className="font-medium text-[#1a1a1a] text-sm leading-snug">{item.name}</h4>
                      <p className="text-xs text-[#6B6F73] mt-1 uppercase tracking-wider">{item.category}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center border border-[#1a1a1a]/20 bg-white rounded-sm">
                        <button onClick={() => updateQty(item.name, -1)} className="p-1.5 hover:bg-[#1a1a1a]/5"><Minus size={12} /></button>
                        <span className="w-8 text-center text-sm font-bold">{item.qty}</span>
                        <button onClick={() => updateQty(item.name, 1)} className="p-1.5 hover:bg-[#1a1a1a]/5"><Plus size={12} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.name)} className="text-[10px] text-red-500 hover:text-red-700 uppercase font-bold tracking-wider">Remove</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#1a1a1a]/10 bg-[#F5F1E8] space-y-3">
                <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 text-sm uppercase tracking-wider font-bold hover:bg-[#20BA5A] transition-colors rounded-sm">
                  <MessageCircle size={18} /> Send Quote via WhatsApp
                </a>
                <button onClick={clearCart} className="w-full text-xs text-[#1a1a1a]/60 hover:text-[#1a1a1a] uppercase tracking-wider font-bold py-2">Clear List</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}