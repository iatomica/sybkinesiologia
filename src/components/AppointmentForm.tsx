import { useState, type FormEvent } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, MessageCircle, Check, Clock, UserCheck } from 'lucide-react';

export const AppointmentForm = () => {
  const [treatment, setTreatment] = useState('Acupuntura Tradicional China');
  const [preferredTime, setPreferredTime] = useState('Tarde (14:00 a 20:00 hs)');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');

  const treatments = [
    'Acupuntura Tradicional China',
    'Kinesiología & Fisiatría Integral',
    'Reeducación Postural & Columna',
    'Kinesiología Deportiva & Traumatología',
    'Drenaje Linfático Manual',
    'Evaluación & Consulta Diagnóstica'
  ];

  const times = [
    'Por la mañana (08:30 a 13:00 hs)',
    'Por la tarde (14:00 a 20:30 hs)',
    'Primer turno disponible esta semana'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let msg = `Hola equipo de Salud y Bienestar Kinesiología! Quisiera solicitar un turno para *${treatment}*`;
    if (patientName.trim()) {
      msg += ` a nombre de *${patientName.trim()}*`;
    }
    if (phone.trim()) {
      msg += ` (Tel: ${phone.trim()})`;
    }
    msg += `.\n• Preferencia horaria: *${preferredTime}*.\n¿Tendrán disponibilidad para coordinar en el consultorio de ${CLINIC_INFO.address}? Muchas gracias.`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="turnos" className="py-20 sm:py-28 bg-white border-b border-black/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E5E3D]/10 border border-[#2E5E3D]/20 text-xs font-bold uppercase tracking-wider text-[#2E5E3D]">
            <Calendar className="w-3.5 h-3.5 text-[#EFA274]" />
            <span>Turnos Coordinados por WhatsApp</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 leading-tight">
            Coordiná tu sesión en Villa Crespo
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Elegí la especialidad de tu interés y la franja horaria que mejor se adapte a tu rutina. Nuestro equipo de kinesiología te responderá de forma personalizada.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="p-8 sm:p-12 rounded-3xl bg-[#FAFAFA] border border-black/10 shadow-sm space-y-8">
          
          {/* Step 1: Tratamiento */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">1</span>
              <span>Tratamiento de Interés:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatments.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTreatment(t)}
                  className={`p-3.5 rounded-2xl text-left text-xs transition-all border flex items-center justify-between ${
                    treatment === t
                      ? 'bg-[#2E5E3D] border-[#2E5E3D] text-white font-semibold shadow-xs'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:border-[#2E5E3D]/50'
                  }`}
                >
                  <span>{t}</span>
                  {treatment === t && <Check className="w-4 h-4 text-emerald-200 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Horario y Datos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2E5E3D]" />
                <span>Franja Horaria:</span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full p-3.5 rounded-2xl border border-neutral-200 text-xs text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5E3D]"
              >
                {times.map((tm) => (
                  <option key={tm} value={tm}>{tm}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#2E5E3D]" />
                <span>Nombre y Apellido:</span>
              </label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="w-full p-3.5 rounded-2xl border border-neutral-200 text-xs text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5E3D]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#2E5E3D]" />
                <span>Teléfono de Contacto:</span>
              </label>
              <input
                type="tel"
                placeholder="Ej. 11 1234-5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3.5 rounded-2xl border border-neutral-200 text-xs text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5E3D]"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500">
              <span className="font-bold text-neutral-900">{CLINIC_INFO.address}</span> • Tel: {CLINIC_INFO.phoneDisplay}
            </div>

            <button
              type="submit"
              className="btn-tactile w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2E5E3D] hover:bg-[#234930] text-white text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Solicitar Turno por WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};
