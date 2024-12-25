import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { HeroBanner } from '../components/HeroBanner';
import { MarketCard } from '../components/Market/MarketCard';
import { MarketForm } from '../components/Market/MarketForm';
import { PriceFilter } from '../components/Filter/PriceFilter';
import { markets } from '../data/mockData';

export const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [filteredMarkets, setFilteredMarkets] = useState(markets);

  const handleAddMarket = (data) => {
    // This will be replaced with API call
    console.log('New market data:', data);
  };

  const handleEdit = (id) => {
    // This will be replaced with API call
    console.log('Edit market:', id);
  };

  const handleDelete = (id) => {
    // This will be replaced with API call
    console.log('Delete market:', id);
  };

  const handlePriceFilter = (minPrice, maxPrice) => {
    const filtered = markets.filter(
      market => market.price >= minPrice && market.price <= maxPrice
    );
    setFilteredMarkets(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroBanner />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <PriceFilter onFilterChange={handlePriceFilter} />
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              <Plus size={20} className="mr-2" />
              Add Market
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map(market => (
              <MarketCard
                key={market.id}
                market={market}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {showForm && (
        <MarketForm
          onSubmit={handleAddMarket}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};