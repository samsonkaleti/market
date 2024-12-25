import React from 'react';
import { Building2, TrendingUp, Users } from 'lucide-react';

export const MarketInfo = ({ market }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Market Information</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <Building2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Market Name</h3>
            <p className="text-gray-600">{market.marketName}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Current Price</h3>
            <p className="text-gray-600">₹{market.price}/quintal</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Trading Volume</h3>
            <p className="text-gray-600">500+ traders</p>
          </div>
        </div>
      </div>
    </div>
  );
};