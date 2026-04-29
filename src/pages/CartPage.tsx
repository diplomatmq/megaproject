import { ArrowRight, MapPin, Minus, Plus, Trash2, Truck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../features/CartContext';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const PROMO = 'save10';

export function CartPage() {
  const { cartLines, changeQuantity, removeProduct, getSubtotalAmount } = useCart();
  const [promoInput, setPromoInput] = useState('');
  const [promoActive, setPromoActive] = useState(false);
  const [error, setError] = useState('');

  const subtotal = getSubtotalAmount();
  const tax = subtotal * 0.08;
  const discount = promoActive ? subtotal * 0.1 : 0;
  const total = subtotal + tax - discount;

  const applyPromo = () => {
    const promo = promoInput.trim().toLowerCase();

    if (!promo) {
      setError('Type promo code');
      setPromoActive(false);
      return;
    }

    if (promo !== PROMO) {
      setError('Invalid promo code');
      setPromoActive(false);
      return;
    }

    setError('');
    setPromoActive(true);
  };

  if (cartLines.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Your Cart is Empty</h1>
          <p className="mb-8 text-gray-600">Start shopping to add items to your cart</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Browse Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="hidden grid-cols-12 gap-4 border-b border-gray-200 p-6 text-sm font-semibold text-gray-600 md:grid">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="divide-y divide-gray-200">
              {cartLines.map((line) => (
                <div key={line.product.id} className="p-4 md:p-6">
                  <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
                    <div className="flex gap-4 md:col-span-6">
                      <Link to={`/product/${line.product.id}`} className="shrink-0">
                        <ImageWithFallback
                          src={line.product.image}
                          fallbackSrc={line.product.images[1] ?? line.product.images[0]}
                          alt={line.product.name}
                          className="h-20 w-20 rounded-lg object-cover md:h-24 md:w-24"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link
                          to={`/product/${line.product.id}`}
                          className="font-semibold text-gray-900 transition hover:text-orange-600"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-1 text-sm text-gray-600">{line.product.category}</p>
                        <button
                          onClick={() => removeProduct(line.product.id)}
                          className="mt-2 flex items-center gap-1 text-sm text-red-600 hover:text-red-700 md:hidden"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 md:text-center">
                      <span className="text-sm text-gray-600 md:hidden">Price: </span>
                      <span className="font-semibold">${line.product.price.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-start md:col-span-2 md:justify-center">
                      <div className="flex items-center gap-2 rounded-lg border border-gray-300">
                        <button
                          onClick={() => changeQuantity(line.product.id, line.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center transition hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">{line.quantity}</span>
                        <button
                          onClick={() => changeQuantity(line.product.id, line.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center transition hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:col-span-2 md:justify-end">
                      <span className="text-sm text-gray-600 md:hidden">Total: </span>
                      <span className="text-lg font-bold">
                        ${(line.product.price * line.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeProduct(line.product.id)}
                        className="ml-4 hidden text-red-600 transition hover:text-red-700 md:block"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">Have a promo code?</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoInput}
                onChange={(event) => {
                  setPromoInput(event.target.value);
                  setError('');
                }}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                onClick={applyPromo}
                className="rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white transition hover:bg-orange-700"
              >
                Apply
              </button>
            </div>

            {promoActive && (
              <p className="mt-2 text-sm text-green-600">Promo code applied! You saved 10%</p>
            )}

            {!!error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        </div>

        <div>
          <div className="sticky top-24 rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Order Summary</h2>

            <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {promoActive && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="mb-6 flex items-center justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700">
              Proceed to Checkout
              <ArrowRight className="h-5 w-5" />
            </button>

            <Link
              to="/"
              className="block w-full rounded-lg border border-gray-300 py-3 text-center transition hover:bg-gray-50"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 font-semibold">Shipping Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                <div>
                  <p className="text-sm font-medium">Estimated Delivery</p>
                  <p className="text-sm text-gray-600">3-5 business days</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                <div>
                  <p className="text-sm font-medium">Shipping Address</p>
                  <p className="text-sm text-gray-600">
                    123 Construction Ave
                    <br />
                    Builder City, BC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
