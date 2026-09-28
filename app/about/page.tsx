"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail, Globe, Building2, ShieldCheck, Wrench } from "lucide-react";

// Inline SVGs for specific icons to guarantee no build errors
const StethoscopeIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M4.8 2.3A.3.3 0 0 0 5 2h14a.3.3 0 0 0 .2.3v3.3a.3.3 0 0 0-.2.3H5a.3.3 0 0 0-.2-.3z"/><path d="M15 13a5 5 0 0 0-10 0"/><path d="M8 13v4a2 2 0 0 0 4 0v-3"/><circle cx="10" cy="19" r="2"/></svg>;
const FlaskIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>;
const ScanIcon = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>;

export default function About() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#1a1a1a]">
        {/* ═══════════ TOP BANNER ═══════════ */}
      <div className="border-b border-[#1a1a1a]/10 bg-[#EDE7D7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="small-caps text-[#1a1a1a]/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><Phone /> +254 721 209 699</span>
            <span className="flex items-center gap-1.5"><Phone /> +254 792 415 615</span>
            <span className="flex items-center gap-1.5"><Mail /> sales@sedahealthcare.co.ke</span>
          </div>
          <div className="small-caps text-[#1a1a1a]/70 text-xs uppercase tracking-wider">
            Mon – Fri · 08:00 – 17:00 EAT
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur border-b border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-50 md:h-47 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1a1a1a] hover:text-[#3FA89A] transition-colors">
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Hero Section */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <div className="uppercase tracking-wider text-[#3FA89A] text-xs mb-4">About The Practice</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-[1.1]">
            Equipping the foundations of <span className="italic text-[#3FA89A]">modern healthcare</span> in East Africa.
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6F73] leading-relaxed max-w-2xl">
            Seda Healthcare Solutions Ltd is a dedicated medical supply and hospital commissioning firm. We bridge the gap between global medical manufacturers and local clinical needs.
          </p>
        </div>

        {/* The Premise / Story */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 border-t border-[#1a1a1a]/10 pt-12">
          <div className="md:col-span-4">
            <div className="uppercase tracking-wider text-[#1a1a1a]/50 text-xs mb-3">Our Premise</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a]">The instrument precedes the outcome.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-[#1a1a1a]/80 leading-relaxed">
            <p>
              The procurement of clinical equipment is rarely a simple commercial transaction. A hospital bed is not merely furniture; its joints, motors, and mattress density influence patient recovery, nursing efficiency, and infection control. A laboratory analyser is not a commodity—its calibration and service infrastructure shape every diagnostic conclusion drawn from it.
            </p>
            <p>
              Our practice begins from this premise. Before a ward can treat, before a laboratory can conclude, and before a theatre can operate, the right piece of equipment must be in the room—correctly specified, correctly installed, and correctly supported. We maintain a comprehensive catalogue across 19+ clinical disciplines, matching the specific requirement of a facility with the instrument that genuinely answers it.
            </p>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-24">
          <div className="uppercase tracking-wider text-[#1a1a1a]/50 text-xs mb-8">Core Capabilities</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Facility Commissioning", desc: "From blueprint to fully equipped ward. We provide end-to-end setup for new hospitals, clinics, and specialized diagnostic centers, ensuring seamless integration of all medical systems." },
              { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Every item in our catalogue holds the regulatory markings of its country of origin. We ensure all documentation, KEBS standards, and safety protocols precede delivery." },
              { icon: Wrench, title: "After-Sales Support", desc: "Medical equipment requires continuous calibration and maintenance. We facilitate local and regional service infrastructure for part replacement and preventive care." }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="border border-[#1a1a1a]/10 bg-white p-8 flex flex-col h-full">
                  <Icon size={28} className="text-[#3FA89A] mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">{cap.title}</h3>
                  <p className="text-sm text-[#6B6F73] leading-relaxed flex-1">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinical Disciplines Overview */}
        <div className="mb-24 border-t border-[#1a1a1a]/10 pt-12">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4">
              <div className="uppercase tracking-wider text-[#1a1a1a]/50 text-xs mb-3">Scope of Supply</div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a]">Comprehensive clinical coverage.</h2>
              <p className="text-sm text-[#6B6F73] mt-4 leading-relaxed">
                We do not just supply isolated items; we provide complete departmental setups tailored to the bed capacity and specialty focus of your facility.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                {[
                  { icon: StethoscopeIcon, name: "Triage & Emergency" },
                  { icon: ScanIcon, name: "Radiology & Imaging" },
                  { icon: Building2, name: "Maternity & Nursery" },
                  { icon: Wrench, name: "Surgical Theatre" },
                  { icon: FlaskIcon, name: "Laboratory & Reagents" },
                  { icon: ShieldCheck, name: "Dental & Optical" },
                  { icon: Building2, name: "Medical Wards" },
                  { icon: Wrench, name: "Orthopedic & Rehab" },
                  { icon: FlaskIcon, name: "Consumables & PPE" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-[#1a1a1a]/10">
                      <Icon size={16} className="text-[#3FA89A]" strokeWidth={1.5} />
                      <span className="text-sm text-[#1a1a1a]/80">{item.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link href="/departments" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#3FA89A] hover:text-[#1a1a1a] transition-colors font-semibold">
                  View Full Equipment Catalog
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-[#1a1a1a] text-white p-8 sm:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <div className="uppercase tracking-wider text-[#3FA89A] text-xs mb-4">Visit Our Offices</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">Seda House</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                We operate from our dedicated headquarters along the Eastern Bypass in Nairobi. We welcome facility administrators, procurement officers, and medical practitioners to visit our offices for consultations, specification reviews, and product demonstrations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#3FA89A] mt-1 shrink-0" />
                  <span className="text-white/90">Seda House, along Eastern Bypass, Nairobi, Kenya</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-[#3FA89A] mt-1 shrink-0" />
                  <div className="text-white/90">
                    <div>+254 721 209 699</div>
                    <div>+254 792 415 615</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-[#3FA89A] mt-1 shrink-0" />
                  <span className="text-white/90">sales@sedahealthcare.co.ke</span>
                </div>
                <div className="flex items-start gap-4">
                  <Globe size={18} className="text-[#3FA89A] mt-1 shrink-0" />
                  <span className="text-white/90">www.sedahealthcare.co.ke</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-white mb-4">Request a Consultation</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Whether you are setting up a new 50-bed facility or upgrading a single diagnostic room, our team compiles tailored pricelists based on your specific parameters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/254721209699?text=Hello%20Seda%20Healthcare%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-[#25D366] transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <a 
                  href="mailto:sales@sedahealthcare.co.ke" 
                  className="inline-flex items-center justify-center gap-2 bg-[#3FA89A] text-white px-8 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-[#3FA89A] transition-colors"
                >
                  Email Sales Team
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}