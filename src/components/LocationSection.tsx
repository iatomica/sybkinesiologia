import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MapPin, Clock, Phone, Navigation, Star, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-xs font-bold uppercase tracking-wider text-black shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-black" />
              <span>Consultorio en Chacarita</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-black leading-tight">
              Un espacio boutique diseñado para tu bienestar
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              El consultorio del <strong>Dr. Jhon Barrios</strong> se ubica en <strong>{CLINIC_INFO.address}</strong>, en una zona estratégica de Chacarita con acceso ágil desde Colegiales, Palermo, Belgrano y Villa Urquiza.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Address */}
              <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">Dirección de Atención</h4>
                  <p className="text-xs text-neutral-800 font-medium mt-0.5">{CLINIC_INFO.address} — Chacarita, CABA</p>
                  <p className="text-[11px] text-neutral-500 mt-1">A cuadras de Av. Álvarez Thomas, Av. Corrientes y Av. Federico Lacroze.</p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">Días y Horarios</h4>
                  <p className="text-xs text-neutral-800 font-medium mt-0.5">{CLINIC_INFO.hours}</p>
                  <p className="text-[11px] text-neutral-500 mt-1">Atención exclusiva con cita previa para garantizar máxima puntualidad.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-bold text-black">Contacto &amp; Redes</h4>
                  <div className="flex flex-wrap items-center gap-4 mt-1 text-xs">
                    <span className="font-bold text-neutral-900">WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
                    <a
                      href={CLINIC_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-black font-semibold"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                      <span>{CLINIC_INFO.instagramHandle} ({CLINIC_INFO.instagramFollowers})</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                <span>Pedir Turno por WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-black border border-neutral-300 text-xs font-bold uppercase tracking-wider"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Ver en Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] overflow-hidden border border-black/10 shadow-xl bg-white relative">
              <div className="h-[400px] sm:h-[460px] w-full bg-neutral-100">
                <iframe
                  title="Ubicación Dr. Jhon Barrios Odontología en Chacarita"
                  src="https://maps.google.com/maps?q=Jorge%20Newbery%203466,%20CABA,%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Bottom Badge */}
              <div className="p-4 bg-white/95 backdrop-blur-md border-t border-black/8 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-black">DR. JHON BARRIOS ODONTOLOGÍA</div>
                  <div className="text-[11px] text-neutral-500">{CLINIC_INFO.address} — Chacarita</div>
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>4,9 (391 reseñas)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
