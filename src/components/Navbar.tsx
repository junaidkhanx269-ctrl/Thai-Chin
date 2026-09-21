import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu as MenuIcon, X, MapPin, Instagram, Flame, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOrderWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C1272D]/30 shadow-2xl">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#8B0000] via-[#C1272D] to-[#8B0000] text-amber-100 text-xs py-1.5 px-4 text-center font-medium tracking-wider flex items-center justify-center gap-2 border-b border-amber-400/20">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-ping" />
        <span className="font-semibold text-white">OPEN FOR DINE-IN &amp; DELIVERY:</span> Kings Street, Scheme 33, Karachi | 5:00 PM – 2:00 AM
        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline font-bold hover:text-white transition-colors"
        >
          Order Now
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C1272D] to-[#5a0f12] border border-[#FFD700]/40 flex items-center justify-center shadow-lg shadow-[#C1272D]/20 group-hover:border-[#FFD700] transition-colors relative">
              <span className="font-asian text-2xl text-[#FFD700] font-bold">泰</span>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#FFD700] flex items-center justify-center">
                <Flame className="w-2.5 h-2.5 text-[#0A0A0A]" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-cinzel text-2xl font-bold tracking-wider text-white group-hover:text-[#FFD700] transition-colors">
                  THAI CHIN
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#C1272D]/40 text-[#FFD700] border border-[#FFD700]/30 font-asian font-medium">
                  食府
                </span>
              </div>
              <p className="text-[11px] text-stone-400 tracking-wider uppercase font-medium">
                Satisfy your hunger for Chinese food
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-[#FFD700] text-sm font-medium transition-colors relative py-1 hover:border-b-2 hover:border-[#C1272D]"
              >
                {link.name}
              </a>
            ))}
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-pink-400 text-xs flex items-center gap-1 transition-colors"
              title="Instagram @thaichinone"
            >
              <Instagram className="w-4 h-4" />
              <span>@thaichinone</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Call Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneTel}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-900/90 text-stone-200 border border-stone-800 hover:border-[#FFD700]/50 text-xs font-semibold hover:text-[#FFD700] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>0304 1363224</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              id="navbar-cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-[#C1272D] text-stone-200 hover:text-white transition-colors"
              title="View Order Tray"
            >
              <ShoppingBag className="w-5 h-5 text-[#FFD700]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#C1272D] text-white text-[11px] font-bold flex items-center justify-center border border-black shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary WhatsApp Order CTA */}
            <button
              id="navbar-whatsapp-cta"
              onClick={onOrderWhatsApp}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#C1272D] to-[#991B1E] hover:from-[#d62c33] hover:to-[#b32024] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#C1272D]/30 border border-[#FFD700]/30 hover:border-[#FFD700] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 text-[#FFD700]" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger & cart */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-200"
              aria-label="Order Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#FFD700]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C1272D] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F0F0F] border-b border-[#C1272D]/40 px-5 py-5 space-y-4">
          <div className="flex flex-col space-y-3 pb-3 border-b border-stone-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-[#FFD700] text-base font-medium py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-pink-400 text-sm flex items-center gap-2 py-1"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram @thaichinone</span>
            </a>
          </div>

          <div className="space-y-2.5 pt-1">
            <a
              href={`tel:${RESTAURANT_INFO.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#FFD700]" />
              <span>Call 0304 1363224</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOrderWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#C1272D] to-[#8B0000] text-white text-sm font-bold uppercase tracking-wider shadow-lg border border-[#FFD700]/40"
            >
              <MessageCircle className="w-4 h-4 text-[#FFD700]" />
              <span>Order on WhatsApp Now</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C1272D]" />
              <span>Kings Street Scheme 33, Karachi</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
