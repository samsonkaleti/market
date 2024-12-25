import React from 'react';
import { MapPin, Calendar, Tag } from 'lucide-react';

export const MarketHeader = ({ market }) => {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl">
      <img
        src={market.imagePath}
        alt={market.crop}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="text-4xl font-bold text-white mb-4">{market.crop}</h1>
        <div className="flex flex-wrap gap-4 text-white/90">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{market.location}</span>
          </div>
          <div className="flex items-center">
            <Tag className="w-5 h-5 mr-2" />
            <span>₹{market.price}/quintal</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Updated today</span>
          </div>
        </div>
      </div>
    </div>
  );
};