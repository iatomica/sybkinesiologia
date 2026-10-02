import { useState } from 'react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Menu, X, MessageCircle, Calendar, Star, MapPin, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/images/sbk-logo.png" 
              alt="Salud y Bienestar Kinesiología" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-neutral-900 leading-tight">Salud y Bienestar</div>
              <div className="text-[11px] text-[#2E5E3D] font-semibold tracking-wider uppercase">Kinesiología &amp; Acupuntura</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-800">
            <a href="#servicios" className="hover:text-[#2E5E3D] transition-colors">
              Especialidades
            </a>
            <a href="#profesionales" className="hover:text-[#2E5E3D] transition-colors">
              Profesionales
            </a>
            <a href="#opiniones" className="hover:text-[#2E5E3D] transition-colors flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{CLINIC_INFO.rating}</span>
              <span className="text-[10px] text-neutral-500 font-normal">({CLINIC_INFO.reviewCount} reseñas)</span>
            </a>
            <a href="#ubicacion" className="hover:text-[#2E5E3D] transition-colors flex items-center gap-1 text-neutral-600">
              <MapPin className="w-3.5 h-3.5 text-[#2E5E3D]" />
              <span>Villa Crespo, CABA</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 text-xs text-neutral-700 hover:text-black font-semibold px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-900" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Agendar Turno</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#0A0A0A] text-white text-xs"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A880]" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-black hover:bg-neutral-100 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5 font-medium text-neutral-800">
              <MapPin className="w-3.5 h-3.5 text-black" />
              {CLINIC_INFO.address}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3 h-3 fill-amber-500" />
              {CLINIC_INFO.rating} ({CLINIC_INFO.reviewCount})
            </span>
          </div>

          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-neutral-900"
          >
            Especialidades Médicas
          </a>
          <a
            href="#profesional"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-neutral-900"
          >
            Dr. Jhon Barrios
          </a>
          <a
            href="#opiniones"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-neutral-900"
          >
            Opiniones de Pacientes
          </a>
          <a
            href="#ubicacion"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold uppercase tracking-wider text-neutral-900"
          >
            Ubicación en Chacarita
          </a>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-100 text-neutral-900 text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-black" />
              <span>Llamar al {CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A880]" />
              <span>Pedir Turno por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
