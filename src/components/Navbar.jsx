import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Market Hub" />
              <span className="ml-2 text-xl font-bold text-gray-800">Market Hub</span>
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}