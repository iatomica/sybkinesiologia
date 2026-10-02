import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MessageCircle, Star, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-black/5">
      
      {/* Subtle organic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#F7F4EE]/60 to-[#F2EDE2]/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Authority (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E5E3D] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>Salud y Bienestar Kinesiología</span>
              </span>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 hover:bg-neutral-50 text-neutral-900 text-xs font-semibold transition-colors shadow-xs"
              >
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                </div>
                <span className="font-bold">{CLINIC_INFO.rating}</span>
                <span className="text-neutral-500 font-normal">({CLINIC_INFO.reviewCount} reseñas en Google)</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-neutral-200/80 hover:bg-neutral-50 text-neutral-800 text-xs font-medium transition-colors"
              >
                <span className="font-bold">{CLINIC_INFO.instagramFollowers}</span>
                <span className="text-neutral-500">en Instagram</span>
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-neutral-900 leading-[1.08] tracking-tight">
              Kinesiología integral, acupuntura y <span className="italic font-normal text-[#2E5E3D]">bienestar corporal</span>.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              Atención kinesiológica personalizada por los <strong>Lic. Diego Ponce y Lic. Julieta Castellano</strong> en Villa Crespo (Loyola 228). Fisiatría, reeducación postural, drenaje linfático y acupuntura tradicional orientadas al alivio del dolor y la recuperación funcional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl('consulta en el consultorio de Loyola 228')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#2E5E3D] hover:bg-[#254C32] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#2E5E3D]/20 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>Pedir Turno por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#servicios"
                className="btn-tactile inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Ver Tratamientos</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E5E3D]" />
              </a>
            </div>

            {/* Trust Footer Badges */}
            <div className="pt-6 border-t border-neutral-200/90 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-700">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
                <MapPin className="w-4 h-4 text-[#2E5E3D] shrink-0" />
                <div>
                  <div className="font-bold text-neutral-900 leading-tight">Loyola 228</div>
                  <div className="text-[11px] text-neutral-500">Villa Crespo, CABA</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#8B6E4E] shrink-0" />
                <div>
                  <div className="font-bold text-neutral-900 leading-tight">Acupuntura Tradicional</div>
                  <div className="text-[11px] text-neutral-500">Medicina milenaria</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <div>
                  <div className="font-bold text-neutral-900 leading-tight">4,0 Estrellas</div>
                  <div className="text-[11px] text-neutral-500">458 reseñas en Google</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Poster / Banner Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Warm Botanical Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-white p-2.5 shadow-xl border border-neutral-200/80 group">
                <div className="relative rounded-[22px] overflow-hidden h-[460px] sm:h-[500px] bg-[#FAF8F5] flex items-center justify-center">
                  <img
                    src="/images/sbk-banner.png"
                    alt="Salud y Bienestar Kinesiología - Loyola 228"
                    className="w-full h-full object-contain p-4 group-hover:scale-102 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#2E5E3D] text-white text-[10px] font-extrabold uppercase tracking-widest mb-1.5 shadow-sm">
                      Kinesiología &amp; Fisiatría
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white leading-tight">
                      Salud y Bienestar
                    </h3>
                    <p className="text-xs text-neutral-200 font-light mt-0.5">
                      Lic. Diego Ponce • Lic. Julieta Castellano • Loyola 228
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
