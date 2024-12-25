import React, { useState } from 'react';

export const PriceFilter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleFilter = () => {
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="number"
        placeholder="Min Price"
        className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <button
        onClick={handleFilter}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Filter
      </button>
    </div>
  );
};