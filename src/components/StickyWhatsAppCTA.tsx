import React from 'react';
import { MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface StickyWhatsAppCTAProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const StickyWhatsAppCTA: React.FC<StickyWhatsAppCTAProps> = ({ cartCount, onOpenCart }) => {
  return (
    <>
      {/* Desktop & Tablet Floating Button (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <div className="relative group">
          {/* Pulsing Ember Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C1272D] to-[#FFD700] opacity-75 blur-md group-hover:opacity-100 transition-opacity animate-pulse" />

          <button
            id="sticky-whatsapp-desktop-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#0E0E0E] text-white border-2 border-[#FFD700] shadow-2xl hover:bg-[#C1272D] transition-all transform hover:scale-105 active:scale-95"
            title="Order on WhatsApp Now"
          >
            <div className="w-9 h-9 rounded-full bg-[#C1272D] flex items-center justify-center text-white border border-[#FFD700]/50 relative shrink-0">
              <MessageCircle className="w-5 h-5 text-[#FFD700] fill-[#FFD700]/30" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#FFD700] text-[#0A0A0A] text-[11px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <div className="text-left pr-1">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold block">
                {cartCount > 0 ? `${cartCount} Dishes in Tray` : 'Scheme 33 Delivery'}
              </span>
              <span className="font-cinzel text-sm font-bold text-white group-hover:text-[#FFD700] transition-colors whitespace-nowrap">
                Order on WhatsApp Now
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar (Mobile First) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg border-t-2 border-[#C1272D]/50 p-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {cartCount > 0 && (
            <button
              onClick={onOpenCart}
              className="p-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 relative shrink-0"
              aria-label="View Tray"
            >
              <ShoppingBag className="w-5 h-5 text-[#FFD700]" />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#C1272D] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}

          <button
            id="sticky-whatsapp-mobile-btn"
            onClick={onOpenCart}
            className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C1272D] via-[#a81c22] to-[#8B0000] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#C1272D]/40 border border-[#FFD700]/60 active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#FFD700] fill-[#FFD700]/30" />
            <span>Order on WhatsApp Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-300" />
          </button>
        </div>
      </div>
    </>
  );
};
