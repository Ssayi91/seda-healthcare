"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Search, 
  MessageCircle, 
  Stethoscope, 
  Zap, 
  Scissors, 
  ClipboardList, 
  Scan, 
  Monitor, 
  Baby, 
  Bed, 
  Eye, 
  FlaskConical, 
  Bone, 
  Package,
  X,
  ChevronRight
} from "lucide-react";

// Custom inline SVGs for specific icons
const HeartPulseIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/><path d="M5 12h2l2 5 4-10 2 5h4"/></svg>;
const SmilePlusIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M12 2v4"/><path d="M10 4h4"/></svg>;

export default function Departments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: "triage", title: "Triage", description: "Essential screening and initial assessment equipment", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625496/81JUtV1Er8L_dsh3d4.webp", icon: Stethoscope, items: ["Mercurial Blood Pressure Machine", "Pedal Bin (B,Y,R) 30 Litres", "Littmann Classic 2 Stethoscope", "Digital Thermometer", "Standard Wheelchair", "Instrument Trolley", "Heightometer Paediatric Scale", "Height and Weight Scale"] },
    { id: "emergency", title: "Emergency & Dressing Room", description: "Critical care apparatus for immediate intervention", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625675/pd22773524-medical_equipment_surgical_trolley_for_emergency_room_ce_iso_passed_owijuv.webp", icon: Zap, items: ["Examination Couch", "Instrument/Medicine Trolley (2 Shelves)", "Dressing Set", "Suture Set", "Examination Light (LED)", "MVA Set", "ECG Machine 12 Channel", "Fetal Doppler", "Pedal Bin (B,Y,R) 30 Litres", "Nebulizer"] },
    { id: "procedure", title: "Procedure Room", description: "Specialized equipment for minor surgical procedures", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625820/operating-room_ejbtm7.webp", icon: Scissors, items: ["Ambu Bag (Adult & Paediatric)", "Complete Oxygen Cylinder (1.84kg & 4.6kg)", "Nebulizer", "IUCD Set", "Dressing Set", "Suture Set", "Suction Machine (2 Bottle)", "Examination Light (LED)", "Implant Removal Kit"] },
    { id: "consultation", title: "Consultation Room", description: "Diagnostic and examination tools", image: "https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790625973/medical-equipment_926199-2779162_j9nvqh.webp", icon: ClipboardList, items: ["Blood Pressure Machine (Digital Omron M1)", "Littmann Classic 2 Stethoscope", "Digital Thermometer", "Pedal Bin (B,Y,R) 30 Litres", "X-Ray Viewer (Single)", "Examination Couch", "Stepping Stool", "Bathroom Scale (Elektro)", "Diagnostic Set", "Examination Light (LED)"] },
    { id: "xray", title: "X-Ray Room", description: "High-capacity radiographic imaging systems", image: "/images/xray-room.jpg", icon: Scan, items: ["Floatex X-Ray Unit 500mA System with Chest Stand", "Standex Vertical Bucky Wall Stand - AMI CR System Prima T", "Lead Apron", "Lead Protection Screen (3 x 6 Feet)", "Lead Gloves", "X-Ray Viewer (Single)", "CT-Scan 16 Slices"] },
    { id: "ultrasound", title: "Ultrasound Room", description: "Advanced diagnostic imaging systems", image: "/images/ultrasound-room.jpg", icon: Monitor, items: ["Mindray DP10 Ultrasound Machine", "Mindray DCN2 Ultrasound Machine", "Mindray DCN-3 Ultrasound Machine", "Mindray DCN-3 Pro Ultrasound Machine", "Brand New Ultrasound Printer", "Refurbished Ultrasound Printer", "Examination Couch", "Pedal Bin (B,Y,R) 30 Litres", "Ultrasound Jelly (5 Litres)", "Ultrasound Printing Paper", "Instrument/Medicine Trolley"] },
    { id: "maternity", title: "Maternity Ward", description: "Complete furnishing for maternal care", image: "/images/maternity-ward.jpg", icon: Baby, items: ["Single Crank ABS Bed", "Double Crank ABS Bed", "Mattress with Mackintosh", "Double Crank Mattress", "Pillow with Mackintosh", "Hospital Bedsheets (Pair)", "Cellular Blankets", "Bedside Locker", "Drip Stand", "Pedal Bin (B,Y,R) 30 Litres", "Suction Machine (2 Bottle)", "Nurses Stethoscope", "Linen Trolley", "Complete Oxygen Cylinder Set", "Oxygen Concentrator (5L & 10L)", "Overbed Table/Feeding Table", "Instrument/Medicine Trolley"] },
    { id: "nursery", title: "Nursery", description: "Neonatal intensive care equipment", image: "/images/nursery.jpg", icon: Baby, items: ["Baby Cots", "Infant Incubator", "Room Heater", "Pedal Bin (B,Y,R) 30 Litres", "Instrument/Medicine Trolley", "Phototherapy Light (with/without Lightometer)", "Bilirubinometer", "Drip Stand", "Infant Resuscitaire", "Infant CPAP Machine (Pumani)", "Suction Unit (1 Bottle)"] },
    { id: "delivery", title: "Delivery Room", description: "Obstetric equipment for safe delivery", image: "/images/delivery-room.jpg", icon: HeartPulseIcon, items: ["Delivery Bed (Stainless Steel)", "Fetal Doppler", "MVA Kit (Double Valve)", "Pedal Bin (B,Y,R) 30 Litres", "Suction Machine (Electric, 2 Bottle)", "Infant Warmer", "Stepping Stool", "Delivery Set (Major & Minor)", "Vacuum Extractor", "Ward Screen (Stainless Steel, 4 Folds)", "Baby Weighing Scale (Digital)", "Examination Light (LED)", "Baby Coat"] },
    { id: "medical-ward", title: "Medical Ward", description: "General in-patient care furnishing", image: "/images/medical-ward.jpg", icon: Bed, items: ["Single & Double Crank ABS Beds", "Mattress with Mackintosh", "Double Crank Mattress", "Pillow with Mackintosh", "Hospital Bedsheets (Pair)", "Cellular Blankets", "Bedside Locker", "Drip Stand", "Pedal Bin (B,Y,R) 30 Litres", "Suction Machine (Electric, Dual Bottle)", "Nurses Stethoscope", "Aneroid BP Machine", "Linen Trolley", "Oxygen Cylinder (Complete, 8.5kg)", "Patient Monitor (5-Parameter with Stand, Contec)", "Instrument/Medicine Trolley"] },
    { id: "theatre", title: "Theatre", description: "Comprehensive surgical theatre equipment", image: "/images/theatre.jpg", icon: Scissors, items: ["Operating Theatre Light (LED Single/Double Arm, Halogen)", "Operating Table (Electric & Hydraulic)", "Patient Trolley", "Instrument Trolley", "Suction Machine (2 Bottle)", "Drip Stand", "Oxygen Concentrator", "Electrosurgical Diathermy Machine (300W & 400W)", "Oxygen & Nitrous Cylinder (Complete)", "Baby Warmer", "Crash Cart", "Anaesthesia Machine", "Defibrillator (Binehart)", "Patient Monitor (7 Parameters)", "Ambu Bag (Adult & Paediatric)", "Mayo Trolley", "Theatre Boots & Crocs (Autoclavable)", "Green Towel (with/without Hole)", "Autoclave (50L, 70L, 100L)", "Surgical Sets (Laparatomy, Craniotomy, Orthopedic, General)", "Manual & Electric Craniotomy Drill", "Laryngoscope (3, 4, 5 Blades, Paediatric)", "Kick Bucket", "Surgeon Stool"] },
    { id: "theatre-consumables", title: "Theatre Consumables", description: "High-turnover surgical supplies", image: "/images/theatre-consumables.jpg", icon: Package, items: ["Breathing Bag (0.5L, 1L, 2L, 3L)", "Breathing Circuit (Mapelson D & F, Paediatric)", "Airway Guedel (All Sizes)", "Tracheostomy Tube (Sizes 6.5, 7.0, 7.5, 8.0)", "Endotracheal Tube (All Sizes)", "Bogie Tube", "Stylet (10, 14, 15)", "Soda Lime (5 Litres)", "Surgicell (Dozen, All Sizes)", "Monocryl Suture (Dozen, All Sizes)", "Rapid Suture (All Sizes)", "Nylon Suture (All Sizes)", "Polyglactin Suture (All Sizes)", "Chromic Catgut (All Sizes)", "Surgical Blade (All Sizes, 100s)", "Surgical Gloves (6.5, 7.0, 7.5, 8.0, 50s)", "Diathermy Pencil (Reusable & Disposable)", "Sterinious & Aniosym Disinfectants", "Suction Catheter (All Sizes)", "Foley Catheter (All Sizes)", "Disposable Aprons (100s)", "Surgical Masks (50s)", "Diathermy Plate (Disposable & Reusable)", "Green Towel (without Hole)"] },
    { id: "dental", title: "Dental Practice", description: "Complete dental clinic setup", image: "/images/dental-practice.jpg", icon: SmilePlusIcon, items: ["Dental Chair (Complete)", "Dental X-Ray Machine (IOPA) and Processor", "Forceps (Assorted)", "Elevators (Straight & Cryers)", "Dental Syringes", "Dental Mirrors & Handles", "Condensers & Excavators", "Burnishers", "Dycal Applicators", "Handpiece (High Speed, 4-Hole, Push Button)", "Slow Speed (Contra Angle & Straight Handpiece)", "Diamond Burs (Fissure, Long Tapered, Round)", "Bowl & Spatula", "Dycal & Kalzinol", "Impression Trays", "Matrix Band Holder", "Lead Aprons", "Tweezers", "K-Files (8-50)", "Zinc Phosphate Cement", "Dental Cartridges (Locaine A)", "Amalgam Capsule (F2)", "Mixing Slab & Cement Spatula", "Dental Bibs (Square & Roll)", "Copal Varnish", "Disposable Micro Applicator", "Surgical Spirit (5L)", "Nexcomp, GIC Fuji 9A3", "Paper Points (15-80)", "Prophy Brushes & Paste", "Polishing & Finishing Strips", "Saliva Suction Tips", "Cotton Roll", "Kavo Handpiece Spray", "Xylocaine Spray", "Wooden Tongue Depressors", "Alvogen", "Articulating Paper", "Face Masks", "Dental Needles (Long)", "Probes", "Cheatle Forceps", "CMCP, Spirit Lamp", "Temporary Filling", "Root Canal Sealer", "Calcium Hydroxide", "Acrylic Burs", "Rubber Dam Sheet", "Retraction Cord", "Myler Strips", "Wooden Wedges", "Dental Floss", "Pumice", "Non-Disposable Bibs", "Goggles (Protective Eye Wear)", "Autoclaving Pouch (Sterilization Pack)", "Steranios", "Formacresol, Lacron", "ZOE Paste", "Bone Rongeur", "Mouth Prop (Adult/Child)", "Wax Knives", "Topical Fluoride/Gel", "Cheek Retractor (Adult/Paed)", "Periosteal Elevators", "Rubber Cups", "Teleformic Retainer", "Mixing Pad", "Hand Scalers", "Barbed Broaches", "Glass Slab", "RCT Sealant", "Lubricant", "Bib Holder", "Endo Rulers", "Spreaders (15-40)", "Scaler Tips", "Cotton Dispenser", "Prime Paste", "Carboxylate Cement", "Carvene (Gutta Percha Solvent)", "Bonding Agent & Etching", "Cowhorn", "Dental Stone", "Dental Model + Brush", "Handpiece Converter", "GP Cutter", "Ariosyme", "Dental Cover", "EDTA", "Bar Holder", "Endomotor", "Niti Files (15-40)", "Gutta Percha", "Fissure Sealant", "Non-Setting Calcium Hydroxide"] },
    { id: "optical", title: "Optical", description: "Ophthalmic diagnostic equipment", image: "/images/optical.jpg", icon: Eye, items: ["Torch", "Slit Lamp (3 Steps)", "Ophthalmoscope (Direct)", "Frame Stand", "Frames", "Rim Trial Set", "LED Vision Chart (Optical)", "Auto-Refractometer with Keratometer", "Auto-Lensometer", "Tonometer", "Retinoscope"] },
    { id: "laboratory", title: "Laboratory", description: "Complete diagnostic laboratory equipment", image: "/images/laboratory.jpg", icon: FlaskConical, items: ["Haematology Analyzer (Dymind DH33 3-Part, DF52 5-Part)", "Electrolyte Analyzer (EL120)", "Finecare Immunoassay Analyser", "Microscope (X107, CX23)", "Centrifuge (800B, 6-Tube)", "Blood Roller Mixer", "Water Bath (15 Litres)", "Laboratory Incubator", "Micropipette (10-100, 100-1000)", "Glucometer (On Call Plus)", "Fridge Thermometer", "Semi-Automated Biochemistry Machine", "Fully Automated Biochemistry (Seamty, Wet)", "Coagulation Machine", "Laboratory Oven", "VDRL Shaker", "ESR Stand", "Orbital Shaker", "Drying Rack", "Staining Jar", "Micropipette Holder", "Test Tube Rack (12/24/36 Holds)", "Grouping Tile (6/12 Wells)"] },
    { id: "lab-reagents", title: "Laboratory Reagents", description: "Complete reagent ecosystems", image: "/images/lab-reagents.jpg", icon: FlaskConical, items: ["Haematology Reagents (Lyse, Diluent, Probe Cleanser, Controls)", "Chemistry Reagents (HDL, Cholesterol, Triglycerides, GT, ALAT, ASAT, Albumin, Bilirubin, Alkaline Phosphatase, Total Protein, Creatinine, Electrolytes, Uric Acid, Calcium, Phosphorus, Urea)", "Immunoassay Reagents (CRP, PCT, D-Dimer, NT ProBNP, Troponin, MYO, CKMB, H-FABP, AFP, CEA, PSA, HBA1C, CYSC, MAU, NGAL, B2MG, Hormones: PRL, TESTO, E2, AMH, T3, T4, TSH, FT3, FT4, BHCG, LH, PROGE, FSH)", "Ichroma Consumables", "On Call Glucometer Strips", "Micropipette Tips (Blue, Yellow)", "Test Tubes", "Distilled Water", "Vaccutainers (EDTA, Red Top)", "Tourniquet", "Rapid Test Kits (PDT/HCG, Hepatitis A/B/C, VDRL, MRDT, Salmonella, H. Pylori, HIV, RF, ASOT, FOB)", "PAP Smear Kit", "HVS Swabs", "Lab Timer", "Cover Slips & Frosted Slides", "Stool & Urine Containers", "Staining Solutions (Acetone, Lugol's Iodine, Crystal Violet, Neutral Red, Oil Emersion, Giemsa, Field Stain A/B)", "Lens Cleansing Tissue", "Blood Lancet", "Applicator Sticks", "Blood Grouping Antisera"] },
    { id: "sluice", title: "Sluice Room", description: "Sterilization and instrument processing", image: "/images/sluice-room.jpg", icon: Scissors, items: ["Autoclave (18 Litres)", "Green Towel (without Hole)", "Dressing Drum (Large, Medium, Small)", "Autoclave Tape", "Cheatle Forcep", "Cheatle Holder"] },
    { id: "orthopedic", title: "Orthopedic & Rehabilitation", description: "Mobility aids and therapeutic support", image: "/images/orthopedic.jpg", icon: Bone, items: ["Standard Wheelchair", "Commode Chair", "Detachable Wheelchair", "Inclining Wheelchair", "Standard Wheelchair with Commode", "Inclining Wheelchair with Commode", "Electric Wheelchair", "Elbow Crutches", "Armpit Crutches", "Bed Pan (Metallic & Plastic)", "Walking Stick (Foldable, Blind, Tripod)", "TENS Machine", "Massage Bed (Foldable)", "Plaster Cutter (Mechanical & Electric)", "Sacro-Lumbar Support", "Elastic Ankle Support", "Knee Support", "Arm Sling", "Hinged Knee Brace", "Soft Cervical Collar", "Medical Compression Stocking (Below/Above Knee)", "Massager", "Therapeutic Weights (0.5kg, 1.5kg, 3.0kg)"] },
    { id: "consumables", title: "Non-Pharmaceutical Consumables", description: "Essential disposable medical supplies", image: "/images/consumables.jpg", icon: Package, items: ["Nebulizer Mask (Adult & Paediatric)", "Oxygen Mask (Adult & Paediatric)", "Oxygen Nasal Prong (Adult, Paediatric, Neonate)", "Sharp Boxes", "Surgical Spirit (5 Litres)", "Cotton Wool (400g)", "Gauze Roll (1.5kg)", "Needles (G21, G23, G25)", "Cannula (G16, G18, G20, G22, G24)", "Syringes (2cc, 5cc, 10cc, 20cc)", "IV Fluids (Ringer's Lactate, Normal Saline, Dextrose 5%, 10%, 50%)", "Scalp Vein Set (G21, G23)", "Alcohol Pads", "Suction Catheter (All Sizes)", "Foley Catheter (All Sizes)", "Crepe Bandage (2'', 3'', 4'', 6'')", "Elastoplast", "IV Giving Set", "Blood Giving Set", "Blood Soluset", "Surgical Blade (G11, G23)", "Tourniquet", "KLY Jelly", "Autoclave Tape", "Tongue Depressor", "Surgical Mask", "Insulin Syringe (0.5ml, 1ml)", "Sutures (Nylon, Polyglactin)", "Tissue Bed Spread", "Breathing Filters (HME, Adult & Paediatric)", "Disposable Aprons", "Paraffin Gauze", "Disposable Speculum (All Sizes)", "Non-Rebreather Mask (Adult & Paediatric)", "Eye Pad Dressing", "Uridom (Condom Catheter)", "Urine Bags (Adult)", "Pediatric Urine Collectors", "P.O.P Rolls (China & Gypsona, 6'' & 8'')", "Blood Bag (Single, 450ml)", "Transpore Tape (1'', 2'')", "Nitrile Gloves", "Skin Traction Kit (Adult & Paediatric)", "Triangular Bandage", "Zinc Oxide Strapping (2'', 3'', 4'', 6'')", "Orthopedic Padding (6'', 8'')", "Surgical Gloves (6.5, 7.0, 7.5, 8.0)"] }
  ];

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    return categories
      .map(cat => ({ ...cat, items: cat.items.filter(item => item.toLowerCase().includes(query)) }))
      .filter(cat => cat.items.length > 0 || cat.title.toLowerCase().includes(query));
  }, [searchQuery, categories]);

  const totalItemsFound = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  const generateItemWhatsAppLink = (item: string, category: string) => {
    const message = `Hello Seda Healthcare, I would like to order/inquire about:\n\n*${item}*\nCategory: ${category}\n\nPlease provide pricing and availability.`;
    return `https://wa.me/254721209699?text=${encodeURIComponent(message)}`;
  };

  const visibleCategories = activeCategory 
    ? filteredCategories.filter(cat => cat.id === activeCategory)
    : filteredCategories;

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#1a1a1a]">
      {/* Top Banner */}
      <div className="border-b border-[#1a1a1a]/10 bg-[#EDE7D7]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a]/60">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>+254 721 209 699</span>
              <span>+254 792 415 615</span>
              <span className="hidden sm:inline">sales@sedahealthcare.co.ke</span>
            </div>
            <div>Mon – Fri · 08:00 – 17:00 EAT</div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur border-b border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/seda-logo.png" alt="Seda Healthcare" className="h-10 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a] hover:text-[#3FA89A] transition-colors">
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="uppercase tracking-wider text-[#3FA89A] text-xs mb-3">Equipment Catalog</div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] mb-4">
            Supply <span className="italic text-[#3FA89A]">Categories</span>
          </h1>
          
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a1a1a]/30" size={18} />
            <input
              type="text"
              placeholder="Search for equipment or supplies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-white border border-[#1a1a1a]/10 text-sm placeholder:text-[#1a1a1a]/30 focus:outline-none focus:border-[#3FA89A] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Live Search Feedback Banner */}
          {searchQuery.trim() && (
            <div className="mt-4 p-4 bg-[#3FA89A]/10 border border-[#3FA89A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-[#1a1a1a] font-medium">
                {totalItemsFound > 0 ? (
                  <>Found <span className="font-bold text-[#3FA89A]">{totalItemsFound}</span> items across <span className="font-bold text-[#3FA89A]">{filteredCategories.length}</span> categories.</>
                ) : (
                  <>No items found. Try adjusting your search terms.</>
                )}
              </p>
              <button 
                onClick={() => setSearchQuery("")} 
                className="text-xs uppercase tracking-wider text-[#3FA89A] hover:text-[#1a1a1a] font-semibold whitespace-nowrap"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Category Filter with Scroll Cue */}
        <div className="mb-8 border-t border-b border-[#1a1a1a]/10 py-3 -mx-4 sm:-mx-6 lg:-mx-0 px-4 sm:px-6 lg:px-0 relative">
          {/* Gradient Fade Overlay: Tells the user there is more content to the right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F1E8] to-transparent pointer-events-none z-10" />
          
          {/* Scrollable Container with Snap */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory scroll-smooth">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-2 snap-start ${
                !activeCategory ? 'bg-[#1a1a1a] text-white' : 'bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a]/5 border border-[#1a1a1a]/10'
              }`}
            >
              All Departments
              {searchQuery && <span className="text-[10px] opacity-70">({totalItemsFound})</span>}
            </button>
            {categories.map(cat => {
              const matchCount = cat.items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())).length;
              const showCount = searchQuery.trim() && matchCount > 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-2 snap-start ${
                    activeCategory === cat.id ? 'bg-[#1a1a1a] text-white' : 'bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a]/5 border border-[#1a1a1a]/10'
                  }`}
                >
                  {cat.title}
                  {showCount && <span className="text-[10px] opacity-70">({matchCount})</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Results Wrapper */}
        <div className="space-y-16">
          {visibleCategories.map((cat) => {
            const CategoryIcon = cat.icon;
            return (
              <div key={cat.id} className="border-t border-[#1a1a1a]/10 pt-8 first:border-0 first:pt-0">
                {/* Category Header */}
                <div className="grid md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="aspect-[4/3] overflow-hidden border border-[#1a1a1a]/10">
                      <img 
                        src={cat.image} 
                        alt={cat.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = '/images/placeholder-medical.jpg'; }}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <CategoryIcon size={24} className="text-[#3FA89A]" strokeWidth={1.5} />
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a]">{cat.title}</h2>
                      {searchQuery.trim() && (
                        <span className="text-sm font-sans font-medium text-[#6B6F73]">
                          ({cat.items.length} {cat.items.length === 1 ? 'match' : 'matches'})
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#6B6F73] leading-relaxed mb-3">{cat.description}</p>
                    {!searchQuery.trim() && (
                      <div className="text-xs uppercase tracking-wider text-[#1a1a1a]/50">{cat.items.length} items available</div>
                    )}
                  </div>
                </div>
                
                {/* Compact Items Grid - Fully Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {cat.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={generateItemWhatsAppLink(item, cat.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 border border-[#1a1a1a]/10 bg-white hover:border-[#3FA89A] hover:bg-[#3FA89A]/5 transition-all"
                    >
                      <MessageCircle size={14} className="text-[#3FA89A] opacity-40 group-hover:opacity-100 shrink-0 transition-opacity" strokeWidth={1.5} />
                      <span className="font-serif text-xs sm:text-sm text-[#1a1a1a]/80 line-clamp-2 leading-snug">{item}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results State */}
        {filteredCategories.length === 0 && searchQuery.trim() && (
          <div className="text-center py-12 border-t border-[#1a1a1a]/10 mt-8">
            <p className="font-serif text-2xl text-[#1a1a1a] mb-2">No items found</p>
            <p className="text-sm text-[#6B6F73] mb-4">Try adjusting your search terms or browse all departments.</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs uppercase tracking-wider text-[#3FA89A] hover:text-[#1a1a1a] transition-colors font-semibold"
            >
              Clear search and show all
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#1a1a1a] text-white p-8 sm:p-12 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl mb-3">Need a custom hospital setup quotation?</h3>
          <p className="text-sm text-white/70 mb-6 max-w-xl mx-auto">
            We compile tailored pricelists based on your facility's bed capacity, specialty focus, and budget parameters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="mailto:sales@sedahealthcare.co.ke" className="inline-block bg-[#3FA89A] text-white px-8 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-[#3FA89A] transition-colors">
              Email Sales Team
            </a>
            <a 
              href="https://wa.me/254721209699?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20discuss%20a%20complete%20hospital%20setup%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={14} strokeWidth={1.5} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}