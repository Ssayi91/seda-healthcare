import { Phone, Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#3FA89A] text-neutral-900 py-3">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ROW 1: Contact Info & Hours */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-2">
          
          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <a href="tel:+254792415615" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +254 792 415 615
            </a>
            <a href="tel:+254721209699" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +254 721 209 699
            </a>
            <a href="mailto:sales@sedahealthcare.co.ke" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> sales@sedahealthcare.co.ke
            </a>
          </div>

          {/* Operating Hours */}
          <div className="text-sm font-medium hidden md:block">
            Mon – Fri · 08:00 – 17:00 EAT
          </div>
          
        </div>

        {/* ROW 2: Address (Centered for clean look) */}
        <div className="flex items-center justify-right text-sm font-medium">
          <MapPin size={14} className="mr-2" />
          Springfield Green Court, Kibiku Road, Utawala-Eastern Bypass.
        </div>

      </div>
    </div>
  );
}