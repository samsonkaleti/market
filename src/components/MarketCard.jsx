export default function MarketCard({ market, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={market.imagePath}
        alt={market.crop}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{market.crop}</h3>
        <p className="text-gray-600">{market.marketName}</p>
        <p className="text-gray-600">{market.location}</p>
        <p className="text-xl font-bold text-green-600 mt-2">₹{market.price}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => onEdit(market)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(market.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}