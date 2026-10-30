import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ShieldCheck, Sun, Wind, Ban, CheckCircle2 } from 'lucide-react';

export const QualityLicences: React.FC = () => {
  return (
    <section id="quality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Regulatory &amp; Quality
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            FSSAI Certified &amp; Label-Verified
          </h2>
          <p className="text-base text-slate-500 mt-3 leading-relaxed">
            All information on this page is extracted verbatim from the official 
            printed bottle label artwork.
          </p>
        </div>

        {/* FSSAI License block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>FSSAI Verified Registration</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              License No.{' '}
              <span className="text-[#0A3D91]">{brandConfig.fssaiLicenseNumber}</span>
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Licensed under the Food Safety and Standards Authority of India for packaged 
              drinking water manufacturing, packing, and distribution. Consumers can scan 
              the FSSAI QR code on any APEX bottle to verify regulatory details directly.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-slate-400 w-36 flex-shrink-0 text-xs">Manufacturer:</span>
                <span className="font-semibold text-slate-800">{brandConfig.manufacturer.companyName}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 w-36 flex-shrink-0 text-xs">Location:</span>
                <span className="font-semibold text-slate-800">Uppal, Medchal Malkajgiri, Hyderabad</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 w-36 flex-shrink-0 text-xs">State / PIN:</span>
                <span className="font-semibold text-slate-800">Telangana – 500098</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Verified directly against physical bottle label artwork.</span>
            </div>
          </div>

          {/* QR codes */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Label QR Codes</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-36 h-36 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src="/assets/apex-qr-label-website.png"
                    alt="apexpremiumwater.com Website QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-700">Brand Portal</span>
                <span className="text-[10px] text-slate-400">apexpremiumwater.com</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-36 h-36 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src="/assets/apex-qr-label-fssai.png"
                    alt="FSSAI License QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-700">FSSAI Licence</span>
                <span className="text-[10px] text-slate-400">Lic. #{brandConfig.fssaiLicenseNumber}</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 text-center">
              Both QR codes are extracted from the genuine bottle artwork.
            </p>
          </div>
        </div>

        {/* Storage instructions */}
        <div className="border-t border-slate-100 pt-14">
          <h3 className="text-lg font-black text-slate-900 mb-8">Storage &amp; Handling</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { icon: Wind, title: 'Serve Chilled', desc: 'Enjoy chilled for peak crispness and refreshing mineral mouthfeel.', color: 'text-blue-600' },
              { icon: Sun, title: 'Avoid Sunlight', desc: 'Store away from UV exposure and intense heat sources.', color: 'text-amber-600' },
              { icon: CheckCircle2, title: 'Cool & Clean', desc: 'Keep in a hygienic, well-ventilated storage area.', color: 'text-emerald-600' },
              { icon: Ban, title: 'Check Seal', desc: 'Do not accept if the tamper-evident cap is broken.', color: 'text-rose-600' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="space-y-2">
                <Icon className={`w-5 h-5 ${color}`} />
                <h4 className="text-sm font-bold text-slate-800">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-slate-400">
            Shelf life: Best before 6 months from packing date. &nbsp;·&nbsp; 
            Please crush bottle after use to assist recycling.
          </p>
        </div>

      </div>
    </section>
  );
};
