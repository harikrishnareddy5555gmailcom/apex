import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ShieldCheck, FileCheck, AlertCircle, Sun, Wind, Ban, CheckCircle } from 'lucide-react';

export const QualityLicences: React.FC = () => {
  return (
    <section id="quality" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Regulatory & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Quality Assurance & Authentic Licences
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every bottle of APEX water comes with verified regulatory credentials. We believe in complete transparency with our consumers and distributor partners.
          </p>
        </div>

        {/* Primary Regulatory License Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span>Verified FSSAI Food Safety Registration</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                FSSAI License No. <span className="text-blue-700">{brandConfig.fssaiLicenseNumber}</span>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Licensed under the Food Safety and Standards Authority of India (FSSAI) for packaged drinking water manufacturing, packing, and distribution. Consumers can scan the genuine FSSAI QR code on any APEX bottle to inspect regulatory details directly.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Manufacturer / Packer:</span>
                  <span className="font-bold text-slate-900">{brandConfig.manufacturer.companyName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Facility Location:</span>
                  <span className="font-bold text-slate-900">Uppal, Medchal Malkajgiri, Hyderabad</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">State & Pincode:</span>
                  <span className="font-bold text-slate-900">Telangana - 500098</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified directly against physical bottle label artwork.</span>
              </div>
            </div>

            {/* Right: The Two Actual Label QR Codes */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 rounded-3xl border border-blue-100 flex flex-col items-center">
              <p className="text-xs font-extrabold uppercase tracking-widest text-blue-900 mb-4 text-center">
                Official Label QR Codes
              </p>

              <div className="grid grid-cols-2 gap-4 w-full">
                {/* Website QR */}
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-xl overflow-hidden border border-slate-100 mb-2">
                    <img
                      src="/assets/apex-qr-label-website.png"
                      alt="apexpremiumwater.com Website QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-blue-900 leading-tight">Brand Portal</span>
                  <span className="text-[10px] text-slate-500">apexpremiumwater.com</span>
                </div>

                {/* FSSAI QR */}
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-xl overflow-hidden border border-slate-100 mb-2">
                    <img
                      src="/assets/apex-qr-label-fssai.png"
                      alt="FSSAI License QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-blue-900 leading-tight">FSSAI Info</span>
                  <span className="text-[10px] text-slate-500">Lic #{brandConfig.fssaiLicenseNumber}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-4">
                Both QR codes are extracted directly from genuine bottle artwork.
              </p>
            </div>

          </div>
        </div>

        {/* Storage & Handling Instructions (Verbatim from Label) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <AlertCircle className="w-5 h-5 text-blue-700" />
            <h3 className="text-lg font-black text-slate-900">Official Storage & Handling Instructions</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Wind className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Serve Chilled</h4>
              <p className="text-[11px] text-slate-600">Enjoy chilled for peak crispness and refreshing mineral mouthfeel.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sun className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Avoid Direct Sunlight</h4>
              <p className="text-[11px] text-slate-600">Store away from UV exposure and intense heat sources.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Cool & Clean Place</h4>
              <p className="text-[11px] text-slate-600">Keep in a hygienic, well-ventilated, odor-free storage area.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                <Ban className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Tamper-Seal Check</h4>
              <p className="text-[11px] text-slate-600">Do not accept the product if the cap seal is broken or tampered with.</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
            <span><strong>Shelf Life:</strong> Best before 6 months from the date of packing.</span>
            <span><strong>Environmental Care:</strong> Crush the bottle after use to assist recycling.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
