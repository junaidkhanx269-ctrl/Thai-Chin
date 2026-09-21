import React from 'react';
import { MessageCircle, Utensils, Star, MapPin, Phone, Clock, Flame, Award, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOrderWhatsApp: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderWhatsApp, onExploreMenu }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-[#C1272D]/30 pt-8 pb-16">
      {/* Dark luxury atmospheric backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=85"
          alt="Thai Chin Wok Cooking"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
        />
        {/* Gradients to blend into #0A0A0A */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C1272D]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-transparent to-transparent" />
      </div>

      {/* Decorative Traditional Asian Corner Motifs & Border lines */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#FFD700]/30 hidden md:block pointer-events-none" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-[#FFD700]/30 hidden md:block pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[#FFD700]/30 hidden md:block pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#FFD700]/30 hidden md:block pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-stone-900/90 border border-[#FFD700]/40 shadow-xl mb-6 backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#C1272D]" />
            Kings Street Scheme 33, Karachi
          </span>
          <span className="hidden sm:inline-block text-stone-600">•</span>
          <span className="flex items-center gap-1 text-xs font-bold text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            100% Recommend (5.0 ★)
          </span>
        </div>

        {/* Brand Chinese Name Seal */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#FFD700]/60" />
          <span className="font-asian text-[#C1272D] text-lg sm:text-2xl font-bold tracking-widest bg-stone-900/80 px-4 py-1 rounded-md border border-[#C1272D]/40">
            泰中食府
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#FFD700]/60" />
        </div>

        {/* Main Hero Headline */}
        <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Authentic Chinese <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-amber-200 to-[#FFD700]">
            in Scheme 33
          </span>
        </h1>

        {/* Brand Tagline & Subtitle */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3">
          <p className="text-xl sm:text-2xl font-semibold text-[#FFD700] tracking-wide font-cinzel">
            "{RESTAURANT_INFO.tagline}"
          </p>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Karachi’s finest wok-tossed Beef Chilli Dry, sizzling platters, steaming soups, and crispy wontons. Prepared fresh over roaring wok flames at Kings Street.
          </p>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          {/* Primary CTA: Order on WhatsApp Now */}
          <button
            id="hero-whatsapp-btn"
            onClick={onOrderWhatsApp}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C1272D] via-[#a81c22] to-[#8B0000] hover:from-[#d92c34] hover:to-[#a11b20] text-white text-base font-bold uppercase tracking-wider shadow-2xl shadow-[#C1272D]/50 border-2 border-[#FFD700]/60 hover:border-[#FFD700] transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-[#FFD700] fill-[#FFD700]/20" />
            <span>Order on WhatsApp Now</span>
          </button>

          {/* Secondary CTA: Explore Menu */}
          <button
            id="hero-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-100 hover:text-[#FFD700] text-base font-semibold border border-stone-700 hover:border-[#FFD700]/50 transition-all"
          >
            <Utensils className="w-4 h-4 text-[#FFD700]" />
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </button>
        </div>

        {/* Fast Value Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-sm hover:border-[#C1272D]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#FFD700] font-bold text-sm mb-1">
              <Flame className="w-4 h-4 text-[#C1272D]" />
              <span>Authentic Wok Hei</span>
            </div>
            <p className="text-xs text-stone-400">High-fire tossed for authentic smoky aroma and crunch.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-sm hover:border-[#C1272D]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#FFD700] font-bold text-sm mb-1">
              <Award className="w-4 h-4 text-[#FFD700]" />
              <span>100% Recommend</span>
            </div>
            <p className="text-xs text-stone-400">Beloved by Scheme 33 residents with 5-star customer ratings.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-sm hover:border-[#C1272D]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#FFD700] font-bold text-sm mb-1">
              <Clock className="w-4 h-4 text-[#C1272D]" />
              <span>5:00 PM – 2:00 AM</span>
            </div>
            <p className="text-xs text-stone-400">Dinner &amp; late night Chinese hunger cravings satisfied.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800/80 backdrop-blur-sm hover:border-[#C1272D]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#FFD700] font-bold text-sm mb-1">
              <Phone className="w-4 h-4 text-[#FFD700]" />
              <span>0304 1363224</span>
            </div>
            <p className="text-xs text-stone-400">Direct hotline for fast takeaway and doorstep delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
