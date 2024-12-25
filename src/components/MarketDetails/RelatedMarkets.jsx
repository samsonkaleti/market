import React from 'react';
import { Link } from 'react-router-dom';

export const RelatedMarkets = ({ markets, currentMarketId }) => {
  const relatedMarkets = markets
    .filter(market => market.id !== currentMarketId)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Related Markets</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedMarkets.map(market => (
          <Link
            key={market.id}
            to={`/market/${market.id}`}
            className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={market.imagePath}
              alt={market.crop}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{market.crop}</h3>
              <p className="text-green-600">₹{market.price}/quintal</p>
              <p className="text-sm text-gray-600">{market.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};