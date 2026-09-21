import React, { useState, useMemo } from 'react';
import { Search, Flame, Plus, Check, MessageCircle, Sparkles, Filter } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Set<string>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Dishes');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBestsellerOnly, setFilterBestsellerOnly] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Dishes' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBestseller = !filterBestsellerOnly || item.isBestseller;

      return matchesCategory && matchesSearch && matchesBestseller;
    });
  }, [selectedCategory, searchQuery, filterBestsellerOnly]);

  const handleAddItem = (item: MenuItem) => {
    onAddToCart(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => setRecentlyAddedId(null), 1200);
  };

  const handleDirectWhatsAppItem = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Thai Chin!\nI want to order:\n• 1x ${item.name} (Rs. ${item.price})\n\nDelivery to Scheme 33, Karachi.\nPlease confirm availability and total bill.`
    );
    window.open(`${RESTAURANT_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  const getSpiceBadge = (level: number) => {
    if (level === 0) return null;
    return (
      <span className="flex items-center gap-0.5 text-[11px] font-semibold text-red-400 bg-red-950/60 border border-red-900/50 px-2 py-0.5 rounded-full">
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} className="w-3 h-3 text-[#C1272D] fill-[#C1272D]" />
        ))}
        <span className="ml-0.5">{level === 1 ? 'Mild' : level === 2 ? 'Spicy' : 'Fiery Hot'}</span>
      </span>
    );
  };

  return (
    <section id="menu" className="py-20 bg-[#0A0A0A] relative border-b border-[#C1272D]/20">
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C1272D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1272D]/20 border border-[#C1272D]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Chef Selection</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide mb-4">
            Our Chinese Menu
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Freshly prepared with authentic Chinese wok techniques, generous servings, and premium meats.
            Satisfy your hunger with Scheme 33’s finest culinary creations.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#FFD700]">
            <span className="font-semibold">Price Range: $$</span>
            <span>•</span>
            <span className="text-stone-400">All prices in Pakistani Rupees (PKR)</span>
            <span>•</span>
            <span className="text-green-400 font-medium">100% Halal Certified</span>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search soups, beef chilli dry, chow mein, chicken sizzler..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900 border border-stone-800 focus:border-[#C1272D] focus:ring-1 focus:ring-[#C1272D] text-sm text-stone-100 placeholder-stone-500 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white px-1.5 py-0.5 rounded bg-stone-800"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Bestsellers Quick Toggle */}
            <button
              onClick={() => setFilterBestsellerOnly(!filterBestsellerOnly)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap ${
                filterBestsellerOnly
                  ? 'bg-[#C1272D] border-[#FFD700] text-white shadow-lg shadow-[#C1272D]/30'
                  : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${filterBestsellerOnly ? 'text-[#FFD700]' : 'text-stone-400'}`} />
              <span>Bestsellers Only</span>
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedCategory === category
                    ? 'bg-[#C1272D] text-white border-[#FFD700]/70 shadow-md shadow-[#C1272D]/20'
                    : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-stone-900/40 rounded-2xl border border-stone-800">
            <Filter className="w-10 h-10 text-stone-600 mx-auto mb-3" />
            <p className="text-stone-300 font-semibold text-base mb-1">No dishes match your search</p>
            <p className="text-stone-500 text-xs mb-4">Try searching for other dishes like Beef Chilli, Chow Mein, or Soup</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Dishes');
                setFilterBestsellerOnly(false);
              }}
              className="px-4 py-2 rounded-lg bg-stone-800 text-xs text-[#FFD700] font-semibold hover:bg-stone-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inCart = cartItemIds.has(item.id);
              const isJustAdded = recentlyAddedId === item.id;

              return (
                <div
                  key={item.id}
                  id={`dish-${item.id}`}
                  className="group rounded-2xl bg-gradient-to-b from-stone-900/90 to-[#121212] border border-stone-800/80 hover:border-[#C1272D]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#C1272D]/10"
                >
                  {/* Dish Image Container */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

                    {/* Tags Over Image */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.isBestseller && (
                        <span className="px-2.5 py-1 rounded-md bg-[#C1272D] text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1 border border-[#FFD700]/30">
                          <Flame className="w-3 h-3 text-[#FFD700] fill-[#FFD700]" />
                          Bestseller
                        </span>
                      )}
                      {item.isChefSpecial && (
                        <span className="px-2.5 py-1 rounded-md bg-stone-900/90 text-[#FFD700] text-[11px] font-bold tracking-wider uppercase border border-[#FFD700]/50 backdrop-blur-md">
                          Chef Special
                        </span>
                      )}
                    </div>

                    {/* Spice Level Badge */}
                    <div className="absolute top-3 right-3">
                      {getSpiceBadge(item.spiceLevel)}
                    </div>

                    {/* Chinese Subtitle over image bottom */}
                    {item.chineseName && (
                      <div className="absolute bottom-2 left-3 text-stone-300/80 text-xs font-asian tracking-widest">
                        {item.chineseName}
                      </div>
                    )}
                  </div>

                  {/* Dish Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 mb-2 text-xs text-stone-400">
                        <span className="text-amber-300/90 font-medium">{item.portion}</span>
                        <span>•</span>
                        <span className="text-stone-500">{item.category}</span>
                      </div>

                      <p className="text-xs text-stone-300/90 line-clamp-3 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Price & Actions */}
                    <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] text-stone-400 block font-medium">Price</span>
                        <span className="text-lg font-extrabold text-[#FFD700]">
                          Rs. {item.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* 1-Click WhatsApp Direct */}
                        <button
                          onClick={() => handleDirectWhatsAppItem(item)}
                          className="p-2 rounded-lg bg-stone-800/80 hover:bg-green-950/70 border border-stone-700 hover:border-green-600 text-stone-300 hover:text-green-400 transition-colors"
                          title="Instant WhatsApp message for this item"
                        >
                          <MessageCircle className="w-4 h-4 text-green-400" />
                        </button>

                        {/* Add to WhatsApp Order Tray */}
                        <button
                          onClick={() => handleAddItem(item)}
                          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                            isJustAdded
                              ? 'bg-green-600 text-white shadow-lg'
                              : inCart
                              ? 'bg-stone-800 text-[#FFD700] border border-[#FFD700]/50 hover:bg-[#C1272D] hover:text-white'
                              : 'bg-[#C1272D] hover:bg-[#d62c33] text-white shadow-md shadow-[#C1272D]/20'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>{inCart ? 'Add More' : 'Add to Order'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Menu Help Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-stone-900 via-[#1c0809] to-stone-900 border border-[#C1272D]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-xl">
          <div>
            <h4 className="font-cinzel text-lg font-bold text-white mb-1">
              Have a special custom order or family gathering?
            </h4>
            <p className="text-xs text-stone-300">
              We cater for Scheme 33 birthday parties, family dinners, and midnight cravings. Customize spice level, gravies, and portion sizes directly with our chef.
            </p>
          </div>
          <a
            href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Assalam-o-Alaikum Thai Chin! I want to inquire about custom orders / catering for a gathering in Scheme 33, Karachi.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C1272D] to-[#8B0000] hover:from-[#d62c33] text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-[#FFD700]/30 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#FFD700]" />
            <span>Chat With Chef on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
