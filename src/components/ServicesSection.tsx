import { SPECIALTIES, getWhatsAppUrl } from '../data/clinicData';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-xs font-bold uppercase tracking-wider text-black shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Tratamientos &amp; Especialidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-black leading-tight">
            Excelencia clínica y estética personalizada
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Cada plan de tratamiento es abordado con tecnología diagnóstica 3D y materiales de estándar internacional para garantizar resultados duraderos, indoloros y naturales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="p-8 rounded-3xl bg-white border border-black/8 shadow-2xs hover:shadow-md hover:border-black/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-[#C5A880] uppercase tracking-wider mb-2">
                  {spec.subtitle}
                </div>

                <h3 className="text-2xl font-display font-medium text-black mb-3 leading-tight group-hover:text-neutral-800 transition-colors">
                  {spec.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-light mb-6">
                  {spec.description}
                </p>

                {/* Tags */}
                <div className="space-y-2 mb-8">
                  {spec.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(spec.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-[#C5A880] transition-colors"
                >
                  <span>Consultar Tratamiento</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-[10px] text-neutral-400 font-mono">Chacarita</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
