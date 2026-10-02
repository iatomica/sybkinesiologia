import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Award, ShieldCheck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const AboutDoctor = () => {
  return (
    <section id="profesional" className="py-20 sm:py-28 bg-white border-b border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Reputation Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Frame in Black & White Marble Aesthetic */}
              <div className="rounded-[32px] overflow-hidden bg-black p-2 border border-black/10 shadow-xl">
                <div className="rounded-[24px] overflow-hidden h-[480px] sm:h-[540px] bg-neutral-900 relative">
                  <img
                    src="/images/dr_jhon_barrios.jpg"
                    alt="Dr. Jhon Barrios Odontología Chacarita"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-extrabold uppercase tracking-widest inline-block mb-1.5 shadow-sm">
                      Director Clínico
                    </span>
                    <h3 className="text-2xl font-display font-medium text-white leading-tight">
                      Dr. Jhon Barrios
                    </h3>
                    <p className="text-xs text-neutral-300 font-light mt-0.5">
                      Jorge Newbery 3466 • Chacarita, CABA
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Instagram pill */}
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-4 rounded-2xl border border-neutral-200 shadow-xl flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-white shrink-0">
                  <InstagramIcon className="w-5 h-5 text-[#E1306C]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">{CLINIC_INFO.instagramHandle}</div>
                  <div className="text-[11px] text-neutral-500">{CLINIC_INFO.instagramFollowers} seguidores</div>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold uppercase tracking-wider text-black">
              <Award className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Vocación por la Belleza Natural &amp; Precisión Médica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-black leading-tight">
              Dr. Jhon Barrios
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              Especialista en <strong>diseño de sonrisa, carillas cerámicas, implantología y rehabilitación oral</strong>. Con más de una década de trayectoria y una comunidad de más de 22.000 pacientes y seguidores, el Dr. Jhon Barrios ha revolucionado la experiencia odontológica en Buenos Aires.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Su consultorio en <strong>Jorge Newbery 3466 (Chacarita)</strong> fue diseñado desde cero bajo un concepto minimalista en blanco mármol y negro, combinando la máxima pulcritud clínica con tecnología de escaneo 3D, radiología digital y protocolos indoloros para brindar una atención personalizada y sin prisas.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-black">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Estética de Alta Fidelidad</span>
                </div>
                <p className="text-[11px] text-neutral-600 font-light">
                  Carillas y coronas estratificadas con textura, traslucidez y brillo biológico exactos.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-black">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  <span>Cirugía Guiada &amp; Confort</span>
                </div>
                <p className="text-[11px] text-neutral-600 font-light">
                  Implantes colocados con precisión milimétrica guiada por tomografía sin dolor.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Hola Dr. Jhon Barrios, quisiera coordinar una consulta de evaluación con usted.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                <span>Consultar Directamente con el Dr.</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs font-semibold"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span>Ver Casos en Instagram</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
