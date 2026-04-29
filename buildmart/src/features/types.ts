import type { ProductItem } from '../entities/types';

export type CartLine = {
  product: ProductItem;
  quantity: number;
};
