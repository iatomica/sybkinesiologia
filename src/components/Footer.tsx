import { CLINIC_INFO, getWhatsAppUrl, SPECIALTIES } from '../data/clinicData';
import { MapPin, Phone, Star, Clock, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer = () => {
  return (
    <footer className="bg-[#1B3624] text-white text-xs pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/sbk-logo.jpg" 
                alt="Salud y Bienestar Kinesiología" 
                className="h-14 w-auto object-contain bg-white rounded-xl p-1"
              />
              <div>
                <div className="text-base font-bold text-white leading-tight">Salud y Bienestar</div>
                <div className="text-[11px] text-emerald-300 font-semibold tracking-wider uppercase">Kinesiología &amp; Acupuntura</div>
              </div>
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              Centro especializado en kinesiología, fisiatría, reeducación postural y acupuntura tradicional china en Villa Crespo. Compromiso con tu recuperación física y bienestar integral.
            </p>
            <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs pt-1">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>{CLINIC_INFO.rating} de 5 Estrellas • {CLINIC_INFO.reviewCount} opiniones en Google Maps</span>
            </div>
          </div>

          {/* Col 2: Especialidades */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Especialidades Terapéuticas
            </h4>
            <ul className="space-y-2 text-neutral-300">
              {SPECIALTIES.slice(0, 5).map((spec) => (
                <li key={spec.id}>
                  <a href="#servicios" className="hover:text-emerald-300 transition-colors">
                    • {spec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ubicación y Horarios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Consultorio en Villa Crespo
            </h4>
            <div className="space-y-2.5 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address} — Villa Crespo, CABA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Tel / WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Redes y Turnos */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Comunidad &amp; Citas
            </h4>
            <p className="text-xs text-neutral-300 font-light">
              Seguinos en Instagram para conocer ejercicios, consejos de salud postural y novedades del consultorio.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span className="font-semibold">{CLINIC_INFO.instagramHandle}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Turno por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>{CLINIC_INFO.director}</span>
            <span>•</span>
            <span>Loyola 228, CABA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
