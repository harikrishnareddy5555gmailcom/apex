import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Phone, MessageSquare, ShieldCheck, ShoppingCart } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        
        {/* Direct Call */}
        <a
          href={`tel:${brandConfig.contact.primaryPhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:text-blue-700 hover:bg-blue-50 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-blue-700 mb-1" />
          <span className="text-[10px] font-bold leading-none">Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=Hello%20Apex%20Water%20Team%2C%20I%20scanned%20the%20bottle%20QR%20code%20and%20would%20like%20more%20information.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:scale-95 transition-all border border-emerald-200"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-1" />
          <span className="text-[10px] font-bold leading-none">WhatsApp</span>
        </a>

        {/* FSSAI Verify */}
        <a
          href="#quality"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:text-blue-700 hover:bg-blue-50 active:scale-95 transition-all"
        >
          <ShieldCheck className="w-4 h-4 text-blue-700 mb-1" />
          <span className="text-[10px] font-bold leading-none">FSSAI Lic</span>
        </a>

        {/* Distributor Enquiry */}
        <a
          href="#distributor"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-white bg-blue-700 hover:bg-blue-800 active:scale-95 transition-all shadow-sm"
        >
          <ShoppingCart className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold leading-none">Distribute</span>
        </a>

      </div>
    </div>
  );
};
