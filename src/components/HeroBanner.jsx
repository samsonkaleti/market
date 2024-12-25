export default function HeroBanner() {
  return (
    <div className="relative bg-green-700 h-[400px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=2000"
          alt="Agriculture"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Welcome to Market Hub
        </h1>
        <p className="mt-6 max-w-lg text-xl text-gray-200">
          Discover agricultural markets, compare prices, and connect with local farmers.
        </p>
      </div>
    </div>
  );
}