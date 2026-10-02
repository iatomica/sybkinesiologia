import { getWhatsAppUrl } from '../data/clinicData';
import { ShieldCheck, Receipt, CreditCard, MessageCircle, ArrowRight } from 'lucide-react';

export const ObrasSocialesSection = () => {
  const paymentFeatures = [
    {
      icon: Receipt,
      title: 'Factura para Reintegros',
      badge: 'Prepagas & Coberturas',
      desc: 'Emitimos factura oficial homologada por AFIP/ARCA para que gestiones el reintegro odontológico con tu prepaga (OSDE, Swiss Medical, Galeno, etc.).'
    },
    {
      icon: CreditCard,
      title: 'Múltiples Medios de Pago',
      badge: 'Efectivo, Tarjeta & Transf.',
      desc: 'Aceptamos transferencias bancarias, tarjetas de crédito, débito y pagos en efectivo para tu máxima comodidad.'
    },
    {
      icon: ShieldCheck,
      title: 'Presupuesto Transparente',
      badge: 'Sin Sorpresas',
      desc: 'Evaluación diagnóstica con escaneo previo y plan de tratamiento detallado paso a paso antes de iniciar cualquier procedimiento.'
    }
  ];

  return (
    <section id="coberturas" className="py-20 sm:py-24 bg-white border-b border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold text-black uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Transparencia &amp; Reintegros</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-black tracking-tight">
            Modalidad de Atención &amp; Coberturas
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
            Priorizamos la calidad médica, los mejores materiales biológicos y la claridad en cada consulta en nuestro consultorio de Chacarita.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {paymentFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFA] rounded-3xl p-7 border border-black/8 shadow-2xs hover:border-black/25 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#C5A880]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A880] block mb-1">
                    {feat.badge}
                  </span>
                  <h3 className="font-display font-medium text-black text-xl mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Action */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl('Consulta sobre aranceles y reintegros con mi prepaga')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A880]" />
            <span>Consultar Aranceles por WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
