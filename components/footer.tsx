// components/Footer.tsx
import Link from "next/link";

// Social Media Icons
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>;

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-[#3FA89A]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-[#1a1a1a]/20">
          <div className="lg:col-span-5">
            <img src="https://res.cloudinary.com/dzyxm0rhg/image/upload/v1790609564/seda-logo_fvmrpj.png" alt="Seda Healthcare" className="h-52 w-auto mb-4 p-2 rounded-sm" />
            <p className="font-serif text-[#1a1a1a]/70 leading-relaxed max-w-md text-sm">
              Seda Healthcare Solutions Ltd. A dedicated supply practice for clinical instrumentation and medical apparatus, serving facilities across Kenya.
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="small-caps text-[#1a1a1a]/60 block mb-4 text-xs uppercase tracking-wider">Navigation</span>
            <ul className="space-y-2 font-serif text-sm">
              <li><Link href="/" className="text-[#1a1a1a]/80 hover:text-[#3FA89A] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#1a1a1a]/80 hover:text-[#3FA89A] transition-colors">About Us</Link></li>
              <li><Link href="/departments" className="text-[#1a1a1a]/80 hover:text-[#3FA89A] transition-colors">Catalog</Link></li>
              <li><Link href="/#contact" className="text-[#1a1a1a]/80 hover:text-[#3FA89A] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <span className="small-caps text-[#1a1a1a]/60 block mb-4 text-xs uppercase tracking-wider">Correspondence</span>
            <address className="not-italic font-serif space-y-2 text-[#1a1a1a]/80 text-sm">
              <p>Springfield Green Court, Kibiku Road, Utawala-Eastern Bypass.</p>
              <p>Nairobi, Kenya</p>
              <p className="mt-4">+254 792 415 615</p>
              <p>+254 721 209 699</p>
              <p>sales@sedahealthcare.co.ke</p>
            </address>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <span className="small-caps text-[#1a1a1a]/60 block mb-3 text-xs uppercase tracking-wider">Follow Us</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/seda-healthcare-solutions-ltd/home/" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/60 hover:text-[#3FA89A] transition-colors"><LinkedInIcon /></a>
                <a href="https://www.facebook.com/sedahealthcaresolutionsltd" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/60 hover:text-[#3FA89A] transition-colors"><FacebookIcon /></a>
                <a href="https://www.instagram.com/sedahealthcare/" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/60 hover:text-[#3FA89A] transition-colors"><InstagramIcon /></a>
                <a href="https://www.tiktok.com/@sedahealthcare" target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/60 hover:text-[#3FA89A] transition-colors"><TikTokIcon /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 small-caps text-[#1a1a1a]/50 text-xs uppercase tracking-wider">
          <span>© 2026 Seda Healthcare Solutions Ltd.</span>
          <span>Designed by <a href="https://sonnysayisolutions.co.ke/" target="_blank" className="text-[#3FA89A] hover:underline">Sonny Sayi Solutions</a></span>
        </div>
      </div>
    </footer>
  );
}