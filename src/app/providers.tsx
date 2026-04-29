import type { PropsWithChildren } from 'react';
import { CartProvider } from '../features/cart/model/CartContext';

export function AppProviders({ children }: PropsWithChildren) {
  return <CartProvider>{children}</CartProvider>;
}
