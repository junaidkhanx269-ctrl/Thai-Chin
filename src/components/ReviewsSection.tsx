import React from 'react';
import { Star, CheckCircle2, MessageCircle, Quote, ThumbsUp } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#0A0A0A] relative border-b border-[#C1272D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Banner: 100% Recommend */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Prominent 100% Recommend Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C1272D]/30 via-red-900/40 to-[#C1272D]/30 border-2 border-[#FFD700] shadow-xl shadow-[#C1272D]/20 mb-4">
            <ThumbsUp className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm sm:text-base font-extrabold text-[#FFD700] uppercase tracking-wider">
              100% Recommend
            </span>
            <span className="text-stone-500">•</span>
            <div className="flex items-center gap-1 text-[#FFD700]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFD700]" />
              ))}
            </div>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide mb-4">
            Scheme 33 Customer Love
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            From Kings Cottages to Saadi Town, food enthusiasts across Scheme 33 and Karachi trust Thai Chin for authentic high-fire Chinese flavors.
          </p>
        </div>

        {/* Aggregate Stats Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14 text-center">
          <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-[#FFD700] block">
              100%
            </span>
            <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider mt-1 block">
              Recommendation Rate
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-[#C1272D] block">
              5.0 ★
            </span>
            <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider mt-1 block">
              Customer Satisfaction
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-white block">
              35 Min
            </span>
            <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider mt-1 block">
              Avg Scheme 33 Delivery
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800">
            <span className="font-cinzel text-3xl sm:text-4xl font-black text-amber-300 block">
              15K+
            </span>
            <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider mt-1 block">
              Wok Dishes Served
            </span>
          </div>
        </div>

        {/* Reviews Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-stone-900/95 to-[#141414] border border-stone-800 hover:border-[#C1272D]/50 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Subtle quote watermark */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-stone-800/60 pointer-events-none" />

              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-[#FFD700]">5.0</span>
                  </div>

                  {review.verifiedCustomer && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-green-400 bg-green-950/60 border border-green-800/40 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Foodie
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-stone-300 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel font-bold text-white text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-stone-400">{review.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">
                    Favorite Dish
                  </span>
                  <span className="text-xs font-semibold text-[#FFD700]">
                    {review.favoriteDish}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Feedback CTA */}
        <div className="mt-12 text-center">
          <a
            href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Assalam-o-Alaikum Thai Chin! I recently tried your food and wanted to share my feedback.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 hover:border-[#FFD700]/50 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#FFD700]" />
            <span>Share Your Dining Review on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
