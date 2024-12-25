import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import MarketCard from '../components/MarketCard';
import AddMarketForm from '../components/AddMarketForm';

// Mock data
const mockMarkets = [
  {
    id: 1,
    crop: 'Rice',
    price: 2500,
    marketName: 'Central Market',
    location: 'Chennai',
    imagePath: '/images/rice.jpg',
  },
  {
    id: 2,
    crop: 'Wheat',
    price: 3000,
    marketName: 'Farmers Market',
    location: 'Mumbai',
    imagePath: '/images/wheat.jpg',
  },
  // Add more mock data as needed
];

export default function Home() {
  const [markets, setMarkets] = useState(mockMarkets);
  const [showAddForm, setShowAddForm] = useState(false);
  const [priceFilter, setPriceFilter] = useState('all');

  const handleAddMarket = (newMarket) => {
    setMarkets([...markets, { ...newMarket, id: markets.length + 1 }]);
  };

  const handleEdit = (market) => {
    // Implement edit functionality
    console.log('Edit market:', market);
  };

  const handleDelete = (id) => {
    setMarkets(markets.filter(market => market.id !== id));
  };

  const filteredMarkets = markets.filter(market => {
    if (priceFilter === 'low') return market.price < 2000;
    if (priceFilter === 'medium') return market.price >= 2000 && market.price < 4000;
    if (priceFilter === 'high') return market.price >= 4000;
    return true;
  });

  return (
    <div>
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <select
              className="border rounded-md px-3 py-2"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="low">Low Price (&lt;₹2000)</option>
              <option value="medium">Medium Price (₹2000-₹4000)</option>
              <option value="high">High Price (&gt;₹4000)</option>
            </select>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Add Market
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMarkets.map(market => (
            <Link to={`/market/${market.id}`} key={market.id}>
              <MarketCard
                market={market}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </Link>
          ))}
        </div>
      </div>

      {showAddForm && (
        <AddMarketForm
          onSubmit={handleAddMarket}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}