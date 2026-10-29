import React, { useState } from 'react';
import { brandConfig } from '../config/brandConfig';
import { MessageSquare, Phone, Mail, MapPin, CheckCircle2, Truck } from 'lucide-react';

export const DistributorSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    variantInterest: 'Both (500ml & 1L)',
    estimatedQuantity: '100-500 Crates/Month',
    message: ''
  });

  const [formSentNotice, setFormSentNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent, channel: 'whatsapp' | 'email') => {
    e.preventDefault();

    const summaryText = `*New Distributor Enquiry for APEX Water*
*Name:* ${formData.fullName || 'Not specified'}
*Business:* ${formData.businessName || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Location/City:* ${formData.city || 'Not specified'}
*Interested Variant:* ${formData.variantInterest}
*Estimated Volume:* ${formData.estimatedQuantity}
*Notes:* ${formData.message || 'Interested in partnership'}`;

    if (channel === 'whatsapp') {
      const waUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(summaryText)}`;
      window.open(waUrl, '_blank');
    } else {
      const subject = `Distributor Enquiry: ${formData.businessName || formData.fullName || 'New Partner'}`;
      const mailtoUrl = `mailto:${brandConfig.contact.primaryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summaryText)}`;
      window.location.href = mailtoUrl;
    }

    setFormSentNotice(true);
  };

  return (
    <section id="distributor" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-cyan-300 border border-blue-400/30 mb-3">
            <Truck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Distribution & Retail Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Partner with APEX Premium Water
          </h2>
          <p className="text-base text-blue-100/80 mt-3 leading-relaxed">
            We are expanding distribution across Hyderabad, Telangana, and nationwide. Connect directly with our distribution team for wholesale pricing, retail stocking, and dealership terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Direct Contact Desk
              </h3>
              
              <p className="text-xs text-blue-200 leading-relaxed">
                As published on our official bottle packaging, all distributor, dealership, and wholesale orders are routed through the official communications desk.
              </p>

              {/* Verified Contact Items */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=Hello%20Apex%20Water%20Team%2C%20I%20am%20interested%20in%20becoming%20a%20distributor.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                      Fastest Response
                    </span>
                    <span className="text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Message
                    </span>
                    <span className="text-xs text-emerald-100 block">Tap to chat with distribution desk</span>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${brandConfig.contact.primaryPhone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">
                      Direct Telephone
                    </span>
                    <span className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {brandConfig.contact.displayPhone}
                    </span>
                    <span className="text-xs text-blue-200 block">Available during commercial hours</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${brandConfig.contact.primaryEmail}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                      Official Enquiries
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-indigo-200 transition-colors break-all">
                      {brandConfig.contact.primaryEmail}
                    </span>
                    <span className="text-xs text-blue-200 block">For formal RFPs & corporate purchase orders</span>
                  </div>
                </a>

                {/* Verified Facility Address */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Manufacturing & Packing Facility</span>
                  </div>
                  <p className="text-white font-bold">{brandConfig.manufacturer.companyName}</p>
                  <p className="text-blue-100/80 leading-relaxed">
                    {brandConfig.manufacturer.address}
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Direct Submission Form (Transfers directly to WhatsApp / Email) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
              
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  Quick Inquiry Dispatch
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Submit Distributor Request
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your requirements below. Your details will be formatted directly into a ready-to-send WhatsApp message or formal email. No data is stored on third-party servers.
                </p>
              </div>

              {formSentNotice && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-900 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Enquiry Prepared!</strong>
                    <span>Your request has been compiled. If your WhatsApp or Email client didn't open automatically, use the direct buttons on the left.</span>
                  </div>
                </div>
              )}

              <form className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Enterprises / Mart"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      City & State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hyderabad, Telangana"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Bottle Size of Interest
                    </label>
                    <select
                      value={formData.variantInterest}
                      onChange={(e) => setFormData({ ...formData, variantInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                    >
                      <option>Both (500ml & 1L)</option>
                      <option>500ml Compact</option>
                      <option>1 Liter Standard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Monthly Volume
                    </label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                    >
                      <option>100-500 Crates/Month</option>
                      <option>500-2,000 Crates/Month</option>
                      <option>2,000+ Crates (Regional Dealership)</option>
                      <option>Event / Institutional One-Time Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your distribution reach, retail stores, or hotel supply needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  />
                </div>

                {/* Submission Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, 'whatsapp')}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, 'email')}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
