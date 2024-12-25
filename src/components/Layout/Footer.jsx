import React from 'react';
import { Sprout } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Sprout className="h-6 w-6 text-green-400" />
            <span className="ml-2 text-lg font-semibold">Market Hub</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400">© 2024 Market Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};