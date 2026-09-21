import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';
import { X, ZoomIn, Camera, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mains' | 'noodles' | 'appetizers' | 'sizzlers'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) =>
    activeFilter === 'all' ? true : photo.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 bg-[#0A0A0A] relative border-b border-[#C1272D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C1272D]/20 border border-[#C1272D]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Feast for Your Eyes</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide mb-4">
            Culinary Gallery
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Take a visual tour through our fiery wok kitchens, crisp hand-folded wontons, sizzling cast iron platters, and authentic Chinese specialties at Kings Street Scheme 33.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {(['all', 'mains', 'noodles', 'appetizers', 'sizzlers'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeFilter === filter
                    ? 'bg-[#C1272D] text-white border-[#FFD700]/70 shadow-md'
                    : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white hover:border-stone-700'
                }`}
              >
                {filter === 'all' ? 'All Visuals' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800/80 hover:border-[#C1272D] cursor-pointer transition-all duration-300 shadow-lg"
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Badge Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-wider bg-[#C1272D]/60 px-2 py-0.5 rounded border border-[#FFD700]/20 inline-block mb-1.5">
                  {photo.category}
                </span>
                <h4 className="font-cinzel text-base font-bold text-white group-hover:text-[#FFD700] transition-colors leading-tight">
                  {photo.title}
                </h4>
                <p className="text-xs text-stone-300/80 line-clamp-2 mt-1 leading-snug">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121212] rounded-2xl overflow-hidden border border-[#C1272D]/50 shadow-2xl"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-stone-300 hover:text-white border border-stone-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              <div className="p-6 bg-gradient-to-r from-stone-900 to-[#180a0b] border-t border-stone-800">
                <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">
                  {activePhoto.category} • Authentic Karachi Chinese
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white mt-1 mb-2">
                  {activePhoto.title}
                </h3>
                <p className="text-sm text-stone-300">{activePhoto.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
