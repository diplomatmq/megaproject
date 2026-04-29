/*
  DAY 2 - EVENING (19:00-22:00)
  PHASE 6: Pages - Product details
  Developer 1 uploads this file
  Show detailed product info, images carousel, related products
*/
import * as Accordion from '@radix-ui/react-accordion';
import {
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Shield,
  ShoppingCart,
  Truck,
} from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useCart } from '../features/CartContext';
import { productCatalog } from '../entities/data';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { RatingStars } from '../ui/RatingStars';

export function ProductDetailsPage() {
  const { productId } = useParams();
  const { addProduct } = useCart();
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const product = productCatalog.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-2xl font-bold">Product not found</h1>
        <Link to="/" className="text-orange-600 hover:text-orange-700">
          Return to catalog
        </Link>
      </div>
    );
  }

  const relatedProducts = productCatalog
    .filter(
      (item) =>
        item.id !== product.id && item.category === product.category,
    )
    .slice(0, 4);

  const showPrevImg = () => {
    setImgIdx(
      (idx) => (idx - 1 + product.images.length) % product.images.length,
    );
  };

  const showNextImg = () => {
    setImgIdx((idx) => (idx + 1) % product.images.length);
  };

  const handleAddToCart = () => {
    addProduct(product, qty);
    toast.success(`Added ${qty} ${product.name} to cart`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-orange-600">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
            <ImageWithFallback
              src={product.images[imgIdx]}
              fallbackSrc={
                product.images.find((_, i) => i !== imgIdx) ??
                product.image
              }
              alt={product.name}
              className="h-full w-full object-cover"
            />

            {product.images.length > 1 && (
              <>
                <button
                  onClick={showPrevImg}
                  className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={showNextImg}
                  className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {product.images.map((url, idx) => (
              <button
                key={`${url}-${idx}`}
                onClick={() => setImgIdx(idx)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition ${
                  imgIdx === idx
                    ? 'border-orange-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <ImageWithFallback
                  src={url}
                  fallbackSrc={
                    product.images.find((_, i) => i !== idx) ?? product.image
                  }
                  alt={`${product.name} view ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">{product.name}</h1>

          <div className="mb-4">
            <RatingStars rating={product.rating} size="lg" />
          </div>

          <div className="mb-6 flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">${product.price}</span>
            <span className="text-gray-500">/unit</span>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 border-b border-gray-200 pb-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <p className="text-sm font-semibold">Quality Assured</p>
                <p className="text-xs text-gray-600">Premium grade material</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <p className="text-sm font-semibold">Fast Delivery</p>
                <p className="text-xs text-gray-600">2-5 business days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
              <div>
                <p className="text-sm font-semibold">Warranty</p>
                <p className="text-xs text-gray-600">30-day guarantee</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setQty((val) => Math.max(1, val - 1))
                }
                className="h-10 w-10 rounded-lg border border-gray-300 transition hover:bg-gray-50"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(event) =>
                  setQty(Math.max(1, Number.parseInt(event.target.value, 10) || 1))
                }
                className="h-10 w-20 rounded-lg border border-gray-300 text-center focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                onClick={() => setQty((val) => val + 1)}
                className="h-10 w-10 rounded-lg border border-gray-300 transition hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>

          <button className="w-full rounded-lg border-2 border-orange-600 py-4 font-semibold text-orange-600 transition hover:bg-orange-50">
            Buy Now
          </button>

          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold">Description</h2>
            <p className="leading-relaxed text-gray-700">{product.description}</p>
          </div>

          <div className="mt-8">
            <Accordion.Root type="single" collapsible className="w-full">
              <Accordion.Item value="specs" className="rounded-lg border border-gray-200 px-6">
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-start justify-between gap-4 py-4 text-left text-xl font-bold outline-none [&[data-state=open]>svg]:rotate-180">
                    Technical Specifications
                    <ChevronDown className="size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm">
                  <div className="mt-2 mb-4 rounded-lg bg-gray-50 p-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                      {product.specs.map((characteristic) => (
                        <div
                          key={characteristic.label}
                          className="flex flex-col space-y-1 border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <dt className="text-sm tracking-wide text-gray-500 uppercase">
                            {characteristic.label}
                          </dt>
                          <dd className="text-base font-semibold text-gray-900">
                            {characteristic.value}
                          </dd>
                        </div>
                      ))}
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              to={`/product/${relatedProduct.id}`}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={relatedProduct.image}
                  fallbackSrc={relatedProduct.images[1] ?? relatedProduct.images[0]}
                  alt={relatedProduct.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 line-clamp-1 font-semibold text-gray-900">
                  {relatedProduct.name}
                </h3>
                <RatingStars rating={relatedProduct.rating} size="sm" />
                <p className="mt-2 text-xl font-bold text-gray-900">${relatedProduct.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
