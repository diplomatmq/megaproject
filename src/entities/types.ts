/*
  DAY 1 - EVENING (19:00-22:00)
  PHASE 3: Data models and types
  Developer 1 uploads this file
  Product types: item, category, characteristics/specs
*/
export type ProductCharacteristic = {
  label: string;
  value: string;
};

export type ProductItem = {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  specs: ProductCharacteristic[];
  images: string[];
};
