/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { StickyWhatsAppCTA } from './components/StickyWhatsAppCTA';
import { OrderDrawer } from './components/OrderDrawer';
import { MenuItem, CartItem } from './types';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);

  const totalCartCount = useMemo(
    () => cartItems.reduce((total, ci) => total + ci.quantity, 0),
    [cartItems]
  );

  const cartItemIds = useMemo(
    () => new Set(cartItems.map((ci) => ci.item.id)),
    [cartItems]
  );

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenCartOrDirectWhatsApp = () => {
    // If user has dishes selected, open order drawer
    // If not, open drawer so they can fill order or browse, or link to WhatsApp
    setIsOrderDrawerOpen(true);
  };

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-stone-100 selection:bg-[#C1272D] selection:text-white relative">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
        onOrderWhatsApp={handleOpenCartOrDirectWhatsApp}
      />

      {/* Hero Section */}
      <Hero
        onOrderWhatsApp={handleOpenCartOrDirectWhatsApp}
        onExploreMenu={handleScrollToMenu}
      />

      {/* About & High-Fire Wok Quality */}
      <AboutSection />

      {/* Full Chinese Menu with Prices $$ */}
      <MenuSection
        onAddToCart={handleAddToCart}
        cartItemIds={cartItemIds}
      />

      {/* Culinary Visual Gallery */}
      <GallerySection />

      {/* Verified Reviews (100% Recommend) */}
      <ReviewsSection />

      {/* Instagram Feed @thaichinone */}
      <InstagramSection />

      {/* Contact, Scheme 33 Delivery & Kings Street Google Map */}
      <ContactLocationSection />

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Order Button (Floating Desktop + Sticky Mobile Bar) */}
      <StickyWhatsAppCTA
        cartCount={totalCartCount}
        onOpenCart={handleOpenCartOrDirectWhatsApp}
      />

      {/* Interactive WhatsApp Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

