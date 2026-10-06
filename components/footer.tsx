// components/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

// Clean, professional Social Media Icons (No Emojis)
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-[#3FA89A]/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-100">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" 
                alt="Seda Healthcare" 
                className="h-12 md:h-14 w-auto" 
              />
            </Link>
            <p className="text-neutral-600 leading-relaxed max-w-md text-sm mb-6">
              Seda Healthcare Solutions Ltd. A dedicated supply practice for clinical instrumentation and medical apparatus, serving healthcare facilities with excellence across Kenya and East Africa.
            </p>
            
            {/* Social Media Links */}
            <div>
              <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest block mb-4">Connect With Us</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/seda-healthcare-solutions-ltd/home/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#3FA89A] hover:text-white transition-all duration-300" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://www.facebook.com/sedahealthcaresolutionsltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#3FA89A] hover:text-white transition-all duration-300" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/sedahealthcare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#3FA89A] hover:text-white transition-all duration-300" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@sedahealthcare" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#3FA89A] hover:text-white transition-all duration-300" aria-label="TikTok">
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <span className="text-neutral-900 text-xs font-bold uppercase tracking-widest block mb-6">Quick Links</span>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-[#3FA89A] hover:translate-x-1 transition-all duration-200 inline-block">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-[#3FA89A] hover:translate-x-1 transition-all duration-200 inline-block">About Us</Link>
              </li>
              <li>
                <Link href="/departments" className="text-neutral-600 hover:text-[#3FA89A] hover:translate-x-1 transition-all duration-200 inline-block">Equipment Catalog</Link>
              </li>
              <li>
                <Link href="/#partner-with-us" className="text-neutral-600 hover:text-[#3FA89A] hover:translate-x-1 transition-all duration-200 inline-block">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <span className="text-neutral-900 text-xs font-bold uppercase tracking-widest block mb-6">Get in Touch</span>
            <div className="space-y-4 text-sm text-neutral-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3FA89A] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Springfield Green Court, Kibiku Road,<br />
                  Utawala-Eastern Bypass, Nairobi, Kenya
                </address>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#3FA89A] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+254792415615" className="hover:text-[#3FA89A] transition-colors">+254 792 415 615</a>
                  <a href="tel:+254721209699" className="hover:text-[#3FA89A] transition-colors">+254 721 209 699</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#3FA89A] shrink-0" />
                <a href="mailto:sales@sedahealthcare.co.ke" className="hover:text-[#3FA89A] transition-colors">
                  sales@sedahealthcare.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>

            {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-neutral-400 font-medium tracking-wide">
          <span>© {new Date().getFullYear()} Seda Healthcare Solutions Ltd. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Designed & Developed by{" "}
            <a 
              href="https://sonny-sayi-solution.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#3FA89A] hover:text-[#0B3D35] transition-all duration-200 font-semibold underline decoration-[#3FA89A]/30 hover:decoration-[#0B3D35] underline-offset-4"
            >
              Sonny Sayi Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}