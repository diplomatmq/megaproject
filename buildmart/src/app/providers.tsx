/*
  DAY 1 - AFTERNOON (14:00-17:00)
  PHASE 2: Application initialization
  Developer 2 uploads this file
  App context providers (Cart context wrapper)
*/
import type { PropsWithChildren } from 'react';
import { CartProvider } from '../features/CartContext';

export function AppProviders({ children }: PropsWithChildren) {
  return <CartProvider>{children}</CartProvider>;
}
