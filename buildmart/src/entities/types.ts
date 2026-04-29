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
