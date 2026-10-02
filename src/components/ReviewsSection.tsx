import { REVIEWS, CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Star, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-black/8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2E5E3D]/20 text-xs font-bold uppercase tracking-wider text-[#2E5E3D] shadow-2xs mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Experiencias Reales de Pacientes</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-900 leading-tight">
              {CLINIC_INFO.rating} Estrellas y más de {CLINIC_INFO.reviewCount} opiniones
            </h2>
            <p className="text-sm text-neutral-600 font-light mt-2 max-w-xl">
              La confianza de nuestros pacientes en Villa Crespo respalda cada sesión kinésica, tratamiento del dolor crónico y sesión de acupuntura tradicional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={CLINIC_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              <span>Ver todas en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2E5E3D] hover:bg-[#234930] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
              <span>Pedir Turno</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-white border border-black/8 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
                    {rev.date}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#C5A880] uppercase tracking-wider mb-2">
                  {rev.treatment}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-light italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-bold text-black">{rev.name}</span>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Verificada
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
