import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Send, Navigation, ShieldCheck, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactLocationSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryType, setInquiryType] = useState('Home Delivery Order');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleQuickWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted =
      `*Thai Chin Inquiry from Website:*\n` +
      `*Name:* ${inquiryName.trim() || 'Food Lover'}\n` +
      `*Type:* ${inquiryType}\n` +
      `*Message:* ${inquiryMessage.trim() || 'I want to place an order / inquire about Thai Chin Kings Street Scheme 33.'}\n\n` +
      `Please reply with details.`;

    window.open(`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent(formatted)}`, '_blank');
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const deliveryAreas = [
    'Kings Cottages',
    'Sector 17-A & 17-B',
    'Saadi Town',
    'Gulzar-e-Hijri',
    'Kiran Hospital Road',
    'Malir Cantt Link',
    'Al-Azhar Garden',
    'Chapal Sun City',
    'Gohar Green City',
    'Metrovil Colony',
  ];

  return (
    <section id="location" className="py-20 bg-[#0A0A0A] relative border-b border-[#C1272D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C1272D]/20 border border-[#C1272D]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C1272D]" />
            <span>Visit Us or Order Delivery</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide mb-4">
            Kings Street, Scheme 33
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated on the bustling Kings Street food corridor in Scheme 33, Karachi.
            Dine-in, pick up takeaway, or enjoy lightning-fast doorstep delivery to your home.
          </p>
        </div>

        {/* Main Grid: Info Cards + Google Map + Quick WhatsApp Inquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Delivery Areas (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Address Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-[#160a0b] border border-[#C1272D]/40 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C1272D] flex items-center justify-center shrink-0 border border-[#FFD700]/30">
                  <MapPin className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white mb-1">
                    {RESTAURANT_INFO.location}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD700] hover:underline mt-2.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center border border-stone-700">
                    <Phone className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider block font-semibold">
                      Direct Hotline
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneTel}`}
                      className="text-lg font-bold text-white hover:text-[#FFD700] transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhoneNumber}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs font-medium border border-stone-700 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400 inline" /> : 'Copy'}
                </button>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                id="contact-whatsapp-direct-btn"
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-[#C1272D] to-[#991B1E] hover:from-[#d62c33] text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-[#FFD700]/30 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#FFD700]" />
                <span>Chat on WhatsApp: 0304 1363224</span>
              </a>
            </div>

            {/* Timings Card */}
            <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center border border-stone-700 shrink-0">
                <Clock className="w-5 h-5 text-[#C1272D]" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] text-stone-400 uppercase tracking-wider block font-semibold">
                  Operating Hours
                </span>
                <p className="text-sm font-bold text-stone-100">{RESTAURANT_INFO.openingHours}</p>
                <p className="text-xs text-stone-400">Home Delivery until 1:30 AM every night</p>
              </div>
            </div>

            {/* Delivery Coverage Areas */}
            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C1272D]" />
                <span>Fast Delivery Across Scheme 33</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {deliveryAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-md bg-stone-950 text-stone-300 text-xs border border-stone-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Map + Quick Inquiry (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden bg-stone-900 border-2 border-[#C1272D]/30 shadow-2xl relative">
              <div className="p-3 bg-stone-900 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <MapPin className="w-4 h-4 text-[#C1272D]" />
                  <span className="font-bold text-white">Kings Street Scheme 33, Karachi</span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFD700] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              <div className="h-72 sm:h-80 w-full relative">
                <iframe
                  title="Kings Street Scheme 33 Karachi Location Map"
                  src={RESTAURANT_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-stone-950 text-center text-xs text-stone-400 border-t border-stone-800">
                Landmarks: Opposite Sector 17-A Commercial, accessible via University Road &amp; Super Highway link.
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Form */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-[#141414] border border-stone-800 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-[#FFD700]" />
                <h3 className="font-cinzel text-lg font-bold text-white">
                  Instant Message to WhatsApp Dispatch
                </h3>
              </div>

              <form onSubmit={handleQuickWhatsAppSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-[#C1272D] text-xs text-stone-100 outline-none"
                  />
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-[#C1272D] text-xs text-stone-200 outline-none"
                  >
                    <option value="Home Delivery Order">Home Delivery Order</option>
                    <option value="Takeaway Pickup">Takeaway Pickup</option>
                    <option value="Table Reservation">Dine-in Table Booking</option>
                    <option value="Party Catering">Party / Catering Inquiry</option>
                  </select>
                </div>

                <textarea
                  rows={2}
                  placeholder="What would you like to ask or order? (e.g. Beef Chilli Dry + Chow Mein delivery to Saadi Town)"
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-[#C1272D] text-xs text-stone-100 outline-none"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#C1272D] via-[#a81c22] to-[#8B0000] hover:from-[#d62c34] text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-[#FFD700]/30 transition-all"
                >
                  <Send className="w-4 h-4 text-[#FFD700]" />
                  <span>Send Direct WhatsApp Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
