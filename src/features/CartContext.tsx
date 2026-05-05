import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { ProductItem } from '../entities/types';
import type { CartLine } from './types';

type CartState = {
  cartLines: CartLine[];
  addProduct: (product: ProductItem, quantity?: number) => void;
  removeProduct: (productId: string) => void;
  changeQuantity: (productId: string, quantity: number) => void;
  getItemsCount: () => number;
  getSubtotalAmount: () => number;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = 'buildmart-cart-lines';

function getInitial(): CartLine[] {
  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored) as CartLine[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse cart state from localStorage:', error);
    return [];
  }
}

export function CartProvider({ children }: PropsWithChildren) {
  const [cartLines, setCartLines] = useState<CartLine[]>(getInitial);

  const addProduct = (product: ProductItem, quantity = 1) => {
    setCartLines((prevLines) => {
      const existing = prevLines.find(
        (line) => line.product.id === product.id,
      );

      if (!existing) {
        return [...prevLines, { product, quantity }];
      }

      return prevLines.map((line) =>
        line.product.id === product.id
          ? { ...line, quantity: line.quantity + quantity }
          : line,
      );
    });
  };

  const removeProduct = (productId: string) => {
    setCartLines((prevLines) =>
      prevLines.filter((line) => line.product.id !== productId),
    );
  };

  const changeQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeProduct(productId);
      return;
    }

    setCartLines((prevLines) =>
      prevLines.map((line) =>
        line.product.id === productId ? { ...line, quantity } : line,
      ),
    );
  };

  const getItemsCount = () =>
    cartLines.reduce((totalCount, line) => totalCount + line.quantity, 0);

  const getSubtotalAmount = () =>
    cartLines.reduce(
      (subtotalAmount, line) => subtotalAmount + line.product.price * line.quantity,
      0,
    );

  const cartValue = useMemo(
    () => ({
      cartLines,
      addProduct,
      removeProduct,
      changeQuantity,
      getItemsCount,
      getSubtotalAmount,
    }),
    [cartLines],
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartLines));
  }, [cartLines]);

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('useCart must be used within CartProvider');
  }

  return cartContext;
}
