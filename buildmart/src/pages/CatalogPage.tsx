import { ShoppingCart, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCart } from '../features/CartContext';
import { productCatalog } from '../entities/data';
import type { ProductItem } from '../entities/types';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { RatingStars } from '../ui/RatingStars';

type Filters = {
  minRating: number | null;
  priceRange: [number, number];
  onlyOnSale: boolean;
};

type SortType = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

export function CatalogPage() {
  const { addProduct } = useCart();
  const maxPrice = Math.max(...productCatalog.map((product) => product.price));

  const [sort, setSort] = useState<SortType>('name-asc');
  const [filters, setFilters] = useState<Filters>({
    minRating: null,
    priceRange: [0, maxPrice],
    onlyOnSale: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  const visibleProducts = useMemo(() => {
    let filtered = productCatalog.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1],
    );

    if (filters.onlyOnSale) {
      filtered = filtered.filter((product) => product.onSale);
    }

    const { minRating } = filters;
    if (minRating !== null) {
      filtered = filtered.filter((product) => product.rating >= minRating);
    }

    return [...filtered].sort((prodA, prodB) => {
      if (sort === 'name-asc') {
        return prodA.name.localeCompare(prodB.name);
      }
      if (sort === 'name-desc') {
        return prodB.name.localeCompare(prodA.name);
      }
      if (sort === 'price-asc') {
        return prodA.price - prodB.price;
      }
      return prodB.price - prodA.price;
    });
  }, [filters, sort]);

  const resetFilters = () => {
    setFilters({ minRating: null, priceRange: [0, maxPrice], onlyOnSale: false });
  };

  const updateMinPrice = (value: number) => {
    setFilters((prevFilters) => {
      const nextMin = Math.min(value, prevFilters.priceRange[1]);
      return {
        ...prevFilters,
        priceRange: [nextMin, prevFilters.priceRange[1]],
      };
    });
  };

  const updateMaxPrice = (value: number) => {
    setFilters((prevFilters) => {
      const nextMax = Math.max(value, prevFilters.priceRange[0]);
      return {
        ...prevFilters,
        priceRange: [prevFilters.priceRange[0], nextMax],
      };
    });
  };

  const handleAddProduct = (product: ProductItem) => {
    addProduct(product);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
          Building Materials
        </h1>
        <p className="text-gray-600">Premium construction supplies for your projects</p>
      </div>

      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters((show) => !show)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <p className="text-gray-600">Showing {visibleProducts.length} products</p>
        </div>

        <div>
          <label htmlFor="sort-select" className="mr-2 text-sm text-gray-600">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortType)}
            className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1">
              <h3 className="mb-3 font-semibold">Minimum Rating</h3>
              <div className="flex flex-wrap gap-4">
                {[5, 4, 3].map((ratingThreshold) => (
                  <div key={ratingThreshold} className="flex items-center gap-2">
                    <input
                      id={`rating-${ratingThreshold}`}
                      type="checkbox"
                      checked={filters.minRating === ratingThreshold}
                      onChange={(event) =>
                        setFilters((prevFilters) => ({
                          ...prevFilters,
                          minRating: event.target.checked ? ratingThreshold : null,
                        }))
                      }
                      className="h-4 w-4"
                    />
                    <label htmlFor={`rating-${ratingThreshold}`} className="cursor-pointer">
                      {ratingThreshold}+ Stars
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="mb-3 font-semibold">Price Range</h3>
              <div className="mb-4">
                <input
                  type="range"
                  min={0}
                  max={maxPrice}
                  step={10}
                  value={filters.priceRange[0]}
                  onChange={(event) => updateMinPrice(Number(event.target.value))}
                  className="w-full"
                />
                <input
                  type="range"
                  min={0}
                  max={maxPrice}
                  step={10}
                  value={filters.priceRange[1]}
                  onChange={(event) => updateMaxPrice(Number(event.target.value))}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="mb-3 font-semibold">Deals</h3>
              <div className="flex items-center gap-2">
                <input
                  id="on-sale-filter"
                  type="checkbox"
                  checked={filters.onlyOnSale}
                  onChange={(event) =>
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      onlyOnSale: event.target.checked,
                    }))
                  }
                  className="h-4 w-4"
                />
                <label htmlFor="on-sale-filter" className="cursor-pointer">
                  Show Only on Sale
                </label>
              </div>
            </div>

            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="rounded-lg border border-orange-600 px-6 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-50"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-lg"
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative h-64 w-full overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  fallbackSrc={product.images[1] ?? product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                {product.onSale && (
                  <div className="absolute top-4 left-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    SALE
                  </div>
                )}
              </div>
            </Link>

            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="mb-2 font-semibold text-gray-900 transition group-hover:text-orange-600">
                  {product.name}
                </h3>
              </Link>

              <RatingStars rating={product.rating} size="sm" />

              <p className="mt-3 text-2xl font-bold text-gray-900">${product.price}</p>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>

              <button
                onClick={(event) => {
                  event.preventDefault();
                  handleAddProduct(product);
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleProducts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">No products match your filters.</p>
          <button onClick={resetFilters} className="mt-4 font-medium text-orange-600 hover:text-orange-700">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
