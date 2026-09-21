import React from 'react';
import { Flame, ShieldCheck, Clock, Award, Sparkles, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0E0E0E] relative border-b border-[#C1272D]/20 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C1272D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text / Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1272D]/20 border border-[#C1272D]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Craft Behind Thai Chin</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
              Where High-Fire Wok Hei Meets Karachi Palates
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Founded on Kings Street in the heart of Scheme 33, <strong className="text-white">Thai Chin</strong> was created with one singular obsession: to <span className="text-[#FFD700] font-semibold">satisfy your hunger for Chinese food</span> without compromise.
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              We blast our heavy iron woks above 1,000°F, creating the distinctive caramelized smokiness known as <em>wok hei</em> ("breath of the wok"). From the tender, garlic-strewn Beef Chilli Dry to velvety Hot &amp; Sour broth and crispy wonton parcels, every recipe is made to order — never pre-cooked.
            </p>

            {/* Quality Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C1272D]/20 border border-[#C1272D]/50 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-[#C1272D]" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-white">Roaring Wok Flames</h4>
                  <p className="text-xs text-stone-400 mt-0.5">High-heat stir fry sealing in nutrients, crunch, and authentic smokiness.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-white">100% Halal Meats</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Finest prime cuts of undercut beef, fresh boneless chicken, and succulent seafood.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C1272D]/40 shadow-2xl bg-stone-950">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                alt="Beef Chilli Dry Wok Cooking"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Floating Stat card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-stone-900/90 border border-[#FFD700]/30 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-semibold">
                    Location
                  </span>
                  <span className="font-cinzel text-sm font-bold text-[#FFD700]">
                    KINGS STREET Scheme 33
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-semibold">
                    Hotline
                  </span>
                  <span className="text-xs font-bold text-white">
                    {RESTAURANT_INFO.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Corner Asian Seal */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-[#C1272D] border-2 border-[#FFD700] flex items-center justify-center shadow-lg transform -rotate-6">
              <span className="font-asian text-[#FFD700] text-xl font-bold">泰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
