import React from 'react';
import { Flame, MapPin, Phone, Instagram, MessageCircle, Clock, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] text-stone-300 border-t border-[#C1272D]/30 pt-16 pb-24 sm:pb-16 relative">
      {/* Decorative top border accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C1272D] to-[#5a0f12] border border-[#FFD700]/40 flex items-center justify-center">
                <span className="font-asian text-xl text-[#FFD700] font-bold">泰</span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                  THAI CHIN
                </span>
                <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded bg-[#C1272D]/40 text-[#FFD700] border border-[#FFD700]/30 font-asian">
                  食府
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#FFD700] font-cinzel">
              "{RESTAURANT_INFO.tagline}"
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              Scheme 33’s premier destination for high-heat wok tossing, authentic Indo-Chinese sauces, sizzling beef platters, and generous family servings.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-pink-400 hover:border-pink-500 transition-colors"
                title="Instagram @thaichinone"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-green-400 hover:border-green-500 transition-colors"
                title="WhatsApp Order"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneTel}`}
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#FFD700] hover:border-[#FFD700] transition-colors"
                title="Call 0304 1363224"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-[#FFD700] transition-colors">
                  Chinese Menu &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFD700] transition-colors">
                  Authentic Wok Quality
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFD700] transition-colors">
                  Culinary Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FFD700] transition-colors">
                  Verified Reviews (100% Recommend)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FFD700] transition-colors">
                  Kings Street Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-2">
              Contact &amp; Orders
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C1272D] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFD700] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneTel}`} className="text-white hover:text-[#FFD700] font-semibold">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  {RESTAURANT_INFO.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300"
                >
                  https://wa.me/923041363224
                </a>
              </li>
            </ul>
          </div>

          {/* Timings & Delivery */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-stone-800 pb-2">
              Kitchen Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Dine-in &amp; Takeaway</span>
                  <span>5:00 PM – 2:00 AM (Monday to Sunday)</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-[11px]">
                <span className="text-green-400 font-bold block">Doorstep Delivery</span>
                <span>Fast dispatch to Scheme 33, Saadi Town, Kings Cottages &amp; nearby societies.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Thai Chin Restaurant. All rights reserved. Kings Street, Scheme 33, Karachi.</p>
          <div className="flex items-center gap-2 text-stone-400">
            <span>Dark Premium Chinese Cuisine</span>
            <span>•</span>
            <span className="text-[#FFD700]">100% Halal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
