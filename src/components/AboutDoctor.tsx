import { CLINIC_INFO, PROFESSIONALS, getWhatsAppUrl } from '../data/clinicData';
import { ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const AboutDoctor = () => {
  return (
    <section id="profesionales" className="py-20 sm:py-28 bg-[#FCFAF7] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3ED] border border-[#CDE3D2] text-xs font-bold uppercase tracking-wider text-[#2E5E3D]">
            <Sparkles className="w-3.5 h-3.5 text-[#2E5E3D]" />
            <span>Cuerpo Profesional Especializado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-900 leading-tight">
            Nuestros Profesionales
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            En <strong>Salud y Bienestar Kinesiología</strong>, combinamos la ciencia kinésica moderna con la técnica milenaria de la acupuntura para recuperar tu movilidad y bienestar integral en Loyola 228, Villa Crespo.
          </p>
        </div>

        {/* 2 Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-14">
          {PROFESSIONALS.map((prof, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[28px] overflow-hidden border border-neutral-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="p-3 bg-gradient-to-b from-[#FAF6EE] to-white">
                <div className="rounded-[20px] overflow-hidden h-[340px] sm:h-[380px] bg-neutral-900 relative">
                  <img
                    src={prof.image}
                    alt={prof.name}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#2E5E3D] text-white text-[11px] font-bold uppercase tracking-wider inline-block shadow-sm mb-1">
                      {prof.role}
                    </span>
                    <div className="text-sm font-light text-neutral-200">Loyola 228 • Villa Crespo</div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-display font-medium text-neutral-900">
                    {prof.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8B6E4E] tracking-wide uppercase mt-1">
                    {prof.role} • Loyola 228
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-3">
                    {prof.bio}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(`consulta con ${prof.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#2E5E3D] hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir Turno con {prof.name.split(' ')[1]}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy & Trust Callout */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-neutral-900">
              <ShieldCheck className="w-4 h-4 text-[#2E5E3D]" />
              <span>Atención Personalizada en Villa Crespo</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Más de <strong>458 reseñas</strong> en Google Maps con 4.0 estrellas avalan nuestro compromiso y calidez humana.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold"
            >
              <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
              <span>@sybkinesiologia</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2E5E3D] hover:bg-[#254C32] text-white text-xs font-bold shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar Ahora</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
