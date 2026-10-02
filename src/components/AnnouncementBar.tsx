import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MapPin, Phone, Star, Clock } from 'lucide-react';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#0A0A0A] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-6 text-neutral-300">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{CLINIC_INFO.address} — {CLINIC_INFO.neighborhood}</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{CLINIC_INFO.hours}</span>
          </div>
        </div>

        {/* Right: Instagram & Rating & Phone */}
        <div className="flex items-center gap-5">
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
            <span className="font-medium">{CLINIC_INFO.instagramHandle} ({CLINIC_INFO.instagramFollowers})</span>
          </a>

          <div className="flex items-center gap-1 font-semibold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{CLINIC_INFO.rating} ({CLINIC_INFO.reviewCount} reseñas)</span>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold hover:text-white text-neutral-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
