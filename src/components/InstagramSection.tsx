import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0E0E0E] relative border-b border-[#C1272D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Instagram className="w-4 h-4" />
              <span>Official Instagram Feed</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
              Follow {RESTAURANT_INFO.instagramHandle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Catch daily kitchen sizzles, secret chef specials, customer stories, and scheme 33 events.
            </p>
          </div>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-pink-600 to-rose-500 hover:from-purple-600 hover:to-rose-400 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-pink-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
            <span>Visit @thaichinone</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Visual Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-pink-500/60 transition-all duration-300 shadow-md block"
            >
              <img
                src={post.image}
                alt="Instagram post preview"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Instagram Icon watermark */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/90">
                <Instagram className="w-4 h-4 text-pink-400" />
              </div>

              {/* Caption & Stats Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="text-xs text-stone-200 line-clamp-2 mb-3 leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center gap-4 text-xs font-semibold text-stone-300">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-stone-400" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
