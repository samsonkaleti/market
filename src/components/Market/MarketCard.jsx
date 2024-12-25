import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MarketCard = ({ market, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={market.imagePath}
        alt={market.crop}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link to={`/market/${market.id}`}>
          <h3 className="text-xl font-semibold text-gray-800">{market.crop}</h3>
        </Link>
        <p className="text-green-600 font-bold mt-2">₹{market.price}/quintal</p>
        <p className="text-gray-600">{market.marketName}</p>
        <p className="text-gray-500 text-sm">{market.location}</p>
        
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => onEdit(market.id)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(market.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};