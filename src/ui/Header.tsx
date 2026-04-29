/*
  DAY 2 - MORNING (09:00-12:00)
  PHASE 4: UI components - Header
  Developer 2 uploads this file
  Navigation header with logo, search, cart icon, menu
*/
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../features/CartContext';

const navLinks = ['Categories', 'Deals', 'About'];

export function Header() {
  const { getItemsCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const itemsCount = getItemsCount();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto h-16 max-w-7xl px-4 sm:px-6 md:h-20 lg:px-8">
        <div className="flex h-full items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
              <span className="text-xl font-bold text-white">BM</span>
            </div>
            <span className="hidden text-xl font-bold text-gray-900 lg:block">
              BuildMart
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            <Link to="/" className="text-gray-700 transition hover:text-orange-600">
              Products
            </Link>
            {navLinks.map((label) => (
              <a key={label} href="#" className="text-gray-700 transition hover:text-orange-600">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden max-w-md flex-1 items-center md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button className="p-2 text-gray-600 transition hover:text-orange-600 md:hidden">
              <Search className="h-5 w-5" />
            </button>

            <Link to="/cart" className="relative p-2 text-gray-600 transition hover:text-orange-600">
              <ShoppingCart className="h-5 w-5" />
              {itemsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs text-white">
                  {itemsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen((show) => !show)}
              className="p-2 text-gray-600 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-gray-200 py-4 md:hidden">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              Products
            </Link>

            {navLinks.map((label) => (
              <a key={label} href="#" className="block py-2 text-gray-700 hover:text-orange-600">
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
