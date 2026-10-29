import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { X, ShieldCheck, CheckCircle, HelpCircle } from 'lucide-react';

interface OwnerChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerChecklistModal: React.FC<OwnerChecklistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 leading-tight">
                Brand & Label Verification Checklist
              </h3>
              <p className="text-xs text-slate-500">
                Source of Truth: APEX 1L & 500ml High-Quality Label Artwork
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <CheckCircle className="w-4 h-4 text-blue-700" />
              <span>Strict Data Integrity Principle</span>
            </div>
            <p>
              In accordance with senior digital brand guidelines, all statements, contact numbers, licence codes, and addresses on this site are extracted verbatim from the physical packaging artwork. No fictitious certificates or unverified data are published.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Verification Status by Item
            </h4>

            {brandConfig.ownerVerificationChecklist.map((item, idx) => {
              const isVerified = item.status === 'Verified from Label';
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900">{item.item}</span>
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        isVerified
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-amber-100 text-amber-800 border border-amber-300'
                      }`}
                    >
                      {isVerified ? (
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <HelpCircle className="w-3 h-3 text-amber-600" />
                      )}
                      <span>{item.status}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600">{item.notes}</p>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <span className="font-bold text-slate-900 block">Owner Action Points for Next Phase:</span>
            <ul className="list-disc list-inside space-y-1 text-[11px]">
              <li>Confirm if BIS ISI CM/L number is to be placed alongside FSSAI number.</li>
              <li>Confirm designated Indian Army Welfare Fund recipient name (e.g. Armed Forces Flag Day Fund).</li>
              <li>Provide minimum crate order quantities and dealership territory tiers.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">Official Brand Portal: apexpremiumwater.com</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow transition-colors"
          >
            Close & Continue Browsing
          </button>
        </div>

      </div>
    </div>
  );
};
