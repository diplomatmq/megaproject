import type { PropsWithChildren } from 'react';
import { CartProvider } from '../features/CartContext';

export function AppProviders({ children }: PropsWithChildren) {
  return <CartProvider>{children}</CartProvider>;
}
