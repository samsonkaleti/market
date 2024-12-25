import { useParams } from 'react-router-dom';

// Mock data - replace with API call later
const mockMarkets = [
  {
    id: 1,
    crop: 'Rice',
    price: 2500,
    marketName: 'Central Market',
    location: 'Chennai',
    imagePath: '/images/rice.jpg',
    description: 'High-quality Basmati rice from local farmers',
    seller: 'John Doe',
    contact: '+91 9876543210',
    quantity: '100 kg',
    lastUpdated: '2024-03-15',
  },
  // Add more mock data as needed
];

export default function MarketDetail() {
  const { id } = useParams();
  const market = mockMarkets.find(m => m.id === parseInt(id));

  if (!market) {
    return <div className="text-center py-8">Market not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={market.imagePath}
              alt={market.crop}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
              {market.crop}
            </div>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              {market.marketName}
            </h2>
            <p className="mt-2 text-gray-600">{market.description}</p>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Price</h3>
                <p className="mt-1 text-lg font-semibold text-green-600">₹{market.price}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="mt-1">{market.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Quantity Available</h3>
                <p className="mt-1">{market.quantity}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                <p className="mt-1">{market.lastUpdated}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-500">Seller Information</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-600">{market.seller}</p>
                <p className="text-sm text-gray-600">{market.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}