import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar al consultorio del Dr. Jhon Barrios por WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#25D366] rounded-full" />
        </div>
        <span className="text-xs font-bold tracking-wide pr-1">
          WhatsApp • {CLINIC_INFO.phoneDisplay}
        </span>
      </a>
    </aside>
  );
};
